"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42508],{49388:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(74848),o=t(28453),r=t(86025);const a={id:"espresso-capture",title:"Espresso Screenshot Capture",sidebar_label:"Espresso Screenshot Capture"},c=void 0,i={id:"mobile-apps/automated-testing/espresso-xcuitest/espresso-capture",title:"Espresso Screenshot Capture",description:"Real Devices Only",source:"@site/docs/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture.md",sourceDirName:"mobile-apps/automated-testing/espresso-xcuitest",slug:"/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"espresso-capture",title:"Espresso Screenshot Capture",sidebar_label:"Espresso Screenshot Capture"},sidebar:"docs",previous:{title:"XCUITest Configuration",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing/espresso-xcuitest/xcuitest"},next:{title:"Using Flutter",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing/flutter"}},l={},p=[{value:"Capturing Screenshots",id:"capturing-screenshots",level:2},{value:"To capture screenshots:",id:"to-capture-screenshots",level:3},{value:"Limitations",id:"limitations",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,n.jsx)(s.p,{children:"The Espresso Screenshot Capture functionality allows you to take screenshots of errors to support the visual verification of your debugging process."}),"\n",(0,n.jsx)(s.h2,{id:"capturing-screenshots",children:"Capturing Screenshots"}),"\n",(0,n.jsx)(s.p,{children:"To take screenshots during an Espresso test run, follow the steps below. Make sure to handle exceptions in your test code to ensure a proper test run."}),"\n",(0,n.jsx)(s.h3,{id:"to-capture-screenshots",children:"To capture screenshots:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Add the utility class to your project. See our Java example below:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'reference title="SauceLabsCustomScreenshot Class"',children:"  https://github.com/saucelabs/my-demo-app-android/blob/1.0.13-docs/app/src/androidTest/java/com/saucelabs/mydemoapp/android/screenshot/SauceLabsCustomScreenshot.java\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Add the following code to your Espresso test scripts."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'SauceLabsCustomScreenshot.capture("my-screenshot");\n'})}),"\n",(0,n.jsx)(s.p,{children:"See our Java example below:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'reference title="Sample Espresso test script"',children:"  https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/view/activities/LoginTest.java#L131-L165\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Run your test on ",(0,n.jsx)(s.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/",children:"Sauce Labs Real Devices"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["After the test has run successfully, on the ",(0,n.jsx)(s.strong,{children:"Test Cases"})," page, click the ",(0,n.jsx)(s.strong,{children:"Download Screenshots"})," tab to download a .zip file with all the screenshots for each test case as shown below:"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/rdc-espresso-capture.png"),alt:"Mobile app settings navigation",width:"800"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You can also use the API to fetch captured screenshots. To fetch the screenshots use the following API request:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:" curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/screenshots.zip\n"})}),"\n",(0,n.jsx)(s.p,{children:"The endpoint will return a .zip file of all screenshots captured during the session."}),"\n",(0,n.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"The screenshots cannot exceed more than 200 MB in size."})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(96540);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);