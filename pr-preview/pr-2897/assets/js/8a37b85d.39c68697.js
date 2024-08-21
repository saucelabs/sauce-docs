"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[36917],{89138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(74848),n=a(28453),s=(a(11470),a(19365),a(86025));const o={id:"debug",title:"Debug",sidebar_label:"Debug",description:"Allows you to view a specific error report, including symbolicated callstacks, system and custom attributes, and other useful information."},i=void 0,l={id:"error-reporting/web-console/debug",title:"Debug",description:"Allows you to view a specific error report, including symbolicated callstacks, system and custom attributes, and other useful information.",source:"@site/docs/error-reporting/web-console/debug.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/debug",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/web-console/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/debug.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690921681e3,frontMatter:{id:"debug",title:"Debug",sidebar_label:"Debug",description:"Allows you to view a specific error report, including symbolicated callstacks, system and custom attributes, and other useful information."},sidebar:"backtrace",previous:{title:"Flame Graphs",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/web-console/flame-graphs"},next:{title:"Indexing Attributes",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/project-setup/attributes"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"General Information",id:"general-information",level:3},{value:"Threads",id:"threads",level:3},{value:"Callstack",id:"callstack",level:3},{value:"Registers",id:"registers",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Global Annotations",id:"global-annotations",level:3},{value:"Breadcrumbs",id:"breadcrumbs",level:3},{value:"Global Variables",id:"global-variables",level:3},{value:"Variable Context",id:"variable-context",level:3},{value:"Variables",id:"variables",level:3},{value:"Warnings",id:"warnings",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Debug view allows you to see the error or state of archived dumps from crashes or running processes in the convenience of your web browser. The information you see in the Debug view is dependent on the source of the crash (a script, a minidump file, or the Backtrace proprietary format) and the data available (for example, threads, variables, memory segments, etc)."}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Below is a screenshot of the type of data you will see in the Debug view."}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/debug-view.webp"),alt:"Shows the Debug view."}),"\n",(0,r.jsx)(t.p,{children:"Depending on the type of information in the crash report, the Debug view will show different data. For example, the crash report for minidump files shows a set of callstacks from all the threads, and other details such as attributes, environment information, modules loaded, and missing symbols. The crash report for Backtrace core dump files (BTT) shows automated security and bug analysis, variables, and more."}),"\n",(0,r.jsx)(t.p,{children:"The Debug tool is organized into several sections as described below."}),"\n",(0,r.jsx)(t.h3,{id:"general-information",children:"General Information"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. This includes memory map information, system information, register state, and more. The Process tab allows you to analyze the global state of the faulting process, which includes memory allocator metadata, such as recently reclaimed items, and more (depending on the allocator)."}),"\n",(0,r.jsx)(t.h3,{id:"threads",children:"Threads"}),"\n",(0,r.jsx)(t.p,{children:"This pane contains a list of all threads in the dump. Threads that have crashed have a red icon next to them. Threads that have an arrow symbol next to them can be expanded to more threads with an identical callstack. In other words, threads are grouped into a tree if they have identical callstacks in order to ease navigating lots of threads."}),"\n",(0,r.jsx)(t.h3,{id:"callstack",children:"Callstack"}),"\n",(0,r.jsx)(t.p,{children:"The callstack pane contains the callstack of the currently selected thread. Mousing over a frame will reveal additional interesting information about it. If a frame has an orange highlight, it is deemed more likely to be relevant to the crash."}),"\n",(0,r.jsx)(t.h3,{id:"registers",children:"Registers"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for dump formats such as minidump. It contains the register values for the currently selected frame."}),"\n",(0,r.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for dump formats such as minidump. It contains a list of all attributes extracted from the dump and supplied during dump submission. Some of these attributes may already be indexed."}),"\n",(0,r.jsx)(t.h3,{id:"global-annotations",children:"Global Annotations"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for dump formats such as minidump. This contains a tree list of other interesting data derived from the dump. This can include clues to the root cause of the crash, the list of loaded libraries, missing debug symbols and more."}),"\n",(0,r.jsx)(t.h3,{id:"breadcrumbs",children:"Breadcrumbs"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace SDKs that have the breadcrumb functionality enabled on the client. Breadcrumbs help you track events leading up to a crash, error, or other submitted object. You can also use automatic system breadcrumbs to track battery state changes, foreground/background switches, and memory events."}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/debug-view-breadcrumbs.webp"),alt:"Shows the Breadcrumbs pane in the Debug view."}),"\n",(0,r.jsxs)(t.p,{children:["The breadcrumbs that are added depend on the SDK that you're using. For more information on which events are automatically captured or how to configure breadcrumbs, see ",(0,r.jsx)(t.a,{href:"/error-reporting/platform-integrations/overview",children:"Platform Integrations"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"global-variables",children:"Global Variables"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. It contains the values of any global variables that have been serialized."}),"\n",(0,r.jsx)(t.h3,{id:"variable-context",children:"Variable Context"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. It contains auxiliary information about a variable such as the type and memory allocator state (size of allocation the variable points to and whether it is active or freed)."}),"\n",(0,r.jsx)(t.h3,{id:"variables",children:"Variables"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. Variables with a red box are currently freed. Variables with a green box are currently allocated. Variables with a red circle have warnings attached to them. Click on the variable to expand it and see any potential warnings."}),"\n",(0,r.jsx)(t.h3,{id:"warnings",children:"Warnings"}),"\n",(0,r.jsx)(t.p,{children:"This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. Warnings may include invalid memory allocator state, automated detection of variables accessed when the crash occurred, and more."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(96540),n=a(18215),s=a(23104),o=a(56347),i=a(205),l=a(57485),c=a(31682),u=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function w(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);