"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98582],{78215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(74848),a=r(28453),i=(r(11470),r(19365),r(86025));const s={id:"mantis",title:"Mantis Bug Tracker Integration with Backtrace",sidebar_label:"Mantis Bug Tracker",description:"Integrate Backtrace with Mantis Bug Tracker."},o=void 0,u={id:"error-reporting/workflow-integrations/issue-tracking/mantis",title:"Mantis Bug Tracker Integration with Backtrace",description:"Integrate Backtrace with Mantis Bug Tracker.",source:"@site/docs/error-reporting/workflow-integrations/issue-tracking/mantis.md",sourceDirName:"error-reporting/workflow-integrations/issue-tracking",slug:"/error-reporting/workflow-integrations/issue-tracking/mantis",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/workflow-integrations/issue-tracking/mantis",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/issue-tracking/mantis.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"mantis",title:"Mantis Bug Tracker Integration with Backtrace",sidebar_label:"Mantis Bug Tracker",description:"Integrate Backtrace with Mantis Bug Tracker."},sidebar:"backtrace",previous:{title:"HackNPlan",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/workflow-integrations/issue-tracking/hack-n-plan"},next:{title:"PagerDuty",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/workflow-integrations/alerting-ops/pagerduty"}},l={},c=[{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide goes through the steps necessary to integrate Backtrace with Mantis Bug Tracker. Setting up integration with the Mantis Bug Tracker ticketing system requires a valid server URL, and an Access token."}),"\n",(0,n.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,n.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,n.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Then click ",(0,n.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Mantis Bug Tracker"})," and fill in the required settings."]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/mantis.png"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["For more detailed information about these settings, see ",(0,n.jsx)(t.a,{href:"https://documenter.getpostman.com/view/29959/mantis-bug-tracker-rest-api/7Lt6zkP/",children:"The Mantis Bug Tracker API Documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(18215),i=r(23104),s=r(56347),o=r(205),u=r(57485),l=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=g(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,d]=h({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),b=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,k.jsx)(w,{...e,...t}),(0,k.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.A)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);