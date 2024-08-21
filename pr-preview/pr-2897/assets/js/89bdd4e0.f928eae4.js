"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[86803],{11785:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),o=n(28453),t=n(86025);const a={id:"app-logs",title:"App Logs",sidebar_label:"App Logs"},l=void 0,r={id:"mobile-apps/features/mobile-app-diagnostics/app-logs",title:"App Logs",description:"App Logs is a functionality that provides you with a detailed view of logs for your mobile apps. This feature provides you with visibility into events, errors, and warnings that occur during testing, making it easier to troubleshoot and diagnose issues.",source:"@site/docs/mobile-apps/features/mobile-app-diagnostics/app-logs.md",sourceDirName:"mobile-apps/features/mobile-app-diagnostics",slug:"/mobile-apps/features/mobile-app-diagnostics/app-logs",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/features/mobile-app-diagnostics/app-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/mobile-app-diagnostics/app-logs.md",tags:[],version:"current",lastUpdatedBy:"Wim Selles",lastUpdatedAt:1701172361e3,frontMatter:{id:"app-logs",title:"App Logs",sidebar_label:"App Logs"},sidebar:"docs",previous:{title:"Virtual USB (Real Devices)",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/features/virtual-usb"},next:{title:"App Crash Logs",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/features/mobile-app-diagnostics/app-crash-logs"}},p={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Accessing App Logs for Real Devices\u200b",id:"accessing-app-logs-for-real-devices",level:2},{value:"Downloading the App Logs",id:"downloading-the-app-logs",level:2},{value:"Enabling Instrumentation",id:"enabling-instrumentation",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"App Logs is a functionality that provides you with a detailed view of logs for your mobile apps. This feature provides you with visibility into events, errors, and warnings that occur during testing, making it easier to troubleshoot and diagnose issues."}),"\n",(0,i.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A Sauce Labs account (",(0,i.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,i.jsx)(s.li,{children:"A native Android, iOS, or iPadOS mobile app"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/mobile-apps/features/mobile-app-diagnostics/app-logs/#enabling-instrumentation",children:"Instrumentation"})," enabled."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"accessing-app-logs-for-real-devices",children:"Accessing App Logs for Real Devices\u200b"}),"\n",(0,i.jsx)(s.p,{children:"To access the App Logs, follow these steps:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["On Sauce Labs, click ",(0,i.jsx)(s.strong,{children:"Live"})," > ",(0,i.jsx)(s.strong,{children:"Test Results"}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-1.png"),alt:"App Logs",width:"300"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Click on the device name for the test session that needs debugging."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-2.png"),alt:"App Logs",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Logs"})," tab and select ",(0,i.jsx)(s.strong,{children:"device.log"})," from the drop down menu."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-9.png"),alt:"App Logs",width:"800"}),"\n",(0,i.jsx)(s.p,{children:"The App Logs feature includes different log types, such as errors, warnings, infos, and verbose Logs. Each log type provides a different view of the application logs, allowing you to filter and focus on specific types of information."}),"\n",(0,i.jsxs)(s.p,{children:["You can use the ",(0,i.jsx)(s.a,{href:"https://regex101.com/",children:"regrex"})," functionality to analyze your logs."]}),"\n",(0,i.jsx)(s.h2,{id:"downloading-the-app-logs",children:"Downloading the App Logs"}),"\n",(0,i.jsx)(s.p,{children:"You can download the App Logs as a text file to save and share with Sauce Labs support for further analysis. This feature allows you to keep a record of the App Logs and use them for future reference or troubleshooting:"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-10.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsx)(s.p,{children:"You can also download the results using the API call below and send it to your development team:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Sample Request:\n\ncurl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/8ed051b303b4414f861e88eeb1732d02/deviceLogs' | json_pp\n"})}),"\n",(0,i.jsx)(s.admonition,{title:"Limitations",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The feature works only with instrumentation enabled."}),"\n",(0,i.jsx)(s.li,{children:"Emulators and Simulators are not supported."}),"\n"]})}),"\n",(0,i.jsx)(s.h2,{id:"enabling-instrumentation",children:"Enabling Instrumentation"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["On Sauce Labs, in the left navigation, click ",(0,i.jsx)(s.strong,{children:"App Mangement"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs5.png"),alt:"App Logs",width:"300"}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Upload your mobile app to Sauce Labs."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-8.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["After you\u2019ve uploaded your app, hover your mouse over your app, then select ",(0,i.jsx)(s.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-6.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Under ",(0,i.jsx)(s.strong,{children:"Real Device Settings"})," toggle ",(0,i.jsx)(s.strong,{children:"Instrumentation"})," to ",(0,i.jsx)(s.strong,{children:"Enabled"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,t.A)("img/mobile-apps/app-logs-7.png"),alt:"App Logs",width:"700"})]})}function g(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var i=n(96540);const o={},t=i.createContext(o);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);