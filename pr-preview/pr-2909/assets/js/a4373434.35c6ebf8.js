"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55558],{9711:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var t=s(74848),a=s(28453),i=s(86025),r=s(11470),l=s(19365);const c={id:"jenkins",title:"saucectl with Jenkins",sidebar_label:"Jenkins"},o=void 0,u={id:"dev/cli/saucectl/usage/ci/jenkins",title:"saucectl with Jenkins",description:"These examples can apply to virtually any Jenkins deployment, provided that you already have some existing automated tests, have access to the Jenkins instance, and are either the maintainer or an admin of the target repository.",source:"@site/docs/dev/cli/saucectl/usage/ci/jenkins.md",sourceDirName:"dev/cli/saucectl/usage/ci",slug:"/dev/cli/saucectl/usage/ci/jenkins",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/usage/ci/jenkins",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ci/jenkins.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"jenkins",title:"saucectl with Jenkins",sidebar_label:"Jenkins"},sidebar:"dev",previous:{title:"GitLab",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/usage/ci/gitlab"},next:{title:"Azure DevOps",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/usage/ci/azure"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Configure Jenkins Credentials",id:"configure-jenkins-credentials",level:3},{value:"Configure the Jenkins Pipeline",id:"configure-the-jenkins-pipeline",level:3},{value:"Run the Pipeline Tests",id:"run-the-pipeline-tests",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"These examples can apply to virtually any Jenkins deployment, provided that you already have some existing automated tests, have access to the Jenkins instance, and are either the maintainer or an admin of the target repository."}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Your Sauce Labs ",(0,t.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.jenkins.io/doc/book/installing/",children:"Jenkins Server"})}),"\n",(0,t.jsxs)(n.li,{children:["The following permissions in Jenkins:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ability to create and manage credentials"}),"\n",(0,t.jsx)(n.li,{children:"Ability to create and manage new pipelines"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-jenkins-credentials",children:"Configure Jenkins Credentials"}),"\n",(0,t.jsxs)(n.p,{children:["The first step of the integration is to ensure you've added your ",(0,t.jsx)(n.code,{children:"SAUCE_USERNAME"})," and ",(0,t.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," as a secret file/text in your Jenkins server."]}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to add credentials to Jenkins is with the UI:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to Jenkins."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Manage Jenkins"}),", click ",(0,t.jsx)(n.strong,{children:"Manage Credentials"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Next to ",(0,t.jsx)(n.strong,{children:"(global)"}),", click ",(0,t.jsx)(n.strong,{children:"Add credentials"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/stt/add_credentials.png"),alt:"Add Jenkins Credentials",width:"500"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"Kind"}),", select ",(0,t.jsx)(n.strong,{children:"Secret Text"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enter the following information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scope: Global"}),"\n",(0,t.jsxs)(n.li,{children:["Secret: ",(0,t.jsx)(n.code,{children:"your-sauce-username"})]}),"\n",(0,t.jsxs)(n.li,{children:["ID: ",(0,t.jsx)(n.code,{children:"sauce-username"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Sauce Labs Username"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat the above steps for your Sauce Labs Access Key."}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/stt/secrets.png"),alt:"Jenkins Secrets",width:"500"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For further information on how to store your Sauce Labs credentials in Jenkins, see ",(0,t.jsx)(n.a,{href:"https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials",children:"Handling credentials"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-jenkins-pipeline",children:"Configure the Jenkins Pipeline"}),"\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.code,{children:"Jenkinsfile"})," at the root of your project directory so that Jenkins can detect changes and run ",(0,t.jsx)(n.code,{children:"saucectl"})," accordingly. In the examples below, the ",(0,t.jsx)(n.code,{children:"environment"})," variables are the GitHub secrets configured in Jenkins:"]}),"\n",(0,t.jsxs)(r.A,{defaultValue:"cypress",values:[{label:"Cypress",value:"cypress"},{label:"Playwright",value:"playwright"},{label:"TestCafe",value:"testcafe"},{label:"Espresso",value:"espresso"},{label:"XCUITest",value:"xcuitest"}],children:[(0,t.jsx)(l.A,{value:"cypress",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/saucectl-cypress-example/blob/main/v1/Jenkinsfile\n"})})}),(0,t.jsx)(l.A,{value:"playwright",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",metastring:"reference",children:"https://github.com/saucelabs/saucectl-playwright-example/blob/main/Jenkinsfile\n"})})}),(0,t.jsx)(l.A,{value:"testcafe",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/saucectl-testcafe-example/blob/main/Jenkinsfile\n"})})}),(0,t.jsx)(l.A,{value:"espresso",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/saucectl-espresso-example/blob/main/Jenkinsfile\n"})})}),(0,t.jsx)(l.A,{value:"xcuitest",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/Jenkinsfile\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"run-the-pipeline-tests",children:"Run the Pipeline Tests"}),"\n",(0,t.jsxs)(n.p,{children:["Now you can commit these files and Jenkins will detect the new pipeline and launch ",(0,t.jsx)(n.code,{children:"saucectl"})," to run your tests."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you're using the ",(0,t.jsx)(n.a,{href:"https://plugins.jenkins.io/blueocean/",children:"Blue Ocean plugin"}),", your output may look something like this:"]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/stt/blue-ocean.png"),alt:"GitHub Settings"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var i=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),a=s(18215),i=s(23104),r=s(56347),l=s(205),c=s(57485),o=s(31682),u=s(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,i=h(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,d]=m({queryString:s,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:a}),g=(()=>{const e=o??b;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(74848);function j(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),a=l[s].value;a!==t&&(o(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);