"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33209],{6164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(74848),r=n(28453),o=n(86025);n(11470),n(19365);const i={id:"apple-uploading",title:"Uploading to Apple App Store",sidebar_label:"Uploading to Apple App Store"},s=void 0,l={id:"testfairy/integrations/apple-uploading",title:"Uploading to Apple App Store",description:"To enable the feature, reach out to support.",source:"@site/docs/testfairy/integrations/apple-uploading.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/apple-uploading",permalink:"/testfairy/integrations/apple-uploading",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/apple-uploading.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688731533e3,frontMatter:{id:"apple-uploading",title:"Uploading to Apple App Store",sidebar_label:"Uploading to Apple App Store"},sidebar:"docs",previous:{title:"Private Cloud Storage",permalink:"/testfairy/integrations/google-cloud"},next:{title:"Uploading to Google Play Store",permalink:"/testfairy/integrations/google-uploading"}},u={},p=[{value:"Configuring the Integration",id:"configuring-the-integration",level:2},{value:"Uploading",id:"uploading",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Important",type:"note",children:(0,a.jsx)(t.p,{children:"To enable the feature, reach out to support."})}),"\n",(0,a.jsx)(t.p,{children:"TestFairy allows you to upload your production app directory to the Apple App Store."}),"\n",(0,a.jsx)(t.h2,{id:"configuring-the-integration",children:"Configuring the Integration"}),"\n",(0,a.jsxs)(t.p,{children:["On the ",(0,a.jsx)(t.strong,{children:"Account Preferences"}),", next to ",(0,a.jsx)(t.strong,{children:"Apple App Store"}),", click ",(0,a.jsx)(t.strong,{children:"Add Integration"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/int-apple-nav.png"),alt:"Add Apple App Store integration"}),"\n",(0,a.jsxs)(t.p,{children:["You have to create credentials from Apple iTunesConnect to upload apps. You can get the credentials by going to the ",(0,a.jsx)(t.a,{href:"http://appstoreconnect.apple.com/access/api",children:"User and Access"}),", selecting the ",(0,a.jsx)(t.strong,{children:"Keys"})," tab, and then choosing ",(0,a.jsx)(t.strong,{children:"App Store Connect API"}),". Click ",(0,a.jsx)(t.strong,{children:"+"})," to add a new set of keys. Be sure to download the .p8 file used to sign API requests, and take note of the ",(0,a.jsx)(t.code,{children:"Issuer ID"})," and the ",(0,a.jsx)(t.code,{children:"Key ID"}),". You have to give ",(0,a.jsx)(t.strong,{children:"Admin access"})," to these keys to upload an app from TestFairy to the Apple App Store."]}),"\n",(0,a.jsx)(t.p,{children:"Once you have the Issuer ID, Key ID, and the private key (.p8), go back to the settings page, fill in the form with the necessary keys, and upload the private key."}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/int-apple-upload.png"),alt:"Apple App Store Integration"}),"\n",(0,a.jsxs)(t.p,{children:["Once uploaded, you see the associated ",(0,a.jsx)(t.code,{children:"Issuer ID"})," and ",(0,a.jsx)(t.code,{children:"Key ID"})," on the integration page. Verify the account matches the one in App Store Connect."]}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/06.png"),alt:"confirm account"}),"\n",(0,a.jsx)(t.h2,{id:"uploading",children:"Uploading"}),"\n",(0,a.jsxs)(t.p,{children:["From any build page, click ",(0,a.jsx)(t.strong,{children:"Upload"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/08.png"),alt:"upload"}),"\n",(0,a.jsx)(t.p,{children:"Apple requires a metadata file to upload a build to the App Store. If the file is not uploaded, you prompt the following screen:"}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/09.png"),alt:"upload metadata file"}),"\n",(0,a.jsx)(t.p,{children:"Your build system can generate the metadata with the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"xcrun swinfo -f /path/to/app.ipa -o /path/AppStoreInfo.plist -plistFormat binary\n"})}),"\n",(0,a.jsx)(t.p,{children:"After uploading the metadata, you see an upload dialog summarizing what will be uploaded to Apple Store."}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/10.png"),alt:"upload app"}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"TestFairy will not publish your app publically; it only uploads the build to the store. The app owner in Apple iTunesConnect must publish the app itself publically."})}),"\n",(0,a.jsx)(t.p,{children:"After uploading, the dialog will display the uploaded state of the app."}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/12.png"),alt:"state of the app"}),"\n",(0,a.jsx)(t.p,{children:'If you go into Apple iTunesConnect, your app is listed in the "TestFlight" section under "iOS Builds".'}),"\n",(0,a.jsx)("img",{src:(0,o.A)("/img/testfairy/integrations/13.png"),alt:"app in TestFlight"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),r=n(18215),o=n(23104),i=n(56347),s=n(205),l=n(57485),u=n(31682),p=n(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,c]=g({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),p=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(u(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:p,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function A(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,y.jsx)(A,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);