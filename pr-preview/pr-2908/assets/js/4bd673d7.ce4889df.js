"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39098],{29312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(74848),o=t(28453);const s={id:"helper-databases-jdbc",title:"Helper \u2013 Connect to Any Database",sidebar_label:"Helper \u2013 Connect to Any Database",keywords:["api-testing","integrations","helpers","jdbc"]},i=void 0,r={id:"api-testing/on-prem/integrations/helper-databases-jdbc",title:"Helper \u2013 Connect to Any Database",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/helper-databases-jdbc.md",sourceDirName:"api-testing/on-prem/integrations",slug:"/api-testing/on-prem/integrations/helper-databases-jdbc",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/integrations/helper-databases-jdbc",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/helper-databases-jdbc.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"helper-databases-jdbc",title:"Helper \u2013 Connect to Any Database",sidebar_label:"Helper \u2013 Connect to Any Database",keywords:["api-testing","integrations","helpers","jdbc"]},sidebar:"apif",previous:{title:"Splunk",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/integrations/connectors/splunk"},next:{title:"Jenkins: Tricentis qTest Integration",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/integrations/jenkins"}},c={},d=[{value:"Configuration Deployment",id:"configuration-deployment",level:2},{value:"Running",id:"running",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This API Fortress Helper utility allows you to access databases via an API."}),"\n",(0,a.jsx)(n.h2,{id:"configuration-deployment",children:"Configuration Deployment"}),"\n",(0,a.jsx)(n.p,{children:"Place the package in a machine that has access to the databases that you wish to use, and which could be reached by API Fortress via HTTP."}),"\n",(0,a.jsx)(n.p,{children:"As a default, the system will connect to PostgreSQL, but you can configure it to run against any DB that can be accessed with JDBC."}),"\n",(0,a.jsx)(n.p,{children:"Of course, this requires a bit more configuration located in apps/db-api-helper/db-api-helper.xml. Next steps are pretty straight forward."}),"\n",(0,a.jsx)(n.p,{children:"Look for the following element:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<db:generic-config name="Generic_Database_Configuration" url="jdbc:postgresql://[172.28.0.1:5432/apipulse?password=jk5112&amp;user=apipulse](http://172.28.0.1:5432/apipulse?password=jk5112&user=apipulse)" driverClassName="org.postgresql.Driver" doc:name="Generic Database Configuration">\n'})}),"\n",(0,a.jsx)(n.p,{children:"If you plan to use another database, you will need to download the matching JDBC driver, place it in the apps/db-api-helper/lib directory, and configure the flow accordingly."}),"\n",(0,a.jsx)(n.p,{children:"In our example, hitting the route like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -H 'content-type:text/plain' -d '\\* from auser' http://<machine\\_hostname>:8092/db/select\n"})}),"\n",(0,a.jsx)(n.p,{children:"will trigger a select query that will return the result as a JSON array payload."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"INSERT"}),", ",(0,a.jsx)(n.code,{children:"UPDATE"}),", ",(0,a.jsx)(n.code,{children:"DELETE"})," routes are also available and they work similarly."]})}),"\n",(0,a.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,a.jsx)(n.p,{children:"It\u2019s as easy as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose up -d\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);