"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42078],{56424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),o=(n(11470),n(19365),n(86025));const s={id:"amazon-sns",title:"Amazon SNS Integration with Backtrace",sidebar_label:"Amazon SNS",description:"Integrate Backtrace with Amazon SNS."},i=void 0,l={id:"error-reporting/workflow-integrations/messaging/amazon-sns",title:"Amazon SNS Integration with Backtrace",description:"Integrate Backtrace with Amazon SNS.",source:"@site/docs/error-reporting/workflow-integrations/messaging/amazon-sns.md",sourceDirName:"error-reporting/workflow-integrations/messaging",slug:"/error-reporting/workflow-integrations/messaging/amazon-sns",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/workflow-integrations/messaging/amazon-sns",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/messaging/amazon-sns.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690913171e3,frontMatter:{id:"amazon-sns",title:"Amazon SNS Integration with Backtrace",sidebar_label:"Amazon SNS",description:"Integrate Backtrace with Amazon SNS."},sidebar:"backtrace",previous:{title:"Gitter",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/workflow-integrations/messaging/gitter"},next:{title:"Stride",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/workflow-integrations/messaging/stride"}},c={},u=[{value:"Create a Topic",id:"create-a-topic",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide will go through the steps necessary to integrate Backtrace with Amazon SNS."}),"\n",(0,r.jsx)(t.p,{children:"There are two main steps for setting up Amazon SNS:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a topic"}),"\n",(0,r.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-topic",children:"Create a Topic"}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't already done so, create an Amazon SNS topic that will receive Backtrace notifications. For information on how to do this, see ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html",children:"Amazon SNS - Create a Topic"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Also remember to ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html",children:"Create Subscriptions"})," to this topic."]}),"\n",(0,r.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,r.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,r.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Then click ",(0,r.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.strong,{children:"Amazon SNS"})," and fill in the required settings:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Integration name"}),"\n",(0,r.jsx)(t.li,{children:"Topic name"}),"\n",(0,r.jsx)(t.li,{children:"Access key (make sure this user has permission to publish to the provided SNS topic)"}),"\n",(0,r.jsx)(t.li,{children:"Secret access key"}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/sns-settings.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(18215),o=n(23104),s=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=g({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,w.jsx)(v,{...e,...t}),(0,w.jsx)(x,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,w.jsx)(S,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);