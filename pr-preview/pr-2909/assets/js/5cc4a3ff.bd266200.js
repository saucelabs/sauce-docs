"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16466],{60040:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(74848),s=t(28453);t(11470),t(19365),t(86025);const o={id:"sync-submissions",title:"Performing Synchronous Submissions",sidebar_label:"Synchronous Submissions",description:"Perform followup operations based on the result of a submission."},a=void 0,i={id:"error-reporting/advanced/sync-submissions",title:"Performing Synchronous Submissions",description:"Perform followup operations based on the result of a submission.",source:"@site/docs/error-reporting/advanced/sync-submissions.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/sync-submissions",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/sync-submissions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/sync-submissions.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"sync-submissions",title:"Performing Synchronous Submissions",sidebar_label:"Synchronous Submissions",description:"Perform followup operations based on the result of a submission."},sidebar:"backtrace",previous:{title:"Submission Buckets",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/submission-buckets"},next:{title:"PAM-LDAP Authentication",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/advanced/pam-ldap"}},u={},l=[];function c(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"For performance reasons, error submissions are normally handled asynchronously from the HTTP client on the object store server. However, there are cases where it can be valuable to perform follow-up operations based on the result of a submission or directly receive errors found during submission processing. This article demonstrates how to use the synchronous submission facility."}),"\n",(0,n.jsxs)(r.p,{children:["To perform synchronous submissions, the submission token must have the ",(0,n.jsx)(r.code,{children:"sync:post"})," capability in addition to ",(0,n.jsx)(r.code,{children:"error:post"})," and/or ",(0,n.jsx)(r.code,{children:"symbol:post"}),". You can create a token with these capabilities under ",(0,n.jsx)(r.strong,{children:"Project settings > API Token"})," or via ",(0,n.jsx)(r.a,{href:"https://github.com/backtrace-labs/backtrace-morgue/blob/master/README.md",children:"Morgue"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Next, the request must use the token with the ",(0,n.jsx)(r.code,{children:"_mod_sync"})," query parameter. The value of this parameter is ignored."]}),"\n",(0,n.jsx)(r.p,{children:"An example request using curl looks like this:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"curl --data-binary @foo.dmp 'https://example.sp.backtrace.io:6098/api/post?token=ffffff&format=minidump&_mod_sync=true'\n"})}),"\n",(0,n.jsx)(r.p,{children:"This method can be used with any type of submission, whether multipart or not."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),s=t(18215),o=t(23104),a=t(56347),i=t(205),u=t(57485),l=t(31682),c=t(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,o=p(e),[a,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,d]=h({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=l??b;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&u(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),s=i[t].value;s!==n&&(l(r),a(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function w(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...r}),(0,g.jsx)(x,{...e,...r})]})}function k(e){const r=(0,f.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);