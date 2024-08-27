"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83874],{37493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453),i=t(86025);t(11470),t(19365);const o={id:"dsyms",title:"Uploading dSyms",sidebar_label:"Uploading dSymps"},a=void 0,l={id:"testfairy/sdk/ios/dsyms",title:"Uploading dSyms",description:"TestFairy can show you crash reports to help you identify the place in the code that is causing a problem. TestFairy crash reports are easier to understand when they show actual debug symbols instead of addresses.",source:"@site/docs/testfairy/sdk/ios/dsyms.md",sourceDirName:"testfairy/sdk/ios",slug:"/testfairy/sdk/ios/dsyms",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/ios/dsyms",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/ios/dsyms.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"dsyms",title:"Uploading dSyms",sidebar_label:"Uploading dSymps"},sidebar:"docs",previous:{title:"Installing Custom Apps",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/ios/custom-ent-apps"},next:{title:"Hiding Webview Elements",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/ios/hiding-webview"}},d={},c=[{value:"Generating Symbols in Xcode",id:"generating-symbols-in-xcode",level:2},{value:"Uploading multiple dSYMs",id:"uploading-multiple-dsyms",level:2},{value:"Fatal: Can&#39;t find .dSYM folder!",id:"fatal-cant-find-dsym-folder",level:2},{value:"Handling missing DSYMs",id:"handling-missing-dsyms",level:2},{value:"Locating dSYMs on your hard-drive",id:"locating-dsyms-on-your-hard-drive",level:2},{value:"Locating dSYMs for Bitcode builds.",id:"locating-dsyms-for-bitcode-builds",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"TestFairy can show you crash reports to help you identify the place in the code that is causing a problem. TestFairy crash reports are easier to understand when they show actual debug symbols instead of addresses."}),"\n",(0,s.jsx)(n.p,{children:"TestFairy requires your app's debug symbols (dSYMs) to clearly show you the names of the methods in your code. DSYM files are created by Xcode when you build your app. There are a couple of ways to upload them to TestFairy."}),"\n",(0,s.jsx)(n.h2,{id:"generating-symbols-in-xcode",children:"Generating Symbols in Xcode"}),"\n",(0,s.jsx)(n.p,{children:"First, make sure your Xcode project is configured to generate the debug symbols:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click on your project and select Build-Settings."}),"\n",(0,s.jsxs)(n.li,{children:["In the search box, type ",(0,s.jsx)(n.em,{children:"Debug Information Format"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Debug Information Format"})," and select ",(0,s.jsx)(n.strong,{children:"DWARF with dSYM File"}),":"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/mobile-apps/generate-symbol.png"),alt:"Gereating Symbols",width:"600"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To upload symbols to TestFairy, you'll need to have your ",(0,s.jsx)("strong",{children:"UPLOAD_API_KEY"})," ready, which can be found from your ",(0,s.jsx)(n.a,{href:"https://app.testfairy.com/settings/api-key/",children:"user preferences page"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"uploading-multiple-dsyms",children:"Uploading multiple dSYMs"}),"\n",(0,s.jsx)(n.p,{children:"You can upload multiple dSYMs per build. Some developers have frameworks developed in-house, and these frameworks make it to the final .IPA file. In order to upload dSYM in your framework project, just repeat the above steps using pointing to your framework's settings."}),"\n",(0,s.jsx)(n.h2,{id:"fatal-cant-find-dsym-folder",children:"Fatal: Can't find .dSYM folder!"}),"\n",(0,s.jsxs)(n.p,{children:["If while compiling you get the error ",(0,s.jsx)(n.code,{children:"Fatal: Can't find .dSYM folder!"}),", your project is not configured to ",(0,s.jsx)(n.a,{href:"#generate-symbols",children:"generate debug symbols"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"handling-missing-dsyms",children:"Handling missing DSYMs"}),"\n",(0,s.jsx)(n.p,{children:"If you see a message in TestFairy about missing DSYMs or if you've published your app to the AppStore with Bitcode enabled, follow these instructions to locate and upload DSYMs."}),"\n",(0,s.jsx)(n.h2,{id:"locating-dsyms-on-your-hard-drive",children:"Locating dSYMs on your hard-drive"}),"\n",(0,s.jsx)(n.p,{children:"If your build is missing dSYMs, you can find them and upload them manually to TestFairy."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Login to TestFairy and go to the App overview page by clicking the name of your app."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click on the name of your app build to reach the build overview page."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on  ",(0,s.jsx)(n.strong,{children:"Settings"})," from the Build menu, then select the ",(0,s.jsx)(n.strong,{children:"Symbolication"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This section lists several required UUIDs (representing binary app builds for different device architecture or binary builds for frameworks you're using). To see crash reports with your classes and method names, you'll need to upload dSYMs for each UUID that is specified as required."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open a command line terminal and run the following command to locate the DSYMs folder name for one of the listed required UUIDs (replace ",(0,s.jsx)(n.code,{children:"<UUID>"})," with the actual UUID string): ",(0,s.jsx)(n.code,{children:'mdfind "com_apple_xcode_dsym_uuids == <UUID>" | grep dSYM'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a zip file with the content of the DSYM directory (you can call the zip file any name you like) ",(0,s.jsx)(n.code,{children:"zip -r /tmp/symbols.zip <YOUR_DSYM_LOCATION>/*"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Proceed to upload the zip as described ",(0,s.jsx)(n.a,{href:"#upload-symbols",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you can't locate your dSYMS using ",(0,s.jsx)(n.code,{children:"mfind"}),", follow these instructions:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In Xcode, open the organizer window."}),"\n",(0,s.jsx)(n.li,{children:'Control-Click the relevant build, and select "Show in Finder".'}),"\n",(0,s.jsx)(n.li,{children:'In Finder, Control-Click the archive and select "Show Package Contents".'}),"\n",(0,s.jsx)(n.li,{children:"The archive will contain a folder called dSYM."}),"\n",(0,s.jsxs)(n.li,{children:["Create a zip with the contents of the folder and proceed to upload the zip to TestFairy as explained ",(0,s.jsx)(n.a,{href:"#upload-symbols",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"locating-dsyms-for-bitcode-builds",children:"Locating dSYMs for Bitcode builds."}),"\n",(0,s.jsx)(n.p,{children:"If you enabled Bitcode for your build and released it to the store or submitted to TestFlight, take note that Apple will generate new dSYMs for your app and you'll need to download the new dSYMs from Xcode, and then upload them to TestFairy."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In Xcode, open the organizer window."}),"\n",(0,s.jsx)(n.li,{children:"Click on the relevant build."}),"\n",(0,s.jsx)(n.li,{children:'From the right side menu, click "download dSYMs".'}),"\n",(0,s.jsxs)(n.li,{children:["Manually upload the dSYMs to TestFairy, ",(0,s.jsx)(n.a,{href:"#upload-symbols",children:"as described here"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),r=t(18215),i=t(23104),o=t(56347),a=t(205),l=t(57485),d=t(31682),c=t(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:t,groupId:r}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=d??f;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,i]),tabValues:i}}var y=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==s&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,y.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);