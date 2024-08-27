"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39858],{90134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(74848),s=t(28453),i=(t(86025),t(11470)),a=t(19365);const l={id:"continuous-integration",title:"Integrate Visual Component Testing Into Your CI",sidebar_label:"Continuous Integration"},o=void 0,u={id:"visual/component-testing/integrations/continuous-integration",title:"Integrate Visual Component Testing Into Your CI",description:"Get continuous visual test automation by integrating Visual Component tests directly into your continuous integration (CI) build.",source:"@site/docs/visual/component-testing/integrations/continuous-integration.md",sourceDirName:"visual/component-testing/integrations",slug:"/visual/component-testing/integrations/continuous-integration",permalink:"/sauce-docs/pr-preview/pr-2909/visual/component-testing/integrations/continuous-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/integrations/continuous-integration.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"continuous-integration",title:"Integrate Visual Component Testing Into Your CI",sidebar_label:"Continuous Integration"}},c={},d=[{value:"Setup Steps",id:"setup-steps",level:2},{value:"Additional Options",id:"additional-options",level:3},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Get continuous visual test automation by integrating Visual Component tests directly into your continuous integration (CI) build."}),"\n",(0,r.jsx)(n.p,{children:"Screener will automatically run tests, and pass or fail your builds depending on visual regressions found."}),"\n",(0,r.jsx)(n.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"After Screener is installed into your project, add the following command to your CI pipeline script:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"npm run test-storybook\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.code,{children:"baseBranch"})," option in your ",(0,r.jsx)(n.code,{children:"screener.config.js"})," file to the name of your base branch (",(0,r.jsx)(n.a,{href:"/visual/component-testing/workflow/baseline-branch",children:"learn why"}),"):"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  baseBranch: 'master'\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"additional-options",children:"Additional Options"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Integrate into your ",(0,r.jsx)(n.a,{href:"/visual/component-testing/integrations/github",children:"GitHub PR workflow"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["We recommend securing your API Key by storing it as an environment variable (i.e., store it in an environment variable called ",(0,r.jsx)(n.code,{children:"SCREENER_API_KEY"}),", then reference it in your ",(0,r.jsx)(n.code,{children:"screener.config.js"})," file with ",(0,r.jsx)(n.code,{children:"process.env.SCREENER_API_KEY"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Screener will automatically pull the build number and branch name from the following CI tools:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Jenkins"}),"\n",(0,r.jsx)(n.li,{children:"CircleCI"}),"\n",(0,r.jsx)(n.li,{children:"Travis CI"}),"\n",(0,r.jsx)(n.li,{children:"GitHub Actions"}),"\n",(0,r.jsx)(n.li,{children:"Bitbucket Pipelines"}),"\n",(0,r.jsx)(n.li,{children:"Buildkite"}),"\n",(0,r.jsx)(n.li,{children:"Visual Studio Team Services"}),"\n",(0,r.jsx)(n.li,{children:"Codeship"}),"\n",(0,r.jsx)(n.li,{children:"GitLab CI"}),"\n",(0,r.jsx)(n.li,{children:"Drone"}),"\n",(0,r.jsx)(n.li,{children:"Semaphore"}),"\n"]}),"\n",(0,r.jsxs)(i.A,{defaultValue:"CircleCI",values:[{label:"CircleCI",value:"CircleCI"},{label:"Travis CI",value:"Travis CI"},{label:"Bitbucket",value:"Bitbucket"},{label:"GitHub",value:"GitHub"},{label:"Other",value:"Other"}],children:[(0,r.jsxs)(a.A,{value:"CircleCI",children:[(0,r.jsx)(n.strong,{children:".circleci/config.yml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"version: 2\njobs:\nbuild:\nsteps:\n- checkout\n- run: npm install\n# Run Screener visual component tests\n- run: npm run test-storybook\n"})})]}),(0,r.jsxs)(a.A,{value:"Travis CI",children:[(0,r.jsx)(n.strong,{children:".travis.yml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"install:\n- npm install\n\nscript:\n- npm test\n# Run Screener visual component tests\n- npm run test-storybook\n"})})]}),(0,r.jsxs)(a.A,{value:"Bitbucket",children:[(0,r.jsx)(n.strong,{children:"bitbucket-pipelines.yml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"pipelines:\ndefault:\n- step:\n  script:\n  - npm install\n  - npm test\n  # Run Screener visual component tests\n  - npm run test-storybook\n"})})]}),(0,r.jsxs)(a.A,{value:"GitHub",children:[(0,r.jsx)(n.strong,{children:".github/workflows/github-actions.yml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"on: [push]\njobs:\ndefault:\nruns-on: ubuntu-latest\nsteps:\n- uses: actions/checkout@v2\n- uses: actions/setup-node@v1\n- run: npm install\n- run: npm run test-storybook\n"})})]}),(0,r.jsxs)(a.A,{value:"Other",children:[(0,r.jsx)(n.strong,{children:"General Example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install\n\n# Run Screener visual component tests\nnpm run test-storybook\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need help integrating Screener into your CI, or would like to see an example not listed here, ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/training-support",children:"contact our Support Team"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),s=t(18215),i=t(23104),a=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=m({queryString:t,groupId:s}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),v=(()=>{const e=u??b;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==r&&(u(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function I(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);