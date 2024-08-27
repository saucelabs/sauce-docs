"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[66869],{30536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),l=r(19365);r(86025);const i={id:"playwright",title:"Playwright Quickstart",sidebar_label:"Playwright Quickstart"},c=void 0,o={id:"orchestrate/quickstart/playwright",title:"Playwright Quickstart",description:"This page explains how to run your Playwright tests in Sauce Orchestrate with saucectl.",source:"@site/docs/orchestrate/quickstart/playwright.md",sourceDirName:"orchestrate/quickstart",slug:"/orchestrate/quickstart/playwright",permalink:"/sauce-docs/pr-preview/pr-2909/orchestrate/quickstart/playwright",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/quickstart/playwright.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"playwright",title:"Playwright Quickstart",sidebar_label:"Playwright Quickstart"},sidebar:"docs",previous:{title:"Getting Started with Orchestrate",permalink:"/sauce-docs/pr-preview/pr-2909/orchestrate/getting-started"},next:{title:"WebdriverIO Quickstart",permalink:"/sauce-docs/pr-preview/pr-2909/orchestrate/quickstart/webdriverio"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"How Orchestrate Works",id:"how-orchestrate-works",level:2},{value:"Step 1: Clone the Project",id:"step-1-clone-the-project",level:2},{value:"Step 2: Install <code>saucectl</code>",id:"step-2-install-saucectl",level:2},{value:"Step 3: Link Your Sauce Labs Account",id:"step-3-link-your-sauce-labs-account",level:2},{value:"Step 4: Run Tests Using saucectl",id:"step-4-run-tests-using-saucectl",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This page explains how to run your ",(0,n.jsx)(t.a,{href:"/web-apps/automated-testing/playwright",children:"Playwright"})," tests in Sauce Orchestrate with ",(0,n.jsx)(t.code,{children:"saucectl"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,n.jsxs)(t.li,{children:["Access to a Docker registry. This example uses ",(0,n.jsx)(t.a,{href:"https://hub.docker.com",children:"DockerHub"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"Docker installed"})," if you want to modify and rebuild the example docker image."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-orchestrate-works",children:"How Orchestrate Works"}),"\n",(0,n.jsxs)(t.p,{children:["Sauce Orchestrate uses container technology to package and run your tests in the Sauce Labs cloud. See ",(0,n.jsx)(t.a,{href:"/orchestrate/getting-started/#how-it-works",children:"How it Works"})," for more details."]}),"\n",(0,n.jsxs)(t.p,{children:["The following example uses a project with a ",(0,n.jsx)(t.code,{children:"saucectl"})," configuration file that is set up to run in Orchestrate. See ",(0,n.jsxs)(t.a,{href:"/orchestrate/saucectl-configuration",children:[(0,n.jsx)(t.code,{children:"saucectl"})," Configuration"]})," for more information about the configuration and run options available. The example also has a Dockerfile for building the container image. See ",(0,n.jsx)(t.a,{href:"/orchestrate/building-images",children:"Building Images"})," for more information about creating your own container images."]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-clone-the-project",children:"Step 1: Clone the Project"}),"\n",(0,n.jsxs)(a.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,n.jsx)(l.A,{value:"https",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-imagerunner-example.git\n"})})}),(0,n.jsx)(l.A,{value:"ssh",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-imagerunner-example.git\n"})})})]}),"\n",(0,n.jsxs)(t.h2,{id:"step-2-install-saucectl",children:["Step 2: Install ",(0,n.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,n.jsxs)(t.p,{children:["Navigate to the Playwright example in the project you just cloned, then install ",(0,n.jsx)(t.code,{children:"saucectl"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cd saucectl-imagerunner-example/playwright\nnpm install -g saucectl\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-link-your-sauce-labs-account",children:"Step 3: Link Your Sauce Labs Account"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," uses your Sauce Labs credentials as ",(0,n.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,n.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,n.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,n.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run the ",(0,n.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"saucectl configure"})," command will not set system environment variables or alter your .bashrc or other command-line profiles to set them by default. To do this, you must run ",(0,n.jsx)(t.code,{children:"export"})," commands as specified in our ",(0,n.jsx)(t.a,{href:"/basics/environment-variables/#setting-up-environment-variables",children:"environment variables"})," page."]})}),"\n",(0,n.jsx)(t.h2,{id:"step-4-run-tests-using-saucectl",children:"Step 4: Run Tests Using saucectl"}),"\n",(0,n.jsx)(t.p,{children:"Run the Playwright tests."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"saucectl run\n"})}),"\n",(0,n.jsx)(t.p,{children:"The console displays the running tests, distinguishing which mode is running."}),"\n",(0,n.jsxs)(t.p,{children:["After the tests are run, ",(0,n.jsx)(t.code,{children:"saucectl"})," outputs the command logs from Orchestrate and downloads the artifacts from the container."]}),"\n",(0,n.jsx)(t.p,{children:"The following is an example CLI output."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"2:52:05 INF Downloading artifacts archive\n12:52:07 INF Suites in progress: 0\n\n       Name                              Duration    Status       Attempts\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    Playwright in ImageRunner            2m16s    Succeeded           1\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    All suites have passed               2m32s\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The results and test assets are also available immediately following test completion in your ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs account"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(18215),a=r(23104),l=r(56347),i=r(205),c=r(57485),o=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:r,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=o??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(o(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);