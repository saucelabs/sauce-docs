"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[86423],{89538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(74848),t=n(28453);n(11470),n(19365),n(86025);const s={id:"apache",title:"Integrating Apache Traffic Server",sidebar_label:"Apache Traffic Server",description:"Configure Apache Traffic Server to use Backtrace's Invoker as a crash log helper."},c=void 0,i={id:"error-reporting/platform-integrations/apache",title:"Integrating Apache Traffic Server",description:"Configure Apache Traffic Server to use Backtrace's Invoker as a crash log helper.",source:"@site/docs/error-reporting/platform-integrations/apache.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/apache",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/platform-integrations/apache",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/apache.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"apache",title:"Integrating Apache Traffic Server",sidebar_label:"Apache Traffic Server",description:"Configure Apache Traffic Server to use Backtrace's Invoker as a crash log helper."},sidebar:"backtrace",previous:{title:"Session Replay",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/platform-integrations/session-replay"},next:{title:"Minidump",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/platform-integrations/minidump"}},o={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Set Up Helper Scripts",id:"set-up-helper-scripts",level:2},{value:"<code>invoker.sh</code>",id:"invokersh",level:3},{value:"<code>backtrace.sh</code>",id:"backtracesh",level:3},{value:"Configure ATS Crash Log Helper",id:"configure-ats-crash-log-helper",level:2},{value:"Verify Invoker Launch",id:"verify-invoker-launch",level:2},{value:"Test",id:"test",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Launching <code>backtrace.sh</code> Manually",id:"launching-backtracesh-manually",level:3},{value:"Verifying <code>ptrace</code> Installation",id:"verifying-ptrace-installation",level:3},{value:"Verifying Coroner Installation",id:"verifying-coroner-installation",level:3},{value:"Launching <code>backtrace.sh</code> Manually",id:"launching-backtracesh-manually-1",level:3},{value:"Ensuring ATS Has Permission to Run <code>invoker.sh</code>",id:"ensuring-ats-has-permission-to-run-invokersh",level:3},{value:"Verifying Invocation of <code>backtrace.sh</code> and Generation of <code>.btt</code> File",id:"verifying-invocation-of-backtracesh-and-generation-of-btt-file",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"This document provides instructions on configuring Apache Traffic Server (ATS) to use Backtrace's Invoker as a crash log helper. The workflow upon ATS crash is as follows:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["ATS launches the invoker on startup, which monitors the ",(0,a.jsx)(r.code,{children:"traffic_server"})," process."]}),"\n",(0,a.jsxs)(r.li,{children:["Upon the ",(0,a.jsx)(r.code,{children:"traffic_server"})," crash, the invoker launches ",(0,a.jsx)(r.code,{children:"ptrace"})," via a script that provides metadata."]}),"\n",(0,a.jsxs)(r.li,{children:["This script, in turn, submits the crash file generated by ",(0,a.jsx)(r.code,{children:"ptrace"})," to the coroner object store."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["A Backtrace account (",(0,a.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,a.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,a.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["A Backtrace project and a ",(0,a.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n",(0,a.jsx)(r.li,{children:"Apache Traffic Server (tested with version 6.2.0)"}),"\n",(0,a.jsxs)(r.li,{children:["Coroner Server running and accessible from the ATS machine. (See ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/coroner/server-installation/",children:"Coroner Server installation"}),")"]}),"\n",(0,a.jsxs)(r.li,{children:["Coroner Client package on the ATS machine. (See ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/coroner/client-getting-started/",children:"Coroner Client Installation"}),")"]}),"\n",(0,a.jsxs)(r.li,{children:["Backtrace Ptrace package installed on the ATS machine. (See ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/traces-coroner/",children:"Ptrace Installation"}),")"]}),"\n",(0,a.jsxs)(r.li,{children:["Backtrace Invoker package installed on the ATS machine: ",(0,a.jsx)(r.code,{children:"$ sudo apt-get install backtrace-invoker"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["(Optional but recommended) - Install the morgue command-line queryingtool: (See: ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/morgue/#installation",children:"Morgue Installation"}),")"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"set-up-helper-scripts",children:"Set Up Helper Scripts"}),"\n",(0,a.jsx)(r.h3,{id:"invokersh",children:(0,a.jsx)(r.code,{children:"invoker.sh"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'#!/bin/sh\nexec /opt/backtrace/bin/invoker -t "/home/ats/backtrace.sh %p" $@\n'})}),"\n",(0,a.jsx)(r.h3,{id:"backtracesh",children:(0,a.jsx)(r.code,{children:"backtrace.sh"})}),"\n",(0,a.jsxs)(r.p,{children:["This script calls ",(0,a.jsx)(r.code,{children:"ptrace"})," with any metadata you wish to gather and then submits it to the coroner. Here, we're extracting the version number using ",(0,a.jsx)(r.code,{children:"traffic_ctl"}),", but feel free to add any additional metadata that you need."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'#!/bin/sh\n\n## Change the following as needed\nPROJECT=ats\nTOKEN=ats\nDM=/export/ats\nCF=/etc/coronerd/coroner.cf\n\nPATH=/opt/backtrace/bin:/usr/bin:/bin:$PATH\n\n# Add commands to gather any metadata that you wish to pass to the ptrace invocation\nVERSION=`/opt/ts/bin/traffic_ctl metric get proxy.node.version.manager.short|cut -d \' \' -f 2`\n\nmkdir -p ${DM}/\nptrace --kv="version:$VERSION" $1 -O ${DM}/ats\nif test "$?" == "0"; then\n   coroner -c $CF put -u ${PROJECT} ${TOKEN} ${DM}/*.btt\n\nfi\n'})}),"\n",(0,a.jsxs)(r.p,{children:["Ensure that your ",(0,a.jsx)(r.code,{children:"traffic_server"})," processes can run these scripts and have permission to write to the destination folder specified in ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," (referred to by the variable ",(0,a.jsx)(r.code,{children:"DM"}),")."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ chmod +x invoker.sh\n$ chmod +x backtrace.sh\n"})}),"\n",(0,a.jsx)(r.h2,{id:"configure-ats-crash-log-helper",children:"Configure ATS Crash Log Helper"}),"\n",(0,a.jsxs)(r.p,{children:["To configure the ATS Crash Log Helper, add or edit the following line in ",(0,a.jsx)(r.code,{children:"/etc/trafficserver/records.config"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"CONFIG proxy.config.crash_log_helper STRING /home/ats/invoker.sh\n"})}),"\n",(0,a.jsx)(r.h2,{id:"verify-invoker-launch",children:"Verify Invoker Launch"}),"\n",(0,a.jsx)(r.p,{children:"After making the configuration changes, restart ATS and verify that the invoker is running by executing the following commands:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ sudo /bin/trafficserver restart\n$ ps aux | grep invoker\nnobody   11616  0.0  0.1   4336  1396 ?        T    16:43   0:00 /opt/backtrace/bin/invoker -t /home/ats/backtrace.sh %p --syslog --wait --host x86_64-unknown-linux-gnu\n"})}),"\n",(0,a.jsx)(r.h2,{id:"test",children:"Test"}),"\n",(0,a.jsxs)(r.p,{children:["To test the setup, send a ",(0,a.jsx)(r.code,{children:"SIGABRT"})," signal to traffic_server:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ sudo kill -SIGABRT\n"})}),"\n",(0,a.jsx)(r.p,{children:"Then, verify via the morgue tool that the number of crashes for the project has increased:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"morgue list myproj\n...\n\n...\n     Occurrences: 1 (100.00%)\n"})}),"\n",(0,a.jsx)(r.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsxs)(r.h3,{id:"launching-backtracesh-manually",children:["Launching ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," Manually"]}),"\n",(0,a.jsxs)(r.p,{children:["To check for any errors, you can manually launch ",(0,a.jsx)(r.code,{children:"backtrace.sh"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ ./backtrace.sh 2291\n/export/ats.2291.1461080575.btt\n7750a16bfbb8667ca39de9a568c86897944a476143074275631cd13c842ce74d => 607dcbc50c634580951c0fdf832b2fc9\n"})}),"\n",(0,a.jsx)(r.p,{children:"If there are any errors, continue with the troubleshooting steps below to verify the correct installation of Backtrace components and proper permissions."}),"\n",(0,a.jsxs)(r.h3,{id:"verifying-ptrace-installation",children:["Verifying ",(0,a.jsx)(r.code,{children:"ptrace"})," Installation"]}),"\n",(0,a.jsxs)(r.p,{children:["Running ",(0,a.jsx)(r.code,{children:"/opt/backtrace/bin/ptrace"})," on a process you own should generate a ",(0,a.jsx)(r.code,{children:".btt"})," file:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ ps\n  PID TTY          TIME CMD\n 2291 pts/7    00:00:00 bash\n11709 pts/7    00:00:00 ps\n\n$ /opt/backtrace/bin/ptrace 2291\n/home/test/bash.2291.1461078102.btt\n\n$ ls *.btt\nbash.2291.1461078102.btt\n"})}),"\n",(0,a.jsxs)(r.p,{children:["If the file is not generated, verify your ",(0,a.jsx)(r.code,{children:"ptrace"})," installation. Refer to ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/ptrace/",children:"Ptrace Installation"})," for assistance."]}),"\n",(0,a.jsx)(r.h3,{id:"verifying-coroner-installation",children:"Verifying Coroner Installation"}),"\n",(0,a.jsx)(r.p,{children:"To confirm that you can send snapshots to the server using coroner, perform the following steps:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ coroner -c put project1 project1_token bash.2291.1461078102.btt\n7750a16bfbb8667ca39de9a568c86897944a476143074275631cd13c842ce74d => 607dcbc50c634580951c0fdf832b2fc9\n"})}),"\n",(0,a.jsxs)(r.p,{children:["If you encounter issues, verify your coroner client installation. See ",(0,a.jsx)(r.a,{href:"/error-reporting/advanced/coroner/client-getting-started/",children:"Coroner Client Installation"})," for more information."]}),"\n",(0,a.jsxs)(r.h3,{id:"launching-backtracesh-manually-1",children:["Launching ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," Manually"]}),"\n",(0,a.jsxs)(r.p,{children:["Try launching ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," manually to ensure there are no errors:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ ./backtrace.sh 2291\n/export/ats.2291.1461080575.btt\n7750a16bfbb8667ca39de9a568c86897944a476143074275631cd13c842ce74d => 607dcbc50c634580951c0fdf832b2fc9\n"})}),"\n",(0,a.jsxs)(r.h3,{id:"ensuring-ats-has-permission-to-run-invokersh",children:["Ensuring ATS Has Permission to Run ",(0,a.jsx)(r.code,{children:"invoker.sh"})]}),"\n",(0,a.jsxs)(r.p,{children:["Make sure that ATS has the necessary permissions to execute ",(0,a.jsx)(r.code,{children:"invoker.sh"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"$ chmod +x /path/to/invoker.sh\n"})}),"\n",(0,a.jsxs)(r.h3,{id:"verifying-invocation-of-backtracesh-and-generation-of-btt-file",children:["Verifying Invocation of ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," and Generation of ",(0,a.jsx)(r.code,{children:".btt"})," File"]}),"\n",(0,a.jsxs)(r.p,{children:["You can verify if ",(0,a.jsx)(r.code,{children:"backtrace.sh"})," is being invoked and generating the ",(0,a.jsx)(r.code,{children:".btt"})," file in the desired location by commenting out the last 3 lines of ",(0,a.jsx)(r.code,{children:"backtrace.sh"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var a=n(18215);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,c),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>y});var a=n(96540),t=n(18215),s=n(23104),c=n(56347),i=n(205),o=n(57485),l=n(31682),d=n(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const t=(0,c.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})}),[s,t])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=u(e),[c,o]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[l,h]=f({queryString:n,groupId:t}),[g,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,d.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),v=(()=>{const e=l??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function x(e){let{className:r,block:n,selectedValue:a,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const r=e.currentTarget,n=o.indexOf(r),t=i[n].value;t!==a&&(l(r),c(t))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>o.push(e),onKeyDown:h,onClick:d,...s,className:(0,t.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:t}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function k(e){const r=g(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,m.jsx)(x,{...e,...r}),(0,m.jsx)(j,{...e,...r})]})}function y(e){const r=(0,b.A)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var a=n(96540);const t={},s=a.createContext(t);function c(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);