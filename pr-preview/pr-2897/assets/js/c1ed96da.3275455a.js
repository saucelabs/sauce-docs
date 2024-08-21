"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[56424],{76467:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var a=t(74848),r=t(28453),n=(t(86025),t(11470)),i=t(19365);const l={id:"upload-api",title:"Upload API",sidebar_label:"Upload API"},d=void 0,o={id:"testfairy/api-reference/upload-api",title:"Upload API",description:"Streamline your build process and upload APKs or IPAs directly to TestFairy.",source:"@site/docs/testfairy/api-reference/upload-api.md",sourceDirName:"testfairy/api-reference",slug:"/testfairy/api-reference/upload-api",permalink:"/sauce-docs/pr-preview/pr-2897/testfairy/api-reference/upload-api",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/api-reference/upload-api.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"upload-api",title:"Upload API",sidebar_label:"Upload API"},sidebar:"docs",previous:{title:"REST API",permalink:"/sauce-docs/pr-preview/pr-2897/testfairy/api-reference/rest-api"},next:{title:"Webhooks",permalink:"/sauce-docs/pr-preview/pr-2897/testfairy/api-reference/webhooks"}},c={},h=[{value:"Usage",id:"usage",level:3},{value:"Upload API",id:"upload-api",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Where Can I Find My API Key?",id:"where-can-i-find-my-api-key",level:3},{value:"How Can I Create a New API Key?",id:"how-can-i-create-a-new-api-key",level:3},{value:"Why Is My API Key Empty?",id:"why-is-my-api-key-empty",level:3},{value:"Can I Add Custom Metadata?",id:"can-i-add-custom-metadata",level:3}];function p(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Streamline your build process and upload APKs or IPAs directly to TestFairy."}),"\n",(0,a.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/testfairy/command-line-uploader/blob/master/testfairy-uploader.sh",children:"Command line uploader"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://plugins.jenkins.io/TestFairy",children:"Jenkins"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/testfairy/testfairy-gradle-plugin",children:"Gradle"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://docs.fastlane.tools/actions/testfairy/",children:"fastlane"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://circleci.com/docs/2.0/deploying-ios/#uploading-to-testfairy",children:"CircleCI"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://www.bitrise.io/integrations/steps/testfairy-deploy",children:"Bitrise"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/testfairy/ci-tools/vs-team",children:"Visual Studio Team Services"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"http://plugins.netbeans.org/plugin/52087/",children:"NetBeans"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/testfairy/ci-tools/bamboo",children:"Bamboo"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/testfairy/ci-tools/team-city",children:"TeamCity"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/testfairy/ci-tools/gitlab",children:"GitLab"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/testfairy/platforms/lumberyard",children:"Lumberyard"})}),"\n",(0,a.jsx)(s.h3,{id:"upload-api",children:"Upload API"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api post",children:"POST"}),(0,a.jsx)("code",{children:(0,a.jsx)(s.a,{href:"https://upload.testfairy.com/api/upload/",children:"https://upload.testfairy.com/api/upload/"})})]}),(0,a.jsx)("p",{}),(0,a.jsx)(s.h4,{id:"parameters",children:"Parameters"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"api_key"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED |"})}),(0,a.jsxs)("p",{children:["Your API application key. See ",(0,a.jsx)(s.a,{href:"https://app.testfairy.com/settings",children:"https://app.testfairy.com/settings"})," for details."]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"file"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED |"})}),(0,a.jsx)("p",{children:"Android Package Kit (APK), Android App Bundle (AAB), iOS package App Store (IPA), or ZIP (MacOS) file data."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"symbols_file"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsxs)("p",{children:["Symbols mapping file. For iOS, this is a path to the ",(0,a.jsx)("strong",{children:"zipped"})," symbols file. For Android, this is the path to the mappings.txt file"]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"groups"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsx)("p",{children:"Comma-separated list of tester groups that get permission to download this app."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"notify"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsxs)("p",{children:["Send email to all users in 'groups'. It can be ",(0,a.jsx)("code",{children:"on"})," or ",(0,a.jsx)("code",{children:"off"}),". Default is ",(0,a.jsx)("code",{children:"off"}),"."]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"release_notes"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsx)("p",{children:"Release notes for this upload. This text adds to emails and landing pages."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"auto_update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsxs)("p",{children:["Allows to upgrade all users to the current version. It can be ",(0,a.jsx)("code",{children:"on"})," or ",(0,a.jsx)("code",{children:"off"}),". Default is ",(0,a.jsx)("code",{children:"off"}),"."]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"tags"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsx)("p",{children:"Set of comma-separated tags to be displayed and searched upon."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"folder_name"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsx)("p",{children:"Name of the dashboard folder that contains this app"})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"landing_page_mode"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsxs)("p",{children:["Landing page mode. It can be ",(0,a.jsx)("code",{children:"open"})," or ",(0,a.jsx)("code",{children:"closed"}),". Default is ",(0,a.jsx)("code",{children:"open"}),"."]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"upload_to_saucelabs"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsxs)("p",{children:["Upload file directly to Sauce Labs. It can be ",(0,a.jsx)("code",{children:"on"})," or ",(0,a.jsx)("code",{children:"off"}),". Default is ",(0,a.jsx)("code",{children:"off"}),"."]})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"platform"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL |"})}),(0,a.jsx)("p",{children:'In case the app is not iOS or Android, which are detected automatically, use this to mark an app for specific desktop or console platforms. Values can be "Xbox", "PlayStation", "switch", "windows", "macos". This feature is not enabled by default. Contact support for more information.'})]})]})})]}),(0,a.jsxs)(n.A,{groupId:"params",defaultValue:"required",values:[{label:"Required Params",value:"required"},{label:"Optional Params",value:"optional"}],children:[(0,a.jsx)(i.A,{value:"required",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Request with Required Params"',children:"curl https://upload.testfairy.com/api/upload -F api_key='your_api_key' -F file=@sample.apk\n"})})}),(0,a.jsx)(i.A,{value:"optional",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Request with Optional Params"',children:"curl https://upload.testfairy.com/api/upload \\\n -F api_key='your_api_key' \\\n -F file=@sample.apk \\\n -F symbols_file=@sample_mapping.txt \\\n -F groups='friends,beta' \\\n -F notify='on' \\\n -F release_notes='stabilitty fixes, improvement in ui' \\\n -F tags='production, english\n"})})})]}),(0,a.jsx)(s.h4,{id:"responses",children:"Responses"}),"In the case of an error, TestFairy returns a JSON with ",(0,a.jsx)(s.code,{children:"status"})," => ",(0,a.jsx)(s.code,{children:"fail"})," and ",(0,a.jsx)(s.code,{children:"code"})," with one of the values listed below. TestFairy supplies an additional human-readable error message to detail the cause of the specific error.",(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"1"})}),(0,a.jsx)("td",{colSpan:"2",children:"Parameter 'xxx' is missing."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"5"})}),(0,a.jsx)("td",{colSpan:"2",children:"Invalid API key."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"105"})}),(0,a.jsx)("td",{colSpan:"2",children:"Invalid file."})]})})]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",metastring:'title="Sample Response"',children:'{\n "status": "ok",\n "app_name": "Jigsaw Puzzlers",\n "app_version": "0.9.5",\n "app_url": "https://app.testfairy.com/download/6CWKJCHD60PPVWYJHGM4AADJQYA4SDR0/filename.apk",\n "landing_page_url": "https://tsfr.io/3tajti",\n}\n'})})]}),"\n",(0,a.jsx)(s.h3,{id:"where-can-i-find-my-api-key",children:"Where Can I Find My API Key?"}),"\n",(0,a.jsxs)(s.p,{children:["To get your API KEY, open your account preferences at ",(0,a.jsx)(s.a,{href:"https://app.testfairy.com/settings/",children:"https://app.testfairy.com/settings/"})," and click on ",(0,a.jsx)(s.strong,{children:"Upload API Key"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"how-can-i-create-a-new-api-key",children:"How Can I Create a New API Key?"}),"\n",(0,a.jsxs)(s.p,{children:["To create a new API KEY, click on ",(0,a.jsx)(s.strong,{children:"Regenerate API Key"})," on your account preferences page."]}),"\n",(0,a.jsx)(s.h3,{id:"why-is-my-api-key-empty",children:"Why Is My API Key Empty?"}),"\n",(0,a.jsx)(s.p,{children:"In cases TestFairy identifies that by mistake, you initialize the SDK by using your API KEY instead of using your APP TOKEN, TestFairy automatically reset the API KEY to protect your privacy. In this case, change the SDK initialization to use the APP TOKEN and create a new API KEY."}),"\n",(0,a.jsx)(s.h3,{id:"can-i-add-custom-metadata",children:"Can I Add Custom Metadata?"}),"\n",(0,a.jsx)(s.p,{children:'Yes. Any POST parameter prefixed with "metadata." in the name is considered custom data and stored along with the upload. For example, consider this command:'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl https://upload.testfairy.com/api/upload \\\n -F api_key='your_api_key' \\\n -F file=@sample.apk \\\n -F metadata.branch=master \\\n -F metadata.locale=us-en\n"})}),"\n",(0,a.jsx)(s.p,{children:"Metadata is displayed and can be searched on in App Versions page by clicking on an app from the Dashboard. You can also view them on a single version's settings page."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,s,t)=>{t.d(s,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:s,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:s})}},11470:(e,s,t)=>{t.d(s,{A:()=>I});var a=t(96540),r=t(18215),n=t(23104),i=t(56347),l=t(205),d=t(57485),o=t(31682),c=t(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:t}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:t,attributes:a,default:r}}=e;return{value:s,label:t,attributes:a,default:r}}))}(t);return function(e){const s=(0,o.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function u(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:t}=e;const r=(0,i.W6)(),n=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,d.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(r.location.search);s.set(n,e),r.replace({...r.location,search:s.toString()})}),[n,r])]}function j(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,n=p(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:n}))),[o,h]=x({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,n]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),f=(()=>{const e=o??j;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:s,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const s=e.currentTarget,t=d.indexOf(s),r=l[t].value;r!==a&&(o(s),i(r))},h=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;s=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;s=d[t]??d[d.length-1];break}}s?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:l.map((e=>{let{value:s,label:t,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>d.push(e),onKeyDown:h,onClick:c,...n,className:(0,r.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":a===s}),children:t??s},s)}))})}function g(e){let{lazy:s,children:t,selectedValue:r}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:n.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function v(e){const s=j(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...e,...s}),(0,y.jsx)(g,{...e,...s})]})}function I(e){const s=(0,m.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var a=t(96540);const r={},n=a.createContext(r);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);