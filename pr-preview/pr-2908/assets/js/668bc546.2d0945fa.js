"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49187],{46567:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(74848),a=i(28453),n=i(86025);const r={id:"failure-analysis",title:"Analyzing Failure Patterns Across Your Test Suite",sidebar_label:"Failure Analysis",description:"Use the machine learning power of Sauce Failure Analytics to uncover errors and inefficiencies in your tests to improve your testing process."},o=void 0,l={id:"insights/failure-analysis",title:"Analyzing Failure Patterns Across Your Test Suite",description:"Use the machine learning power of Sauce Failure Analytics to uncover errors and inefficiencies in your tests to improve your testing process.",source:"@site/docs/insights/failure-analysis.md",sourceDirName:"insights",slug:"/insights/failure-analysis",permalink:"/sauce-docs/pr-preview/pr-2908/insights/failure-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/failure-analysis.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"failure-analysis",title:"Analyzing Failure Patterns Across Your Test Suite",sidebar_label:"Failure Analysis",description:"Use the machine learning power of Sauce Failure Analytics to uncover errors and inefficiencies in your tests to improve your testing process."},sidebar:"docs",previous:{title:"Coverage",permalink:"/sauce-docs/pr-preview/pr-2908/insights/coverage"},next:{title:"Debugging",permalink:"/sauce-docs/pr-preview/pr-2908/insights/debug"}},d={},c=[{value:"Where to access Failure Analysis",id:"where-to-access-failure-analysis",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Available Views",id:"available-views",level:2},{value:"View by Jobs",id:"view-by-jobs",level:3},{value:"View by Failure Patterns",id:"view-by-failure-patterns",level:3}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Failure Analysis is a powerful tool designed to optimize test efficiency and efficacy by identifying common failure patterns within your test suite. Leveraging proprietary machine learning algorithms, the tool reviews the test pass/fail data to uncover patterns that impact the overall test suite. Each organization has its copy of the machine learning algorithm trained only on its data. It takes three failures on tests with the same name before patterns can be established. This document provides an overview of how Failure Analysis works and explains the different views available for analysis.\nUsing Failure Analysis:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Improves developer efficiency, streamlining detection and triage of the most pervasive errors"}),"\n",(0,s.jsx)(t.li,{children:"Validates investment in test automation by showing larger patterns as a source of failure, allowing for global mitigation and faster time-to-market with better quality"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Failure Analysis supports Playwright, Selenium and Appium on Virtual and Real devices. At this time Visual testing does not work with Failure Analysis. However, for Selenium and Appium to be effective, the tests must be configured to ",(0,s.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation#setting-passfail",children:"report a pass/fail outcome"}),". Additionally, Appium is supported only for mobile web applications and not for native applications."]})}),"\n",(0,s.jsx)(t.h2,{id:"where-to-access-failure-analysis",children:"Where to access Failure Analysis"}),"\n",(0,s.jsx)(t.p,{children:"Failure Analysis can be accessed from a few different places within the Sauce Labs platform. Failure Analysis is primiarly avaliable via the left-hand navigation, under the Insights heading. Clicking the Failure Analysis heading will take you straight to your Failure Analysis based on the tests of your team or organization for the past 7 days by default. As we talk about below, Failure Analysis can also be accessed directly from Test Details within Live or Automated Test Results. Both these views and entry points can give you a sense of how individual tests are performing and their associated failure patterns."}),"\n",(0,s.jsx)(t.p,{children:"Analyzing failures across builds can also be extremely helpful to understand trends over time of your builds. This view can help you identify pervasive failures in invidvidual builds, debug those failures swiftly, and get your code to production quicker. Accessing Failure Analysis from builds is simple. Navigate to Automated tests and then the build menu. Select the build you want to analyze or debug deeper and then select Failure Patterns from the drop-down to starting debugging."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/FA-builds-entry.png"),alt:"builds entry point for Failure Analysis"}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsx)(t.p,{children:"Failure Analysis utilizes your test data to identify potential failure patterns based on aggregate test errors. The process involves the following steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Identifies failed tests"}),"\n",(0,s.jsx)(t.li,{children:"Aggregates failures on test names"}),"\n",(0,s.jsx)(t.li,{children:"Detects common failure patterns"}),"\n",(0,s.jsx)(t.li,{children:"Ranks and prioritizes patterns by most pervasive impact"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As of August 2024 Failure Analysis uses an improved command decoder to help you identify what actions have been taken during a test. Normally, test commands can be difficult to read because they contain hashes or element IDs that don't mean much to a human being, but are necessary for the test to know what is happening. Sauce Labs' improved decoding gives a near test command like structure and language convention to these failure patterns. When viewing Failure Patterns, Sauce Labs now gives you an improved naming scheme that more closely resembles what is happening during a test step as seen below. This enhanced decoder is accessible through any of the views below."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/FA-enhanced-decoder.png"),alt:"Failure Analysis enhanced decoder"}),"\n",(0,s.jsx)(t.h2,{id:"available-views",children:"Available Views"}),"\n",(0,s.jsx)(t.p,{children:"Two different views are available:"}),"\n",(0,s.jsx)(t.h3,{id:"view-by-jobs",children:"View by Jobs"}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/viewByJobs.png"),alt:"view by jobs"}),"\n",(0,s.jsx)(t.p,{children:"In this view, you can filter results to focus on specific jobs. Additionally, you can filter by your team\u2019s tests, your organization\u2019s tests, or failures belonging to a specific team member if you are a team member or team admin. If you are an org admin, you can filter failures belonging to any organization member. Additionally, you can apply filters based on the testing framework and time range."}),"\n",(0,s.jsx)(t.p,{children:"This view displays all the failed jobs with the total number of occurrences. You can access Failure Patterns details associated with a specific test by clicking on a specific test. Each test may have more patterns, and the number of tests involved in each pattern is visible."}),"\n",(0,s.jsx)(t.p,{children:"For example, the image below shows a failed test with 126 failures in total, with 3 different failure patterns: the first for 120 times, the second for 5 times, and the last for 1 time only."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/viewByTest-details.png"),alt:"Test details"}),"\n",(0,s.jsx)(t.h3,{id:"view-by-failure-patterns",children:"View by Failure Patterns"}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/viewByFailurePatterns.png"),alt:"view by failure patterns"}),"\n",(0,s.jsx)(t.p,{children:"In this view, you can filter results to focus on failures related to your tests. Additionally, you can filter by your team\u2019s tests, your organization\u2019s tests, or failures belonging to a specific team member if you are a team member or team admin. If you are an org admin, you can filter failures belonging to any organization member. Furthermore, you can apply filters based on the time range."}),"\n",(0,s.jsx)(t.p,{children:"In this view, you can examine failures based on patterns ordered from most to least impactful. It allows you to identify patterns that require more attention quickly. The pattern\u2019s total percentage of impact and the number of tests affected by that pattern are displayed alongside the pattern."}),"\n",(0,s.jsx)(t.p,{children:"Clicking on a specific pattern reveals detailed information, including the percentage of impacted tests, the total number of tests involved, the actions associated with the pattern, and the first time the pattern was detected. It also shows all the affected tests with relevant details such as timestamp, OS/Browser used, failure duration, and the owner."}),"\n",(0,s.jsx)(t.p,{children:"In the following image, you can see a pattern with a high impact on the test since it impacted 623 tests corresponding to 49% of the total. Additionally, it shows the test involved with the related details."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/viewByFP-details.png"),alt:"view by failure patterns details"}),"\n",(0,s.jsx)(t.p,{children:"There is seamless integration between Failure Patterns and Test Results/Test Details in the Live and Automated sections. By clicking on a test name in the Failure Analysis view, you will be redirected to the related Test Details page, providing specific details about that particular test. If you aim to identify trends across failures and builds, the Failure Patterns view is a great starting point, followed by exploring the Test Results/Test Details page. Conversely, if you are investigating the root cause of a specific test failure, you can begin with the Test Results/Test Details and then explore Failure Patterns to understand its impact on your overall test strategy."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/testDetails.png"),alt:"failure patterns in test details"}),"\n",(0,s.jsx)(t.p,{children:"Once you have used Failure Analysis to identify the most pervasive patterns you'd like to investigate, click the test name on the Failure Analysis page to dig down into the individual test on the Test Details page. You will see a list of commands or steps contained within that test. To isolate the failure patterns we identified in the previous views and steps from the rest of the test commands, use the filter at the top of the command list to drill down and only surface test commands that have been identified in a failure pattern. To debug your tests faster you can click the time stamp next to the filtered command line to view the video of the test to verify the issue."}),"\n",(0,s.jsx)("img",{src:(0,n.A)("img/insights/test-details-FA-filter.png"),alt:"filter for failure patterns in test details"}),"\n",(0,s.jsxs)(t.p,{children:["To enhance the power of the Failure Analysis tool, it is recommended to ",(0,s.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation#selenium-javascript-executor",children:"Provide Context for Selenium Commands with the JavaScript Executor"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(96540);const a={},n=s.createContext(a);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);