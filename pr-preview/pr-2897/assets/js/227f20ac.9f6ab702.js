"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[82042],{82141:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var t=a(74848),n=a(28453);a(86025);const d={id:"databases",title:"Using Low Code with Databases",sidebar_label:"Databases"},r=void 0,i={id:"dev/low-code/databases",title:"Using Low Code with Databases",description:"To use Microsoft SQL database query via Sauce Labs Low Code:",source:"@site/docs/dev/low-code/databases.md",sourceDirName:"dev/low-code",slug:"/dev/low-code/databases",permalink:"/sauce-docs/pr-preview/pr-2897/dev/low-code/databases",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/low-code/databases.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1680790231e3,frontMatter:{id:"databases",title:"Using Low Code with Databases",sidebar_label:"Databases"},sidebar:"aiq",previous:{title:"Reports",permalink:"/sauce-docs/pr-preview/pr-2897/dev/low-code/reports"},next:{title:"Enabling Executions",permalink:"/sauce-docs/pr-preview/pr-2897/dev/low-code/executions"}},c={},o=[{value:"Connect to the Database",id:"connect-to-the-database",level:3},{value:"Example",id:"example",level:4},{value:"Execute a Query",id:"execute-a-query",level:3},{value:"Example",id:"example-1",level:4},{value:"Extract the Value",id:"extract-the-value",level:3},{value:"Example",id:"example-2",level:4},{value:"Supported Database Versions",id:"supported-database-versions",level:3}];function l(e){const s={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"To use Microsoft SQL database query via Sauce Labs Low Code:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Connect to the database"}),"\n",(0,t.jsx)(s.li,{children:"Execute a query"}),"\n",(0,t.jsx)(s.li,{children:"Extract the value"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"connect-to-the-database",children:"Connect to the Database"}),"\n",(0,t.jsxs)(s.p,{children:['Connect to db "" with url ',(0,t.jsx)(s.code,{children:"jdbc:sqlserver://<IP:Port>"})," with user as ",(0,t.jsx)(s.code,{children:"<username>"})," and password as ",(0,t.jsx)(s.code,{children:"<password>"})," with db_id ",(0,t.jsx)(s.code,{children:"<Db_id>"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:['To connect to db "" with url\n',(0,t.jsx)(s.code,{children:"jdbc:sqlserver://sql-server-2030.cgck8ublk7h6.us-west-1.rds.amazonaws.com:1433"})," with user as ",(0,t.jsx)(s.code,{children:"devops"})," and password ",(0,t.jsx)(s.code,{children:"test456!@!"})," with db_id ",(0,t.jsx)(s.code,{children:"test"})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Db_id"})," is the connection id used by Sauce Labs to identify different DB sessions."]})}),"\n",(0,t.jsx)(s.h3,{id:"execute-a-query",children:"Execute a Query"}),"\n",(0,t.jsxs)(s.p,{children:["Syntax:\nexecute query ",(0,t.jsx)(s.code,{children:"<query>"})," against ",(0,t.jsx)(s.code,{children:"<Db_id>"})," and save it as ",(0,t.jsx)(s.code,{children:"<variable name>"})]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["Execute query ",(0,t.jsx)(s.code,{children:"select *from testDB.user"})," against ",(0,t.jsx)(s.code,{children:"test"})," and save it as ",(0,t.jsx)(s.code,{children:"query_data"})]}),"\n",(0,t.jsx)(s.h3,{id:"extract-the-value",children:"Extract the Value"}),"\n",(0,t.jsx)(s.p,{children:"We can use js or py snippets to parse the output value."}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["Save:",(0,t.jsx)(s.code,{children:"_js{return eval(${query_data})[1][1]}"}),"\nas: ",(0,t.jsx)(s.code,{children:"fname"}),"\nWhere query_data (input):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[[1000, "James", "Bond"], [1001, "Roger", "Federer"], [1002, "Rafael", "Nadal"]] \nfname(Output):: \nRoger\n'})}),"\n",(0,t.jsx)(s.h3,{id:"supported-database-versions",children:"Supported Database Versions"}),"\n",(0,t.jsx)(s.p,{children:"Database versions supported out of the box:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"MySQL 8.0.11"}),"\n",(0,t.jsx)(s.li,{children:"MySQL 8.0.22"}),"\n",(0,t.jsx)(s.li,{children:"Oracle 11.2.0.4"}),"\n",(0,t.jsx)(s.li,{children:"Oracle 12.2.0.1"}),"\n",(0,t.jsx)(s.li,{children:"SQL Server (2012, 14, 16, 17, 19)"}),"\n",(0,t.jsx)(s.li,{children:"SQL Server (2008 R2, 2008)"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>i});var t=a(96540);const n={},d=t.createContext(n);function r(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);