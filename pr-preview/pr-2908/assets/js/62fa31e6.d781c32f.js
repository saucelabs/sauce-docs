"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16525],{99033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(74848),i=n(28453);n(11470),n(19365),n(86025);const a={id:"helpshift",title:"Unity Backtrace and HelpShift SDK integration",sidebar_label:"HelpShift SDK",description:"Integrate HelpShift SDK in Unity games."},s=void 0,l={id:"error-reporting/platform-integrations/unity/helpshift",title:"Unity Backtrace and HelpShift SDK integration",description:"Integrate HelpShift SDK in Unity games.",source:"@site/docs/error-reporting/platform-integrations/unity/helpshift.md",sourceDirName:"error-reporting/platform-integrations/unity",slug:"/error-reporting/platform-integrations/unity/helpshift",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/unity/helpshift",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unity/helpshift.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"helpshift",title:"Unity Backtrace and HelpShift SDK integration",sidebar_label:"HelpShift SDK",description:"Integrate HelpShift SDK in Unity games."},sidebar:"backtrace",previous:{title:"Stability Metrics Configuration",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/unity/metrics"},next:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/platform-integrations/unreal/setup"}},o={},c=[{value:"1. Integrating Both SDKs",id:"1-integrating-both-sdks",level:2},{value:"Backtrace SDK",id:"backtrace-sdk",level:3},{value:"HelpShift SDK",id:"helpshift-sdk",level:3},{value:"2. Linking HelpShift And Backtrace",id:"2-linking-helpshift-and-backtrace",level:2},{value:"iOS And Android",id:"ios-and-android",level:3},{value:"WebGL (Web Chat)",id:"webgl-web-chat",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"By combining error and exception capturing from Backtrace with first-class in-app customer support using HelpShift in Unity games, you can collect error information without requiring additional details from the player and have rich in-app communication with individual users or user groups."}),"\n",(0,r.jsx)(t.h2,{id:"1-integrating-both-sdks",children:"1. Integrating Both SDKs"}),"\n",(0,r.jsx)(t.p,{children:"Integrate the respective SDKs for Backtrace and HelpShift first."}),"\n",(0,r.jsx)(t.h3,{id:"backtrace-sdk",children:"Backtrace SDK"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/error-reporting/platform-integrations/unity/setup/",children:"Unity Integration Guide for Backtrace"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"helpshift-sdk",children:"HelpShift SDK"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["iOS","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developers.helpshift.com/unity/getting-started-ios/",children:"HelpShift for iOS"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Android","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developers.helpshift.com/unity/getting-started-android/",children:"HelpShift for Android"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["WebGL (web chat)","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developers.helpshift.com/web-chat/getting-started/",children:"Helpshift WebChat"})}),"\n",(0,r.jsxs)(t.li,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html",children:"Unity documentation"})," on how to embed a JavaScript library."]}),"\n",(0,r.jsxs)(t.li,{children:["Find the source code in our ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/unity-asterax/blob/Helpshift-Webinar/Assets/Plugins/AsteraX.jslib",children:"example game"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"2-linking-helpshift-and-backtrace",children:"2. Linking HelpShift And Backtrace"}),"\n",(0,r.jsx)(t.h3,{id:"ios-and-android",children:"iOS And Android"}),"\n",(0,r.jsxs)(t.p,{children:["For details on controlling the display of the HelpShift UI, refer to the ",(0,r.jsx)(t.a,{href:"https://developers.helpshift.com/sdkx-unity/support-tools-android/#conversation-view",children:"HelpShift SDK for Android documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Linking Backtrace and HelpShift is not tricky. Add the ",(0,r.jsx)(t.code,{children:'backtraceClient["guid"]'})," to a customer issue field with the ID ",(0,r.jsx)(t.code,{children:"device_id"}),", as shown in the code example below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'var configMap = new Dictionary<string, object>();\n// Add Backtrace GUID to link HelpShift and Backtrace\nDictionary<string, string> backtraceid = new Dictionary<string, string>();\nbacktraceid.Add("type", "singleline");\nbacktraceid.Add("value", backtraceClient["guid"]);\n\n// Add to CIF (custom issue fields) key\nDictionary<string, object> cifDictionary = new Dictionary<string, object>();\ncifDictionary.Add("device_id", backtraceid);\n\nconfigMap.Add("customIssueFields", cifDictionary);\n\n// Show in-app conversation UI\nHelpshiftSdk.ShowConversation(configMap);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"webgl-web-chat",children:"WebGL (Web Chat)"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to add the Backtrace GUID to the ",(0,r.jsx)(t.code,{children:"jslib"})," file in your Plugins folder (",(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html",children:"Unity documentation"}),")."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'mergeInto(LibraryManager.library, {\n\n  EnableHelpshift: function (guid) {\n    var PLATFORM_ID = <your platform id>,\n        DOMAIN = <your domain>,\n        LANGUAGE = "en";\n\n    window.helpshiftConfig = {\n        platformId: PLATFORM_ID,\n        domain: DOMAIN,\n        language: LANGUAGE,\n        userId: Pointer_stringify(guid),\n        userEmail: "Backtrace@Backtrace.io",\n        userName: "John Doe"\n    };\n\n    !function(t,e){if("function"!=typeof window.Helpshift){var n=function(){n.q.push(arguments)};n.q=[],window.Helpshift=n;var i,a=t.getElementsByTagName("script")[0];if(t.getElementById(e))return;i=t.createElement("script"),i.async=!0,i.id=e,i.src="https://webchat.helpshift.com/webChat.js";var o=function(){window.Helpshift("init")};window.attachEvent?i.attachEvent("onload",o):i.addEventListener("load",o,!1),a.parentNode.insertBefore(i,a)}else window.Helpshift("update")}(document,"hs-chat");\n\n    Helpshift("setCustomIssueFields", {\n        // Key of the Backtrace GUID Custom Issue Field\n        "device_id": {\n            // Type of Custom Issue Field\n            type: "singleline",\n            // Value to set for Custom Issue Field\n            value: Pointer_stringify(guid)\n        }\n    });\n  }\n\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:"Import it in C# in your game class:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'#if (UNITY_WEBGL)\n    [DllImport("__Internal")]\n    private static extern void EnableHelpshift(string guid);\n#endif\n'})}),"\n",(0,r.jsx)(t.p,{children:"Call it where appropriate (you need a reference to the Backtrace client):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'<YourGameClass>.EnableHelpshift(backtraceClient["guid"]);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Also, refer to the source in our ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/unity-asterax/blob/Helpshift-Webinar/Assets/Plugins/AsteraX.jslib",children:"example game for JavaScript"})," and for ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/unity-asterax/blob/62746bf2aba85176ace268eabc547dc5ef64e79c/Assets/__Scripts/PlayerShip.cs#L141",children:"C# bridge"})," (take note of the DLL Import)."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:i}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),m=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);