"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42555],{90392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453),s=n(86025);n(11470),n(19365);const l={id:"testing-apple-pay",title:"Testing Apple Pay",sidebar_label:"Testing Apple Pay"},r=void 0,o={id:"mobile-apps/live-testing/testing-apple-pay",title:"Testing Apple Pay",description:"Apple Pay is a mobile payment and digital wallet service developed by Apple Inc. It allows you to make payments using your Apple devices, including iPhones and iPads. However, testing Apple Pay can be challenging, especially when it comes to testing it on different devices and environments. In this regard, Sauce Labs provides three ways to test Apple Pay, including using Simulators, using real private devices with an Apple Pay Sandbox Testing account, and using real private devices with a real production account and real credit cards.",source:"@site/docs/mobile-apps/live-testing/testing-apple-pay.md",sourceDirName:"mobile-apps/live-testing",slug:"/mobile-apps/live-testing/testing-apple-pay",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/live-testing/testing-apple-pay",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/live-testing/testing-apple-pay.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"testing-apple-pay",title:"Testing Apple Pay",sidebar_label:"Testing Apple Pay"},sidebar:"docs",previous:{title:"Testing Push Notifications",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/live-testing/testing-push-notifications"},next:{title:"Set Up Error Reporting",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/live-testing/error-reporting"}},p={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Testing Apple Pay",id:"testing-apple-pay",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Apple Certificates",id:"apple-certificates",level:2},{value:"Apple Pay on Real Private Devices",id:"apple-pay-on-real-private-devices",level:2},{value:"Passcode",id:"passcode",level:2},{value:"Add Apple Sandbox Test Cards",id:"add-apple-sandbox-test-cards",level:2},{value:"Disable Instrumentation",id:"disable-instrumentation",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Apple Pay is a mobile payment and digital wallet service developed by Apple Inc. It allows you to make payments using your Apple devices, including iPhones and iPads. However, testing Apple Pay can be challenging, especially when it comes to testing it on different devices and environments. In this regard, Sauce Labs provides three ways to test Apple Pay, including using Simulators, using real private devices with an ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/apple-pay/sandbox-testing/",children:"Apple Pay Sandbox Testing account"}),", and using real private devices with a real production account and real credit cards."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsx)(t.li,{children:"A native iOS, or iPadOS mobile app with Passcode capability enabled"}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"/mobile-apps/supported-devices/#private-device-cloud",children:"private devices"})," with Apple Pay enabled! To access our private device cloud and Apple Pay, contact your Sauce Labs account executive or our support team."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"testing-apple-pay",children:"Testing Apple Pay"}),"\n",(0,a.jsx)(t.p,{children:"Sauce Labs offers three ways to test Apple Pay :"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Using Simulators."}),"\n",(0,a.jsx)(t.li,{children:"Using real private devices with an Apple Pay Sandbox Testing account."}),"\n",(0,a.jsx)(t.li,{children:"Using real private devices with a real production account and real credit cards."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"iOS Simulators",type:"caution",children:[(0,a.jsx)(t.p,{children:"There are important differences between the Apple Pay Real Device and Simulator flow. The Simulator has the following limitations:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"It is focused on the front-end integration of Apple Pay and does not test the back-end integration."}),"\n",(0,a.jsxs)(t.li,{children:["You ",(0,a.jsx)(t.strong,{children:"can't"})," add cards to the wallet, meaning:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"No Apple Pay Sandbox Testing cards."}),"\n",(0,a.jsx)(t.li,{children:"No real credit cards."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["You ",(0,a.jsx)(t.strong,{children:"can't"})," test the Apple Pay in-web flow."]}),"\n",(0,a.jsxs)(t.li,{children:["You ",(0,a.jsx)(t.strong,{children:"can"})," test the Apple Pay in-app flow, but the Apple Pay in-app flow will not work the same as with Real Devices. It won't return a payment token and will not properly process your payment. In addition to this, it automatically provides simulated cards for all the supported payment networks."]}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You need to use ",(0,a.jsx)(t.a,{href:"#apple-pay-on-real-private-devices",children:"Private devices"})," with Apple Payment enabled."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#disable-instrumentation",children:"Instrumentation"})," needs to be disabled."]}),"\n",(0,a.jsxs)(t.li,{children:["You need to add your Sauce Labs hosted Private device ",(0,a.jsx)(t.a,{href:"#apple-pay-on-real-private-devices",children:"UDID"})," to your own provisioning profile."]}),"\n",(0,a.jsx)(t.li,{children:"Devices with Assistive touch enabled. In this case, you need to accept Apple Payment confirmation through assistive touch!"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"apple-certificates",children:"Apple Certificates"}),"\n",(0,a.jsx)(t.p,{children:"Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud."}),"\n",(0,a.jsx)(t.p,{children:"To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile to make this work. This can only be done for Sauce Labs private devices on which you have disabled the instrumentation."})}),"\n",(0,a.jsx)(t.h2,{id:"apple-pay-on-real-private-devices",children:"Apple Pay on Real Private Devices"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Our real devices are cleaned after every test session. Therefore, you need to configure your Apple Pay Sandbox Testing account, including a passcode and sandbox cards, every time you want to test Apple Pay on an iOS real device."})}),"\n",(0,a.jsx)(t.p,{children:"To make Apple Pay work on Sauce Labs real private devices:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.strong,{children:["Follow Apple\u2019s steps to enable Apple Pay (see ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements",children:"Setting Up Apple Pay Requirements"}),")"]}),". Apple is strict about certificates, so they require you to follow very specific steps:"]}),"\n",(0,a.jsx)(t.li,{children:"Set up Apple Pay integration in your app."}),"\n",(0,a.jsx)(t.li,{children:"Register the Merchant ID in your Apple developer account."}),"\n",(0,a.jsxs)(t.li,{children:["Set up an Apple sandbox tester account (see ",(0,a.jsx)(t.a,{href:"https://help.apple.com/app-store-connect/#/dev8b997bee1",children:"Create a sandbox tester account"})," for more information)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Build your app"}),". Apple Pay doesn\u2019t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:"]}),"\n",(0,a.jsxs)(t.li,{children:["Manually adding the device and its UDID to the device list for your developer certificate.","\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Your device list can be found on Apple\u2019s ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/account/resources/",children:"Certificates, Identifiers & Profiles page"})," for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM."]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"passcode",children:"Passcode"}),"\n",(0,a.jsxs)(t.p,{children:["One of the Apple Pay requirements is having a set passcode on your phone. Without it, you won't be able to add cards to your wallet. You need to use our Device Passcode capability.\nTo initiate a session with automatic Passcode enabling, ",(0,a.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#default-app-settings",children:"explore our passcode capability"}),", where you have the option to utilize either a dummy app or our ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-ios/releases/tag/2.0.2",children:"Sauce Demo application"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"add-apple-sandbox-test-cards",children:"Add Apple Sandbox Test Cards"}),"\n",(0,a.jsxs)(t.p,{children:["Apple test cards can be found on Apple\u2019s ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/apple-pay/sandbox-testing/",children:"Sandbox Testing"})," page."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["On your device, go to ",(0,a.jsx)(t.strong,{children:"Wallet"}),". If you didn\u2019t set the passcode capability, Apple will show a notification."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("img/live-testing/apple-pay-6.png"),alt:"Apple Pay setup - passcode notification",width:"250"}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["In ",(0,a.jsx)(t.strong,{children:"Wallet"}),", tap the plus sign to add a new card. Use the card information on Apple\u2019s ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/apple-pay/sandbox-testing/",children:"Sandbox Testing"})," page."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("img/live-testing/apple-pay-7.png"),alt:"Apple Pay setup - Add new card",width:"250"}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Prepare Sauce Labs"}),". As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can\u2019t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"disable-instrumentation",children:"Disable Instrumentation"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["On Sauce Labs, in the left navigation, click ",(0,a.jsx)(t.strong,{children:"Live"})," and then click ",(0,a.jsx)(t.strong,{children:"Mobile-App"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You will see an overview of the already uploaded apps. If no app has been uploaded, then upload the app. Once uploaded, open the app settings by hovering over the row until you see this:"}),"\n",(0,a.jsx)("img",{src:(0,s.A)("img/live-testing/apple-pay-9.png"),alt:"Apple Pay setup - Settings",width:"650"}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("img/live-testing/apple-pay-10.png"),alt:"Apple Pay setup - Settings",width:"650"}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Under ",(0,a.jsx)(t.strong,{children:"Default settings"}),", toggle ",(0,a.jsx)(t.strong,{children:"Instrumentation"})," to ",(0,a.jsx)(t.strong,{children:"Disabled"}),", and Enable Passcode."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("img/live-testing/apple-pay-11.png"),alt:"Apple Pay setup - Disable instrumentation",width:"350"}),"\n",(0,a.jsx)(t.p,{children:"Disabling this allows the app to use Apple Pay and the developer certificate and provisioning profile that you used when you built the app."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Disabling re-signing will break the installation of the app on public devices. The app will only be allowed to be installed on private devices that have been added to the developer certificate and provisioning profile."})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Once the app has been uploaded and re-signing has been disabled with Passcode capability, you can start the device and let Sauce Labs install the app on the device."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),i=n(18215),s=n(23104),l=n(56347),r=n(205),o=n(57485),p=n(31682),c=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[p,d]=v({queryString:n,groupId:i}),[g,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=p??g;return h({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function f(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),i=r[n].value;i!==a&&(p(t),l(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,m.jsx)(f,{...e,...t}),(0,m.jsx)(x,{...e,...t})]})}function j(e){const t=(0,y.A)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);