"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[25860],{29195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=n(74848),r=n(28453),i=n(86025);n(11470),n(19365);const a={id:"review-workflow",title:"Visual E2E Testing Review Worklow",sidebar_label:"Review Workflow"},l=void 0,o={id:"visual/e2e-testing/workflow/review-workflow",title:"Visual E2E Testing Review Worklow",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/e2e-testing/workflow/review-workflow.md",sourceDirName:"visual/e2e-testing/workflow",slug:"/visual/e2e-testing/workflow/review-workflow",permalink:"/visual/e2e-testing/workflow/review-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/workflow/review-workflow.md",tags:[],version:"current",lastUpdatedBy:"Marija Stupar",lastUpdatedAt:1710778599e3,frontMatter:{id:"review-workflow",title:"Visual E2E Testing Review Worklow",sidebar_label:"Review Workflow"}},c={},u=[{value:"1. Start Reviewing",id:"1-start-reviewing",level:2},{value:"2. Review UI State",id:"2-review-ui-state",level:2},{value:"3. Accept or Reject",id:"3-accept-or-reject",level:2},{value:"4. Continue Reviewing",id:"4-continue-reviewing",level:2},{value:"5. Review Complete",id:"5-review-complete",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,s.jsxs)(t.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,s.jsx)(t.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,s.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,s.jsx)(t.p,{children:"Learn the Screener workflow for reviewing UIs. Each UI state under test has one of the following statuses:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"New"})}),(0,s.jsx)("td",{children:"A new UI state that has not been reviewed yet."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Changed"})}),(0,s.jsx)("td",{children:"A UI state that has changed visually when compared to its accepted baseline."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Accepted"})}),(0,s.jsxs)("td",{children:["A UI state that is visually the same as its baseline\n",(0,s.jsx)("p",{children:"OR has been reviewed and accepted by a team member."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Rejected"})}),(0,s.jsx)("td",{children:"A UI state that has been reviewed, found to have defects, and rejected by a team member."})]})]}),"\n",(0,s.jsx)(t.h2,{id:"1-start-reviewing",children:"1. Start Reviewing"}),"\n",(0,s.jsxs)(t.p,{children:["When a test has ",(0,s.jsx)(t.strong,{children:"Changed"})," or ",(0,s.jsx)(t.strong,{children:"New"})," UI states, it will show a Review button:"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-button.png"),alt:"E2E Review Button"}),"\n",(0,s.jsx)(t.p,{children:"Clicking on the Review button will display a list of your UI states filtered to only those needing review."}),"\n",(0,s.jsx)(t.p,{children:"Click on the first UI state to start reviewing:"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-state.jpeg"),alt:"E2E Review State"}),"\n",(0,s.jsx)(t.h2,{id:"2-review-ui-state",children:"2. Review UI State"}),"\n",(0,s.jsx)(t.p,{children:"You will be presented with screenshots of the selected UI state:"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-screenshots.jpeg"),alt:"E2E Review Screenshots"}),"\n",(0,s.jsx)(t.p,{children:"If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side."}),"\n",(0,s.jsx)(t.p,{children:"Changed UI states will include highlights of visual changes directly overlayed on the screenshots."}),"\n",(0,s.jsx)(t.admonition,{title:"Tip: Ignoring",type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/visual/e2e-testing/workflow/ignoring-changes",children:"Learn how to ignore changes"}),"."]})}),"\n",(0,s.jsx)(t.admonition,{title:"Tip: Change Details",type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/visual/e2e-testing/workflow/change-details",children:"Learn how to view change details"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"3-accept-or-reject",children:"3. Accept or Reject"}),"\n",(0,s.jsx)(t.p,{children:"After reviewing the UI state, you can either:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": if the screenshots are as expected, which will set the current as the new baseline (tip: keyboard shortcut is Shift + Up Arrow)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Reject"}),": if defects are found which need to be fixed (tip: keyboard shortcut is Shift + Down Arrow)."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-accept.png"),alt:"E2E Review Accept",width:"200"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"4-continue-reviewing",children:"4. Continue Reviewing"}),"\n",(0,s.jsx)(t.p,{children:"Continue reviewing the remaining UI states by clicking one of the below options (or use keyboard shortcuts to navigate through UI states)."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Next"})," arrow (tip: keyboard shortcut is Right Arrow)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Previous"})," arrow (tip: keyboard shortcut is Left Arrow)."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-next.png"),alt:"E2E Review Next",width:"150"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Tip: Accept All Button",type:"tip",children:(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.strong,{children:"Accept All"})," button to quickly set ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"all"})})," filtered UI states to accepted."]})}),"\n",(0,s.jsx)(t.h2,{id:"5-review-complete",children:"5. Review Complete"}),"\n",(0,s.jsx)(t.p,{children:"When all UI states have been reviewed, the filtered state list will be empty."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/visual/e2e-review-complete.png"),alt:"E2E Review Complete"}),"\n",(0,s.jsxs)(t.p,{children:["The build status will be updated to ",(0,s.jsx)(t.strong,{children:"Success"})," when all UI states have been accepted."]}),"\n",(0,s.jsxs)(t.p,{children:["The build status will be updated to ",(0,s.jsx)(t.strong,{children:"Failure"})," when there are rejected UI states."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/visual/e2e-testing/integrations/continuous-integration",children:"Integrate into your CI process"})," for continuous visual testing."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(18215),i=n(23104),a=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function w(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!w({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:r}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=c??v;return w({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!w({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function m(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(m,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);