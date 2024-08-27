"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[54209],{75363:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(74848),a=t(28453);t(11470),t(19365),t(86025);const o={id:"proguard-deobfuscation",title:"Working with ProGuard",sidebar_label:"ProGuard Deobfuscation",description:"Configure Backtrace to deobfuscate your crashing callstacks."},i=void 0,s={id:"error-reporting/platform-integrations/android/proguard-deobfuscation",title:"Working with ProGuard",description:"Configure Backtrace to deobfuscate your crashing callstacks.",source:"@site/docs/error-reporting/platform-integrations/android/proguard-deobfuscation.md",sourceDirName:"error-reporting/platform-integrations/android",slug:"/error-reporting/platform-integrations/android/proguard-deobfuscation",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/android/proguard-deobfuscation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/android/proguard-deobfuscation.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"proguard-deobfuscation",title:"Working with ProGuard",sidebar_label:"ProGuard Deobfuscation",description:"Configure Backtrace to deobfuscate your crashing callstacks."},sidebar:"backtrace",previous:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/android/configuration"},next:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/ios/setup"}},c={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Setup",id:"setup",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"If you use ProGuard to optimize and obfuscate your app, you can configure Backtrace to deobfuscate your crashing callstacks."}),"\n",(0,n.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Backtrace account (",(0,n.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,n.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,n.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["A Backtrace project and an ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"access token"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(r.p,{children:["If the ",(0,n.jsx)(r.code,{children:"symbolication_id"})," from the submitted crash matches a ",(0,n.jsx)(r.code,{children:"symbolication_id"})," of a submitted ProGuard mapping file, the Backtrace Client will use that mapping file to deobfuscate the symbols from the submitted crash."]}),"\n",(0,n.jsx)(r.p,{children:"To do this, you need to upload the ProGuard mapping file corresponding to the build. Because the ProGuard file format does not offer any way to identify its corresponding build, it needs to be done by the programmer. For Backtrace, a UUID needs to be generated for each build."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Add the following to the ",(0,n.jsx)(r.code,{children:"proguard_rules.pro"})," file for your app."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"-keep class com.google.gson.**.* { *; }\n-keep class backtraceio.library.**.* { *; }\n\n# Add this line for Unity projects:\n-keep class backtraceio.unity.* { *; }\n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Enable ProGuard mode in the ",(0,n.jsx)(r.code,{children:"BacktraceClient"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"backtraceClient.enableProguard();\n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Generate a UUID and set it as the value for the ",(0,n.jsx)(r.code,{children:"symbolication_id"})," attribute. You will upload your ProGuard mapping file with this same UUID later."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'final UUID proguardMappingUUID = UUID.fromString("f6c3e8d4-8626-4051-94ec-53e6daccce25");\nfinal Map<String, Object> attributes = new HashMap<String, Object>() {{\n  put("symbolication_id", proguardMappingUUID.toString());\n}};\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Generating a UUID"}),"\nYou can use the uuidgen command to generate UUID's for each version of your software, for example:",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"$ uuidgen -N '1.0.0-beta' --namespace \"f615d933-702b-5c5f-913d-18223dc80788\" --sha1 6e5552ef-cca0-578f-8259-bef23a9566d3\n$ uuidgen -N '1.0.0' --namespace \"f615d933-702b-5c5f-913d-18223dc80788\" --sha1 5a4d2886-fb5d-5d2e-80d8-4bcdf5f5c11b\n$ uuidgen -N '1.0.1' --namespace \"f615d933-702b-5c5f-913d-18223dc80788\" --sha1 39642ed9-5a75-5186-9649-71a893e00340\n"})})]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Upload your ProGuard ",(0,n.jsx)(r.code,{children:"mapping.txt"})," file with the UUID from the previous step."]}),"\n",(0,n.jsx)(r.p,{children:"To do so, you can use a tool like Postman or cURL to construct an HTTP POST request with the following parameters, and submit the mapping file as the request body."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-curl",children:'--data-binary @proguard-example/mapping.txt -X POST  -H "Expect:" "https://submit.backtrace.io/{your-subdomain}/{symbol-access-token}/proguard?symbolication_id={symbolication_id}"\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"for Windows",type:"note",children:(0,n.jsx)(r.p,{children:"Make sure your ProGuard mapping file has Unix line endings before submitting to Backtrace."})}),"\n",(0,n.jsx)(r.p,{children:"You can now start sending ProGuard obfuscated crashes."})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),a=t(18215),o=t(23104),i=t(56347),s=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=p(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,d]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=l??b;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),a=s[t].value;a!==n&&(l(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...r}),(0,x.jsx)(y,{...e,...r})]})}function k(e){const r=(0,m.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(96540);const a={},o=n.createContext(a);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);