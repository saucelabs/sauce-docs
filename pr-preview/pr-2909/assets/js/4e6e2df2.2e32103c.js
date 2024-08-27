"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[47627],{44763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(74848),r=n(28453),i=n(86025);n(11470),n(19365);const a={id:"splunk",title:"Splunk",sidebar_label:"Splunk"},o=void 0,l={id:"testfairy/integrations/splunk",title:"Splunk",description:"TestFairy can integrate with Splunk to provide better insights into your mobile apps. This document explains how to export the app logs from TestFairy and import them into your Splunk installation.",source:"@site/docs/testfairy/integrations/splunk.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/splunk",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/integrations/splunk",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/splunk.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"splunk",title:"Splunk",sidebar_label:"Splunk"},sidebar:"docs",previous:{title:"SMTP and Gmail",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/integrations/smtp-gmail"},next:{title:"Zendesk",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/integrations/zendesk"}},u={},c=[{value:"Exporting Logs",id:"exporting-logs",level:2},{value:"Importing Logs Into Splunk",id:"importing-logs-into-splunk",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"TestFairy can integrate with Splunk to provide better insights into your mobile apps. This document explains how to export the app logs from TestFairy and import them into your Splunk installation."}),"\n",(0,s.jsx)(t.h2,{id:"exporting-logs",children:"Exporting Logs"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.a,{href:"https://github.com/testfairy/testfairy-fetch-sessions",children:"TestFairy Fetch Session Tool"})," tool to download log files for a specific project."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git\n\ntestfairy-fetch-sessions --endpoint "acme.testfairy.com" --user "john@example.com" --api-key "0123456789abcdef" --project-id=1000 --logs\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The logs are downloaded to a folder named ",(0,s.jsx)(t.code,{children:"testfairy-sessions"})," with a directory structure as follows."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-1.png"),alt:"directory structure"}),"\n",(0,s.jsxs)(t.p,{children:["The directory which contains the ",(0,s.jsx)(t.code,{children:"session.log"})," file is also the session identifier. You can use this value to set the ",(0,s.jsx)(t.code,{children:"Host"})," value later."]}),"\n",(0,s.jsx)(t.h2,{id:"importing-logs-into-splunk",children:"Importing Logs Into Splunk"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Under ",(0,s.jsx)(t.strong,{children:"Settings"}),", select ",(0,s.jsx)(t.strong,{children:"Add Data"})," in your Splunk forwarder."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-2.png"),alt:"add data"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Monitor"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-3.png"),alt:"select monitor"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Files & Directories"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-4.png"),alt:"files and directories"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Browse to the directory where the log files are downloaded. It's best to point to the top-level ",(0,s.jsx)(t.code,{children:"testfairy-sessions"})," if you have multiple projects you'd like to monitor."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-5.png"),alt:"browse directory"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After clicking ",(0,s.jsx)(t.strong,{children:"Next"}),", on the Input Settings page, set the ",(0,s.jsx)(t.strong,{children:"Host"})," using the ",(0,s.jsx)(t.strong,{children:"Segment in path"}),". Use the directory segment which contains the ",(0,s.jsx)(t.code,{children:"session.log"})," file."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-6.png"),alt:"set the host"}),"\n",(0,s.jsx)(t.p,{children:"It helps you search and create queries based on a specific session."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a query where the ",(0,s.jsx)(t.code,{children:"host=<session id>"})," to see logs related to a given session."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("/img/testfairy/integrations/splunk/splunk-7.png"),alt:"query"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var s=n(96540),r=n(18215),i=n(23104),a=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[u,d]=g({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=u??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(u(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function k(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);