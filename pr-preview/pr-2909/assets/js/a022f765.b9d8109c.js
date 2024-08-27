"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[48830],{20578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(74848),n=a(28453),i=(a(11470),a(19365),a(86025));const o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",description:"Overview of the Backtrace debugger."},s=void 0,c={id:"error-reporting/advanced/assistive-unix/introduction",title:"Introduction",description:"Overview of the Backtrace debugger.",source:"@site/docs/error-reporting/advanced/assistive-unix/introduction.md",sourceDirName:"error-reporting/advanced/assistive-unix",slug:"/error-reporting/advanced/assistive-unix/introduction",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/assistive-unix/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/assistive-unix/introduction.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",description:"Overview of the Backtrace debugger."},sidebar:"backtrace",previous:{title:"Usage",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/hydra/usage"},next:{title:"Feature Overview",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/assistive-unix/overview"}},l={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Data Access and Size",id:"data-access-and-size",level:3},{value:"Performance",id:"performance",level:3},{value:"Mean Time to Resolution",id:"mean-time-to-resolution",level:3},{value:"Triage and Prioritization",id:"triage-and-prioritization",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backtrace is a turn-key debugging platform that captures the application state at the time of an error, whether it's a run-time error or a fatal crash. Since the inception of our company, we have focused on improving the foundational technology behind modern symbolic debuggers. Our new debugger, called ",(0,r.jsx)(t.code,{children:"ptrace"}),", is designed for automated analysis."]}),"\n",(0,r.jsx)(t.p,{children:"This document provides a brief overview of the features of the Backtrace debugger. It is recommended for integrating x86-64 applications and kernels running on Linux, FreeBSD, and IllumOS. For other platforms, Backtrace provides native support for minidump and seamless integration with popular crash reporting libraries like Google Breakpad and Google Crashpad."}),"\n",(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(t.p,{children:"The Backtrace debugger aims to enhance root cause investigation of application errors in natively compiled software. Its design and development were motivated by several key problem areas with existing crash analysis and aggregation technologies, including data access and size, performance, and mean time to resolution."}),"\n",(0,r.jsx)(t.h3,{id:"data-access-and-size",children:"Data Access and Size"}),"\n",(0,r.jsx)(t.p,{children:"Many modern systems rely on raw memory dumps to capture the application state, which is a crucial part of the post-mortem workflow. Core dumps contain vital information such as application memory, enabling a symbolic debugger to reconstruct variable values, call stacks, and more."}),"\n",(0,r.jsx)(t.p,{children:"However, core dumps are often large, making it impractical to ship them to other systems or even generate them in the first place. Backtrace customers deal with workloads ranging from 24GB of RSS to 500GB+."}),"\n",(0,r.jsx)(t.p,{children:"Additionally, working with core dumps requires access to the appropriate debug symbols for a traditional symbolic debugger to reconstruct the application state in a human-readable form. Setting up and managing this infrastructure for downloading symbols can be time-consuming for developers. Without this infrastructure, developers would need direct access to the machine with the core dump, which is both inefficient and poses a security risk."}),"\n",(0,r.jsx)(t.p,{children:"Backtrace addresses these challenges with a self-contained structured snapshot format that doesn't rely on debug symbols after the snapshot is generated. The size of the snapshot format is significantly smaller than a typical core dump. Moreover, it is possible to generate a snapshot of live processes before resorting to core dump generation. The Backtrace debugger performs automated analysis of the application's state and selectively includes the relevant variables related to the fault."}),"\n",(0,r.jsx)(t.h3,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(t.p,{children:"Two components affect the performance of application recovery in a post-mortem state: memory dump generation and symbolic analysis for extracting a call stack and application state."}),"\n",(0,r.jsx)(t.p,{children:"Let's compare the performance of the Backtrace debugger to that of GDB and LLDB on a complex C++ project, such as Google Chrome. For this experiment, we use Chromium 35.0.1916.144 with 466 mapped segments and 1 thread. The single executable contains approximately 2.6GB of debug data. We are requesting a backtrace of a running process."}),"\n",(0,r.jsx)(t.p,{children:"Here are the performance results:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"GDB: Takes 2.6GB of resident memory and 54 seconds."}),"\n",(0,r.jsx)(t.li,{children:"LLDB: Takes 3.0GB of resident memory and 130 seconds."}),"\n",(0,r.jsx)(t.li,{children:"Backtrace: Takes 0.46GB of resident memory and 00.61 seconds."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This demonstrates complexity as the size of debugging information scales. Performance is also affected as the number of memory segments and threads scale. Below is a comparison of Backtrace with and without variables (",(0,r.jsx)(t.code,{children:"bt"})," and ",(0,r.jsx)(t.code,{children:"bt-nv"}),", respectively) compared to GDB, LLDB, and Glider."]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/error-reporting/assistive-unix/5e601c02daf32.png"),alt:"performance results"}),"\n",(0,r.jsx)(t.p,{children:"The memory dump generation process can be avoided altogether by having Backtrace snapshot live processes, only generating a full dump on disk if necessary. Regarding debugger performance, the Backtrace debugger is orders of magnitude faster than industry-standard debuggers such as GDB and LLDB. This performance allows quicker recovery times and enables the debugger to perform additional analysis."}),"\n",(0,r.jsx)(t.h3,{id:"mean-time-to-resolution",children:"Mean Time to Resolution"}),"\n",(0,r.jsx)(t.p,{children:"Traditional symbolic debuggers rely on engineers asking the right questions to identify the root cause. However, in the post-mortem state, many crucial details can be missed, leading to delays in resolving issues. Complex application states or lack of domain expertise in specific areas can contribute to these missed details."}),"\n",(0,r.jsx)(t.p,{children:"The Backtrace debugger automatically analyzes variables, memory, executable code, and more to highlight important information that reduces the time to resolution."}),"\n",(0,r.jsx)(t.h3,{id:"triage-and-prioritization",children:"Triage and Prioritization"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace automatically analyzes application memory, executable state, and other factors to identify important clues related to variables, registers, and process states. This information assists in classifying issues, such as security problems, and helps understand the impact beyond simple deduplicated error counts. For example, a unique crash that occurs only once in a month may still be a critical security issue. By attaching classifiers to faults, Backtrace enables prioritization beyond simple deduplicated counts, taking into account the potential risk factor of a bug."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var i=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(96540),n=a(18215),i=a(23104),o=a(56347),s=a(205),c=a(57485),l=a(31682),u=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,d]=h({queryString:a,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=l??f;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function y(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==r&&(l(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var r=a(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);