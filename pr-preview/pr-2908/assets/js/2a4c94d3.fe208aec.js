"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[64907],{46158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(74848),n=a(28453),s=a(86025),i=a(11470),o=a(19365);const l={id:"user-feedback",title:"Submitting User Feedback",sidebar_label:"Submitting User Feedback"},c=void 0,d={id:"testfairy/sdk/user-feedback",title:"Submitting User Feedback",description:"Getting feedback from users and testers is crucial in the app development process. It provides valuable insights and helps improve the overall user experience. TestFairy offers an effortless way to collect feedback through its In-App Feedback feature. By integrating the TestFairy SDK into your app, you can enable users to report bugs, suggest improvements, and share their thoughts directly from within the app.",source:"@site/docs/testfairy/sdk/user-feedback.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/user-feedback",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/user-feedback",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/user-feedback.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"user-feedback",title:"Submitting User Feedback",sidebar_label:"Submitting User Feedback"},sidebar:"docs",previous:{title:"Private Cloud Integration",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/private-cloud-int"},next:{title:"TestFairy in Production",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/sdk/tf-production"}},u={},p=[{value:"Using In-app Feedback",id:"using-in-app-feedback",level:2},{value:"Feedback Contents",id:"feedback-contents",level:2},{value:"Customizing In-app Feedback",id:"customizing-in-app-feedback",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Getting feedback from users and testers is crucial in the app development process. It provides valuable insights and helps improve the overall user experience. TestFairy offers an effortless way to collect feedback through its In-App Feedback feature. By integrating the TestFairy SDK into your app, you can enable users to report bugs, suggest improvements, and share their thoughts directly from within the app."}),"\n",(0,r.jsx)(t.h2,{id:"using-in-app-feedback",children:"Using In-app Feedback"}),"\n",(0,r.jsxs)(t.p,{children:["TestFairy provides an effortless way to collect this feedback. If you ",(0,r.jsx)(t.a,{href:"https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html",children:"added the TestFairy SDK"})," to your app, then all you need to do is enable the ",(0,r.jsx)(t.strong,{children:"In-App Bug Reporting"})," feature in your build settings in the TestFairy dashboard, and you can start collection feedbacks from your users with ",(0,r.jsx)(t.code,{children:'"shake to report"'}),":"]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("/img/test-fairy/enable-bug-2.png"),alt:"Enable Shake to Feedback"}),"\n",(0,r.jsx)(t.p,{children:"Users or testers can initiate the feedback collection process by shaking their devices while using the app. When they shake the device, the feedback form will be triggered, allowing them to report bugs or share their suggestions."}),"\n",(0,r.jsx)(t.p,{children:"This feedback will be added to the existing app session they are currently running."}),"\n",(0,r.jsx)(t.p,{children:"All feedback includes a screenshot, device information, submitter email, and text comments added. The feedback is added to the event timeline so you can find it without difficulty."}),"\n",(0,r.jsx)(t.h2,{id:"feedback-contents",children:"Feedback Contents"}),"\n",(0,r.jsx)(t.p,{children:"When users provide feedback using the In-App Bug Reporting feature, the following information will be included:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Screenshot"})," - A screenshot of the app at the moment the feedback was triggered."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Device Information"})," - Details about the device, such as model, OS version, and other relevant technical information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Submitter Email"})," - If available, the email address of the user or tester providing the feedback."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Text Comments"})," - Users can include specific comments to describe the issue or suggestion they are reporting."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Event Timeline"})," - The feedback will be added to the app's event timeline, making it easy for developers to track and analyze the feedback."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"customizing-in-app-feedback",children:"Customizing In-app Feedback"}),"\n",(0,r.jsx)(t.p,{children:"TestFairy allows you to customize the way In-App Feedback is collected. If you prefer not to use the shake gesture for feedback collection, you can programmatically invoke the feedback form using a button click or any other gesture within your app. This way, users can access the feedback form from a designated area within the app, like the help menu or after encountering unexpected errors."}),"\n",(0,r.jsx)(t.p,{children:"Note that if you choose to invoke the feedback form programmatically, it will be shown regardless if the in-app feedback is disabled in your build settings."}),"\n",(0,r.jsxs)(i.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"}],children:[(0,r.jsxs)(o.A,{value:"android",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"TestFairy.showFeedbackForm();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.showFeedbackForm();\n"})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["For advanced customization, see ",(0,r.jsx)(t.a,{href:"https://docs.testfairy.com/reference/android/com/testfairy/FeedbackOptions.Builder.html",children:"Class FeedbackOptions.Builder"}),"."]})})]}),(0,r.jsxs)(o.A,{value:"ios",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"[TestFairy pushFeedbackController];\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n// Can be invoked on a button press\n// or after your app passes a given page\n[TestFairy pushFeedbackController];\n'})}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"On iOS, if the In-App Bug Reporting feature is enabled, the feedback form will also be shown when the tester takes a screenshot."}),(0,r.jsxs)(t.p,{children:["You can also choose to hide the user email field in the feedback form using the ",(0,r.jsx)(t.a,{href:"https://docs.testfairy.com/reference/ios/Classes/TestFairy.html#//api/name/setFeedbackEmailVisible:",children:"setFeedbackEmailVisible"})," class."]})]})]}),(0,r.jsxs)(o.A,{value:"cordova",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"react",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nconst TestFairy = require('react-native-testfairy');\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"native",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"TestFairySDK.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport { TestFairySDK } from 'nativescript-testfairy';\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairySDK.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"xamarin",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'TestFairy.SetUserId ("<userId>");\n'})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nusing TestFairyLib;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.PushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"unity",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nusing TestFairyUnity;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"adobe",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"AirTestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport com.testfairy.AirTestFairy;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nAirTestFairy.pushFeedbackController();\n"})})]})]})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),n=a(18215),s=a(23104),i=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=b({queryString:a,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),n=o[a].value;n!==r&&(c(t),i(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(k,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,y.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var r=a(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);