"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3038],{78033:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(74848),i=s(28453),r=s(86025);const o={id:"motion",title:"Measuring On-Page Motion Effects",sidebar_label:"Page Motion",description:"Measure aesthetic smoothness as a page is in motion due to scrolling or tabbing between fields."},a=void 0,c={id:"performance/motion",title:"Measuring On-Page Motion Effects",description:"Measure aesthetic smoothness as a page is in motion due to scrolling or tabbing between fields.",source:"@site/docs/performance/motion.md",sourceDirName:"performance",slug:"/performance/motion",permalink:"/sauce-docs/pr-preview/pr-2908/performance/motion",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/performance/motion.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"motion",title:"Measuring On-Page Motion Effects",sidebar_label:"Page Motion",description:"Measure aesthetic smoothness as a page is in motion due to scrolling or tabbing between fields."},sidebar:"docs",previous:{title:"Page Transitions",permalink:"/sauce-docs/pr-preview/pr-2908/performance/transitions"},next:{title:"Results Analysis",permalink:"/sauce-docs/pr-preview/pr-2908/performance/analyze"}},l={},d=[{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:3},{value:"What is Jankiness?",id:"what-is-jankiness",level:2},{value:"Implementing the Jankiness Custom Command",id:"implementing-the-jankiness-custom-command",level:2},{value:"Command",id:"command",level:3},{value:"Assertion",id:"assertion",level:3},{value:"Results",id:"results",level:3},{value:"Reporting Jankiness",id:"reporting-jankiness",level:2},{value:"Jankiness Metrics",id:"jankiness-metrics",level:2},{value:"Frame Rate",id:"frame-rate",level:3},{value:"Browser Workload",id:"browser-workload",level:3},{value:"Forced Style Reflows",id:"forced-style-reflows",level:3},{value:"Memory Consumption",id:"memory-consumption",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In addition to testing the efficiency of your app rendering, Sauce Labs also provides a means for testing how a single page performs in motion, such as while scrolling or tabbing."}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-learn",children:"What You'll Learn"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What is jankiness"}),"\n",(0,t.jsx)(n.li,{children:"How to measure jankiness with Sauce Performance"}),"\n",(0,t.jsx)(n.li,{children:"How to review jankiness results"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Google Chrome (no older than 3 versions from latest)"}),"\n",(0,t.jsxs)(n.li,{children:["Test configuration must have performance enabled. See ",(0,t.jsx)(n.a,{href:"/performance/transitions#set-performance-capabilities",children:"Set Performance Capabilities"})," for instructions."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-jankiness",children:"What is Jankiness?"}),"\n",(0,t.jsx)(n.p,{children:"Web apps sometimes appear to lack smoothness when the app isn't keeping up with the refresh, a condition sometimes referred to as jankiness."}),"\n",(0,t.jsx)(n.p,{children:"According to jankfree.org:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Jank is any stuttering, juddering or just plain halting that users see when a site or app isn't keeping up with the refresh rate. Jank is the result of frames taking too long for a browser to make, and it negatively impacts your users and how they experience your site or app."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["View an ",(0,t.jsx)(n.a,{href:"https://googlechrome.github.io/devtools-samples/jank/",children:"example of jankiness"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"implementing-the-jankiness-custom-command",children:"Implementing the Jankiness Custom Command"}),"\n",(0,t.jsx)(n.p,{children:"Since Jankiness occurs during interaction with a page (such as scrolling) rather than just at page load, Sauce Labs created a framework-agnostic custom command that executes a set of automation actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It jumps to the top."}),"\n",(0,t.jsx)(n.li,{children:"It scrolls slowly from the top to the bottom for ~5 seconds."}),"\n",(0,t.jsx)(n.li,{children:"It captures the browser activity for the time it was scrolling through the app."}),"\n",(0,t.jsx)(n.li,{children:"Based on this browser activity it generates the metrics you can use to assert the performance."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"command",children:"Command"}),"\n",(0,t.jsx)(n.p,{children:"The jankiness custom command is a WebDriver extension that can be used with any framework (i.e., Selenium or WebdriverIO). Alternatively, you can call is using the JS Executor."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Jankiness Script Example (WebdriverIO)"',children:"const jankiness = browser.execute('sauce:jankinessCheck')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"assertion",children:"Assertion"}),"\n",(0,t.jsx)(n.p,{children:"Use the command assertion in your script to generate an overall jankiness score based on the measurement."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="WebdriverIO Jankiness Test Example"',children:"const assert = require('assert')\n\ndescribe('test the jankiness', () => {\n    it('tests for the smoothest experience', () => {\n        browser.url('https://googlechrome.github.io/devtools-samples/jank/')\n\n        const addBtn = $('.add')\n        for (let i = 0; i < 10; i += 1) {\n            addBtn.click()\n        }\n\n        const jankiness = browser.execute('sauce:jankinessCheck')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,t.jsxs)(n.p,{children:["The command plus assertion returns a JSON object detailing a series of metric scores. Refer to ",(0,t.jsx)(n.a,{href:"#jankiness-metrics",children:"Jankiness Metrics"})," for a description of the captured diagnostics."]}),"\n",(0,t.jsx)(n.h2,{id:"reporting-jankiness",children:"Reporting Jankiness"}),"\n",(0,t.jsxs)(n.p,{children:["When your test completes, it generates a set of metrics and that you can access through the ",(0,t.jsx)(n.strong,{children:"Performance"})," tab of the ",(0,t.jsx)(n.strong,{children:"Test Details"})," page. If you detect a regression in your website's performance, you can download a Full Trace report, or you can use the Chrome DevTool, which records Javascript method signatures in a hierarchical view for each thread in each process, to get a better idea of how the Chrome browser is interacting with your website."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/performance/perf-jank.png"),alt:"Jankiness Score",width:"750"}),"\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"View Full Report"})," button to see additional details, including area charts showing the Frames Per Second (FPS) CPU and Heap memory used during the jankiness test."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/performance/perf-jank-full.png"),alt:"Jankiness Details",width:"750"}),"\n",(0,t.jsx)(n.h2,{id:"jankiness-metrics",children:"Jankiness Metrics"}),"\n",(0,t.jsx)(n.p,{children:"The metrics that define whether a user's interaction with a page produces smooth movement are different from those that measure the speed at which objects on a page load. The objective of this page is to help you understand the metrics that make up the jankiness score."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Frame Rate"}),"\n",(0,t.jsx)(n.li,{children:"Browser Workload"}),"\n",(0,t.jsx)(n.li,{children:"Forced Style Reflows"}),"\n",(0,t.jsx)(n.li,{children:"Memory Consumption"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example showing the output of jankiness results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Jankiness Metric Example"',children:'{\n    "metrics":{\n        "averageFPS":30.37006789013138,\n        "scriptingTime":713,\n        "renderingTime":45,\n        "otherTime":1598,\n        "idleTime":2122,\n        "forcedReflowWarningCounts":440,\n        "scrollTime":5210,\n        "paintingTime":732,\n        "memoryUsageDiff":-2964452\n    },\n    "diagnostics":{\n        "layoutUpdateScore":0.9869911007302723,\n        "fpsScore":0.5061677981688564,\n        "idleDurationScore":0.4072936660268714,\n        "memoryUsageScore":1\n    }\n},\n"score":0.6428077742596429,\n"loaderId":"b0099410-e521-11e9-b752-8375edd9807f",\n"type":"scroll"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Each of the individual metrics in the score is part of a larger diagnostic category that is scored according to its impact on the smoothness of the page: 1 indicates no negative impact and any score between 0 and 1 indicates performance impact. The scores in each of the 4 diagnostic categories are used to generate an overall performance score that can be used to assert against the Jankiness of the app based on standard tolerance."}),"\n",(0,t.jsx)(n.h3,{id:"frame-rate",children:"Frame Rate"}),"\n",(0,t.jsxs)(n.p,{children:["The frame rate, or frames per second (",(0,t.jsx)(n.code,{children:"fpsScore"}),") captures any sort of stuttering on the page. The minimum FPS value to achieve a smooth experience for the user is 60 FPS. As you can see in the example, the averageFPS metric of 30.4 in this test produces an FPS score of 0.5, which is essentially 50% of the standard."]}),"\n",(0,t.jsx)(n.h3,{id:"browser-workload",children:"Browser Workload"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"idleDurationScore"})," represents the extent to which the browser is using resources to redraw content as the page moves, which influences the overall performance. The score is based on the metric results for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"renderingTime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"paintingTime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"scriptingTime"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"otherTime"})," (e.g., network requests, etc.)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"idleTime"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"forced-style-reflows",children:"Forced Style Reflows"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"layoutUpdateScore"})," represents unnecessary rendering or painting work, also called ",(0,t.jsx)(n.code,{children:"layoutThrashing"}),". This is often caused by certain scripting practices that specify attributes that were already encapsulated in a defined style, which causes objects that are already rendered to be recalculated, which is a common performance bottleneck. The following articles include helpful information about designing your layout for performance optimization: ",(0,t.jsx)(n.a,{href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a",children:"Components of Layout Reflow"})," and ",(0,t.jsx)(n.a,{href:"http://www.kellegous.com/j/2013/01/26/layout-performance/",children:"Layout Web Performance"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"memory-consumption",children:"Memory Consumption"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"memoryUsageScore"})," is based on a measurement of how the used memory changes from the beginning of the test command to the end. If the garbage collector does not adequately clear variables and other data, it can impact the performance of the browser so that handling user input is delayed."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);