---
id: ptrace
title: ptrace Plugins
sidebar_label: ptrace Plugins
description: Allow users to augment snapshot data with custom analysis, annotations, pretty-printed data, etc.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

pmodules allow users to augment snapshot data with custom analysis, annotations, pretty-printed data, etc. Below is a short reference example; see the pmodule tutorial for more details. The rest of this page contains documentation for the full Lua pmodule API.

Example:

```
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
    pmodule.log(pmodule.log_level.warning, "Global variables:");
    for var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do
        pmodule.log(pmodule.log_level.warning,
            "name: %s, value: %s, object: %s, cu: %s",
            var:name(), tostring(var:value()), object, cu)
    end

    -- Example TLS variable iteration.
    for thr in bt do
        pmodule.log(pmodule.log_level.warning, "TLS variables:");

        for var, object, cu in thr:variables(), {cu = "hang"} do
            pmodule.log(pmodule.log_level.warning,
                "name: %s, value: %s, object: %s, \z
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

    bt:add_tag("lua_tag")
    bt:add_kv_int("lua_key1", 42)
    bt:add_kv_string("lua_key2", "lua_value")
    bt:add_classifier("lua")
end

local function frame_cb(fr)
    -- Two ways to access frame parameters:
    for v, i in fr:fprm() do
        v:annotate(pmodule.annotation.critical, "lua: fprm %d", i)
    end

    for i = 0, math.huge do
        local v = fr:fprm_at(i)

        if not v then
            break
        end

        v:annotate(pmodule.annotation.critical, "lua: fprm_at %d", i)
    end

    local signal = fr:siginfo()
    if signal then
        fr:backtrace():annotate(
            pmodule.annotation.json,
            '{"json": {"context": "Signal", \z
            "Reason": "%s", \z
            "Populated": "%s", \z
            "Address": "%x", \z
            "Num": "%d", \z
            "Code": "%d", \z
            "String": "%s"}}',
            signal:reason(),
            tostring(signal:address_populated()),
            signal:address(),
            signal:num(),
            signal:code(),
            tostring(signal))
    end
end

local function pm_load()
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
    pmodule.register(pmodule.event.frame, frame_cb, m)

    pmodule.log(pmodule.log_level.warning, "%s",
        pmodule.config_option("lua_option"))
end

pmodule.define{
    id = "pmodule_lua",
    load=pm_load,
    reset=function () pmodule.log(pmodule.log_level.warning, "pm_reset") end,
    unload=function () pmodule.log(pmodule.log_level.warning, "pm_unload") end
```

## Functions

[pmodule.define{module_description}](https://documentation.backtrace.io/pmodule_api/#function-pmoduledefinemodule_description)

[pmodule.event_register(event_type, function[, match])](https://documentation.backtrace.io/pmodule_api/#function-pmoduleevent_registerevent_type-function-match)

[pmodule.log(log_level, fmt_string, ...)](https://documentation.backtrace.io/pmodule_api/#function-pmoduleloglog_level-fmt_string-)

[pmodule.address_symbol(addr)](https://documentation.backtrace.io/pmodule_api/#function-pmoduleaddress_symboladdr)

[pmodule.symbol_address(symbol[, object])](https://documentation.backtrace.io/pmodule_api/#function-pmodulesymbol_addresssymbol-object)

[pmodule.symbol_read_raw(symbol, object, size)](https://documentation.backtrace.io/pmodule_api/#function-pmodulesymbol_read_rawsymbol-object-size)

[pmodule.address_read_raw(addr, size)](https://documentation.backtrace.io/pmodule_api/#function-pmoduleaddress_read_rawaddr-size)

[pmodule.symbol_read_string(symbol, object, size)](https://documentation.backtrace.io/pmodule_api/#function-pmodulesymbol_read_stringsymbol-object-size)

[pmodule.address_read_string(addr, size)](https://documentation.backtrace.io/pmodule_api/#function-pmoduleaddress_read_stringaddr-size)

[pmodule.match()](https://documentation.backtrace.io/pmodule_api/#function-pmodulematch)

[pmodule.pmap_enabled()](https://documentation.backtrace.io/pmodule_api/#function-pmodulepmap_enabled)

[pmodule.pmap_cached()](https://documentation.backtrace.io/pmodule_api/#function-pmodulepmap_cached)

[pmodule.backtrace()](https://documentation.backtrace.io/pmodule_api/#function-pmodulebacktrace)

[pmodule.config_option(key)](https://documentation.backtrace.io/pmodule_api/#function-pmoduleconfig_optionkey)

[pmodule.create_variable(type, name, addr, offset[, owner])](https://documentation.backtrace.io/pmodule_api/#function-pmodulecreate_variabletype-name-addr-offset-owner)

[pmodule.create_frame()](https://documentation.backtrace.io/pmodule_api/#function-pmodulecreate_frame)

[pmodule.bt_query(symbol, object, cu)](https://documentation.backtrace.io/pmodule_api/#function-pmodulebt_querysymbol-object-cu)

[pmodule.variable_from_bt(btvar)](https://documentation.backtrace.io/pmodule_api/#function-pmodulevariable_from_btbtvar)

[pmodule.deref(bt_var[, address])](https://documentation.backtrace.io/pmodule_api/#function-pmodulederefbt_var-address)

[pmodule.sizeof(bt_var)](https://documentation.backtrace.io/pmodule_api/#function-pmodulesizeofbt_var)

## Methods

[backtrace:pid()](https://documentation.backtrace.io/pmodule_api/#method-backtracepid)

[backtrace:pmap_entry(addr)](https://documentation.backtrace.io/pmodule_api/#method-backtracepmap_entryaddr)

[backtrace:application_name()](https://documentation.backtrace.io/pmodule_api/#method-backtraceapplication_name)

[backtrace:process_state()](https://documentation.backtrace.io/pmodule_api/#method-backtraceprocess_state)

[backtrace:add_tag(tag_name)](https://documentation.backtrace.io/pmodule_api/#method-backtraceadd_tagtag_name)

[backtrace:add_kv_int(key, value)](https://documentation.backtrace.io/pmodule_api/#method-backtraceadd_kv_intkey-value)

[backtrace:add_kv_string(key, value)](https://documentation.backtrace.io/pmodule_api/#method-backtraceadd_kv_stringkey-value)

[backtrace:add_classifier(classifier_name)](https://documentation.backtrace.io/pmodule_api/#method-backtraceadd_classifierclassifier_name)

[backtrace:annotate(level, fmt, ...)](https://documentation.backtrace.io/pmodule_api/#method-backtraceannotatelevel-fmt-)

[backtrace](https://documentation.backtrace.io/pmodule_api/#method-backtrace)

[backtrace:variables()](https://documentation.backtrace.io/pmodule_api/#method-backtracevariables)

[thread:fault()](https://documentation.backtrace.io/pmodule_api/#method-threadfault)

[thread:tid()](https://documentation.backtrace.io/pmodule_api/#method-threadtid)

[thread:backtrace()](https://documentation.backtrace.io/pmodule_api/#method-threadbacktrace)

[thread:n_frames()](https://documentation.backtrace.io/pmodule_api/#method-threadn_frames)

[thread:n_kframes()](https://documentation.backtrace.io/pmodule_api/#method-threadn_kframes)

[thread:set_name(name)](https://documentation.backtrace.io/pmodule_api/#method-threadset_namename)

[thread:add_frame(frame[, first])](https://documentation.backtrace.io/pmodule_api/#method-threadadd_frameframe-first)

[thread:annotate(level, fmt, ...)](https://documentation.backtrace.io/pmodule_api/#method-threadannotatelevel-fmt-)

[thread](https://documentation.backtrace.io/pmodule_api/#method-thread)

[thread:variables()](https://documentation.backtrace.io/pmodule_api/#method-threadvariables)

[frame:instruction()](https://documentation.backtrace.io/pmodule_api/#method-frameinstruction)

[frame:path()](https://documentation.backtrace.io/pmodule_api/#method-framepath)

[frame:symbol()](https://documentation.backtrace.io/pmodule_api/#method-framesymbol)

[frame:line_resolved()](https://documentation.backtrace.io/pmodule_api/#method-frameline_resolved)

[frame:object_file()](https://documentation.backtrace.io/pmodule_api/#method-frameobject_file)

[frame:backtrace()](https://documentation.backtrace.io/pmodule_api/#method-framebacktrace)

[frame:thread()](https://documentation.backtrace.io/pmodule_api/#method-framethread)

[frame:line()](https://documentation.backtrace.io/pmodule_api/#method-frameline)

[frame:decl_line()](https://documentation.backtrace.io/pmodule_api/#method-framedecl_line)

[frame:siginfo()](https://documentation.backtrace.io/pmodule_api/#method-framesiginfo)

[frame:fprm_at(index)](https://documentation.backtrace.io/pmodule_api/#method-framefprm_atindex)

[frame:fprm()](https://documentation.backtrace.io/pmodule_api/#method-framefprm)

[frame:set_basename(basename)](https://documentation.backtrace.io/pmodule_api/#method-frameset_basenamebasename)

[frame:set_symbol(symbol)](https://documentation.backtrace.io/pmodule_api/#method-frameset_symbolsymbol)

[frame:set_directory(directory)](https://documentation.backtrace.io/pmodule_api/#method-frameset_directorydirectory)

[frame:set_path(path)](https://documentation.backtrace.io/pmodule_api/#method-frameset_pathpath)

[frame:set_line(line)](https://documentation.backtrace.io/pmodule_api/#method-frameset_lineline)

[frame:set_decl_line(line)](https://documentation.backtrace.io/pmodule_api/#method-frameset_decl_lineline)

[frame:add_variable(variable[, insert_after])](https://documentation.backtrace.io/pmodule_api/#method-frameadd_variablevariable-insert_after)

[frame:add_frame(frame[, insert_after])](https://documentation.backtrace.io/pmodule_api/#method-frameadd_frameframe-insert_after)

[frame:annotate(level, fmt, vars)](https://documentation.backtrace.io/pmodule_api/#method-frameannotatelevel-fmt-vars)

[frame](https://documentation.backtrace.io/pmodule_api/#method-frame)

[variable:address()](https://documentation.backtrace.io/pmodule_api/#method-variableaddress)

[variable:symbol()](https://documentation.backtrace.io/pmodule_api/#method-variablesymbol)

[variable:type()](https://documentation.backtrace.io/pmodule_api/#method-variabletype)

[variable:type_name()](https://documentation.backtrace.io/pmodule_api/#method-variabletype_name)

[variable:base_type()](https://documentation.backtrace.io/pmodule_api/#method-variablebase_type)

[variable:name()](https://documentation.backtrace.io/pmodule_api/#method-variablename)

[variable:owner()](https://documentation.backtrace.io/pmodule_api/#method-variableowner)

[variable:frame()](https://documentation.backtrace.io/pmodule_api/#method-variableframe)

[variable:thread()](https://documentation.backtrace.io/pmodule_api/#method-variablethread)

[variable:backtrace()](https://documentation.backtrace.io/pmodule_api/#method-variablebacktrace)

[variable:fprm_offset()](https://documentation.backtrace.io/pmodule_api/#method-variablefprm_offset)

[variable:resolved()](https://documentation.backtrace.io/pmodule_api/#method-variableresolved)

[variable:is_string()](https://documentation.backtrace.io/pmodule_api/#method-variableis_string)

[variable:value()](https://documentation.backtrace.io/pmodule_api/#method-variablevalue)

[variable:set_struct()](https://documentation.backtrace.io/pmodule_api/#method-variableset_struct)

[variable:set_array()](https://documentation.backtrace.io/pmodule_api/#method-variableset_array)

[variable:set_function([symbol])](https://documentation.backtrace.io/pmodule_api/#method-variableset_functionsymbol)

[variable:set_string([symbol])](https://documentation.backtrace.io/pmodule_api/#method-variableset_stringsymbol)

[variable:set_string(value[, symbol])](https://documentation.backtrace.io/pmodule_api/#method-variableset_stringvalue-symbol)

[variable:set_ref(value[, symbol])](https://documentation.backtrace.io/pmodule_api/#method-variableset_refvalue-symbol)

[variable:set_cdbl(real, imag)](https://documentation.backtrace.io/pmodule_api/#method-variableset_cdblreal-imag)

[variable:set_dbl(value)](https://documentation.backtrace.io/pmodule_api/#method-variableset_dblvalue)

[variable:set_ull(value)](https://documentation.backtrace.io/pmodule_api/#method-variableset_ullvalue)

[variable:set_ll(value)](https://documentation.backtrace.io/pmodule_api/#method-variableset_llvalue)

[variable:annotate(level, fmt, ...)](https://documentation.backtrace.io/pmodule_api/#method-variableannotatelevel-fmt-)

[bt_variable:index()](https://documentation.backtrace.io/pmodule_api/#method-bt_variableindex)

[match:reset()](https://documentation.backtrace.io/pmodule_api/#method-matchreset)

[match:add_object(object[, string_match])](https://documentation.backtrace.io/pmodule_api/#method-matchadd_objectobject-string_match)

[match:add_file(filename[, string_match])](https://documentation.backtrace.io/pmodule_api/#method-matchadd_filefilename-string_match)

[match:add_frame_symbol(symbol[, string_match])](https://documentation.backtrace.io/pmodule_api/#method-matchadd_frame_symbolsymbol-string_match)

[match:add_base_type(base_type[, string_match])](https://documentation.backtrace.io/pmodule_api/#method-matchadd_base_typebase_type-string_match)

[match:add_variable_ptrace_type(type)](https://documentation.backtrace.io/pmodule_api/#method-matchadd_variable_ptrace_typetype)

[match:add_variable_name(name[, string_match])](https://documentation.backtrace.io/pmodule_api/#method-matchadd_variable_namename-string_match)

[match:set_fault([thread])](https://documentation.backtrace.io/pmodule_api/#method-matchset_faultthread)

[pmap:guard()](https://documentation.backtrace.io/pmodule_api/#method-pmapguard)

[pmap:permissions(flag[, flag2, flag3, ...])](https://documentation.backtrace.io/pmodule_api/#method-pmappermissionsflag-flag2-flag3-)

[siginfo:reason()](https://documentation.backtrace.io/pmodule_api/#method-siginforeason)

[siginfo:address_populated()](https://documentation.backtrace.io/pmodule_api/#method-siginfoaddress_populated)

[siginfo:address()](https://documentation.backtrace.io/pmodule_api/#method-siginfoaddress)

[siginfo:num()](https://documentation.backtrace.io/pmodule_api/#method-siginfonum)

[siginfo:code()](https://documentation.backtrace.io/pmodule_api/#method-siginfocode)

[siginfo:tostring()](https://documentation.backtrace.io/pmodule_api/#method-siginfotostring)

## Functions

The module `pmodule` defines the following functions.

### Function `pmodule.define{module_description}`

Defines a `pmodule`. This must be called when the Lua module is loaded (i.e. it should be a global call). The following are valid fields:

- `id {string}`: Required. This string is used to identify a module.
- `load {function}`: Required. This function is called after the module is loaded to register event callbacks.
- `unload {function}`: Optional. This function is called to uninitialize a module before backtrace-ptraceexits.
- `reset {function}`: Optional. This function is called to reset a module between snapshot invocations in the event multiple iterations are specified.

#### Parameters:

`module_description {table}`: the table containing fields describing the module

#### Returns:

`nothing`

Example:

```
pmodule.define{
    id = "pmodule_lua",
    load=pm_load,
    reset=function () pmodule.log(pmodule.log_level.warning, "pm_reset") end,
    unload=function () pmodule.log(pmodule.log_level.warning, "pm_unload") end
```

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.event_register(event_type, function[, match])`

Registers an event callback. These functions are executed at specific points during snapshot generation:

Events/Phases:

- `pmodule.event_type.variable`: When a new variable has been extracted.
- `pmodule.event_type.frame`: When a new frame has been extracted.
- `pmodule.event_type.thread`: When a new thread has been extracted
- `pmodule.event_type.preattach`: Before ptrace attaches to the process.
- `pmodule.event_type.postattach`: After ptrace detaches from the process.
- `pmodule.event_type.attach`: Right after attachment, before extraction.

Events may optionally be filtered by match filters; see [pmodule.match()](https://documentation.backtrace.io/pmodule_api/#function-pmodulematch) . Each event callback will receive as its first argument the relevant object - variable callbacks will receive variable objects, frame callbacks will receive frame objects, thread callbacks will receive thread objects, and all attach callbacks (pre, attach, and post) will receive the backtrace object.

#### Parameters:

- `event_type {pmodule.event_type}`: the type of the event to register
- `function {function}`: the function to execute in response to the event
- `match {pmodule.match}`: the match filter to use when filtering the event

#### Returns:

`nothing`

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.log(log_level, fmt_string, ...)`

Logs a message. Supported log levels:

- `pmodule.log_level.debug`
- `pmodule.log_level.info`
- `pmodule.log_level.warning`
- `pmodule.log_level.error`

#### Parameters:

`log_level {pmodule.log_level}`: the debug level
`fmt_string {string}`: the Lua-compatible format string
...: variables the format variables

#### Returns:

`nothing`

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.address_symbol(addr)`

Returns the string symbol associated with the given address.

#### Parameters:

`addr {integer}`: the address to lookup

#### Returns:

`{string or nil}`: the string symbol associated with the address

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.symbol_address(symbol[, object])`

Returns the address of the given symbol in the optional object.

#### Parameters:

- `symbol {string}`: the symbol to lookup
- `object {string or nil}`: the optional object file name to use for lookups

#### Returns:

`{integer or nil}`: the address of the given symbol

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.symbol_read_raw(symbol, object, size)`

Returns raw binary data of up to the specified length associated with the given symbol in the optional object.

#### Parameters:

- `symbol {string}`: the symbol to lookup
- `object {string or nil}`: the optional object file name to use for lookups
- `size {integer}`: the maximum number of bytes to read

#### Returns:

- `{string or nil}`: the raw buffer containing the read data; buf:len() will give the number of bytes read
  Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.address_read_raw(addr, size)`

Returns raw binary data of up to the specified length associated with the given address.

#### Parameters:

- `addr {integer}`: the address to lookup -`size {integer}`: the maximum number of bytes to read

#### Returns:

- `{string or nil}`: the raw buffer containing the read data; buf:len() will give the number of bytes read

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.symbol_read_string(symbol, object, size)`

Returns a string of up to the specified length associated with the given symbol in the optional object.

#### Parameters:

- `symbol {string}`: the symbol to lookup
- `object {string or nil}`: the optional object file name to use for lookups
- `size {integer}`: the maximum number of bytes to read

#### Returns:

`{string or nil}`: the read string

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.address_read_string(addr, size)`

Returns a string of up to the specified length associated with the given address.

#### Parameters:

- `addr {integer}`: the address to lookup
- `size {integer}`: the maximum number of bytes to read

#### Returns:

- `{string or nil}`: the read string

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.match()`

Creates a new match filter to be used during event registration and object iteration.

#### Parameters:

`nothing`

#### Returns:

- `{pmodule.match}`: a new match object

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.pmap_enabled()`

#### Parameters:

nothing

#### Returns:

- `{boolean}`: true if pmap module analysis is enabled

Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.pmap_cached()`

#### Parameters:

nothing

#### Returns:

`{boolean}`: true if an alternate path to a /proc/
Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

### Function `pmodule.backtrace()`

Retrieves the backtrace object associated with the snapshot. Valid only during event callbacks.

#### Parameters:

`nothing`

#### Returns:

`{pmodule.backtrace}`: the backtrace object
Back to [module description](https://documentation.backtrace.io/pmodule_api/#module-pmodule).

Function pmodule.config_option(key)
Returns the value associated with the given key through a ptrace CLI option.

Parameters:

nothing

Returns:

{string or nil}: the value associated with the given key
Back to module description.

Function pmodule.create*variable(type, name, addr, offset[, owner])
Synthesizes a variable. These should eventually be added to the backtrace via frame:add_variable(var) . The variable's value and type should be set through one of the variable:set*\* methods.

Parameters:

type {string}: the name of the variable type
name {string}: the name of the variable
addr {integer}: the address of the variable
offset {integer}: the array offset of the variable (-1 if variable is not an array member)
owner {pmodule.variable}: the optional parent variable
Returns:

{pmodule.variable}: the synthesized variable
Back to module description.

Function pmodule.create_frame()
Synthesizes a frame to which a user can add variables. Synthesized frames should eventually be added to the backtrace via thread:add_frame(fr) and frame:add_frame(fr) .

Parameters:

nothing

Returns:

{pmodule.frame}: the synthesized frame
Back to module description.

Function pmodule.bt_query(symbol, object, cu)
Queries for a global variable. The returned bt_variable may be used with the standard bt_variable interface (see bt_variable:index()).

Parameters:

symbol {string}: the variable's symbol
object {string}: the variable's object file
cu {string}: the variable's compilation unit
Returns:

{pmodule.btvar or nil}: the bt_variable if found
Back to module description.

Function pmodule.variable_from_bt(btvar)
Synthesizes a pmodule_variable from a bt_variable. This will allow querying for specific variable data (e.g. value, address, name) via the pmodule variable API. bt_variables allow querying for only struct members (see bt_variable:index()). Variables synthesized this way will be finalized/freed. They cannot be added to the snapshot. All synthesized variables (to be added to the snapshot)must go through the synthesis API.

Parameters:

bt_var {pmodule.btvar}: a bt_variable to use for synthesis
Returns:

{pmodule.variable}: the synthesized pmodule variable
Back to module description.

Function pmodule.deref(bt_var[, address])
Dereferences a reference bt_variable either at the optionally given address or at the value of the given bt_variable.

Parameters:

bt_var {pmodule.btvar}: the reference bt_variable to dereference
address {integer}: the optional address at which to dereference; type information will be copied from the given bt_var
Returns:

{pmodule.btvar}: A new bt_variable whose address is the dereferenced location
Back to module description.

Function pmodule.sizeof(bt_var)
Parameters:

bt_var {pmodule.btvar}: a bt_variable to query for size
Returns:

{integer}: the size of the variable in bytes
Back to module description.

Methods
The module pmodule defines the following methods.

Method backtrace:pid()
Parameters:

nothing

Returns:

{integer}: the PID of the snapshotted process
Back to module description.

Method backtrace:pmap_entry(addr)
Parameters:

addr {integer}: the address to lookup
Returns:

{pmodule.pmap or nil}: the pmap entry object if found
Back to module description.

Method backtrace:application_name()
Parameters:

nothing

Returns:

{string}: the application name of the snapshotted process
Back to module description.

Method backtrace:process_state()
Possible process states:

pmodule.process_state.running
pmodule.process_state.sleeping
pmodule.process_state.disk
pmodule.process_state.stopped
pmodule.process_state.traced
pmodule.process_state.zombie
pmodule.process_state.dead
pmodule.process_state.idle
pmodule.process_state.blocked
pmodule.process_state.queued
pmodule.process_state.unknown
Parameters:

nothing

Returns:

{pmodule.process_state}: the process state value
Back to module description.

Method backtrace:add_tag(tag_name)
Parameters:

tag_name {string}: the tag name to add
Returns:

nothing

Back to module description.

Method backtrace:add_kv_int(key, value)
Parameters:

key {string}: the key name
value {integer}: the integer value
Returns:

nothing

Back to module description.

Method backtrace:add_kv_string(key, value)
Parameters:

key {string}: the key name
value {string}: the string value
Returns:

nothing

Back to module description.

Method backtrace:add_classifier(classifier_name)
Parameters:

classifier_name {string}: the classification to add
Returns:

nothing

Back to module description.

Method backtrace:annotate(level, fmt, ...)
Annotates a variable with a message. The supported annotation levels are:

pmodule.annotation.comment
pmodule.annotation.warning
pmodule.annotation.critical
pmodule.annotation.json
Variables, frames, threads, and the overarching backtrace object may be annotated with additional data. All annotation types but PAT_JSON will appear as text attached to the specified object; PAT_JSON will result in the specified text being parsed as a json object to be attached to the specified object.

JSON annotations must be complete, valid JSON objects. Invalid JSON will be discarded.

JSON annotation formatting:

Hydra will parse structured JSON annotations as follows:

    "json": {
        "context" : "Title",
        "key1": "value",
        "key2": "value",
        "key3": {
            "key1": "value",
            "key2": "value"
        }
        ...
    }

Rendered output (in Hydra):

- Title
  key1 value
  key2 value
  - key3
    key1 value
    key2 value

"json" must be the overall key to the annotation object, as the annotation will be embedded into another json object.

"context" is the title of this particular section; the rest of the output will appear in a hierarchy under the "context" title.

All other fields are key value pairs. Any values which are objects themselves will increase the hierarchy level by one until that object ends. Thus, output may be structured into a tree view.

Parameters:

level {pmodule.annotation}: the annotation level
fmt {string}: the Lua-compatible format string
...: variables the format variables
Returns:

nothing

Back to module description.

Method backtrace
When used as a function, this returns a thread iterator compatible with generic for. If a match filter is desired, it should be the second expression (invariant state) of the generic for.

Parameters:

match {pmodule.match}: match filter for threads
Returns:

{pmodule.thread}: thread iterator, which returns a thread per iteration
Example:

local m = pmodule.match()
local bt = pmodule.backtrace()
for thr in bt[, m] do
-- some action
end

Back to module description.

Method backtrace:variables()
This returns a global variable iterator compatible with generic for. If a filter is desired, the user may specify a table as the invariant state (2nd expression of the generic for). All the following fields are optional:

object: the object file
cu: the compilation unit
name: the variable name
Parameters:

filter {table}: the optional table to use for filtering variables
Returns:

{pmodule.variable, string, string}: global variable iterator, which returns a variable, an object name, and a cu name per iteration
Example:

for var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do
-- actions
end

Back to module description.

Method thread:fault()
Parameters:

nothing

Returns:

{boolean}: true if thread is faulted
Back to module description.

Method thread:tid()
Parameters:

nothing

Returns:

{integer}: the thread's tid
Back to module description.

Method thread:backtrace()
Parameters:

nothing

Returns:

{pmodule.backtrace}: the backtrace object containing the thread
Back to module description.

Method thread:n_frames()
Parameters:

nothing

Returns:

{integer}: the number of frames in the thread
Back to module description.

Method thread:n_kframes()
Parameters:

nothing

Returns:

{integer}: the number of kernel frames in the thread
Back to module description.

Method thread:set_name(name)
Parameters:

name {string}: the name of the thread
Returns:

nothing

Back to module description.

Method thread:add_frame(frame[, first])
Parameters:

the {pmodule.frame}: frame to add
first {boolean}: whether to insert the frame at the head of the thread's frame list (default: true)
Returns:

nothing

Back to module description.

Method thread:annotate(level, fmt, ...)
Annotates a thread with a message. See backtrace:annotate(level, fmt, ...) for more details regarding this API.

Parameters:

level {pmodule.annotation}: the annotation level
fmt {string}: the Lua-compatible format string
...: variables the format variables
Returns:

nothing

Back to module description.

Method thread
When used as a function, this returns a frame iterator compatible with generic for. If a match filter is desired, it should be the second expression (invariant state) of the generic for.

Parameters:

match {pmodule.match}: match filter for frames
Returns:

{pmodule.frame}: frame iterator, which returns a frame per iteration
Example:

local m = pmodule.match()
local thr = ...
for fr in thr[, m] do
-- some action
end

Back to module description.

Method thread:variables()
This returns a TLS variable iterator compatible with generic for. If a filter is desired, the user may specify a table as the invariant state (2nd expression of the generic for). All the following fields are optional:

object: the object file
cu: the compilation unit
name: the variable name
Parameters:

filter {table}: the optional table to use for filtering variables
Returns:

{pmodule.variable, string, string}: TLS variable iterator, which returns a variable, an object name, and a cu name per iteration
Example:

for var, object in thr:variables(), {cu = "hang"} do
-- actions
end

Back to module description.

Method frame:instruction()
Parameters:

nothing

Returns:

{string or nil}: the frame's asm instruction
Back to module description.

Method frame:path()
Parameters:

nothing

Returns:

{string or nil}: the frame's path
Back to module description.

Method frame:symbol()
Parameters:

nothing

Returns:

{string or nil}: the frame's demangled symbol
Back to module description.

Method frame:line_resolved()
Parameters:

nothing

Returns:

{boolean}: true if the frame's line is resolved
Back to module description.

Method frame:object_file()
Parameters:

nothing

Returns:

{string or nil}: the frame's object file
Back to module description.

Method frame:backtrace()
Parameters:

nothing

Returns:

{pmodule.backtrace}: the backtrace object containing the frame
Back to module description.

Method frame:thread()
Parameters:

nothing

Returns:

{pmodule.thread}: the thread object containing the frame
Back to module description.

Method frame:line()
Parameters:

nothing

Returns:

{integer}: the frame's line number
Back to module description.

Method frame:decl_line()
Parameters:

nothing

Returns:

{integer}: the frame's declaration line number
Back to module description.

Method frame:siginfo()
See the siginfo methods for usage.

Parameters:

nothing

Returns:

{pmodule.siginfo or nil}: a siginfo object if the frame contains signal information
Back to module description.

Method frame:fprm_at(index)
Parameters:

index {integer}: the parameter index, starting at 0
Returns:

{pmodule.variable or nil}: the variable at the specified index
Back to module description.

Method frame:fprm()
Per iteration, the user will receive {pmodule.variable} variable, {integer} fprm_index .

Parameters:

nothing

Returns:

{closure}: an idiomatic generic for iterator
Back to module description.

Method frame:set_basename(basename)
Parameters:

basename {string}: the frame's basename
Returns:

nothing

Back to module description.

Method frame:set_symbol(symbol)
Parameters:

symbol {string}: the frame's symbol
Returns:

nothing

Back to module description.

Method frame:set_directory(directory)
Parameters:

directory {string}: the frame's directory
Returns:

nothing

Back to module description.

Method frame:set_path(path)
Parameters:

path {string}: the frame's full source path
Returns:

nothing

Back to module description.

Method frame:set_line(line)
Parameters:

line {integer}: the frame's line number
Returns:

nothing

Back to module description.

Method frame:set_decl_line(line)
Parameters:

line {integer}: the frame's declaration line
Returns:

nothing

Back to module description.

Method frame:add_variable(variable[, insert_after])
Parameters:

variable {pmodule.variable}: the variable to add
insert_after {boolean}: whether to insert the variable directly after its owner or at the end of the frame (default: true)
Returns:

nothing

Back to module description.

Method frame:add_frame(frame[, insert_after])
Parameters:

frame {pmodule.frame}: the frame to insert
insert_after {boolean}: whether to insert the frame after the original frame (default: false)
Returns:

nothing

Back to module description.

Method frame:annotate(level, fmt, vars)
Annotates a frame with a message. See backtrace:annotate(level, fmt, ...) for more details regarding this API.

Parameters:

level {pmodule.annotation}: the annotation level
fmt {string}: the Lua-compatible format string
...: variables the format variables
Returns:

nothing

Back to module description.

Method frame
When used as a function, this returns a variable iterator compatible with generic for. If a match filter is desired, it should be the second expression (invariant state) of the generic for.

Parameters:

match {pmodule.match}: match filter for variables
Returns:

{pmodule.variable}: variable iterator, which returns a variable per iteration
Example:

local m = pmodule.match()
local fr = ...
for var in fr[, m] do
-- some action
end

Back to module description.

Method variable:address()
Parameters:

nothing

Returns:

{integer}: the address of the variable
Back to module description.

Method variable:symbol()
Auxiliary symbol data associated with the variable, depending on its type and availability.

string: the C-string value pointed to by the variable
enum: the label of the enum
function: the name of the function
reference: the name of the pointed-to variable \*
Parameters:

nothing

Returns:

{string or nil}: the auxiliary symbol
Back to module description.

Method variable:type()
Possible variable types:

pmodule.variable_type.ll
pmodule.variable_type.ull
pmodule.variable_type.flt
pmodule.variable_type.dbl
pmodule.variable_type.ldbl
pmodule.variable_type.cflt
pmodule.variable_type.cdbl
pmodule.variable_type.cldbl
pmodule.variable_type.string
pmodule.variable_type.enum
pmodule.variable_type.tuple
pmodule.variable_type.array
pmodule.variable_type.bottom
pmodule.variable_type.fn
pmodule.variable_type.reference
Parameters:

nothing

Returns:

{pmodule.variable_type}: the type of the variable
Back to module description.

Method variable:type_name()
Parameters:

nothing

Returns:

{string or nil}: the type of the variable (e.g. struct(crash))
Back to module description.

Method variable:base_type()
Parameters:

nothing

Returns:

{string or nil}: the base type of the variable (e.g. crash from struct crash)
Back to module description.

Method variable:name()
Parameters:

nothing

Returns:

{string or nil}: the name of the variable
Back to module description.

Method variable:owner()
Parameters:

nothing

Returns:

{pmodule.variable or nil}: the parent of the variable
Back to module description.

Method variable:frame()
Parameters:

nothing

Returns:

{pmodule.frame or nil}: the frame containing the variable, if any
Back to module description.

Method variable:thread()
Parameters:

nothing

Returns:

{pmodule.thread or nil}: the thread containing the variable, if any
Back to module description.

Method variable:backtrace()
Parameters:

nothing

Returns:

{pmodule.backtrace}: the backtrace containing the variable
Back to module description.

Method variable:fprm_offset()
Parameters:

nothing

Returns:

{integer or nil}: the fprm offset of the variable
Back to module description.

Method variable:resolved()
Parameters:

nothing

Returns:

{boolean}: true if the variable's value has been resolved.
Back to module description.

Method variable:is_string()
Parameters:

nothing

Returns:

{boolean}: true if the variable is a string
Back to module description.

Method variable:value()
The value(s) returned depends on the variable's type, as follows:

pmodule.variable_type.ll: {integer}
pmodule.variable_type.ull: {integer}
pmodule.variable_type.flt: {number}
pmodule.variable_type.dbl: {number}
pmodule.variable_type.ldbl: {number}
pmodule.variable_type.cflt: {number} real {number} imaginary
pmodule.variable_type.cdbl: {number} real {number} imaginary
pmodule.variable_type.cldbl: {number} real {number} imaginary
pmodule.variable_type.string: {nil}
pmodule.variable_type.enum: {integer}
pmodule.variable_type.tuple: {nil}
pmodule.variable_type.array: {nil}
pmodule.variable_type.bottom: {nil}
pmodule.variable_type.fn: {nil}
pmodule.variable_type.reference: {integer}
Parameters:

nothing

Returns:

as described above
Back to module description.

Method variable:set_struct()
Parameters:

nothing

Returns:

nothing

Back to module description.

Method variable:set_array()
Parameters:

nothing

Returns:

nothing

Back to module description.

Method variable:set_function([symbol])
Parameters:

symbol {string}: the symbol associated with the function
Returns:

nothing

Back to module description.

Method variable:set_string([symbol])
Parameters:

symbol {string}: the symbol associated with the string
Returns:

nothing

Back to module description.

Method variable:set_string(value[, symbol])
Parameters:

value {integer}: the enum value
symbol {string}: the symbol associated with the enum
Returns:

nothing

Back to module description.

Method variable:set_ref(value[, symbol])
Parameters:

value {integer}: the reference value
symbol {string}: the symbol associated with the reference
Returns:

nothing

Back to module description.

Method variable:set_cdbl(real, imag)
Parameters:

real {number}: the real part of the complex number
imag {number}: the imaginary part of the complex number
Returns:

nothing

Back to module description.

Method variable:set_dbl(value)
Parameters:

value {number}: the double value
Returns:

nothing

Back to module description.

Method variable:set_ull(value)
Parameters:

value {integer}: the unsigned value
Returns:

nothing

Back to module description.

Method variable:set_ll(value)
Parameters:

value {integer}: the signed value
Returns:

nothing

Back to module description.

Method variable:annotate(level, fmt, ...)
Annotates a variable with a message. See backtrace:annotate(level, fmt, ...) for more details regarding this API.

Parameters:

level {pmodule.annotation}: the annotation level
fmt {string}: the Lua-compatible format string
...: variables the format variables
Returns:

nothing

Back to module description.

Method bt_variable:index()
bt_variables may be used to access member fields in structures with a familiar syntax -- i.e., variable_name.member_field. Member access works only on variables of struct type, with one exception: references to structs are automatically dereferenced (by as many levels necessary to get to the underlying struct type) before the member field is queried. Once the desired bt_variable is retrieved, it may be synthesized into a pmodule variable (see pmodule.variable_from_bt(btvar)) for use with the standard pmodule variable API to extract the various data fields (e.g. address, value, symbol).

Parameters:

nothing

Returns:

{pmodule.btvar}: a new btvar synthesized from the specified member
Back to module description.

Method match:reset()
Resets the match object to its base (empty) state.

Parameters:

nothing

Returns:

nothing

Back to module description.

Method match:add_object(object[, string_match])
Acceptable values for string_match:

pmodule.match_type.exact
pmodule.match_type.substr
Parameters:

object {string}: the object file to match
string_match {pmodule.match_type}: exact or substr matching (default: exact)
Returns:

nothing

Back to module description.

Method match:add_file(filename[, string_match])
Acceptable values for string_match:

pmodule.match_type.exact
pmodule.match_type.substr
Parameters:

filename {string}: the file name to match
string_match {pmodule.match_type}: exact or substr matching (default: exact)
Returns:

nothing

Back to module description.

Method match:add_frame_symbol(symbol[, string_match])
Acceptable values for string_match:

pmodule.match_type.exact
pmodule.match_type.substr
Parameters:

symbol {string}: the frame symbol to match
string_match {pmodule.match_type}: exact or substr matching (default: exact)
Returns:

nothing

Back to module description.

Method match:add_base_type(base_type[, string_match])
Acceptable values for string_match:

pmodule.match_type.exact
pmodule.match_type.substr
Parameters:

base_type {string}: the variable base type to match
string_match {pmodule.match_type}: exact or substr matching (default: exact)
Returns:

nothing

Back to module description.

Method match:add_variable_ptrace_type(type)
Parameters:

ptrace {pmodule.variable_type}: type - see @see variable:type() for possible types.
Returns:

nothing

Back to module description.

Method match:add_variable_name(name[, string_match])
Acceptable values for string_match:

pmodule.match_type.exact
pmodule.match_type.substr
Parameters:

name {string}: the variable name to match
string_match {pmodule.match_type}: exact or substr matching (default: exact)
Returns:

nothing

Back to module description.

Method match:set_fault([thread])
Fault matches iff:

variables: the containing frame has fault set.
frames: the faulting event happens in this frame.
thread: the thread contains a frame with fault set. \*
Parameters:

thread {boolean}: true if you want to match on all [variables, frames] from the faulting thread
Returns:

nothing

Back to module description.

Method pmap:guard()
Parameters:

nothing

Returns:

{boolean}: true if the pmap entry is a guard page
Back to module description.

Method pmap:permissions(flag[, flag2, flag3, ...])
Flag can be any of the following values:

pmodule.pmap_perms.ex: executable
pmodule.pmap_perms.rd: readable
pmodule.pmap_perms.wr: writable
pmodule.pmap_perms.pr: private
pmodule.pmap_perms.sh: shared
pmodule.pmap_perms.all: all
Parameters:

flag {pmodule.pmap_perms}: any number of flags as specified above
Returns:

{boolean}: true if the pmap entry has all the specified permissions
Back to module description.

Method siginfo:reason()
Parameters:

nothing

Returns:

{string, boolean}: the reason the signal was sent; true if it was from kill()
Back to module description.

Method siginfo:address_populated()
Parameters:

nothing

Returns:

{boolean}: true if the signal address is populated
Back to module description.

Method siginfo:address()
Parameters:

nothing

Returns:

{integer}: the signal address
Back to module description.

Method siginfo:num()
Parameters:

nothing

Returns:

{integer}: the signal number
Back to module description.

Method siginfo:code()
Parameters:

nothing

Returns:

{integer}: the signal code
Back to module description.

Method siginfo:tostring()
This is invoked by calling tostring() on a siginfo object.

Parameters:

nothing

Returns:

{string}: human-readable translation of signo
Back to top.
