"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71693],{11941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(74848),s=n(28453),o=n(86025);const r={id:"azure-devops",title:"Azure DevOps with APIF-Auto",sidebar_label:"Azure DevOps",keywords:["cicd","microsoft tfs","team foundation server","azure devops"]},a=void 0,l={id:"api-testing/on-prem/ci/azure-devops",title:"Azure DevOps with APIF-Auto",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/azure-devops.md",sourceDirName:"api-testing/on-prem/ci",slug:"/api-testing/on-prem/ci/azure-devops",permalink:"/api-testing/on-prem/ci/azure-devops",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/azure-devops.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"azure-devops",title:"Azure DevOps with APIF-Auto",sidebar_label:"Azure DevOps",keywords:["cicd","microsoft tfs","team foundation server","azure devops"]},sidebar:"apif",previous:{title:"APIF-Auto",permalink:"/api-testing/on-prem/ci/apif-auto"},next:{title:"Bamboo",permalink:"/api-testing/on-prem/ci/connecting-with-bamboo"}},c={},p=[{value:"Example Pipeline Script",id:"example-pipeline-script",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Example Output",id:"example-output",level:3}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.p,{children:"APIF-Auto, a command line tool that supports automated API Fortress test execution, is the ideal tool for executing tests in an Azure DevOps workflow."}),"\n",(0,i.jsx)(t.h2,{id:"example-pipeline-script",children:"Example Pipeline Script"}),"\n",(0,i.jsxs)(t.p,{children:["The pipeline script below serves as a template for creating a step in your Azure DevOps Pipeline for testing your APIs with API Fortress. If you\u2019d like to take a look at the documentation for APIF-Auto, click ",(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/apif-auto",children:"here"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This is an ",(0,i.jsx)(t.strong,{children:"example"})," of an Azure DevOps Pipeline. Experienced users are free to configure their workflow as best suits their needs."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"trigger:\n- master\njobs:\n- job: 'apif'\n  pool:\n  vmImage: 'ubuntu-latest'\n  strategy:\n  matrix:\n  Python37:\n  python.version: '3.7'\n\n  steps:\n  - script: |\n  python -m pip install --upgrade pip\n  python -m pip install -r requirements.txt\n    displayName: 'Install dependencies'\n\n  - script: |\n  python apif-run.py run-all security -S -f junit -o results/TEST-junit.xml\n    displayName: 'Run APIF Tests'\n\n  - task: PublishTestResults@2\n    inputs:\n    testRestultFiles: 'result/junit.xml'\n    testRunTitle: 'APIF Test Results'\n    condition: succeededOrFailed()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsx)(t.p,{children:"First, it\u2019s worth mentioning that in this example we have the APIF-Auto files in our Azure DevOps repository. Let\u2019s break down what\u2019s happening in the script above:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First, we are defining the OS image we would like to use as the testing environment. In our case we chose the latest Ubuntu which has support for the latest Python version."}),"\n",(0,i.jsx)(t.li,{children:"Next, in the same scope we are defining which version of Python we will be using for the test (Apif-Auto is a Python script)"}),"\n",(0,i.jsxs)(t.li,{children:['Then, in the part labeled "steps" there are a few things happening:',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['In the first section labeled "script" we are installing ',(0,i.jsx)(t.code,{children:"pip"}),", and then installing the dependencies from our ",(0,i.jsx)(t.code,{children:"requirements.txt"})," file"]}),"\n",(0,i.jsxs)(t.li,{children:['In the second section labeled "script" we are running ',(0,i.jsx)(t.code,{children:"apif-run.py"}),' to execute all of the tests in our project called "security"']}),"\n",(0,i.jsxs)(t.li,{children:['Finally, there is a section labeled "task," this is where we are evaluating the outputted results from the ',(0,i.jsx)(t.code,{children:"apif-run"})," execution."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example-output",children:"Example Output"}),"\n",(0,i.jsx)(t.p,{children:"Below is a sample output from the above execution:"}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/06/Screen-Shot-2020-06-18-at-10.08.50-AM.png"),alt:"Azure APIF-Auto Pic1"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);