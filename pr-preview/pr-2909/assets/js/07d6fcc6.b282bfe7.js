"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94104],{57609:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(74848),r=s(28453),o=s(86025);const i={id:"load-testing",title:"Load Testing",sidebar_label:"Load Testing",description:"Introduction API Fortress Load Testing is more than stress testing: it\u2019s functional load testing. Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level."},a=void 0,l={id:"api-testing/on-prem/quick-start/load-testing",title:"Load Testing",description:"Introduction API Fortress Load Testing is more than stress testing: it\u2019s functional load testing. Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level.",source:"@site/docs/api-testing/on-prem/quick-start/load-testing.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/load-testing",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/quick-start/load-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/load-testing.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"load-testing",title:"Load Testing",sidebar_label:"Load Testing",description:"Introduction API Fortress Load Testing is more than stress testing: it\u2019s functional load testing. Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level."},sidebar:"apif",previous:{title:"Importing Postman Collections",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/quick-start/importing-postman-collections"},next:{title:"Creating a Mocked API",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/quick-start/mocking-services"}},c={},d=[{value:"Step 1: Access Load Testing Control Panel",id:"step-1-access-load-testing-control-panel",level:2},{value:"Step 2: Create a Task",id:"step-2-create-a-task",level:2},{value:"Step 3: Run the Task",id:"step-3-run-the-task",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsx)(t.p,{children:"API Fortress Load Testing is more than stress testing, it\u2019s functional load testing."}),"\n",(0,n.jsx)(t.p,{children:"Rather than simply overburdening a server with requests, API Fortress Load Testing directs properly formatted requests to the appropriate endpoints and records failures at an API endpoint level."}),"\n",(0,n.jsx)(t.h2,{id:"step-1-access-load-testing-control-panel",children:"Step 1: Access Load Testing Control Panel"}),"\n",(0,n.jsxs)(t.p,{children:["To access Load Testing from the main page. click on the \u201c",(0,n.jsx)(t.em,{children:"Tools"}),"\u201d button, and then \u201c",(0,n.jsx)(t.em,{children:"Load Testing\u201d"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/toolstolt.gif"),alt:"Tools Gif"}),"\n",(0,n.jsx)(t.h2,{id:"step-2-create-a-task",children:"Step 2: Create a Task"}),"\n",(0,n.jsxs)(t.p,{children:["This is the main Load Testing screen. From here, you can create and run a new task. You can also run, modify or delete a saved task. To create a new task, click \u201c",(0,n.jsx)(t.em,{children:"+New Task"}),"\u201d."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/createTest.gif"),alt:"Create Test Gif"}),"\n",(0,n.jsxs)(t.p,{children:["The \u201c",(0,n.jsx)(t.em,{children:"Create New Task"}),"\u201d screen allows you to set the parameters for the new test."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Name"})," - The name that you give to the test."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Project"})," - A drop-down menu of all of the projects available to your current Company (Team)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Test"})," - Allows you to select a test from the selected project."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tags"})," - Allow you to tag the test for later use."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Duration"})," - How long, in seconds or minutes, the test will last."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Ramp Up"})," - A warm-up period, during which the load test will make requests of the server, but at a much lower rate."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Users/Agent"})," - Defines how many users will be simulated per load testing agent."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Server"})," - Allows you to select servers from the column on the right to behave as agents for the load test. Click the \u201c",(0,n.jsx)(t.em,{children:"Select"}),"\u201d button to select a server."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once you have successfully created a test, it will appear in the column on the left side of the screen."}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/taskList.png"),alt:"Task List"}),"\n",(0,n.jsx)(t.h2,{id:"step-3-run-the-task",children:"Step 3: Run the Task"}),"\n",(0,n.jsxs)(t.p,{children:["You can run the task by hovering over it and clicking the ",(0,n.jsx)(t.em,{children:"\u201cPlay\u201d"})," button. The test will now run at the top of the queue in the middle of the screen. Once it is complete, it will display a summary of the test performance."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/04/runTest.gif"),alt:"Run Test Gif"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);