"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8364],{50834:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=r(74848),n=r(28453);r(11470),r(19365),r(86025);const i={id:"cypress",title:"Cypress on Sauce Labs",sidebar_label:"Using Cypress"},a=void 0,l={id:"web-apps/automated-testing/cypress",title:"Cypress on Sauce Labs",description:"Cypress is an end-to-end JavaScript testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the saucectl CLI.",source:"@site/docs/web-apps/automated-testing/cypress.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/cypress",permalink:"/web-apps/automated-testing/cypress",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/cypress.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1721768482e3,frontMatter:{id:"cypress",title:"Cypress on Sauce Labs",sidebar_label:"Using Cypress"},sidebar:"docs",previous:{title:"Selenium Grid",permalink:"/web-apps/automated-testing/selenium/selenium-grid"},next:{title:"Quickstart",permalink:"/web-apps/automated-testing/cypress/quickstart"}},d={},o=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Languages",id:"supported-languages",level:2},{value:"Supported Testing Platforms",id:"supported-testing-platforms",level:2},{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"Cypress Plugin for Sauce Labs",id:"cypress-plugin-for-sauce-labs",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/overview/why-cypress.html",children:"Cypress"})," is an end-to-end JavaScript testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the ",(0,t.jsxs)(s.a,{href:"/dev/cli/saucectl",children:[(0,t.jsx)(s.code,{children:"saucectl"})," CLI"]}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsx)(s.p,{children:"Supported OS:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Windows 10 / Windows 11"}),"\n",(0,t.jsx)(s.li,{children:"macOS 10.15+"}),"\n",(0,t.jsx)(s.li,{children:"Linux"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"supported-languages",children:"Supported Languages"}),"\n",(0,t.jsxs)(s.p,{children:["JavaScript is supported out of the box. TypeScript and Cucumber are also supported, but require additional dependencies at runtime. See our ",(0,t.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples",children:"example repo"})," for working end-to-end examples."]}),"\n",(0,t.jsx)(s.h2,{id:"supported-testing-platforms",children:"Supported Testing Platforms"}),"\n",(0,t.jsx)(s.p,{children:"Sauce Labs supports the following test configurations for Cypress:"}),"\n",(0,t.jsxs)("table",{id:"table-fw",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Cypress Version"}),(0,t.jsx)("th",{children:"Node.js Version"}),(0,t.jsx)("th",{children:"Supported Platforms"}),(0,t.jsx)("th",{children:"Supported Browsers"}),(0,t.jsx)("th",{children:"End of Life"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.13.1"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"July 23, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.12.0"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"June 26, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.10.0"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"May 28, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.7.3"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"April 15, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.6.6"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"February 28, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.6.3"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"January 22, 2025"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.6.0"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"December 6, 2024"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.4.0"}),(0,t.jsx)("td",{rowspan:"2",children:"20"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"November 7, 2024"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"13.3.0"}),(0,t.jsx)("td",{rowspan:"2",children:"18"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"September 28, 2024"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"12.17.4"}),(0,t.jsx)("td",{rowspan:"2",children:"18"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"August 31, 2024"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"12.17.2"}),(0,t.jsx)("td",{rowspan:"2",children:"18"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"macOS:"})," 11.00, 12, 13"]}),(0,t.jsx)("td",{rowspan:"2",children:"Chrome, Firefox, Microsoft Edge, Webkit (Experimental)"}),(0,t.jsx)("td",{rowspan:"2",children:"August 1, 2024"})]}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("b",{children:"Windows:"})," 10, 11"]})})]})]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/web-apps/automated-testing/cypress/quickstart",children:"Quickstart"}),": Use our demo repo to quickly set up and run a sample Cypress project and test to see the results."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/web-apps/automated-testing/cypress/yaml",children:"Run your own tests"}),": Customize ",(0,t.jsx)(s.code,{children:"saucectl"})," to run your existing tests just by modifying the ",(0,t.jsx)(s.code,{children:"config.yml"})," file for your project."]}),"\n",(0,t.jsxs)(s.li,{children:["Try Cypress with Cucumber: ",(0,t.jsx)(s.code,{children:"saucectl"})," supports Cypress using Cucumber, and the demo repo includes examples for ",(0,t.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples/cucumber",children:"Cypress 10 and above"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline",children:"Incorporate saucectl in your pipeline"}),": Cypress on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"cypress-plugin-for-sauce-labs",children:"Cypress Plugin for Sauce Labs"}),"\n",(0,t.jsxs)(s.p,{children:["If you would prefer to stay in Cypress, try the new ",(0,t.jsx)(s.a,{href:"https://github.com/saucelabs/sauce-cypress-plugin",children:"Cypress Sauce Labs Plugin"}),". Connect to your Sauce Labs account from within your Cypress project to configure and run your tests directly from Cypress."]}),"\n",(0,t.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(s.p,{children:["Please check the ",(0,t.jsx)(s.a,{href:"/web-apps/automated-testing/cypress/limitations",children:"Limitations Page"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19365:(e,s,r)=>{r.d(s,{A:()=>a});r(96540);var t=r(18215);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:s,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,a),hidden:r,children:s})}},11470:(e,s,r)=>{r.d(s,{A:()=>v});var t=r(96540),n=r(18215),i=r(23104),a=r(56347),l=r(205),d=r(57485),o=r(31682),c=r(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:n}}=e;return{value:s,label:r,attributes:t,default:n}}))}(r);return function(e){const s=(0,o.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function p(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:r}=e;const n=(0,a.W6)(),i=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,d.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(n.location.search);s.set(i,e),n.replace({...n.location,search:s.toString()})}),[i,n])]}function j(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,i=h(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[o,u]=x({queryString:r,groupId:n}),[j,m]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,i]=(0,c.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),b=(()=>{const e=o??j;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function w(e){let{className:s,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const s=e.currentTarget,r=d.indexOf(s),n=l[r].value;n!==t&&(o(s),a(n))},u=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;s=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;s=d[r]??d[d.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},s),children:l.map((e=>{let{value:s,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function y(e){let{lazy:s,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function g(e){const s=j(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(w,{...e,...s}),(0,f.jsx)(y,{...e,...s})]})}function v(e){const s=(0,m.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(s))}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);