"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[87953],{40253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(74848),o=n(28453),r=n(86025);n(11470),n(19365);const l={id:"google-uploading",title:"Uploading to Google Play Store",sidebar_label:"Uploading to Google Play Store"},i=void 0,s={id:"testfairy/integrations/google-uploading",title:"Uploading to Google Play Store",description:"To enable the feature, reach out to support.",source:"@site/docs/testfairy/integrations/google-uploading.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/google-uploading",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/integrations/google-uploading",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/google-uploading.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"google-uploading",title:"Uploading to Google Play Store",sidebar_label:"Uploading to Google Play Store"},sidebar:"docs",previous:{title:"Uploading to Apple App Store",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/integrations/apple-uploading"},next:{title:"Bamboo",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/ci-tools/bamboo"}},u={},c=[{value:"Configuring the Integration",id:"configuring-the-integration",level:2},{value:"Uploading",id:"uploading",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Important",type:"note",children:(0,a.jsx)(t.p,{children:"To enable the feature, reach out to support."})}),"\n",(0,a.jsx)(t.p,{children:"TestFairy allows you to upload your production app directory to the Google Play Store."}),"\n",(0,a.jsx)(t.h2,{id:"configuring-the-integration",children:"Configuring the Integration"}),"\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://app.testfairy.com/settings/integrations",children:"settings"}),", and select ",(0,a.jsx)(t.strong,{children:"Google Play Store"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/03.png"),alt:"google play store"}),"\n",(0,a.jsx)(t.p,{children:"You need to upload credentials from Google Play to upload apps. You can get the service account credentials by entering your Google Play Console and Setup > API access. There is a Service account listed in that section. You need to use the same account and generate JSON Credentials for this account from Google Cloud"}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/01.png"),alt:"API access"}),"\n",(0,a.jsx)(t.p,{children:"Once you have the JSON credentials, return to the settings page, and upload the JSON file."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/04.png"),alt:"Google Play Store integration"}),"\n",(0,a.jsx)(t.p,{children:"Once uploaded, you can see the associated Project ID and Service account on the integration page. Verify the account matches the one in Google Play Console."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/05.png"),alt:"confirm account"}),"\n",(0,a.jsx)(t.p,{children:"You have configured the integration for upload."}),"\n",(0,a.jsx)(t.h2,{id:"uploading",children:"Uploading"}),"\n",(0,a.jsxs)(t.p,{children:["From any build page, click ",(0,a.jsx)(t.strong,{children:"Upload"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/07.png"),alt:"upload button"}),"\n",(0,a.jsx)(t.p,{children:"You see an upload dialog summarizing what will be uploaded to Google Play Store."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/08.png"),alt:"Google Play Store summary"}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"TestFairy does not publish your app publically; it only uploads the build to the store in a draft state. The app owner in Google must publish the app itself publically."})}),"\n",(0,a.jsx)(t.p,{children:"After uploading, the dialog displays the uploaded state of the app."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/10.png"),alt:"uploaded state"}),"\n",(0,a.jsx)(t.p,{children:"If you go into Google Play Console, your app is listed on the Release Overview page."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/integrations/google-play/11.png"),alt:"Release Overview"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const o={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),o=n(18215),r=n(23104),l=n(56347),i=n(205),s=n(57485),u=n(31682),c=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,d]=h({queryString:n,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),y=(()=>{const e=u??f;return g({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),o=i[n].value;o!==a&&(u(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const o={},r=a.createContext(o);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);