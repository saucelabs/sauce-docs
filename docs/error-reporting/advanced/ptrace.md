---
id: ptrace
title: Plugins for ptrace
sidebar_label: Plugins for ptrace
description: pmodules allow users to augment snapshots by performing custom analysis and data structure pretty printing in response to specific events.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`pmodules` allow users to enhance snapshots by performing custom analysis and pretty printing of data structures in response to specific events.

In this tutorial, we write a basic `pmodule` using the Lua API. The C API is similar; for that, you can refer to the documentation provided in `/opt/backtrace/include/ptrace/pmodule.h` from the `backtrace-ptrace-modules` package. For a full reference of the Lua API, you can see the Pmodule API page. The example module written here is reproduced in full at the top of the Pmodule API page.

From a pmodule's perspective, a snapshot is generated during two phases: attach and postattach. We are in the attach phase when the ptrace tracer is attached to the target process, during which threads, frames, and variables are extracted. We are in the postattach phase after the ptrace tracer detaches from the process, at which point we have a fully populated backtrace object.

A pmodule can react to any of these events by registering a callback. The possible events are as follows:

- `variable`: A new variable has been extracted (while attached to the process).
- `frame`: A new frame has been extracted (while attached).
- `thread`: A new thread has been extracted (while attached).
- `preattach`: Before ptrace attaches to the process.
- `postattach`: After ptrace detaches from the process.
- `attach`: Right after attachment, before extraction.

Each callback receives relevant objects as arguments:

- `variable`: A pmodule variable object and the underlying bt variable object. BT variables are discussed below.
- `frame`: A frame object.
- `thread`: A thread object.
- `preattach`: A backtrace object.
- `postattach`: A backtrace object.
- `attach`: A backtrace object.

For example, you might want to pretty print a specific data structure if it appears in your snapshot. In that case, you can register a variable event callback with a filter specifying the type of variable you're interested in (filters are covered in more detail below).

These event callbacks typically perform analysis or additional data extraction/formatting and augment the snapshot with additional classifiers, annotations, and more.

Now that we have a better understanding of a pmodule's event-driven design, let's start defining our module. At the global (chunk) scope, call `pmodule.define` like this:

```lua
-- The following functions are stubs; we'll define a real load function later.
pmodule.define{
    id = "pmodule_lua",
    load = function () pmodule.log(pmodule.log_level.warning, "pm_load") end,
    unload = function () pmodule.log(pmodule.log_level.warning, "pm_unload") end
}
```

`id` and `load` are required fields, while `unload` is optional. They are used as follows:

- `id`: A string identifying your module.
- `load`: A function called to register all event callbacks, executed before the trace begins.
- `unload`: A function called before ptrace exits to perform any cleanup required by the module.

When `pmodule.define` is called, it registers the module with the pmodule subsystem. Following this, the registered `load` function is invoked to establish event handlers as specified. Let's examine an example `load` function:

```lua
function pm_load()
    pmodule.register(pmodule.event.postattach, postattach_cb)

    local m = pmodule.match()

    m:add_object("crash")
    m:add_file("crash.c")
    m:add_frame_symbol("recurse", pmodule.match_type.substr)
    m:add_variable_base_type("crash_", pmodule.match_type.substr)
    m:add_variable_ptrace_type(pmodule.variable_type.tuple)

    pmodule.register(pmodule.event.variable,
        function(var)
            var:annotate(pmodule.annotation.critical, "lua: struct var")
        end, m)

    m:reset()
    m:set_fault()
    pmodule.register(pmodule.event.frame, frame_cb, m)
end
```

In this example, we are interested in three types of events: the `postattach` event, `variable` extraction events, and `frame` events. We'll cover examples of what we can do in each of these events, but for now, let's focus on the match filters, starting with the one used for the variable event callback.

All of the object event callbacks (`variable`, `frame`, and `thread`) can be filtered by a match object. In this case, we specify that we are interested in a variable extracted from the object file `crash`, the compilation unit `crash.c`, whose frame's symbol contains `recurse`, whose base type contains `crash_`, and whose variable type is a tuple (that is, a struct). Since we want to perform a simple action with this variable (annotate it with a useless message), we register the event with an anonymous function and this match filter.

```lua
local m = pmodule.match()

m:add_object("crash")
m:add_file("crash.c")
m:add_frame_symbol("recurse", pmodule.match_type.substr)
m:add_variable_base_type("crash_", pmodule.match_type.substr)
m:add_variable_ptrace_type(pmodule.variable_type.tuple)

pmodule.register(pmodule.event.variable,
    function(var)
        var:annotate(pmodule.annotation.critical, "lua: struct var")
    end, m)
```

Next, let's look at the frame event registration. Here, we are interested in faulting frames, so we reset the match object (or you can use a different one), set it to match faulted objects, and then register the event using it.

```lua
m:reset()
m:set_fault()
pmodule.register(pmodule.event.frame, frame_cb, m)
```

The `postattach` event registration call is straightforward, but we'll delve deeper into that callback later.

Now that we register all our callbacks, our module is ready to start handling events. `ptrace` executes its registered callbacks, assuming any specified match filters pass. Let's look at what we want to do when a faulted frame is extracted:

```lua
local function frame_cb(fr)
    for v, i in fr:fprm() do
        v:annotate(pmodule.annotation.critical, "lua: fprm %d", i)
    end

    local signal = fr:siginfo()
    if signal then
        fr:backtrace():annotate(
            pmodule.annotation.json,
            '{"json": {"context": "Signal", \
            "Reason": "%s", \
            "Populated": "%s", \
            "Address": "%x", \
            "Num": "%d", \
            "Code": "%d", \
            "String": "%s"}}',
            signal:reason(),
            tostring(signal:address_populated()),
            signal:address(),
            signal:num(),
            signal:code(),
            tostring(signal))
    end
end
```

The example is simple: First, we annotate all parameters of the faulting frame (for illustrative purposes only; hydra indicates all frame parameters by surrounding them with `( )`). For many objects (which are discussed later), `pmodules` support Lua's generic `for` interface. Here, we iterate over the frame's parameters, which gives us a variable object and a parameter index for each iteration.

:::note

All four main objects (variables, frames, threads, and the overarching backtrace) can be annotated.

:::

Next, we want to pretty print signal information (again, just an example; hydra already has this pretty-printed under the faulting frame). We are annotating the backtrace object here, so the pretty-printed data is displayed in hydra's Process pane. We are using the `json` annotation type for this. Refer to the Pmodule API documentation for more details on the expected format.

Now, let's move on to the `postattach` callback:

```lua
local function postattach_cb(bt)
    local m = pmodule.match()
    m:set_fault()

    -- Example iterators.
    for thr in bt, m do
        for fr in thr do
            for var in fr do
                if var:type() == pmodule.variable_type.reference then
                    local addr = var:value()

                    var:annotate(pmodule.annotation.critical,
                        "[%x] %s - example annotation",
                        var:value(), var:name())
                end
            end
        end
    end

    -- Example global variable iteration.
    pmodule.log(pmodule.log_level.warning, "Global variables:")
    for var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do
        pmodule.log(pmodule.log_level.warning,
            "name: %s, value: %s, object: %s, cu: %s",
            var:name(), tostring(var:value()), object, cu)
    end

    -- Example TLS variable iteration.
    for thr in bt do
        pmodule.log(pmodule.log_level.warning, "TLS variables:")

        for var, object, cu in thr:variables(), {cu = "hang"} do
            pmodule.log(pmodule.log_level.warning,
                "name: %s, value: %s, object: %s, \
                cu: %s",
                var:name(), tostring(var:value()), object, cu)
        end
    end

    -- Example global variable lookup by name.
    for var in bt:variables(), {name = "global_version"} do
        local str = pmodule.address_read_string(var:value(), 256)

        pmodule.log(pmodule.log_level.warning,
            "[%x] string: %s", var:value(), str)
    end

    pmodule.log(pmodule.log_level.warning, "process state: %d",
        bt:process_state())

    bt:add_kv_int("lua_key1", 42)
    bt:add_kv_string("lua_key2", "lua_value")
    bt:add_classifier("lua")
end
```

In this example, we start with iteration. The backtrace object, threads, and frames can be iterated over using Lua's generic `for` interface. Each of these iterators accepts an optional match object via the invariant state (the second expression in the `for` loop's expression list). In the first iterator, we iterate over all faulting threads.

```lua
local m = pmodule.match()
m:set_fault()

-- Example iterators.
for thr in bt, m do
    for fr in thr do
        for var in fr do
            if var:type() == pmodule.variable_type.reference then
                local addr = var:value()

                var:annotate(pmodule.annotation.critical, "[%x] %s - example annotation", var:value(), var:name())
            end
        end
    end
end
```

:::note

The full backtrace is populated only in the `postattach` callback (which is why we perform the full iteration example there). In the thread callback, you are guaranteed the full thread is populated (with its frames and variables). In the frame callback, you are guaranteed the full frame is populated (with its variables).

:::

Next, we'll cover global and TLS variable iteration.

```lua
-- Example global variable iteration.
pmodule.log(pmodule.log_level.warning, "Global variables:")
for var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do
    pmodule.log(
        pmodule.log_level.warning,
        "name: %s, value: %s, object: %s, cu: %s",
        var:name(),
        tostring(var:value()),
        object,
        cu
    )
end

-- Example TLS variable iteration.
for thr in bt do
    pmodule.log(pmodule.log_level.warning, "TLS variables:")

    for var, object, cu in thr:variables(), {cu = "hang"} do
        pmodule.log(
            pmodule.log_level.warning,
            "name: %s, value: %s, object: %s, \z
                cu: %s",
            var:name(),
            tostring(var:value()),
            object,
            cu
        )
    end
end
```

These iterations use the same generic `for` interface mentioned earlier for threads, frames, and other entities. The filter (invariant state) here is a table instead of a match object. The supported fields are:

- `object`: The desired object file (substring match).
- `cu`: The desired compilation unit (substring match).
- `name`: The variable's name (exact match).

All of these fields (and the filter table itself) are optional. Each iteration returns a variable object, the object filename, and the compilation unit name.

Suppose we're interested in a particular global variable - a variable containing the version of our program:

```lua
-- Example global variable lookup by name.
for var in bt:variables(), {name = "global_version"} do
    local str = pmodule.address_read_string(var:value(), 256)

    pmodule.log(pmodule.log_level.warning,
        "[%x] string: %s", var:value(), str)
end
```

To find it, we use the global variable iterator with a name filter. It's a C-string variable (that is, a pointer), so we use the global read API `pmodule.address_read_string` to read the string.

Suppose we've noticed something interesting (perhaps application-specific) about the data in our snapshot, and we want to classify the snapshot based on this. Your pmodule can use the following API for that:

```lua
-- `bt` is a backtrace object.
bt:add_kv_int("lua_key1", 42)
bt:add_kv_string("lua_key2", "lua_value")
bt:add_classifier("lua")
```

Previously, we mentioned `bt_variables`. Pmodules can use them to access specific fields in structures and iterate over arrays, linked lists, and other data structures.

:::note

`bt_variables` themselves only allow access to member fields, which return new `bt_variables`; to extract actual data from them, they must first be synthesized into pmodule variables.

:::

Here's a full example:

```lua
--[[

-- Assume we have these definitions:

struct nested {
    int c;
};

struct linkedstruct {
    STAILQ_ENTRY(linkedstruct) linkage;
    int v;
};

struct somestruct {
    int a;
    double b;
    struct nested n;
    struct nested *np;
    struct nested **npp;
    struct nested ***nppp;
    STAILQ_HEAD(, linkedstruct) list;
    const char *s;
};

struct array_struct {
    struct somestruct *kids;
    int len;
};

-- And these global variables:

static struct somestruct *some_struct_g;
static struct array_struct papa;

-- And the following population code:

papa.kids = calloc(10, sizeof(struct somestruct));
if (papa.kids == NULL) {
    fprintf(stderr, "allocation failure");
    exit(EXIT_FAILURE);
}
papa.len = 10;

some_struct_g = calloc(1, sizeof *some_struct_g);
if (some_struct_g == NULL) {
    fprintf(stderr, "allocation failure");
    exit(EXIT_FAILURE);
}

STAILQ_INIT(&some_struct_g->list);
for (z = 0; z < 10; ++z) {
    struct linkedstruct *l;

    l = calloc(1, sizeof *l);
    if (l == NULL) {
        fprintf(stderr, "allocation failure");
        exit(EXIT_FAILURE);
    }

    l->v = z;

    STAILQ_INSERT_TAIL(&some_struct_g->list, l, linkage);
}

some_struct_g->a = 4;
some_struct_g->b = 5;
some_struct_g->n.c = 6;
some_struct_g->np = &some_struct_g->n;
some_struct_g->npp = &some_struct_g->np;
some_struct_g->nppp = &some_struct_g->npp;
some_struct_g->s = "kids";
for (z = 0; z < 10; ++z) {
    papa.kids[z].a = 9 + z;
    papa.kids[z].b = 9 + z;
    papa.kids[z].n.c = 9 + z;
    papa.kids[z].np = &papa.kids[z].n;
    papa.kids[z].npp = &papa.kids[z].np;
    papa.kids[z].nppp = &papa.kids[z].npp;
    papa.kids[z].s = "papa";
}

]] --

local function attach_cb(bt)
    -- Note: this is a global (Lua) variable.
    -- cached_ref_var will be nil if this fails. variable_cb will
    -- attempt to use this, resulting in an exception if nil.
    cached_ref_var = pmodule.bt_query("some_struct_g", "crash", "crash.c")

    local n = cached_ref_var.list.stqh_first
    local v = pmodule.variable_from_bt(n)

    while v:value() ~= 0 do
        local val = pmodule.variable_from_bt(n.v)
        print(string.format("[%x] %s: %d", val:address(), val:name(), val:value()))
        n = n.linkage.stqe_next
        v = pmodule.variable_from_bt(n)
    end
end

local function variable_cb(var, raw)
    -- Variables synthesized this way will be finalized/freed. They cannot
    -- be added to the snapshot. All synthesized variables must go through
    -- the synthesis API.
    -- This is enforced through the API.
    local n = pmodule.variable_from_bt(raw.len):value()
    local addr = pmodule.variable_from_bt(raw.kids):value()

    -- We'll use size to iterate over the array.
    local size = pmodule.sizeof(pmodule.deref(cached_ref_var))

    print(string.format("addr: %x, len: %d, size: %d", addr, n, size))

    for i = 0, n - 1 do
        local na = addr + i * size

        print(string.format("--- iter %d (%x)---", i, na))

        elem = pmodule.deref(cached_ref_var, addr + i * size)

        print(string.format("a: %d", pmodule.variable_from_bt(elem.a):value()))
        print(string.format("b: %f", pmodule.variable_from_bt(elem.b):value()))

        -- Note: when accessing member fields, pointers are
        -- automatically dereferenced until we reach the underlying
        -- struct.
        print(string.format("nppp.c: %d", pmodule.variable_from_bt(elem.nppp.c):value()))
    end
end

local function pm_load()
    local m = pmodule.match()

    m:add_object("crash")
    m:add_file("crash.c")
    m:add_variable_base_type("array_struct", pmodule.match_type.substr)
    m:add_variable_ptrace_type(pmodule.variable_type.tuple)
    m:add_variable_name("papa", pmodule.match_type.substr)

    pmodule.register(pmodule.event.variable, variable_cb, m)
    pmodule.register(pmodule.event.attach, attach_cb)
end

pmodule.define {
    id = "array_iter",
    load = pm_load
}
```

A few CLI options exist to keep in mind when using pmodules:

- `sandbox whitelist`: Allows certain Lua features to be used by Lua modules (disabled by default for better default security).
- `module-load/modules-path`: Loads modules from a specific file or directory.
- `module`: Passes key-value arguments to modules (modules are identified by their id name).

For more details, consult the `ptrace -h` output.

That concludes this tutorial. We've covered how to register your pmodule with ptrace, how to register callbacks for events that interest you, how to iterate over various snapshot objects, and some of what you can do with individual objects. Of course, there's more you can do in a pmodule. For a full reference, consult the pmodule API documentation.
