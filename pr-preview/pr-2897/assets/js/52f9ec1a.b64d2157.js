"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33767],{5508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=s(74848),o=s(28453);const t={id:"supported-browsers",title:"Browsers and Devices Supported for Visual Component Testing",sidebar_label:"Supported Browsers and Devices"},i=void 0,a={id:"visual/component-testing/supported-browsers",title:"Browsers and Devices Supported for Visual Component Testing",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/component-testing/supported-browsers.md",sourceDirName:"visual/component-testing",slug:"/visual/component-testing/supported-browsers",permalink:"/sauce-docs/pr-preview/pr-2897/visual/component-testing/supported-browsers",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/supported-browsers.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"supported-browsers",title:"Browsers and Devices Supported for Visual Component Testing",sidebar_label:"Supported Browsers and Devices"}},c={},l=[{value:"Supported Browsers",id:"supported-browsers",level:2},{value:"Adding Browsers",id:"adding-browsers",level:2},{value:"Running Cross-Browser Tests on a Specific Branch",id:"running-cross-browser-tests-on-a-specific-branch",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,r.jsxs)(n.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,r.jsx)(n.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,r.jsx)(n.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,r.jsx)(n.p,{children:"For cross-browser testing (i.e., testing across multiple browsers), we provide cloud browsers and device emulators."}),"\n",(0,r.jsx)(n.h2,{id:"supported-browsers",children:"Supported Browsers"}),"\n",(0,r.jsx)(n.p,{children:"The following browsers are available in our cloud:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"browserName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"version"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"chrome"})}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"-Do not set-"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"firefox"})}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"-Do not set-"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"internet explorer"})}),(0,r.jsx)("td",{children:"11"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["To test against additional browsers (e.g., Safari and Edge), you can ",(0,r.jsx)(n.a,{href:"/visual/component-testing/integrations/sauce-labs",children:"integrate Screener with Sauce Labs"})," to gain access."]}),"\n",(0,r.jsx)(n.p,{children:"Cross-browser testing is available through Screener's Perform plan. By default, Screener runs tests against the Chrome browser."}),"\n",(0,r.jsx)(n.h2,{id:"adding-browsers",children:"Adding Browsers"}),"\n",(0,r.jsxs)(n.p,{children:["To test against multiple browsers, add the ",(0,r.jsx)(n.code,{children:"browsers"})," option to your ",(0,r.jsx)(n.code,{children:"screener.config.js"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  browsers: [\n    {\n      browserName: 'chrome'\n    },\n    {\n      browserName: 'firefox'\n    },\n    {\n      browserName: 'internet explorer',\n      version: '11'\n    }\n  ]\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-cross-browser-tests-on-a-specific-branch",children:"Running Cross-Browser Tests on a Specific Branch"}),"\n",(0,r.jsx)(n.p,{children:"To speed up builds, you may want to run Cross-Browser Testing only when committing into a particular branch. For example, when merging PRs into the main branch."}),"\n",(0,r.jsx)(n.p,{children:"Here is a CircleCI example that only runs cross browser tests when committing into the main branch:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"var config = {\n  // regular screener config\n};\n\n// only run cross browser tests when merging into 'main' branch\nif (process.env.CIRCLE_BRANCH === 'main') {\n  config.browsers = [\n    {\n      browserName: 'chrome'\n    },\n    {\n      browserName: 'firefox'\n    },\n    {\n      browserName: 'internet explorer',\n      version: '11'\n    }\n  ];\n}\n\nmodule.exports = config;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsx)(n.p,{children:"For more information on what we support, see:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://saucelabs.com/platform/supported-browsers-devices",children:"Sauce Labs | Supported Browsers and Devices"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Sauce Labs Platform Configurator"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);