"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69716],{52593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453),i=n(86025);const o={id:"quick-start",title:"Create Your First Test",sidebar_label:"Creating a Test",description:"Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file."},a=void 0,l={id:"api-testing/on-prem/quick-start",title:"Create Your First Test",description:"Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.",source:"@site/docs/api-testing/on-prem/quick-start.md",sourceDirName:"api-testing/on-prem",slug:"/api-testing/on-prem/quick-start",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"quick-start",title:"Create Your First Test",sidebar_label:"Creating a Test",description:"Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file."},sidebar:"apif",next:{title:"Test Composer Guide",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/quick-start/composer"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Create a Project",id:"step-1-create-a-project",level:2},{value:"Step 2: Create a Test",id:"step-2-create-a-test",level:2},{value:"Step 3: Create an HTTP Request",id:"step-3-create-an-http-request",level:2},{value:"Step 4: Use the Generate Test Button",id:"step-4-use-the-generate-test-button",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Additional Topics",id:"additional-topics",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n","\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This page is a Quickstart guide for getting up and running with our legacy API Fortress (on-prem) tool. API Fortress may be deployed in our hosted cloud or self-hosted/on-premises via a container behind your firewall. Maintain complete test data ownership. ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/self-hosted/on-prem-platform",children:"Learn more about the differences between the two types of deployments"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Below, we walk through how to quickly create a test using an e-commerce API. Let's get started!"}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["An API Fortress Account","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When first setting up your account, you should receive an email with your login credentials from the platform. Before sure to confirm your email address. If you don't receive an email, contact us at ",(0,s.jsx)(t.a,{href:"mailto:support@saucelabs.com",children:"support@saucelabs.com"}),". If you\u2019d like to trial mocking or load testing, please contact support or your API Fortress representative."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-a-project",children:"Step 1: Create a Project"}),"\n",(0,s.jsx)(t.p,{children:"When you first log in, you are introduced to the Company Dashboard. The company already contains a project called Examples with some example tests."}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Create Project"})," and then create a project name."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.45.11-PM.png"),alt:"Create a Project UI"}),"\n",(0,s.jsx)(t.h2,{id:"step-2-create-a-test",children:"Step 2: Create a Test"}),"\n",(0,s.jsxs)(t.p,{children:["After you name your project, select ",(0,s.jsx)(t.strong,{children:"Create Test"})," and name your test."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.46.42-PM.png"),alt:"Create a Test UI"}),"\n",(0,s.jsxs)(t.p,{children:["Once you finish naming your test, you should see the ",(0,s.jsx)(t.em,{children:"Interstitial Page"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.21.22-PM.png"),alt:"Create a Test UI"}),"\n",(0,s.jsx)(t.p,{children:"There are two avenues that you may take in building a test from here:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Generate a test manually"}),"\n",(0,s.jsx)(t.li,{children:"Build from a spec file"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to build a test manually, API Fortress is capable of building a test draft for you using the ",(0,s.jsx)(t.strong,{children:"Generate Test"})," button. You can also create a test by building from a spec file, or an Apiary account."]}),"\n",(0,s.jsxs)(t.p,{children:["For the purposes of this quickstart guide, we will show you how to use the ",(0,s.jsx)(t.strong,{children:"Generate Test"})," button."]}),"\n",(0,s.jsx)(t.admonition,{title:"Build Test from a Spec File",type:"tip",children:(0,s.jsxs)(t.p,{children:["To build a test using a spec file see: ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/build-from-spec",children:"Build from Spec"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"step-3-create-an-http-request",children:"Step 3: Create an HTTP Request"}),"\n",(0,s.jsx)(t.p,{children:"In order to generate a test based on the HTTP response payload, we need to add a sample HTTP request using an example test API."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Compose"})," in the left-hand portion of the Interstitial page."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.54.09-PM.png"),alt:"Click compose"}),"\n",(0,s.jsx)(t.admonition,{title:"Visual Composer Tutorial",type:"tip",children:(0,s.jsxs)(t.p,{children:["You will be presented with a tutorial on the Visual Composer. The final screen of the tutorial provides you with further instructions on how to create a test. Feel free to explore the tutorial and then close the window in order to return to the ",(0,s.jsx)(t.em,{children:"Console"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the ",(0,s.jsx)(t.strong,{children:"HTTP Client"})," button in the left panel."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.59.14-PM.png"),alt:"Click HTTP Client"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy and paste the following url in the empty ",(0,s.jsx)(t.em,{children:"Request url"})," form at the bottom of the page:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://demoapi.apifortress.com/api/retail/product\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The above test API is a simple ",(0,s.jsx)(t.code,{children:"GET"})," request, so leave the dropdown as is."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Send"})," button to generate the response payload. Here's what it looks like in the UI:"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/sendRequest.png"),alt:"Send a Request"}),"\n",(0,s.jsx)(t.p,{children:"You should receive the following response code in the Body tab:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n"Status": 401,\n"Message": "Unauthorized Token"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Normally this means you need to add an auth token/header, but for this particular demo api we can sidestep this requirement with a simple header."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Under the Headers tab add the following values: ",(0,s.jsx)(t.code,{children:"key:ABC123"}),", here's what it looks like in the UI:"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/addHeader.png"),alt:"Add a Header"}),"\n",(0,s.jsxs)(t.p,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Send"})," button one more time and after the response payload appears, select ",(0,s.jsx)(t.strong,{children:"Save"}),", name your request, then select ",(0,s.jsx)(t.strong,{children:"Save Request"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/Screen Shot 2021-04-05 at 5.29.32 PM.png"),alt:"Save Button"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-4-use-the-generate-test-button",children:"Step 4: Use the Generate Test Button"}),"\n",(0,s.jsxs)(t.p,{children:["Now select the ",(0,s.jsx)(t.strong,{children:"Generate Test"})," button to generate a test draft."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/generateTestButton.png"),alt:"Generate Test"}),"\n",(0,s.jsxs)(t.p,{children:["The following screens allow you to choose whether you want to create the input set based on the data provided in the request, and if you want Magic to generate the assertions. The final screen summarizes what was done. Select ",(0,s.jsx)(t.strong,{children:"Continue"})," on each screen."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/screen1.png"),width:"100%",alt:"Screen 1"})})," ",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Screen 1"})})]}),(0,s.jsxs)(t.th,{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/screen2.png"),width:"100%",alt:"Screen 2"})})," ",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Screen 2"})})]})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsxs)("strong",{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/screen3.png"),width:"100%",alt:"Screen 3"})})," ",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Screen 3"})})]})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("strong",{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/finalScreen.png"),width:"100%",alt:"Final Screen"})})," ",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Final Screen"})})]})})]})})]}),"\n",(0,s.jsx)(t.p,{children:"After you successfully generate your first test, the generated test appears in the Visual Editor:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/visual.png"),width:"75%",alt:"Screen 2"})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Visual Editor"})}),"\n",(0,s.jsxs)(t.p,{children:["The values for ",(0,s.jsx)(t.code,{children:"${protocol}${domain}${endpoint}"}),", directly correlate with the values generated from the ",(0,s.jsx)(t.strong,{children:"Generate Test"})," button in the ",(0,s.jsx)(t.code,{children:"HTTP Client"})," tool. You can find these values by selecting ",(0,s.jsx)(t.strong,{children:"Input Sets"})," in the left hand side of the UI:"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/06/inputSets.png"),width:"25%",alt:"Screen 1"})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("small",{children:"Global Parameters & Input Set"})}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You've just created your first test!"}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"At this stage, this test is only a draft. You should take a moment to verify each object, and/or add more logic to it. API Fortress has a lot of tools that allow for comprehensive continuous integration testing. Magic Test Generation is great at understanding datatypes and structure, which is often 90% of the work."}),"\n",(0,s.jsx)(t.h3,{id:"additional-topics",children:"Additional Topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Check out the ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/using-the-example-snippets",children:"Example Snippets"})," provided by the API Fortress Dashboard."]}),"\n",(0,s.jsxs)(t.li,{children:["Learn how to ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/importing-postman-collections",children:"import Postman Collections"})," so that you may generate more tests."]}),"\n",(0,s.jsxs)(t.li,{children:["Learn how to schedule a test ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/schedule-a-test",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Learn about data and notifications connectors ",(0,s.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/setup-connectors/",children:"here"}),". Simple solutions to plug into the systems you use today (e.g DataDog or New Relic)."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);