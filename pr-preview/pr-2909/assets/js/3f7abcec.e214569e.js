"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43237],{49729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453),o=t(86025);const a={id:"using-long-lasting-tokens",title:"Using Long Lasting Tokens",sidebar_label:"Using Long Lasting Tokens",keywords:["api-testing","how-to","long-lasting-tokens"]},r=void 0,l={id:"api-testing/on-prem/how-to/using-long-lasting-tokens",title:"Using Long Lasting Tokens",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/using-long-lasting-tokens.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/using-long-lasting-tokens",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/how-to/using-long-lasting-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/using-long-lasting-tokens.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"using-long-lasting-tokens",title:"Using Long Lasting Tokens",sidebar_label:"Using Long Lasting Tokens",keywords:["api-testing","how-to","long-lasting-tokens"]},sidebar:"apif",previous:{title:"Update Input",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/how-to/update-input"},next:{title:"Version Control",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/how-to/version-control"}},c={},d=[{value:"Goal",id:"goal",level:2},{value:"Effects",id:"effects",level:2},{value:"Code View",id:"code-view",level:2},{value:"Language Appendix",id:"language-appendix",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.p,{children:"It is common for an authentication system to generate long lasting tokens to perform multiple requests. In API Fortress there are many paths of authenticating that can be taken, but sometimes users prefer the token reuse strategy."}),"\n",(0,s.jsx)(n.h2,{id:"goal",children:"Goal"}),"\n",(0,s.jsx)(n.p,{children:"In this example we are showing you how to allow a test to store a token for further executions, and refresh it when it\u2019s time. Each test will need to contain this logic, and each token will be bound to the test itself."}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s the complete test. Have a quick look at it before proceeding to the steps:"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/Screenshot-from-2017-01-12-112555.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Prepare the input set by adding the ",(0,s.jsx)(n.em,{children:"basePath"}),", ",(0,s.jsx)(n.em,{children:"loginPath"}),", and ",(0,s.jsx)(n.em,{children:"dataPath"}),". Most importantly, add an empty variable for ",(0,s.jsx)(n.em,{children:"token"})," and ",(0,s.jsx)(n.em,{children:"expires"}),". These items will be updated by the test."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/1.png"),alt:"1.png"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add an IF component with this logic:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"!expires || D.nowMillis() > expires.toLong()\n"})}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/3.png"),alt:"3.png"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Within the IF branch, make the login call. Shown here is a call to the login URL. We are storing the retrieved information in the variable named \u201c",(0,s.jsx)(n.em,{children:"loginPayload"}),'."']}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/4.png"),alt:"4.png"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Within the IF branch, set the value to ",(0,s.jsx)(n.em,{children:"token"})," and ",(0,s.jsx)(n.em,{children:"expires."})," Note that in the value we\u2019re saying: take the current time and add one hour"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"D.plusHours(D.nowMillis(), 1)\n"})}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/5-1.png"),alt:"5-1.png"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/6.png"),alt:"6.png"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Within the if branch, update the input set. This is a unique feature of API Fortress. By performing this operation, you\u2019re having the test modify itself for the next use by updating the ",(0,s.jsx)(n.em,{children:"token"})," and the ",(0,s.jsx)(n.em,{children:"expires"})," variables. By doing so, the token will be available for all tests executions that will happen within an hour, and therefore no login calls will be made."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/7.png"),alt:"7.png"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/8.png"),alt:"8.png"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After the IF branch, perform the main call. We can reference the previously updated token."}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/call-1.png"),alt:"call-1.png"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"effects",children:"Effects"}),"\n",(0,s.jsx)(n.p,{children:"When running outside the workbench, two subsequent test executions will look like this:"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/9.png"),alt:"9.png"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/10.png"),alt:"10.png"}),"\n",(0,s.jsx)(n.h2,{id:"code-view",children:"Code View"}),"\n",(0,s.jsx)(n.p,{children:"The whole operation might seem a bit annoying to replicate in every test, but the code view and some copy and paste can ease the pain."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Keep in mind this is just an example, and the calls are meant to be very simple.\nThe following is the code version of the IF branch containing the authentication logic."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<if expression="!expires || D.nowMillis()&gt;expires.toLong()">\n<comment> <![CDATA[Authentication has to be performed due to expired token]]> </comment>\n<post url="${basePath}${loginPath}" params="[:]" var="loginPayload" mode="json">\n    <postParam name="username" value="test"/>\n    <postParam name="password" value="test"/>\n</post>\n<set var="token" value="${loginPayload.token}" lang="java"/>\n<set var="expires" value="${D.plusHours(D.nowMillis(),1)}"/>\n<update-input var="token"/> <update-input var="expires"/>\n</if>\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Additional Notes",type:"note",children:(0,s.jsx)(n.p,{children:"Updating input variables won't work when launching a test from within the composer, so the login call will run every time when developing a test. Run the test from outside the composer or schedule the test to see it in action."})}),"\n",(0,s.jsx)(n.h2,{id:"language-appendix",children:"Language Appendix"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Negation:"})," the exclamation mark (",(0,s.jsx)(n.code,{children:"!"}),") prior to an expression is used as a negation and it means: ",(0,s.jsx)(n.em,{children:"when it\u2019s false"}),", ",(0,s.jsx)(n.em,{children:"when it\u2019s empty"}),", ",(0,s.jsx)(n.em,{children:"when it does not exist"}),". In our example: ",(0,s.jsx)(n.em,{children:"!expires"})," means when expires is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logic Or:"})," the classic double pipe sign ( ",(0,s.jsx)(n.code,{children:"||"})," ). Rarely used in API Fortress except in IF conditions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"toLong()"}),":"]})," converts a string to a long number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"D.<action>()"})})," an API Fortress language extension that provides date and time manipulation functionalities. Please refer to the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/reference/expression-language-extensions",children:"expression language extensions page"})," for further details."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);