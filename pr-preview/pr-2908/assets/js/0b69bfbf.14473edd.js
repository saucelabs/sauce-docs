"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3226],{27803:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(74848),r=n(28453),s=n(86025);const o={id:"import-har-files",title:"Importing HAR files and HAR files from RDC or VDC",sidebar_label:"Importing HAR files",description:"Automatically generate tests from an existing HAR file."},a=void 0,l={id:"api-testing/import-har-files",title:"Importing HAR files and HAR files from RDC or VDC",description:"Automatically generate tests from an existing HAR file.",source:"@site/docs/api-testing/import-har-files.md",sourceDirName:"api-testing",slug:"/api-testing/import-har-files",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/import-har-files",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/import-har-files.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"import-har-files",title:"Importing HAR files and HAR files from RDC or VDC",sidebar_label:"Importing HAR files",description:"Automatically generate tests from an existing HAR file."},sidebar:"docs",previous:{title:"Importing from Postman",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/import-postman-collection"},next:{title:"Test Actions",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/import-export-tests"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Importing a HAR File",id:"importing-a-har-file",level:2},{value:"Importing a HAR File from RDC and VDC",id:"importing-a-har-file-from-rdc-and-vdc",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const i={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"If you have an HTTP Archive (HAR) file or you have tested using Real Device Cloud (RDC) or Virtual Device Cloud (VDC), you can import it directly into API Testing on Sauce Labs and use it to generate tests."}),"\n",(0,t.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A Sauce Labs account (",(0,t.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(i.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"A HAR file or a HAR file from RDC/VDC."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Looking to import from a spec file? See ",(0,t.jsx)(i.a,{href:"/api-testing/build-from-spec/",children:"Building a Test from a Spec File"}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"importing-a-har-file",children:"Importing a HAR File"}),"\n",(0,t.jsx)(i.p,{children:"You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test."}),"\n",(0,t.jsx)(i.p,{children:"To import a HAR file:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In Sauce Labs, click ",(0,t.jsx)(i.strong,{children:"API Testing"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/apit-nav-rebrend.png"),alt:"Navigating to API Testing",width:"200"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["On the ",(0,t.jsx)(i.strong,{children:"Projects"})," page, under the project, you want to import the file to, click ",(0,t.jsx)(i.strong,{children:"HTTP Client"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/http-client-nav.png"),alt:"Navigating to the HAR import modal",width:"600"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["On the ",(0,t.jsx)(i.strong,{children:"HTTP Client"})," page, click ",(0,t.jsx)(i.strong,{children:"Import OpenAPI/Postman"}),", then click ",(0,t.jsx)(i.strong,{children:"Import OpenAPI/Postman Collection/.har"})," and then, select and upload your HAR file from your local machine."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/import-har.webp"),alt:"Navigating to the HAR import modal",width:"300"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click the folder in your ",(0,t.jsx)(i.strong,{children:"Snapshots"})," tree where you'd like to save your file."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/importFolderRebrand.png"),alt:"Routes Rendered",width:"350"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/api-testing/importFolder2Rebrand.png"),alt:"Import file to Project",width:"350"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The routes from your file will now show in the list of saved requests."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the folder, click on a snapshot to view its details in the response panel."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To create a test based on the imported file, click ",(0,t.jsx)(i.strong,{children:"Generate Test"}),". For more information about creating a test, see ",(0,t.jsx)(i.a,{href:"/api-testing/composer#create-a-test",children:"Create a Test"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"importing-a-har-file-from-rdc-and-vdc",children:"Importing a HAR File from RDC and VDC"}),"\n",(0,t.jsxs)(i.p,{children:["You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test from RDC or VDC. Network Traffic Capture and Extended Debugging must be enabled to use this feature. See ",(0,t.jsx)(i.a,{href:"/mobile-apps/features/network-capture",children:"Network Traffic Capture"})," and ",(0,t.jsx)(i.a,{href:"/insights/debug#enabling-extended-debugging",children:"Enabling Extended Debugging"})," for more information."]}),"\n",(0,t.jsx)(i.p,{children:"To import a HAR file:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In Sauce Labs, click ",(0,t.jsx)(i.strong,{children:"API Testing"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/apit-nav-rebrend.png"),alt:"Navigating to API Testing",width:"200"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["On the ",(0,t.jsx)(i.strong,{children:"Projects"})," page, under the project, you want to import the file to, click ",(0,t.jsx)(i.strong,{children:"HTTP Client"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/http-client-nav.png"),alt:"Navigating to the HAR import modal",width:"600"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["On the ",(0,t.jsx)(i.strong,{children:"HTTP Client"})," page, click ",(0,t.jsx)(i.strong,{children:"Import OpenAPI/Postman"}),", and then click ",(0,t.jsx)(i.strong,{children:"Import Har from RDC Job"})," or ",(0,t.jsx)(i.strong,{children:"Import Har from VDC Job"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/import-har-nav-rebrand.webp"),alt:"Navigating to the HAR import modal",width:"300"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.strong,{children:"Import Snapshots"})," window, click a test in the list and then click ",(0,t.jsx)(i.strong,{children:"Import"}),". You can filter this list by job owner or job type."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/import-har-import-rebrand.webp"),alt:"Import the file",width:"600"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.strong,{children:"Snapshots"})," panel, navigate to a folder and then click ",(0,t.jsx)(i.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/save-import-rebrand.png"),alt:"Selecting a folder",width:"400"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["When the import is complete, in the ",(0,t.jsx)(i.strong,{children:"Snapshots"})," panel, open the folder you imported the files to."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the folder, click on a snapshot to view its details in the response panel."}),"\n",(0,t.jsx)("img",{src:(0,s.A)("/img/api-testing/import-har-calls-rebrand.webp"),alt:"Viewing call details",width:"600"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To create a test based on the imported file, click ",(0,t.jsx)(i.strong,{children:"Generate Test"}),". For more information about creating a test, see ",(0,t.jsx)(i.a,{href:"/api-testing/composer#create-a-test",children:"Create a Test"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/api-testing/build-from-spec",children:"Build a Sauce Labs API Test from a Spec File"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/api-testing/import-postman-collection/",children:"Importing from Postman"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);