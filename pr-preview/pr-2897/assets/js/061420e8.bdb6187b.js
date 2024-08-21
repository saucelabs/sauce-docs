"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26955],{35830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(74848),n=r(28453);r(86025),r(11470),r(19365);const s={id:"azure",title:"saucectl with Azure DevOps",sidebar_label:"Azure DevOps"},l=void 0,i={id:"dev/cli/saucectl/usage/ci/azure",title:"saucectl with Azure DevOps",description:"These examples can apply to virtually any Azure DevOps deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.",source:"@site/docs/dev/cli/saucectl/usage/ci/azure.md",sourceDirName:"dev/cli/saucectl/usage/ci",slug:"/dev/cli/saucectl/usage/ci/azure",permalink:"/sauce-docs/pr-preview/pr-2897/dev/cli/saucectl/usage/ci/azure",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ci/azure.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1708458397e3,frontMatter:{id:"azure",title:"saucectl with Azure DevOps",sidebar_label:"Azure DevOps"},sidebar:"dev",previous:{title:"Jenkins",permalink:"/sauce-docs/pr-preview/pr-2897/dev/cli/saucectl/usage/ci/jenkins"},next:{title:"IntelliJ IDEA",permalink:"/sauce-docs/pr-preview/pr-2897/dev/cli/saucectl/usage/ide/intellij"}},u={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Add Secret Variables",id:"add-secret-variables",level:2},{value:"Add Azure Pipeline Configuration",id:"add-azure-pipeline-configuration",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"These examples can apply to virtually any Azure DevOps deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository."}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsxs)(t.li,{children:["An ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/free/",children:"Azure DevOps Account"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-secret-variables",children:"Add Secret Variables"}),"\n",(0,a.jsx)(t.p,{children:"To run tests on Sauce Labs from Azure DevOps, you need to make your Sauce Labs credentials available to your Pipelines. We'll set a secret variable in the UI."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Log in to Azure DevOps."}),"\n",(0,a.jsxs)(t.li,{children:["Go to the ",(0,a.jsx)(t.strong,{children:"Pipelines"})," page, select a pipeline, then ",(0,a.jsx)(t.strong,{children:"Edit"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Click on ",(0,a.jsx)(t.strong,{children:"Variables"}),", then ",(0,a.jsx)(t.strong,{children:"New Variable"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Enter the name ",(0,a.jsx)(t.code,{children:"sauceUsername"})," and set the value to your Sauce Labs username and click ",(0,a.jsx)(t.strong,{children:"OK"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Add another variable, this time named ",(0,a.jsx)(t.code,{children:"sauceAccessKey"}),", set it to your Sauce Labs access key, select the ",(0,a.jsx)(t.code,{children:"Keep this value secret"})," option, and click ",(0,a.jsx)(t.strong,{children:"OK"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-azure-pipeline-configuration",children:"Add Azure Pipeline Configuration"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["In the root of your project directory, create the ",(0,a.jsx)(t.code,{children:".azure-pipelines.yml"})," file.","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-cypress-example/blob/main/azure-pipelines.yml\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Commit the updated ",(0,a.jsx)(t.code,{children:".azure-pipelines.yml"})," file to your git repository."]}),"\n",(0,a.jsx)(t.li,{children:"Navigate back to the Azure DevOps Pipelines to see your build pass."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(96540),n=r(18215),s=r(23104),l=r(56347),i=r(205),u=r(57485),c=r(31682),o=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:n}),[b,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,o.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==a&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:o,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function A(e){const t=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);