"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1568],{9333:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=s(74848),n=s(28453),r=s(86025),l=s(11470),i=s(19365);const o={id:"test-status",title:"Setting Test Statuses",sidebar_label:"Setting Test Statuses"},u=void 0,c={id:"test-results/test-status",title:"Setting Test Statuses",description:"What You'll Learn",source:"@site/docs/test-results/test-status.md",sourceDirName:"test-results",slug:"/test-results/test-status",permalink:"/test-results/test-status",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/test-results/test-status.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1687511227e3,frontMatter:{id:"test-status",title:"Setting Test Statuses",sidebar_label:"Setting Test Statuses"},sidebar:"docs",previous:{title:"Sharing Test Results",permalink:"/test-results/sharing-test-results"},next:{title:"Status Badges and the Browser Matrix Widget",permalink:"/test-results/badges-browser-matrix"}},d={},h=[{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"Update Test Status in Session",id:"update-test-status-in-session",level:2},{value:"Video: Setting Test Status to Pass Fail",id:"video-setting-test-status-to-pass-fail",level:3},{value:"Code Examples",id:"code-examples",level:3},{value:"Updating Test Status After Completion",id:"updating-test-status-after-completion",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-youll-learn",children:"What You'll Learn"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"How to use the JavaScript Executor to update the status of your test at the end of the session."}),"\n",(0,a.jsx)(t.li,{children:"How to use the Sauce Labs REST API to update the status of your test after it has already completed."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"update-test-status-in-session",children:"Update Test Status in Session"}),"\n",(0,a.jsx)(t.p,{children:"You can use the Selenium JavaScript Executor to annotate your test in the @after hook. This is the ideal means of\nwriting your tests to interpret the results as a pass/fail and update the status accordingly."}),"\n",(0,a.jsx)(t.admonition,{title:"JavaScript Executor",type:"caution",children:(0,a.jsx)(t.p,{children:"The JavaScript Executer commands can only be run while the test is in session.\nOnce the test is complete, the JavaScript Executor commands are no longer applicable and you must use the\nREST API to update the test."})}),"\n",(0,a.jsx)(t.h3,{id:"video-setting-test-status-to-pass-fail",children:"Video: Setting Test Status to Pass Fail"}),"\n",(0,a.jsx)(t.p,{children:"Watch this video for a demonstration of using the Selenium JavaScript Executor to annotate your test result with a\nPassed/Failed status."}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iaKRGjO-L8Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,a.jsx)(t.h3,{id:"code-examples",children:"Code Examples"}),"\n",(0,a.jsx)(t.p,{children:"The annotation for calling the JavaScript Executor in your test differs slightly for each framework and language,\nwhich are provided in the following code snippet examples. Refer to our Sauce Labs Demonstration Code Repositories\non GitHub for further information, and more context, on annotating your tests to record the pass/fail status."}),"\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C#",value:"c#"},{label:"Python",value:"python"},{label:"NodeJS",value:"node"},{label:"Ruby",value:"ruby"}],children:[(0,a.jsxs)(i.A,{value:"java",children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"JUnit 5"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'reference title="Test Reporting with JUnit 5 Test Watcher"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L56-L68\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"TestNG"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'reference title="Test Reporting with TestNG"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-testng-examples/src/test/java/com/saucedemo/selenium/testng/demo/SeleniumTest.java#L43-L47\n"})})]}),(0,a.jsxs)(i.A,{value:"c#",children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"MSTest"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",metastring:'reference title="Test Reporting with MSTest"',children:"https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/SeleniumMsTest/Onboarding/InstantSauceTest.cs#L83-L85\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"NUnit"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",metastring:'reference title="Test Reporting with NUnit"',children:"https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/DotnetCore/Sauce.Demo/Core.Selenium.Examples/AllTestsBase.cs#L61-L64\n"})})]}),(0,a.jsxs)(i.A,{value:"python",children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"PyTest"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:'reference title="Test Reporting with PyTest"',children:"https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/w3c-examples/test_pytest_chrome.py#L33-L38\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Robot Framework"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:'reference title="Test Reporting with Robot Framework"',children:"https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/robotframework/desktop_web/Tests/resource.robot#L58-L61\n"})})]}),(0,a.jsxs)(i.A,{value:"node",children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"WebdriverIO"}),"\n"]}),"The ",(0,a.jsx)(t.a,{href:"https://v6.webdriver.io/docs/sauce-service.html",children:"Sauce Service for WebdriverIO"})," does the reporting for you automatically.",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Nightwatch"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'reference title="Test Reporting with Nightwatch"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.0/nightwatch/appium-web/examples/update-sauce-real-devices/tests/custom-commands/customSauceLabsEnd.js#L30-L35\n"})})]}),(0,a.jsxs)(i.A,{value:"ruby",children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"RSpec"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",metastring:'reference title="Test Reporting with RSpec"',children:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/intro/spec/spec_helper.rb#L20-L24\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"updating-test-status-after-completion",children:"Updating Test Status After Completion"}),"\n",(0,a.jsxs)(t.p,{children:["If you did not use the JavaScript Executor to update the status of your test as an assertion in the test code,\nyou can still use the ",(0,a.jsx)(t.a,{href:"/dev/api/",children:"Sauce Labs REST API"})," to update the test status."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsx)(t.li,{children:"The JOB_ID for the test you wish to update"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Call the ",(0,a.jsx)(t.code,{children:"update_jobs"}),' REST API and pass the parameter "passed" with a value of "true" or "false".']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Update Test Status"',children:"curl PUT -X -u USERNAME:ACCESS_KEY \\'https://saucelabs.com/rest/v1/USERNAME/jobs/JOB_ID' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"data\": {\n        \"passed\": \"true\"\n    }\n}'\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can obtain the JOB_ID either by:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Collecting and storing the web driver SessionId for the test, which Sauce Labs uses as the JOB_ID"}),"\n",(0,a.jsx)(t.li,{children:"testFinding the Id value in the test's Metadata tab on Sauce Labs, as shown in the following figure"}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,r.A)("img/test-results/test-results-meta-id-updated.png"),alt:"Test results metadata - JOB_ID"})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var a=s(18215);const n={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var a=s(96540),n=s(18215),r=s(23104),l=s(56347),i=s(205),o=s(57485),u=s(31682),c=s(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:n}}=e;return{value:t,label:s,attributes:a,default:n}}))}(s);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,r=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,d]=m({queryString:s,groupId:n}),[b,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(s);return[n,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),f=(()=>{const e=u??b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(74848);function v(e){let{className:t,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,s=o.indexOf(t),n=i[s].value;n!==a&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,n.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:n}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>i});var a=s(96540);const n={},r=a.createContext(n);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);