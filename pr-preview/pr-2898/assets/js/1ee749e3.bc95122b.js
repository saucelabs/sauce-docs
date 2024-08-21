"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[48892],{596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453),s=r(86025);r(11470),r(19365);const l={id:"trello",title:"Connecting TestFairy to Trello",sidebar_label:"Trello"},o=void 0,i={id:"testfairy/sdk/bug-tracking/trello",title:"Connecting TestFairy to Trello",description:"Connecting TestFairy with Trello is pretty straightforward process, follow the steps below:",source:"@site/docs/testfairy/sdk/bug-tracking/trello.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/trello",permalink:"/testfairy/sdk/bug-tracking/trello",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/trello.md",tags:[],version:"current",lastUpdatedBy:"Gil Megidish",lastUpdatedAt:1718189769e3,frontMatter:{id:"trello",title:"Connecting TestFairy to Trello",sidebar_label:"Trello"},sidebar:"docs",previous:{title:"TestFairy Connect",permalink:"/testfairy/sdk/bug-tracking/tf-connect"},next:{title:"Data Encryption",permalink:"/testfairy/sdk/security/data-encryption"}},u={},c=[];function d(e){const t={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Connecting TestFairy with Trello is pretty straightforward process, follow the steps below:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open your TestFairy account Preferences."}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/testing-an-app/bug-tracking/jira-cloud-1.png"),alt:"TestFairy Preferences"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Integrations"}),", scroll down to choose ",(0,n.jsx)(t.strong,{children:"Trello"}),", and press the ",(0,n.jsx)(t.strong,{children:"Add Integration"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/testing-an-app/bug-tracking/trello1.png"),alt:"Trello integration"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the Trello ",(0,n.jsx)(t.code,{children:"API Key"})," and ",(0,n.jsx)(t.code,{children:"Token"})," and then press ",(0,n.jsx)(t.strong,{children:"Update Trello Settings"})]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/testing-an-app/bug-tracking/trello2.png"),alt:"Trello Api Key and Token"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),a=r(18215),s=r(23104),l=r(56347),o=r(205),i=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),m=(()=>{const e=u??g;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(k,{...e,...t})]})}function T(e){const t=(0,b.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);