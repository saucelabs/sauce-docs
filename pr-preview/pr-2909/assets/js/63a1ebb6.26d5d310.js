"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[68221],{89567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(74848),s=a(28453);const i={id:"limitations",title:"Limitations for TestCafe",sidebar_label:"Limitations"},o=void 0,c={id:"web-apps/automated-testing/testcafe/limitations",title:"Limitations for TestCafe",description:"Special Characters in Test Names",source:"@site/docs/web-apps/automated-testing/testcafe/limitations.md",sourceDirName:"web-apps/automated-testing/testcafe",slug:"/web-apps/automated-testing/testcafe/limitations",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/testcafe/limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/testcafe/limitations.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"limitations",title:"Limitations for TestCafe",sidebar_label:"Limitations"},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/testcafe/advanced"},next:{title:"Using Replay",permalink:"/sauce-docs/pr-preview/pr-2909/web-apps/automated-testing/replay"}},r={},l=[{value:"Special Characters in Test Names",id:"special-characters-in-test-names",level:3},{value:"TestCafe 3.0.1 + Chrome/Edge + Sauce Connect",id:"testcafe-301--chromeedge--sauce-connect",level:3},{value:"TestCafe Native Automation + Chrome + Sauce Connect",id:"testcafe-native-automation--chrome--sauce-connect",level:3},{value:"Disable Native Automation",id:"disable-native-automation",level:4},{value:"Manually Setting the Request Proxy:",id:"manually-setting-the-request-proxy",level:4}];function u(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"special-characters-in-test-names",children:"Special Characters in Test Names"}),"\n",(0,n.jsx)(t.p,{children:"We recommend that you avoid using special characters when naming your tests. If your test name contains any special characters, your test may not run, or its artifacts may not be visible on our platform."}),"\n",(0,n.jsx)(t.h3,{id:"testcafe-301--chromeedge--sauce-connect",children:"TestCafe 3.0.1 + Chrome/Edge + Sauce Connect"}),"\n",(0,n.jsx)(t.p,{children:"When using Sauce-Connect, Chrome, and Edge browsers cannot load any website through the tunnel. It will behave as if there is no tunnel defined."}),"\n",(0,n.jsx)(t.h3,{id:"testcafe-native-automation--chrome--sauce-connect",children:"TestCafe Native Automation + Chrome + Sauce Connect"}),"\n",(0,n.jsxs)(t.p,{children:["If your tests are issuing ",(0,n.jsx)(t.a,{href:"https://testcafe.io/documentation/403971/guides/intermediate-guides/api-testing#proxy-settings",children:"TestCafe HTTP requests"}),"\nand require a Sauce Connect tunnel, you will need to either ",(0,n.jsx)(t.a,{href:"https://testcafe.io/documentation/403971/guides/intermediate-guides/api-testing#proxy-settings",children:"set the proxy manually"})," or disable TestCafe's Native Automation."]}),"\n",(0,n.jsx)(t.h4,{id:"disable-native-automation",children:"Disable Native Automation"}),"\n",(0,n.jsxs)(t.p,{children:["This is the recommended approach, which poses less of a hassle.\nDisable Native Automation in your ",(0,n.jsx)(t.code,{children:".testcaferc.js"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"module.exports = {\n  disableNativeAutomation: true,\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"and then ensure that our runner picks up the TestCafe config file by also\nspecifying it in the saucectl yaml config:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"testcafe:\n  version: 3.4.0\n  configFile: .testcaferc.js\n"})}),"\n",(0,n.jsx)(t.h4,{id:"manually-setting-the-request-proxy",children:"Manually Setting the Request Proxy:"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can apply the proxy settings as you make requests:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// HTTP_PROXY is pre-populated when using Sauce Connect\nconst items = process.env.HTTP_PROXY.split(':');\nconst host = items[1].replaceAll('/', '');\nconst port = items[2];\nconst response = await t.request({\n  url: `http://some-internal-resource.example.com/`,\n  method: 'get',\n  proxy: {\n    protocol: 'http',\n    host,\n    port,\n  }\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>c});var n=a(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);