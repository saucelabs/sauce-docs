"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[62179],{63502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(74848),a=t(28453),o=t(86025);t(11470),t(19365);const s={id:"kgp",title:"KGP Sauce Connect Proxy Tunneling Protocol",sidebar_label:"KGP Protocol"},c=void 0,i={id:"secure-connections/sauce-connect/advanced/kgp",title:"KGP Sauce Connect Proxy Tunneling Protocol",description:"This document provides information about KGP, the tunneling protocol used by Sauce Connect Proxy to assist customer network and security engineering teams to better understand the Sauce Connect Proxy networking model.",source:"@site/docs/secure-connections/sauce-connect/advanced/kgp.md",sourceDirName:"secure-connections/sauce-connect/advanced",slug:"/secure-connections/sauce-connect/advanced/kgp",permalink:"/sauce-docs/pr-preview/pr-2897/secure-connections/sauce-connect/advanced/kgp",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/advanced/kgp.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"kgp",title:"KGP Sauce Connect Proxy Tunneling Protocol",sidebar_label:"KGP Protocol"},sidebar:"docs",previous:{title:"Architecture",permalink:"/sauce-docs/pr-preview/pr-2897/secure-connections/sauce-connect/advanced/architecture"},next:{title:"Specifications",permalink:"/sauce-docs/pr-preview/pr-2897/secure-connections/sauce-connect/advanced/specifications"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"About KGP Tunneling Protocol",id:"about-kgp-tunneling-protocol",level:2},{value:"KGP Message Types",id:"kgp-message-types",level:2},{value:"KGP Security",id:"kgp-security",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document provides information about KGP, the tunneling protocol used by Sauce Connect Proxy to assist customer network and security engineering teams to better understand the Sauce Connect Proxy networking model."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"In-depth understanding of the tunneling protocol used by Sauce Connect Proxy is not required to use Sauce Connect."})}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Have a working understanding of ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/architecture",children:"Sauce Connect Proxy architecture"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"about-kgp-tunneling-protocol",children:"About KGP Tunneling Protocol"}),"\n",(0,r.jsxs)(n.p,{children:["Sauce Connect Proxy establishes an encrypted TCP connection between the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/architecture/#sauce-connect-proxy-client",children:"Sauce Connect Proxy client"})," and ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/architecture/#sauce-connect-proxy-server",children:"Sauce Connect Proxy server"}),". This connection is used as a reverse tunnel between the user environment and Sauce Labs data center."]}),"\n",(0,r.jsxs)(n.p,{children:["The protocol used to achieve the reverse tunneling is called ",(0,r.jsx)(n.em,{children:"KGP"}),". It's an application layer protocol that carries all HTTP(s) traffic as its payload. Developed and maintained by Sauce Labs, KGP is used to multiplex established connections for multiple HTTP requests/responses."]}),"\n",(0,r.jsx)(n.p,{children:"KGP is preferred over conventional protocols (such as reverse SSH tunnel) for a number of reasons:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It\u2019s lightweight"}),"\n",(0,r.jsx)(n.li,{children:"It reconnects when a connection accidentally disconnects"}),"\n",(0,r.jsx)(n.li,{children:"It ensures that all the data is sent and received, even over an unstable or intermittent connection"}),"\n",(0,r.jsx)(n.li,{children:"It provides information about the connection state"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kgp-message-types",children:"KGP Message Types"}),"\n",(0,r.jsx)(n.p,{children:"KGP messages (or packets) consist of a header and payload.\nKGP header contains infomation about the message type and payload is the original TCP payload that is received via the non-KGP port by the KGP client or server."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/sauce-connect/kgp-packet.png"),alt:"KGP message",width:"400"}),"\n",(0,r.jsx)(n.p,{children:"KGP defines the following message types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data packets carrying HTTP(s) traffic"}),"\n",(0,r.jsxs)(n.li,{children:["Control packets, which include:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connection requests"}),"\n",(0,r.jsx)(n.li,{children:"Keepalive timers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kgp-security",children:"KGP Security"}),"\n",(0,r.jsx)(n.p,{children:"All KGP packets are encrypted with the industry standard TLS 1.2 protocol using OpenSSL library."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),a=t(18215),o=t(23104),s=t(56347),c=t(205),i=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=l??b;return h({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=c[t].value;a!==r&&(l(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function P(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function j(e){const n=(0,f.A)();return(0,g.jsx)(P,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);