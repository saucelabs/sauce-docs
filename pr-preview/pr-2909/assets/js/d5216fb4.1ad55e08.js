"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[24423],{12352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),s=t(28453),l=t(86025);const r={id:"review-workflow",title:"Visual Component Testing Review Workflow",sidebar_label:"Review Workflow"},o=void 0,c={id:"visual/component-testing/workflow/review-workflow",title:"Visual Component Testing Review Workflow",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/component-testing/workflow/review-workflow.md",sourceDirName:"visual/component-testing/workflow",slug:"/visual/component-testing/workflow/review-workflow",permalink:"/sauce-docs/pr-preview/pr-2909/visual/component-testing/workflow/review-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/workflow/review-workflow.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"review-workflow",title:"Visual Component Testing Review Workflow",sidebar_label:"Review Workflow"}},a={},d=[{value:"Main Review Workflow",id:"main-review-workflow",level:2},{value:"1. Start Reviewing.",id:"1-start-reviewing",level:3},{value:"2. Review UI State.",id:"2-review-ui-state",level:3},{value:"3. Accept or Reject",id:"3-accept-or-reject",level:3},{value:"4. Continue Reviewing",id:"4-continue-reviewing",level:3},{value:"5. Review Complete",id:"5-review-complete",level:3},{value:"Testing Against Multiple Devices and Resolutions",id:"testing-against-multiple-devices-and-resolutions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,i.jsxs)(n.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,i.jsx)(n.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,i.jsx)(n.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,i.jsx)(n.h2,{id:"main-review-workflow",children:"Main Review Workflow"}),"\n",(0,i.jsx)(n.p,{children:"Learn the Screener workflow for reviewing UIs. Each UI state under test has one of the following statuses:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"UI State"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"New"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Has not been reviewed yet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Changed"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Has changed visually when compared to its accepted baseline."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Accepted"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Is visually the same as its baseline OR has been reviewed and accepted by a team member."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Rejected"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Has been reviewed, found to have defects, and rejected by a team member."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"1-start-reviewing",children:"1. Start Reviewing."}),"\n",(0,i.jsxs)(n.p,{children:["When a test has a ",(0,i.jsx)(n.strong,{children:"New"})," or ",(0,i.jsx)(n.strong,{children:"Changed"})," UI state, it will show a ",(0,i.jsx)(n.strong,{children:"Review"})," button:"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-button.png"),alt:"Component Review Button"}),"\n",(0,i.jsxs)(n.p,{children:["Clicking ",(0,i.jsx)(n.strong,{children:"Review"})," will display a list of your UI states filtered to only those needing review."]}),"\n",(0,i.jsx)(n.p,{children:"To start reviewing, click on the first UI state:"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-state.jpeg"),alt:"Component Review State"}),"\n",(0,i.jsx)(n.h3,{id:"2-review-ui-state",children:"2. Review UI State."}),"\n",(0,i.jsx)(n.p,{children:"You'll then be presented with screenshots of the selected UI state:"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-screenshots.jpeg"),alt:"Component Review Screenshot"}),"\n",(0,i.jsx)(n.p,{children:"If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Changed"})," UI states will include highlights of visual changes directly overlayed on the screenshots."]}),"\n",(0,i.jsx)(n.h3,{id:"3-accept-or-reject",children:"3. Accept or Reject"}),"\n",(0,i.jsx)(n.p,{children:"After reviewing the UI state, you can either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accept"}),": if the screenshots are as expected, which will set the current as the new baseline (keyboard shortcut = Shift + Up Arrow); or"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reject"}),": if defects are found which need to be fixed (keyboard shortcut = Shift + Down Arrow)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To Accept or Reject, you can use the aforementioned keyboard shortcuts or select from the status dropdown:"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-accept.png"),alt:"Component Review Accept",width:"200px"}),"\n",(0,i.jsx)(n.h3,{id:"4-continue-reviewing",children:"4. Continue Reviewing"}),"\n",(0,i.jsx)(n.p,{children:"Continue reviewing the remaining UI states. You can navigate by clicking on the next/previous arrows (pictured below) or by using keyboard shortcuts (next = Right Arrow; previous = Left Arrow):"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-next.png"),alt:"Component Review Next"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.strong,{children:"Accept All"})," button to quickly set all filtered UI states to accepted."]}),"\n",(0,i.jsx)(n.h3,{id:"5-review-complete",children:"5. Review Complete"}),"\n",(0,i.jsx)(n.p,{children:"When all UI states have been reviewed, the filtered state list will be empty:"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/visual/component-review-complete.png"),alt:"Component Review Complete"}),"\n",(0,i.jsxs)(n.p,{children:["The build status will be updated to ",(0,i.jsx)(n.strong,{children:"Success"})," when all UI states have been accepted."]}),"\n",(0,i.jsxs)(n.p,{children:["The build status will be updated to ",(0,i.jsx)(n.strong,{children:"Failure"})," when there are rejected UI states."]}),"\n",(0,i.jsx)(n.h2,{id:"testing-against-multiple-devices-and-resolutions",children:"Testing Against Multiple Devices and Resolutions"}),"\n",(0,i.jsx)(n.p,{children:"Screener provides the ability to test responsive designs across various devices and resolutions."}),"\n",(0,i.jsxs)(n.p,{children:["To test against multiple resolutions and/or devices, add the ",(0,i.jsx)(n.code,{children:"resolutions"})," option to your ",(0,i.jsx)(n.code,{children:"screener.config.js"})," file, with an array of resolution items."]}),"\n",(0,i.jsx)(n.p,{children:"Each resolution item in the array is either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A string in the format: ",(0,i.jsx)(n.code,{children:"<width>x<height>"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"'1024x768'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["An object with ",(0,i.jsx)(n.code,{children:"deviceName"})," and optional ",(0,i.jsx)(n.code,{children:"deviceOrientation"})," properties.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"{ deviceName: 'iPhone 6' }\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["Supported ",(0,i.jsx)("code",{children:"deviceName"})," value options (",(0,i.jsx)("strong",{children:"click here to expand"}),"):"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"iPad"}),(0,i.jsx)("li",{children:"iPad Pro"}),(0,i.jsx)("li",{children:"iPhone 4"}),(0,i.jsx)("li",{children:"iPhone 5"}),(0,i.jsx)("li",{children:"iPhone 6"}),(0,i.jsx)("li",{children:"iPhone 6 Plus"}),(0,i.jsx)("li",{children:"iPhone 7"}),(0,i.jsx)("li",{children:"iPhone 7 Plus"}),(0,i.jsx)("li",{children:"iPhone 8"}),(0,i.jsx)("li",{children:"iPhone 8 Plus"}),(0,i.jsx)("li",{children:"iPhone X"}),(0,i.jsx)("li",{children:"Galaxy S6"}),(0,i.jsx)("li",{children:"Galaxy S7"}),(0,i.jsx)("li",{children:"Galaxy S8"}),(0,i.jsx)("li",{children:"Nexus 4"}),(0,i.jsx)("li",{children:"Nexus 5"}),(0,i.jsx)("li",{children:"Nexus 5X"}),(0,i.jsx)("li",{children:"Nexus 6P"}),(0,i.jsx)("li",{children:"Nexus 7"}),(0,i.jsx)("li",{children:"Nexus 10"})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example config using ",(0,i.jsx)(n.code,{children:"resolutions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"module.exports = {\n  ...\n\n  resolutions: [\n    '1024x768',\n    {\n      deviceName: 'iPhone 6'\n    },\n    {\n      deviceName: 'iPhone 6 Plus',\n      deviceOrientation: 'landscape'\n    }\n  ]\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);