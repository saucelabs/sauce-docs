---
id: error-reporting
title: Error Reporting API Endpoints
sidebar_label: Error Reporting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These API endpoints allow you to interact with Error Reporting (Backtrace) functionality.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and an API token.

## Submit Crash

<details>
<summary><span className="api post">POST</span><code>http://api.backtrace.io/post</code></summary>
<p/>

Submits crash object to Backtrace instance.

#### Parameters

<table id="table-api">
   <tbody>
      <tr>
         <td><code>token</code></td>
<td>

            <p><small>| QUERY | REQUIRED | STRING |</small></p>
            <p>Your API token.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>format</code></td>
<td>

            <p><small>| QUERY | REQUIRED | STRING |</small></p>
            <p>The format of the crash you are submitting. Default value is <code>json</code>.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>upload_file</code></td>
<td>

            <p><small>| BODY | OPTIONAL | STRING |</small></p>
            <p>It allows to attach a file with the initial crash submission. It contains the location of file containing crash data to send.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>body</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>The JSON body of the crash dump. The required fields for <code>body</code> are:</p>
            <p>
              <ul>
                <li><code>uuid</code></li>
                <li><code>timestamp</code></li>
                <li><code>lang</code></li>
                <li><code>langVersion</code></li>
                <li><code>agent</code></li>
                <li><code>agentVersion</code></li>
                <li><code>threads</code></li>
                <li><code>mainThread</code></li>
              </ul>
            </p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>uuid</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>16 bytes of randomness in human readable UUID format. The server will reject the request if UUID is already found.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>timestamp</code></td>
<td>

            <p><small>| BODY | REQUIRED | INTEGER |</small></p>
            <p>The UTC timestamp in seconds.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>lang</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>The name of the programming language/environment this error originates from.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>langVersion</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>The version of the programming language/environment this error originates from.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>agent</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>The name of the client that is sending this error report.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>agentVersion</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>The version of the client that is sending this error report.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>threads</code></td>
<td>

            <p><small>| BODY | REQUIRED | OBJECT |</small></p>
            <p>Contains a map of all threads running in the environment. It could be only one. The object is composed by the <code>main</code> object that is the key of the <code>threads</code> object and represents the unique ID of a thread. The object contains the following fields:</p>
            <p>
              <ul>
                <li><code>name</code> - A string that provides a small description of what the thread does.</li>
                <li><code>fault</code> - A boolean value that denotes if a thread is a faulting thread. Rarely two faulted threads can be seen, if it happens, the first faulting thread listed gets the status of <code>mainThread</code></li>
                <li><code>stack</code> - An array composed by the following fields:</li>
                    <ul>
                      <li><code>guessed_frame</code> - A boolean value that is <code>true</code> if the stack frame is created by hueristic method due to missing CFI, and <code>false</code> otherwise.</li>
                      <li><code>funcName</code> - A string value that identifies the function, method, or procedure name. If not provided then <code>address</code> must be provided.</li>
                      <li><code>address</code> - A string value that identifies the address of the stack frame. Required if <code>funcName</code> is not provided.</li>
                      <li><code>line</code> - A string value that identifies the line number in the source code of the stack frame. First line is 1.</li>
                      <li><code>column</code> - A string value that identifies the column number in the source code of the stack frame. First column is 1.</li>
                      <li><code>sourceCode</code> - A string value that identifies the ID of the source code file the stack frame is contained in.</li>
                      <li><code>library</code> - A string value that identifies the shared object, the library or the module name.</li>
                      <li><code>debug_identifier</code> - A string value that identifies the debug identifier for the library associated with this frame.</li>
                      <li><code>faulted</code> - A boolean value that indicates if this frame is known to to the faulting frame.</li>
                      <li><code>registers</code> - In this object the keys are the register names. Use any names that make sense for the architecture. These must correspond to the values in the <code>arch</code> definition. JSON does not support 64 bit integers, so you must set the correct type and then encode the 64 bit integers as a string.</li>
                    </ul>
              </ul>
            </p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>mainThread</code></td>
<td>

            <p><small>| BODY | REQUIRED | STRING |</small></p>
            <p>It represent the thread that either triggered the error or generated this object. The value of this field should be one of the keys in the <code>threads</code> object and cannot be <code>null</code>.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>symbolication</code></td>
<td>

            <p><small>| BODY | OPTIONAL | STRING |</small></p>
            <p>Specifies the symbolication that needs to be applied. Supported values are:</p>
            <p>
            <ul>
               <li><code>minidump</code>.</li>
               <li><code>sourcemap</code>.</li>
               <li><code>proguard</code>.</li>
            </ul>
            </p>
            {`This should not be specified for client-symbolicated objects.`}
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>entryThread</code></td>
<td>

            <p><small>| BODY | OPTIONAL | STRING |</small></p>
            <p>Specifies which thread is the entry point or the starting thread. This must correspond to an entry in the <code>threads</code> field.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>arch</code></td>
<td>

            <p><small>| BODY | OPTIONAL | OBJECT |</small></p>
            <p>Specifies the CPU architecture information. It is required if you want to have registers in the stack frame. The object has two fields: </p>
            <p>
              <ul>
                <li>
                <code>name</code> - On some systems the running program can be run with a different arch than the system itself. <code>attributes.uname.machine</code> has to do with the system arch; this field has to do with the running process arch.
                </li>
                <li>
                <code>registers</code> - It corresponds with registers in the stack frame. Specifies the names of the registers for this arch. The values are the types. Valid types are:
                  <ul>
                    <li><code>i32</code></li>
                    <li><code>u32</code></li>
                    <li><code>i64</code></li>
                    <li><code>u64</code></li>
                    <li><code>f32</code></li>
                    <li><code>string</code></li>
                  </ul>
                  <p>If you use <code>string</code>, you can format the value as you want.</p>
                </li>
              </ul>
            </p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>fingerprint</code></td>
<td>

            <p><small>| BODY | OPTIONAL | STRING |</small></p>
            <p>This is a base64 encoded unique ID that groups the report with the same fingerprint (32 bytes). If omitted, a fingerprint will be generated from the submitted stack trace.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>classifiers</code></td>
<td>

            <p><small>| BODY | OPTIONAL | ARRAY of STRINGS |</small></p>
            <p>List of strings which are report classifications.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>attributes</code></td>
<td>

            <p><small>| BODY | OPTIONAL | OBJECT of KEY:VALUE Pairs |</small></p>
            <p>This is a set of key-value pairs that belong to the error report. The exact fields are not defined by this specification. It is up to the JSON consumer how to display or otherwise represent key/value pairs in this object. The value of a key-value pair can be a string, integer, or boolean. These attributes are indexed and searchable. Some of the possible values:</p>
            <ul>
               <li><code>application: foo</code></li>
               <li><code>cpu.iowait: 1234143</code></li>
               <li><code>system.memory.buffers: 1234</code></li>
               <li><code>uname.machine: x86_64</code></li>
               <li><code>vm.swap.size: 1234</code></li>
               <li><code>error.message: Unexpected token h</code></li>
            </ul>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>sourceCode</code></td>
<td>

            <p><small>| BODY | OPTIONAL | OBJECT |</small></p>
            <p>The object include the source code for better debugging experience. The object is composed by the <code>sourceCodeId</code> object that is the ID of the source code. The object is composed by the following fields:</p>
            <ul>
               <li><code>text</code> - A string that provides the full source file or a subset of it. If provided, then also <code>startline</code> should be provided. If not provided, then <code>path</code> must be provided.</li>
               <li><code>startLine</code> - An integer value that provides the line number that the provided text starts on. It is required if <code>text</code> is provided. First line is 1.</li>
               <li><code>startColumn</code> - An integer value that provides the column number that the first byte in the <code>text</code> segment is. First column is 1.</li>
               <li><code>startPos</code> - An integer value that provides the absolute byte index in the original file that the provided segment is part of. First byte is 0.</li>
               <li><code>path</code> - A string value that provides the file system path to the original source code file. If not provided, then <code>text</code> must be provided.</li>
               <li><code>tabWidth</code> - An integer value that informs source code display how many spaces a tab should represent.</li>
            </ul>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>memory</code></td>
<td>

            <p><small>| BODY | OPTIONAL | ARRAY |</small></p>
            <p>Provides arbitrary slices of memory. The array is composed by the following keys:</p>
            <ul>
               <li><code>start</code> - An integer offset that this slice of memory starts at. The 64 bit integers are represented as strings.</li>
               <li><code>size</code> - The number of bytes of the slice. Optional if you include <code>data</code>.</li>
               <li><code>data</code> - Base64 encoded bytes of the slice of memory. If provided, <code>size</code> can be inferred from it.</li>
               <li><code>perms</code> - The object that sets of permissions of this slice of memory. It is composed by the boolean properties:</li>
                  <ul>
                     <li><code>read</code></li>
                     <li><code>write</code></li>
                     <li><code>exec</code></li>
                  </ul>
            </ul>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>annotations</code></td>
<td>

            <p><small>| BODY | OPTIONAL | ARRAY or OBJECT or STRING |</small></p>
            <p>A generic, non-indexed user-provided property. The names are free, the values can be of any type, and there is no limit to nesting.</p>
         </td>
      </tr>
   </tbody>
   <tbody>
      <tr>
         <td><code>modules</code></td>
<td>

            <p><small>| BODY | OPTIONAL | ARRAY |</small></p>
            <p>A list of modules as loaded in memory, used to symbolicate stack traces. The array is composed by the following keys:</p>
            <ul>
               <li><code>start</code> - An integer offset that the module starts at. 64 bit integers are represented as strings.</li>
               <li><code>size</code> - The number of bytes occupied by the module.</li>
               <li><code>code_file</code> - A string that indicates the path that the module is loaded from.</li>
               <li><code>version</code> - The human-readable version string for the module.</li>
               <li><code>debug_file</code> - The file containing debug information for the module.</li>
               <li><code>debug_identifier</code> - The debug file identifier.</li>
               <li><code>debug_file_exists</code> - A boolean value that indicates if symbolication was able to locate the debug file.</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

```jsx title="Sample Request"
curl --request POST 'https://api.backtrace.io/post?token=<your_token>&format=<format>' \
-H 'Content-Type: application/json' \
-d '{
  "uuid": "123e4567-e89b-12d3-a456-426655440000",
  "timestamp": 1475530543,
  "lang": "nodejs",
  "langVersion": "v4.5.0",
  "agent": "backtrace-node",
  "agentVersion": "0.4.0",
  "threads": {
    "main": {
      "name": "my super cool thread",
      "fault": true,
      "stack": [
        {
          "guessed_frame": "false",
          "funcName": "main",
          "address": "16045690984833335023",
          "line": "10",
          "column": "19",
          "sourceCode": "o9BYbg2uO+1m",
          "library": "/home/example/nodebt/test.js",
          "callstack_state": "1",
          "registers": {
            "rax": "16045690984833335023",
            "rip": 1234,
            "FLAGS": "E:1 B:0 C:1"
          }
        }
      ]
    },
    "mainThread": "main"
  }
}'
```

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Malformed request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>403</code></td>
    <td colSpan='2'>Invalid token.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "uuid": "123e4567-e89b-12d3-a456-426655440000",
  "timestamp": 1475530543,
  "lang": "nodejs",
  "langVersion": "v4.5.0",
  "agent": "backtrace-node",
  "agentVersion": "0.4.0",
  "threads": {
    "main": {
      "name": "my super cool thread",
      "fault": true,
      "stack": [
        {
          "guessed_frame": "false",
          "funcName": "main",
          "address": "16045690984833335023",
          "line": "10",
          "column": "19",
          "sourceCode": "o9BYbg2uO+1m",
          "library": "/home/example/nodebt/test.js",
          "callstack_state": "1",
          "registers": {
            "rax": "16045690984833335023",
            "rip": 1234,
            "FLAGS": "E:1 B:0 C:1"
          }
        }
      ]
    }
  },
  "mainThread": "main",
  "entryThread": "12341324",
  "arch": {
    "name": "x64",
    "registers": {
      "rax": "u64",
      "rip": "u32",
      "FLAGS": "string"
    }
  },
  "fingerprint": "kqJB7mgd22nvWGxYU2MvCpLRTiNWO1C8KFS434eTz1M=",
  "callstack": {
    "frames": ["one@foo.js:123", "two@bar.js", "three"]
  },
  "classifiers": ["SyntaxError"],
  "attributes": {
    "application": "foo",
    "cpu.boottime": 1234234234,
    "cpu.context": 1234,
    "cpu.idle": 1234234,
    "cpu.iowait": 1234143,
    "cpu.irq": 1234113,
    "cpu.kernel": "foo",
    "cpu.nice": "foo",
    "cpu.process.blocked": 1234,
    "cpu.process.count": 1234,
    "cpu.process.running": 1234,
    "cpu.softirq": "foo",
    "cpu.user": 1234,
    "descriptor.count": 1234,
    "fault.address": "foo",
    "fingerprint": "foo",
    "hostname": "foo",
    "process.age": 1234,
    "sched.cs.involuntary": 1234,
    "sched.cs.voluntary": 1234,
    "system.memory.active": 1234,
    "system.memory.buffers": 1234,
    "system.memory.cached": 1234,
    "system.memory.dirty": 1234,
    "system.memory.free": 1234,
    "system.memory.inactive": 1234,
    "system.memory.slab": 1234,
    "system.memory.swap.cached": 1234,
    "system.memory.swap.free": 1234,
    "system.memory.swap.total": 1234,
    "system.memory.total": 1234,
    "system.memory.vmalloc.chunk": 1234,
    "system.memory.vmalloc.total": 1234,
    "system.memory.vmalloc.used": 1234,
    "system.memory.writeback": 1234,
    "uname.machine": "x86_64",
    "uname.release": "4.4.0-38-generic",
    "uname.sysname": "Linux",
    "uname.version": "#57-Ubuntu SMP Tue Sep 6 15:42:33 UTC 2016",
    "vm.data.size": 1234,
    "vm.locked.size": 1234,
    "vm.pte.size": 1234,
    "vm.rss.peak": 1234,
    "vm.rss.size": 1234,
    "vm.shared.size": 1234,
    "vm.stack.size": 1234,
    "vm.swap.size": 1234,
    "vm.vma.peak": 1234,
    "vm.vma.size": 1234,
    "mem.rss": 1234,
    "mem.heap.total": 1234,
    "mem.heap.used": 1234,
    "error.message": "Unexpected token h"
  },
  "sourceCode": {
    "o9BYbg2uO+1m": {
      "text":
        "var bt = require('backtrace.io');\nbt.initialize({\n  debugBacktrace: true,\n  timeout: 9999999,\n});\n\nmain();\n\nfunction main() {\n  var json = JSON.parse(\"example\");\n}\n",
      "startLine": 1,
      "startColumn": 1,
      "startPos": 0,
      "path": "/home/andy/tmp/nodebt/test.js",
      "tabWidth": 8
    }
  },
  "memory": [
    {
      "start": "16045690984833335023",
      "size": 1024,
      "data": "R56cuNuwpqEJe8n3i4Ojlxt59fpPMU74RygKv5byWJzoHYwCr",
      "perms": {
        "read": true,
        "write": true,
        "exec": false
      }
    }
  ],
  "annotations": {
    "Environment Variables": {
      "ENV_VAR_EXAMPLE": "example value"
    },
    "Some Property Name": true,
    "Dependencies": {
      "dependencyName": {
        "requestedVersion": "~1.2.0",
        "installedVersion": "1.2.0",
        "dependencies": {}
      }
    }
  }
}
```

</details>
