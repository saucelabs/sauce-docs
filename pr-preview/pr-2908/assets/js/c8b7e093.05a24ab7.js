"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15148],{33103:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(74848),r=s(28453);const o={id:"on-premises-requirements",title:"Self-Hosted System Requirements",sidebar_label:"Self-Hosted System Requirements",keywords:["api","api-fortress","requirements","onpremises","selfhosted"]},i=void 0,a={id:"api-testing/on-prem/self-hosted/on-premises-requirements",title:"Self-Hosted System Requirements",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/on-premises-requirements.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/on-premises-requirements",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/self-hosted/on-premises-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/on-premises-requirements.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"on-premises-requirements",title:"Self-Hosted System Requirements",sidebar_label:"Self-Hosted System Requirements",keywords:["api","api-fortress","requirements","onpremises","selfhosted"]},sidebar:"apif",previous:{title:"Introduction",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/self-hosted/on-prem-platform"},next:{title:"Updating an Instance",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/self-hosted/updating-an-on-premises-instance"}},d={},c=[{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",level:2},{value:"Software Requirements",id:"software-requirements",level:2},{value:"Docker Deployment",id:"docker-deployment",level:2},{value:"Processes",id:"processes",level:2},{value:"Networking",id:"networking",level:2},{value:"Further Connections",id:"further-connections",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The one server setup for API Fortress on-premise is a quick way to get things started in a protected environment. While not ideal for availability or performance, works exactly as expected and provides all the features of the cloud version."}),"\n",(0,t.jsx)(n.h2,{id:"minimum-hardware-requirements",children:"Minimum Hardware Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU: Intel based high frequency quad core processor"}),"\n",(0,t.jsx)(n.li,{children:"Memory: 16 GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"HDD: 250 GB Memory: the memory impacts significantly on the speed of queries on big data sets. 32 GB is a recommended setup HDD: All API Fortress reports and metrics are stored. 10 million reports + 30 million metrics can require up to 250GB of disk space"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OS: a recent Linux distribution"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"docker-deployment",children:"Docker Deployment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Docker: 1.12","\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For the Docker deployment to succeed and to ease further updates, the server has to be able to communicate with\xa0",(0,t.jsx)(n.a,{href:"https://hub.docker.com",children:"https://hub.docker.com"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"processes",children:"Processes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PostgreSQL: relational database for structured data"}),"\n",(0,t.jsx)(n.li,{children:"MongoDB: document database for reports and metrics"}),"\n",(0,t.jsx)(n.li,{children:"RabbitMQ: message queue"}),"\n",(0,t.jsx)(n.li,{children:"Tomcat: dashboard and engine application"}),"\n",(0,t.jsx)(n.li,{children:"AFScheduler: the API Fortress scheduler"}),"\n",(0,t.jsx)(n.li,{children:"AFMailer: the API Fortress mailer"}),"\n",(0,t.jsx)(n.li,{children:"AFConnector: dynamic data dispatcher for notifications"}),"\n",(0,t.jsx)(n.li,{children:"AFDownloadAgent: the downloader agent (actually performing HTTP calls)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,t.jsx)(n.p,{children:"We assume this deployment will be able to access the services to be tested."}),"\n",(0,t.jsx)(n.h2,{id:"further-connections",children:"Further Connections"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["HTTP(",(0,t.jsx)(n.code,{children:"80"}),") and/or HTTPS(",(0,t.jsx)(n.code,{children:"443"}),") inbound traffic enabled for every location that will need access to the dashboards."]}),"\n",(0,t.jsx)(n.li,{children:"Ports and services may vary based on system requirements."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);