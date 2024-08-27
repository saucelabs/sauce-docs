"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53638],{31374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=a(74848),n=a(28453);a(86025),a(11470),a(19365);const r={id:"appium",title:"Appium on Sauce Labs",sidebar_label:"Using Appium",description:"Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs."},s=void 0,o={id:"mobile-apps/automated-testing/appium",title:"Appium on Sauce Labs",description:"Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs.",source:"@site/docs/mobile-apps/automated-testing/appium.md",sourceDirName:"mobile-apps/automated-testing",slug:"/mobile-apps/automated-testing/appium",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing/appium",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"appium",title:"Appium on Sauce Labs",sidebar_label:"Using Appium",description:"Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs."},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing"},next:{title:"Appium Versions",permalink:"/sauce-docs/pr-preview/pr-2909/mobile-apps/automated-testing/appium/appium-versions"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installing Appium",id:"installing-appium",level:2},{value:"Installing the Server",id:"installing-the-server",level:3},{value:"Installing a Client",id:"installing-a-client",level:3},{value:"How to Get Started",id:"how-to-get-started",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{title:"Appium 1 End of Life",type:"warning",children:[(0,i.jsxs)(t.p,{children:["The Appium core team does not maintain Appium 1.x anymore since the ",(0,i.jsx)(t.a,{href:"https://github.com/appium/appium",children:"1st of January 2022"}),". Recent versions of all officially supported platform drivers are no longer compatible with Appium 1.x, and require Appium 2 to run."]}),(0,i.jsxs)(t.p,{children:["Sauce Labs still supports Appium 1.x (check our ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/products/platform-configurator#/",children:"Platform Configurator"})," to see which Appium 1 versions are available), but we recommend migrating to Appium 2."]}),(0,i.jsxs)(t.p,{children:["For more information on migrating to Appium 2, see ",(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/appium-2-migration",children:"Migrating to Appium 2"}),". For more information on installing Appium 2, see ",(0,i.jsx)(t.a,{href:"https://appium.github.io/appium/docs/en/2.0/quickstart/install/",children:"Installing Appium 2"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"Looking to incorporate Appium in your mobile testing strategy? This page can help you understand the system architecture and installation requirements."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"http://appium.io/",children:"Appium"})," is an automation testing framework that allows you to write tests using the ",(0,i.jsx)(t.a,{href:"https://www.selenium.dev",children:"Selenium"})," syntax that are for use in testing native, mobile web, and hybrid apps on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more."]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs account (",(0,i.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://nodejs.org/",children:"Node.js v10+ and NPM"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installing-appium",children:"Installing Appium"}),"\n",(0,i.jsx)(t.p,{children:"Appium is a client-server framework in which the user installs a client app locally that translates test session configuration details into requests to the remote Appium server, which processes them and responds with results and related material that Sauce Labs can then render into meaningful results in your dashboard. In order to use Appium, you must install both the server and a client."}),"\n",(0,i.jsx)(t.h3,{id:"installing-the-server",children:"Installing the Server"}),"\n",(0,i.jsx)(t.p,{children:"You can install the Appium Server directly via NPM by running the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"npm install -g appium\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installing-a-client",children:"Installing a Client"}),"\n",(0,i.jsxs)(t.p,{children:["The Appium client is the app in which you write your test scripts and instruct Appium how and where to run them. Appium provides ",(0,i.jsx)(t.a,{href:"http://appium.io/downloads",children:"client libraries"})," for a variety of programming languages, so choose your favorite and download it to start creating tests for your mobile app or mobile browser app. Many of the examples throughout this documentation use the ",(0,i.jsx)(t.a,{href:"https://webdriver.io/",children:"JavaScript WebDriverIO client"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{title:"Appium Doctor",type:"tip",children:[(0,i.jsxs)(t.p,{children:["Use Appium's dependency validator CLI ",(0,i.jsx)(t.code,{children:"appium-doctor"})," to ensure your installation is ready to go for your Android or iOS tests."]}),(0,i.jsxs)(t.p,{children:["Install the doctor: ",(0,i.jsx)(t.code,{children:"npm install -g appium-doctor"}),".\nRun the command: ",(0,i.jsx)(t.code,{children:"appium-doctor --ios|--android"})]})]}),"\n",(0,i.jsxs)(t.p,{children:["If you're using Appium 2.0, you can install ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/appium-inspector-saucelabs",children:"Appium Inspector"}),", which is basically an Appium client that includes a graphical user interface to specify which Appium server to use, which capabilities to set, and then interact with your app's elements, which can be very helpful in writing your tests."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/quickstart",children:"Quickstart"}),": Quickly set up a Java test environment and run a pre-configured working test using Appium to see if this is the right method for your mobile test objectives."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/real-devices",children:"Real Devices"}),": If you already have an Appium test infrastructure, set it up to test on Sauce Labs library of real devices."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/virtual-devices",children:"Virtual Devices"}),": You can also run your tests against Sauce Labs extensive combination of simulators and emulators for broader selection of devices and options."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var i=a(18215);const n={tabItem:"tabItem_Ymn6"};var r=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var i=a(96540),n=a(18215),r=a(23104),s=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(89466);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[u,p]=m({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=u??f;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=o[a].value;n!==i&&(u(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:p(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var i=a(96540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);