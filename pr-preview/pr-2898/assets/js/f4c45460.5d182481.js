"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26309],{36577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(74848),a=t(28453),c=t(86025);t(11470),t(19365);const s={id:"architecture",title:"Sauce Connect Proxy Architecture",sidebar_label:"Architecture"},o=void 0,i={id:"secure-connections/sauce-connect/advanced/architecture",title:"Sauce Connect Proxy Architecture",description:"This document provides an overview of Sauce Connect Proxy architecture to assist customer network and security engineering teams to better understand how it works.",source:"@site/docs/secure-connections/sauce-connect/advanced/architecture.md",sourceDirName:"secure-connections/sauce-connect/advanced",slug:"/secure-connections/sauce-connect/advanced/architecture",permalink:"/secure-connections/sauce-connect/advanced/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/advanced/architecture.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690972699e3,frontMatter:{id:"architecture",title:"Sauce Connect Proxy Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"Security and Authentication",permalink:"/secure-connections/sauce-connect/security-authentication"},next:{title:"KGP Protocol",permalink:"/secure-connections/sauce-connect/advanced/kgp"}},u={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Architecture Components",id:"architecture-components",level:2},{value:"Sauce Connect Proxy Client",id:"sauce-connect-proxy-client",level:3},{value:"Sauce Connect Proxy Server",id:"sauce-connect-proxy-server",level:3},{value:"Sauce Labs REST API",id:"sauce-labs-rest-api",level:3},{value:"Tunnels Web UI",id:"tunnels-web-ui",level:3},{value:"Start Sequence Diagram",id:"start-sequence-diagram",level:2},{value:"Shutdown Sequence Diagram",id:"shutdown-sequence-diagram",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document provides an overview of Sauce Connect Proxy architecture to assist customer network and security engineering teams to better understand how it works."}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you're new to Sauce Connect, we recommend reviewing the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy overview"})," documentation."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"architecture-components",children:"Architecture Components"}),"\n",(0,r.jsx)(n.p,{children:"From the Sauce Labs side, the Sauce Connect system includes the following components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sauce Connect client"}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect server"}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect REST API server"}),"\n",(0,r.jsx)(n.li,{children:"Tunnels Web UI"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an overview of how these components interact with the user environment:"}),"\n",(0,r.jsx)("img",{src:(0,c.A)("img/sauce-connect/sc-arch-components.webp"),alt:"Sauce Connect components interacting with user\u2019s environment",width:"800"}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-proxy-client",children:"Sauce Connect Proxy Client"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/installation/#download-latest-version",children:"client (also known as SC)"})," is distributed as a single binary that contains several distinct components. These include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SC Client controller: the \u201cbrain\u201d of the SC client. It issues requests to the Sauce Labs REST API, starts all the other included components and ensures that everything is working as expected."}),"\n",(0,r.jsxs)(n.li,{children:["KGP Client: the client side implementation of ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp",children:"KGP, Sauce Labs proprietary protocol"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"HTTP Proxy: this contains a non-caching HTTP proxy that sends HTTP requests coming from tests that run on virtual machines (VMs) or devices on the Sauce Labs infrastructure to the website or app that is hosted inside the user\u2019s firewall (either on an intranet or a local machine)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-proxy-server",children:"Sauce Connect Proxy Server"}),"\n",(0,r.jsx)(n.p,{children:"The server is a VM (or container) running in Sauce Labs data centers and it includes the following components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel VM Controller: this is the logic that is responsible for configuring the VM, making sure all components are functional, and reporting back to other internal services."}),"\n",(0,r.jsxs)(n.li,{children:["KGP Server: the server side implementation of ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp",children:"KGP, Sauce Labs proprietary protocol"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"HTTP Proxy: off-the-shelf HTTP proxy that is responsible for sending requests from tests running in Sauce Labs VMs or devices to the KGP Server. Note that SSL traffic is \u201cbumped\u201d by default. This can be disabled."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sauce-labs-rest-api",children:"Sauce Labs REST API"}),"\n",(0,r.jsxs)(n.p,{children:["The Sauce Labs REST API allows the Sauce Connect Proxy Client (or any authenticated client) to start and stop tunnels and/or get information about existing tunnels. For more information, refer to the ",(0,r.jsx)(n.a,{href:"/dev/api/connect",children:"Sauce Connect Proxy API documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"tunnels-web-ui",children:"Tunnels Web UI"}),"\n",(0,r.jsxs)(n.p,{children:["If you're executing tests through Sauce Connect Proxy, you'll be able to see all information about the tunnels you're running through the web UI (log in to Sauce Labs and go the ",(0,r.jsx)(n.strong,{children:"Tunnels"})," page)."]}),"\n",(0,r.jsx)(n.h2,{id:"start-sequence-diagram",children:"Start Sequence Diagram"}),"\n",(0,r.jsx)("img",{src:(0,c.A)("img/sauce-connect/start-sequence.webp"),alt:"Sauce Connect Proxy start sequence",width:"800"}),"\n",(0,r.jsx)(n.h2,{id:"shutdown-sequence-diagram",children:"Shutdown Sequence Diagram"}),"\n",(0,r.jsx)("img",{src:(0,c.A)("img/sauce-connect/shutdown-sequence.webp"),alt:"Sauce Connect Proxy shutdown sequence",width:"800"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var c=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),c=t(23104),s=t(56347),o=t(205),i=t(57485),u=t(31682),l=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(c),(0,r.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(a.location.search);n.set(c,e),a.replace({...a.location,search:n.toString()})}),[c,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,c=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:c}))),[u,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,c]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&c.set(e)}),[t,c])]}({groupId:a}),v=(()=>{const e=u??b;return p({value:e,tabValues:c})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,c]),tabValues:c}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.a_)(),l=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:c}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:l,...c,className:(0,a.A)("tabs__item",v.tabItem,c?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},c=r.createContext(a);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);