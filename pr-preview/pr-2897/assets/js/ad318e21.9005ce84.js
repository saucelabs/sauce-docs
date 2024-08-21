"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[35886],{6518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(74848),s=t(28453);const r={id:"assertions-for-metrics-performance",title:"Assertions for Metrics / Performance",sidebar_label:"Assertions for Metrics / Performance",keywords:["assertions","metrics","performance","api-testing","how-to"]},i=void 0,a={id:"api-testing/on-prem/how-to/assertions-for-metrics-performance",title:"Assertions for Metrics / Performance",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/assertions-for-metrics-performance.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/assertions-for-metrics-performance",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/on-prem/how-to/assertions-for-metrics-performance",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/assertions-for-metrics-performance.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"assertions-for-metrics-performance",title:"Assertions for Metrics / Performance",sidebar_label:"Assertions for Metrics / Performance",keywords:["assertions","metrics","performance","api-testing","how-to"]},sidebar:"apif",previous:{title:"Micro Focus ALM",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/on-prem/ci/micro-focus-alm-integration"},next:{title:"Automating 3-Legged OAuth",permalink:"/sauce-docs/pr-preview/pr-2897/api-testing/on-prem/how-to/3-leg-oauth"}},c={},p=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We have a ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/learn-more/working-with-the-response-object",children:"more detailed guide"})," on working with the HTTP response, but wanted to provide specifics on creating assertions against performance metrics."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example using the CODE VIEW of the code. Please note that ",(0,o.jsx)(n.em,{children:"overall"})," refers to fetch and latency combined."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<assert-less\nexpression="payload_response.metrics.latency"\nvalue="200"\ntype="integer"\n/>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<assert-less\nexpression="payload_response.metrics.fetch"\nvalue="350"\ntype="integer"\n/>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<assert-less\nexpression="payload_response.metrics.overall"\nvalue="450"\ntype="integer"\n/>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);