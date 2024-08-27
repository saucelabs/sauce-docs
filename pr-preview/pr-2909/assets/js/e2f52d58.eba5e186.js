"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52188],{20175:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(74848),n=t(28453);t(11470),t(19365),t(86025);const i={id:"playwright",title:"Playwright on Sauce Labs",sidebar_label:"Using Playwright"},a=void 0,l={id:"web-apps/automated-testing/playwright",title:"Playwright on Sauce Labs",description:"Playwright is a testing framework that you can use to test your web apps remotely on Sauce Labs Cloud using the saucectl CLI.",source:"@site/docs/web-apps/automated-testing/playwright.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/playwright",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/playwright",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/playwright.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"playwright",title:"Playwright on Sauce Labs",sidebar_label:"Using Playwright"},sidebar:"docs",previous:{title:"Limitations",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/cypress/limitations"},next:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/playwright/quickstart"}},o={},d=[{value:"Supported Languages",id:"supported-languages",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Testing Platforms",id:"supported-testing-platforms",level:2},{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"Playwright Reporter for Sauce Labs",id:"playwright-reporter-for-sauce-labs",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/microsoft/playwright",children:"Playwright"})," is a testing framework that you can use to test your web apps remotely on Sauce Labs Cloud using the ",(0,s.jsxs)(r.a,{href:"/dev/cli/saucectl",children:[(0,s.jsx)(r.code,{children:"saucectl"})," CLI"]}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"supported-languages",children:"Supported Languages"}),"\n",(0,s.jsxs)(r.p,{children:["JavaScript and TypeScript are supported out of the box.\nCucumber.js is not directly supported by Playwright. However, Playwright can be used as the backing automation framework. See ",(0,s.jsx)(r.a,{href:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/cucumberjs-playwright/quickstart",children:"this setup guide"})," for more information."]}),"\n",(0,s.jsx)(r.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsx)(r.p,{children:"Supported OS:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Windows 10 / Windows 11"}),"\n",(0,s.jsx)(r.li,{children:"macOS 10.15+"}),"\n",(0,s.jsx)(r.li,{children:"Linux"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"supported-testing-platforms",children:"Supported Testing Platforms"}),"\n",(0,s.jsx)(r.p,{children:"Sauce Labs supports the following test configurations for Playwright:"}),"\n",(0,s.jsxs)("table",{id:"table-fw",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Playwright Version"}),(0,s.jsx)("th",{children:"Node.js Version"}),(0,s.jsx)("th",{children:"Supported Platforms"}),(0,s.jsx)("th",{children:"Supported Browsers"}),(0,s.jsx)("th",{children:"End of Life"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.45.2"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"July 23, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.45.0"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"June 26, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.44.0"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"May 28, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.43.1"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"April 15, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.41.2"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"February 28, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.41.0"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"January 22, 2025"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.40.1"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"December 6, 2024"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.39.0"}),(0,s.jsx)("td",{rowspan:"2",children:"20"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"November 7, 2024"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.38.1"}),(0,s.jsx)("td",{rowspan:"2",children:"18"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"September 28, 2024"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.37.1"}),(0,s.jsx)("td",{rowspan:"2",children:"18"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"August 31, 2024"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"1.36.2"}),(0,s.jsx)("td",{rowspan:"2",children:"18"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,s.jsx)("td",{rowspan:"2",children:"Chromium, Chrome, Firefox, Webkit"}),(0,s.jsx)("td",{rowspan:"2",children:"August 1, 2024"})]}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("b",{children:"Windows:"})," 10, 11"]})})]})]}),"\n",(0,s.jsx)(r.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/web-apps/automated-testing/playwright/quickstart",children:"Quickstart"}),": Use our demo repository to quickly set up and run a sample Playwright project and test to see the results."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/web-apps/automated-testing/playwright/yaml",children:"Run your own tests"}),": Customize ",(0,s.jsx)(r.code,{children:"saucectl"})," to run your existing tests just by modifying the ",(0,s.jsx)(r.code,{children:"config.yml"})," file for your project."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.a,{href:"/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline",children:["Incorporate ",(0,s.jsx)(r.code,{children:"saucectl"})," in your pipeline"]}),": Playwright on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/orchestrate/quickstart/playwright",children:"Run your tests in Orchestrate"}),": Use ",(0,s.jsx)(r.code,{children:"saucectl"})," to run tests with a containerized test runner."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"playwright-reporter-for-sauce-labs",children:"Playwright Reporter for Sauce Labs"}),"\n",(0,s.jsxs)(r.p,{children:["If you prefer to stay in Playwright, try the ",(0,s.jsx)(r.a,{href:"https://github.com/saucelabs/sauce-playwright-reporter",children:"Playwright Sauce Labs Reporter"}),". Connect to your Sauce Labs account from within your Playwright project to configure and run your tests directly from Playwright."]}),"\n",(0,s.jsx)(r.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(r.p,{children:["Please check the ",(0,s.jsx)(r.a,{href:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/playwright/limitations",children:"Limitations Page"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(18215);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>v});var s=t(96540),n=t(18215),i=t(23104),a=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[d,u]=x({queryString:t,groupId:n}),[j,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,c.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),b=(()=>{const e=d??j;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(74848);function f(e){let{className:r,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==s&&(d(r),a(n))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=j(e);return(0,w.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,w.jsx)(f,{...e,...r}),(0,w.jsx)(g,{...e,...r})]})}function v(e){const r=(0,m.A)();return(0,w.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var s=t(96540);const n={},i=s.createContext(n);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);