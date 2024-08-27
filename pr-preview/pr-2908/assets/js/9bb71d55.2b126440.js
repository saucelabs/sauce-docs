"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[61858],{11085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(74848),a=n(28453);n(86025),n(11470),n(19365);const o={id:"ionic",title:"Ionic",sidebar_label:"Ionic"},i=void 0,s={id:"testfairy/platforms/ionic",title:"Ionic",description:"To add the TestFairy plugin to your Ioic 3 project, follow the instructions below.",source:"@site/docs/testfairy/platforms/ionic.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/ionic",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/platforms/ionic",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/ionic.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"ionic",title:"Ionic",sidebar_label:"Ionic"},sidebar:"docs",previous:{title:"Flutter",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/platforms/flutter"},next:{title:"Lumberyard",permalink:"/sauce-docs/pr-preview/pr-2908/testfairy/platforms/lumberyard"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Usage",id:"usage",level:2},{value:"Identifying Your Users",id:"identifying-your-users",level:2},{value:"Session Attributes",id:"session-attributes",level:2},{value:"Remote Logging",id:"remote-logging",level:2},{value:"Where To Go From Here?",id:"where-to-go-from-here",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"To add the TestFairy plugin to your Ioic 3 project, follow the instructions below."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Run the following commands from your application root folder:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ionic cordova plugin add com.testfairy.cordova-plugin\n"})}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, you can install it directly from GitHub:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ionic cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin\n"})}),"\n",(0,r.jsx)(t.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,r.jsx)(t.p,{children:"To upgrade your plugin, run the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ionic cordova plugin update com.testfairy.cordova-plugin\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Initialize TestFairy with your ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com/settings/#apptoken",children:"App Token"})," by calling ",(0,r.jsx)(t.code,{children:"TestFairy.begin"}),". Your ",(0,r.jsx)(t.strong,{children:"APP TOKEN"})," is available at ",(0,r.jsx)(t.code,{children:"https://app.testfairy.com/settings/#apptoken"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["We recommend invoking ",(0,r.jsx)(t.code,{children:"TestFairy.begin"})," from ",(0,r.jsx)(t.code,{children:"platform.ready()"})," in ",(0,r.jsx)(t.code,{children:"src/app/app.component.ts"}),". Also, declare ",(0,r.jsx)(t.code,{children:"TestFairy"})," at the top of the file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Component } from '@angular/core';\nimport { Platform } from 'ionic-angular';\nimport { StatusBar } from '@ionic-native/status-bar';\nimport { SplashScreen } from '@ionic-native/splash-screen';\n\nimport { HomePage } from '../pages/home/home';\n\n// Declare the TestFairy instance\ndeclare var TestFairy: any;\n\n@Component({\n  templateUrl: 'app.html'\n})\nexport class MyApp {\n  rootPage:any = HomePage;\n\n  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {\n    platform.ready().then(() => {\n            TestFairy.begin(APP TOKEN);\n      // Okay, so the platform is ready and our plugins are available.\n      // Here you can do any higher level native things you might need.\n      statusBar.styleDefault();\n      splashScreen.hide();\n    });\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["We do not support plugin mocking or browser development. During your development phase, we recommend checking for the existence of ",(0,r.jsx)(t.code,{children:"TestFairy"})," on the ",(0,r.jsx)(t.code,{children:"window"})," object before invoking any methods on the TestFairy object, for example"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Check if TestFairy is available (will be undefined in browser)\nif ((<any>window).TestFairy) {\n    TestFairy.begin(APP TOKEN);\n}\n"})})]}),"\n",(0,r.jsx)(t.h2,{id:"identifying-your-users",children:"Identifying Your Users"}),"\n",(0,r.jsx)(t.p,{children:"See the SDK Documentation /testfairy/sdk/identifying-users#cordova for more information."}),"\n",(0,r.jsx)(t.h2,{id:"session-attributes",children:"Session Attributes"}),"\n",(0,r.jsx)(t.p,{children:"See the SDK Documentation /testfairy/sdk/session-attributes#cordova for more information."}),"\n",(0,r.jsx)(t.h2,{id:"remote-logging",children:"Remote Logging"}),"\n",(0,r.jsx)(t.p,{children:"See the SDK Documentation /testfairy/sdk/remote-logging#cordova for more information."}),"\n",(0,r.jsx)(t.h2,{id:"where-to-go-from-here",children:"Where To Go From Here?"}),"\n",(0,r.jsxs)(t.p,{children:["Congratulations. You've successfully integrated TestFairy into your Ionic project. Visit your ",(0,r.jsx)(t.a,{href:"http://app.testfairy.com/",children:"dashboard"}),", to see your app listed."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Look at the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js",children:"API documentation"})," for other calls to the TestFairy plugin."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Follow the project on ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/testfairy-cordova-plugin",children:"GitHub"})," for updates, bug reports, or to contribute to the project."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),o=n(23104),i=n(56347),s=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);