"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6146],{80528:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(74848),s=r(28453),i=r(86025);r(11470),r(19365);const a={id:"jira-server",title:"Jira Server",sidebar_label:"Jira Server"},o=void 0,l={id:"testfairy/sdk/bug-tracking/jira-server",title:"Jira Server",description:"This documentation provides step-by-step instructions on how to integrate TestFairy Connect with Jira Server for bug tracking. By following these guidelines, you can seamlessly connect TestFairy to your on-premise Jira Server either using basic authentication (user/password token) or OAuth.",source:"@site/docs/testfairy/sdk/bug-tracking/jira-server.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/jira-server",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/sdk/bug-tracking/jira-server",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/jira-server.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"jira-server",title:"Jira Server",sidebar_label:"Jira Server"},sidebar:"docs",previous:{title:"Jira Cloud",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/sdk/bug-tracking/jira-cloud"},next:{title:"TestFairy Connect",permalink:"/sauce-docs/pr-preview/pr-2909/testfairy/sdk/bug-tracking/tf-connect"}},c={},u=[{value:"Using the Configuration Wizard",id:"using-the-configuration-wizard",level:2},{value:"Configure Jira with OAuth",id:"configure-jira-with-oauth",level:2},{value:"Access Token &amp; Secret Generation:",id:"access-token--secret-generation",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This documentation provides step-by-step instructions on how to integrate TestFairy Connect with Jira Server for bug tracking. By following these guidelines, you can seamlessly connect TestFairy to your on-premise Jira Server either using basic authentication (user/password token) or OAuth."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To connect TestFairy to Jira Server that is installed on-prem, start by installing ",(0,t.jsx)(n.a,{href:"/testfairy/sdk/bug-tracking/tf-connect/",children:"TestFairy Connect"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"using-the-configuration-wizard",children:"Using the Configuration Wizard"}),"\n",(0,t.jsx)(n.p,{children:"Start the wizard by typing the following command in your terminal or command prompt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ testfairy-connect configure\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Configuration Wizard will prompt you with the following questions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"What is your TestFairy API Key?"}),"\nEnter your ",(0,t.jsx)(n.code,{children:"Upload API key"})," here; you can access it via the ",(0,t.jsx)(n.a,{href:"https://app.testfairy.com/settings/#api-key",children:"Settings Page"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"What kind of issue tracking system will you use with TestFairy Connect?"}),"\nChoose ",(0,t.jsx)(n.code,{children:"JIRA"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["What is your Jira URL (for example, ",(0,t.jsx)(n.a,{href:"https://example.atlassian.net",children:"https://example.atlassian.net"}),")?"]}),"\nProvide the URL address of your Jira server. Remember to include the ",(0,t.jsx)(n.code,{children:"http://"})," or ",(0,t.jsx)(n.code,{children:"https://"})," prefix."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"How shall TestFairy Connect authenticate to JIRA?"}),"\nChoose ",(0,t.jsx)(n.code,{children:"basic"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"What is the type of Jira issues to be created using TestFairy Connect?"}),"\nChoose the appropriate issue type used in your JIRA. JIRA uses ",(0,t.jsx)(n.code,{children:"Bug"})," by default, but it varies on project type. Other examples are ",(0,t.jsx)(n.code,{children:"Defect"})," or ",(0,t.jsx)(n.code,{children:"Task"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Jira username:"}),"\nEnter your JIRA login username."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Jira password:"}),"\nAnd your JIRA login password"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sometimes, depending on your user definitions in Jira, you may need to use an API token as your password. You can create one ",(0,t.jsx)(n.a,{href:"https://id.atlassian.com/manage/api-tokens",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Please enter HTTP proxy server address; leave empty if none:"}),"\nSend it here if you require an HTTP proxy to access this Jira server. For example, ",(0,t.jsx)(n.code,{children:"http://user@10.0.0.1:8080"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have provided all the necessary information, the configuration wizard will display a success message: ",(0,t.jsx)(n.code,{children:"Successfully connected to the issue tracker"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You have now successfully configured TestFairy Connect with Jira using basic authentication. Next, you can start the agent from the command line."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"configure-jira-with-oauth",children:"Configure Jira with OAuth"}),"\n",(0,t.jsx)(n.h4,{id:"access-token--secret-generation",children:"Access Token & Secret Generation:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Obtain a key pair:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out jira_rsa 2048\nopenssl rsa -in jira_rsa -pubout > jira_rsa.pub\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure Jira the Application Link for TestFairy Connect integration."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your browser, go to your Jira Admin page, like ",(0,t.jsx)(n.code,{children:"http://localhost:2990/jira/plugins/servlet/applinks/listApplicationLinks"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"URL"})," or any string to use for Application Link identification."]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("/img/testfairy/testing-an-app/bug-tracking/1-create-application-link.png"),alt:"Create an application link"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the next screen, click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("/img/testfairy/testing-an-app/bug-tracking/2-continue.png"),alt:"Continue"}),"\n",(0,t.jsx)("img",{src:(0,i.A)("/img/testfairy/testing-an-app/bug-tracking/3-setup-application-link.png"),alt:"Set Application link"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Application Name: ",(0,t.jsx)(n.code,{children:"TestFairy"})]}),"\n",(0,t.jsxs)(n.li,{children:["Application Type: ",(0,t.jsx)(n.code,{children:"Generic Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Service Provider Name: ",(0,t.jsx)(n.code,{children:"TestFairy"})]}),"\n",(0,t.jsxs)(n.li,{children:["Consumer Key: ",(0,t.jsx)(n.code,{children:"testfairy-connect"})]}),"\n",(0,t.jsxs)(n.li,{children:["Shared Secret: ",(0,t.jsx)(n.code,{children:"[paste public key contents here]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Request Token URL: ",(0,t.jsx)(n.code,{children:"/plugins/servlet/oauth/request-token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Request Token URL: ",(0,t.jsx)(n.code,{children:"/plugins/servlet/oauth/access-token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Request Token URL: ",(0,t.jsx)(n.code,{children:"/plugins/servlet/oauth/authorize"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("/img/testfairy/testing-an-app/bug-tracking/4-verify-access-token.png"),alt:"Verify access token"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the ",(0,t.jsx)(n.a,{href:"https://docs.testfairy.com/js/download/oauth.js",children:"token generation script"}),". Right-click to copy the .js file path."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget [paste file path here]\nnpm install oauth\nnode oauth.js\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update your ",(0,t.jsx)(n.code,{children:"config.json"})," with ",(0,t.jsx)(n.code,{children:"access_token"})," and ",(0,t.jsx)(n.code,{children:"access_token_secret"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"(optional)"})," Install the TestFairy Chrome Extension."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The TestFairy Chrome Extension is available at ",(0,t.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee",children:"here"}),". With this Chrome extension, every Jira issue that has a link to a TestFairy session will contain the proper TestFairy session, timeline, logs, and crash reports embedded in the Jira issue."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),s=r(18215),i=r(23104),a=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:r,groupId:s}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function k(e){const n=(0,x.A)();return(0,m.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);