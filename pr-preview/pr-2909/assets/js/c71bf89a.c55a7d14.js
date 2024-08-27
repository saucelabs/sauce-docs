"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4572],{12665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(74848),s=n(28453),o=n(86025);const r={id:"github",title:"GitHub Integration with Visual Component Testing",sidebar_label:"GitHub"},c=void 0,a={id:"visual/component-testing/integrations/github",title:"GitHub Integration with Visual Component Testing",description:"Integrate Screener into your GitHub PR workflow, and do both code review + visual review from one place:",source:"@site/docs/visual/component-testing/integrations/github.md",sourceDirName:"visual/component-testing/integrations",slug:"/visual/component-testing/integrations/github",permalink:"/sauce-docs/pr-preview/pr-2909/visual/component-testing/integrations/github",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/integrations/github.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"github",title:"GitHub Integration with Visual Component Testing",sidebar_label:"GitHub"}},l={},u=[{value:"Setup Steps",id:"setup-steps",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Integrate Screener into your GitHub PR workflow, and do both code review + visual review from one place:"}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/visual/component-github-status.png"),alt:"Component GitHub Status"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When visual changes are found by Screener, the PR status will be marked as a failure in GitHub."}),"\n",(0,i.jsxs)(t.li,{children:["Review visual changes in Screener simply by clicking on the ",(0,i.jsx)(t.strong,{children:"Details"})," link."]}),"\n",(0,i.jsx)(t.li,{children:"The GitHub PR status will automatically update to success when visual changes are accepted in Screener, reducing the need to re-run a CI build to see a green success status."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/visual/component-testing/integrations/continuous-integration",children:"Integrate Screener into your CI process"})," for continuous visual testing."]}),"\n",(0,i.jsxs)(t.li,{children:["Update ",(0,i.jsx)(t.code,{children:"screener.config.js"})," file to not fail CI builds, by setting ",(0,i.jsx)(t.code,{children:"failureExitCode"})," option to ",(0,i.jsx)(t.code,{children:"0"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  failureExitCode: 0\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Open Account"})," > ",(0,i.jsx)(t.strong,{children:"GitHub"})," > ",(0,i.jsx)(t.strong,{children:"Grant GitHub Access"})," (must be performed by the Screener Account Owner)."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);