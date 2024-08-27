"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[40589],{87131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=s(74848),l=s(28453);s(86025);const c={id:"include-exclude-settings",title:"Including and Excluding UI States",sidebar_label:"Filtering UI States"},i=void 0,o={id:"visual/component-testing/workflow/include-exclude-settings",title:"Including and Excluding UI States",description:"When you want to test only a subset of your UI states, you can use Include and Exclude rules.",source:"@site/docs/visual/component-testing/workflow/include-exclude-settings.md",sourceDirName:"visual/component-testing/workflow",slug:"/visual/component-testing/workflow/include-exclude-settings",permalink:"/sauce-docs/pr-preview/pr-2908/visual/component-testing/workflow/include-exclude-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/workflow/include-exclude-settings.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"include-exclude-settings",title:"Including and Excluding UI States",sidebar_label:"Filtering UI States"}},r={},u=[{value:"<code>includeRules</code>",id:"includerules",level:2},{value:"<code>excludeRules</code>",id:"excluderules",level:2},{value:"Browser-Specific Rules",id:"browser-specific-rules",level:2},{value:"Resolution-Specific Rules",id:"resolution-specific-rules",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When you want to test only a subset of your UI states, you can use Include and Exclude rules."}),"\n",(0,t.jsxs)(n.p,{children:["These rules can be set as options in your ",(0,t.jsx)(n.code,{children:"screener.config.js"})," file."]}),"\n",(0,t.jsx)(n.h2,{id:"includerules",children:(0,t.jsx)(n.code,{children:"includeRules"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be kept. Example of using the ",(0,t.jsx)(n.code,{children:"includeRules"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  includeRules: [\n    /^Component/    // RegExp expression\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"excluderules",children:(0,t.jsx)(n.code,{children:"excludeRules"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be removed. Example of using the ",(0,t.jsx)(n.code,{children:"excludeRules"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  excludeRules: [\n    /^Component/    // RegExp expression\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"browser-specific-rules",children:"Browser-Specific Rules"}),"\n",(0,t.jsx)(n.p,{children:"You can use include/exclude rules to filter what UI states are tested in a particular browser."}),"\n",(0,t.jsx)(n.p,{children:"For example, to exclude a UI state from being tested in IE11 only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  browsers: [\n    {\n      browserName: 'internet explorer',\n      version: '11',\n      excludeRules: /^Component/\n    }\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"resolution-specific-rules",children:"Resolution-Specific Rules"}),"\n",(0,t.jsx)(n.p,{children:"You can use include/exclude rules to filter what UI states are tested in a particular resolution."}),"\n",(0,t.jsx)(n.p,{children:"For example, to exclude a UI state from being tested in 768x1024 resolution only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  resolutions: [\n    {\n      width: 768,\n      height: 1024,\n      excludeRules: /^Component/\n    }\n  ]\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const l={},c=t.createContext(l);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);