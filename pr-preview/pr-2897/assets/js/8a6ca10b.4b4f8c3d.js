"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[17447],{44461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),a=(n(11470),n(19365),n(86025));const s={id:"triage",title:"Triage",sidebar_label:"Triage",description:"Allows you to see crashes or errors with the most number of occurrences, and allow you to take action, such as assign, link to Jira ticket, and more."},o=void 0,l={id:"error-reporting/web-console/triage",title:"Triage",description:"Allows you to see crashes or errors with the most number of occurrences, and allow you to take action, such as assign, link to Jira ticket, and more.",source:"@site/docs/error-reporting/web-console/triage.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/triage",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/web-console/triage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/triage.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"triage",title:"Triage",sidebar_label:"Triage",description:"Allows you to see crashes or errors with the most number of occurrences, and allow you to take action, such as assign, link to Jira ticket, and more."},sidebar:"backtrace",previous:{title:"Releases",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/web-console/releases"},next:{title:"Explore",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/web-console/explore"}},c={},u=[{value:"View and Manage State",id:"view-and-manage-state",level:2},{value:"Customize the Columns Displayed in the Triage View",id:"customize-the-columns-displayed-in-the-triage-view",level:2},{value:"Details Page",id:"details-page",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"Assign",id:"assign",level:3},{value:"Link To Issue",id:"link-to-issue",level:3},{value:"Comments and Tags",id:"comments-and-tags",level:3},{value:"Mute or Resolve",id:"mute-or-resolve",level:3},{value:"Reopen Criteria - Mute or Resolve Until",id:"reopen-criteria---mute-or-resolve-until",level:3},{value:"Merge / Unmerge",id:"merge--unmerge",level:3},{value:"Inspect + Copy/Paste Callstack",id:"inspect--copypaste-callstack",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When opening the Web Console, you will default to the Triage view for the selected project. The Triage view displays crashes or errors grouped by fingerprint (a hash that is generated when processing crashes through Backtrace's deduplication algorithms). The fingerprint is used to signify a unique error with a common root cause."}),"\n",(0,r.jsx)(t.p,{children:"The Triage view allows you to filter errors (fingerprints) you want to view, provides aggregate information about the fingerprint, and enables actions to take to support resolution of the fingerprint. The following actions are available for users to take on fingerprints:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"View and Manage by State - Use Filter Shortcuts like Open, In Progress, Muted or - Resolved to view fingerprints that are relevant to your activity in the Triage view."}),"\n",(0,r.jsx)(t.li,{children:"Set Reopen Criteria - Use Resolved Until or Muted Until functionality to tell the system to reopen a fingerprint if it's seen in a future version or after a certain period of time."}),"\n",(0,r.jsx)(t.li,{children:"View Details - Each Fingerprint has a Details view which provides more context for the fingerprint, including some analysis of attributes associated to the crashes, a list of all the instances of this fingerprint, ability to tag and comment, and some quick actions to Debug the latest trace or view a larger Instance table list."}),"\n",(0,r.jsx)(t.li,{children:"Assign - The fingerprint can be assigned to a user in Backtrace to indicate there is a user that is responsible to resolve it."}),"\n",(0,r.jsx)(t.li,{children:"Link to Issue - A user can create a new issue in a 3rd party system like Jira or GitHub issues that is populated with some information about the fingerprint, and a link back to more details about the fingerprint in Backtrace."}),"\n",(0,r.jsx)(t.li,{children:"Comment and Tag- A comment thread is available in the Details view of a fingerprint. Tags can be applied to fingerprints for more ad-hoc grouping and classification."}),"\n",(0,r.jsx)(t.li,{children:"Merge / Unmerge - If you find 2 or more fingerprints that should really be grouped together, take the Merge action to create a new fingerprint to group future incoming errors into."}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/triage-view.webp"),alt:"The Triage view allows you to see errors with the most number of occurrences and take action."}),"\n",(0,r.jsx)(t.h2,{id:"view-and-manage-state",children:"View and Manage State"}),"\n",(0,r.jsx)(t.p,{children:"In the Triage view, each fingerprint has a status of Open, Resolved, In Progress or Muted. These states help engineering managers and engineers know which crashes need analysis, which are being actively worked on, which are resolved, and which can be ignored or muted."}),"\n",(0,r.jsx)(t.p,{children:"We normally see engineering managers start with Open fingerprints so that they can make sure relevant issues are disposed of properly, by taking actions such as assigning to an engineer, linking to Jira issue, marking as Resolved or Muted)."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/actions-in-triage-view.webp"),alt:"Shows different actions available in the Triage view, such as assigning to an engineer, linking to Jira issue, marking as Resolved or Muted."}),"\n",(0,r.jsx)(t.p,{children:"For each fingerprint in the result list you can view and modify data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"View and modify the state from Open/In Progress to Resolved and Muted."}),"\n",(0,r.jsx)(t.li,{children:"View the Fingerprint and hover to get actions to View the Details page or Open the Fingerprint in the Debug view."}),"\n",(0,r.jsx)(t.li,{children:"View the head of the callstack and hover to get a few more lines."}),"\n",(0,r.jsx)(t.li,{children:"View the number of occurrences and number of impacted hosts or users, and activity history."}),"\n",(0,r.jsx)(t.li,{children:"View system applied tags (classifiers), and manage custom tags."}),"\n",(0,r.jsx)(t.li,{children:"View and manage assignees and linked tickets."}),"\n",(0,r.jsx)(t.li,{children:"Select multiple fingerprints to take the merge action, or other bulk actions, such as assignment, mute, or resolve."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A note on Open, In Progress, Resolved and Muted states:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fingerprints can be marked as Resolved or Muted using the state column. Fingerprints that have been marked as Resolved or Muted will stay in that state, to allow you to better organize the expected state of instability in your environment."}),"\n",(0,r.jsx)(t.li,{children:"A fingerprint is Open if there are no assignees or linked tickets (and has not been marked as Resolved or Muted). The act of assigning a fingerprint or linking it to an issue will cause the Open fingerprint to be listed as In Progress. By the same notion, a fingerprint that is In Progress and has its assignees removed and tickets unlinked will be listed as Open."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"customize-the-columns-displayed-in-the-triage-view",children:"Customize the Columns Displayed in the Triage View"}),"\n",(0,r.jsx)(t.p,{children:"A user can add additional columns to the Triage view to help them better assess priority. A user can choose any of the system or custom attributes and an aggregation visual to see things like a Distribution of Versions or Unique number of Users impacted."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/customize-columns-in-triage.png"),alt:"Shows additional attributes to add as columns in the Triage view."}),"\n",(0,r.jsx)(t.h2,{id:"details-page",children:"Details Page"}),"\n",(0,r.jsx)(t.p,{children:"Hovering over a fingerprint will allow you to take the action to View Details Page for the fingerprint. The Details Page provides ability to analyze additional attributes across the fingerprint for better identification of patterns."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/triage-view-fingerprint-details.webp"),alt:"Shows fingerprint details in the Triage view."}),"\n",(0,r.jsx)(t.h2,{id:"other-actions",children:"Other Actions"}),"\n",(0,r.jsx)(t.p,{children:"This section will discuss the actions you can take on a fingerprint."}),"\n",(0,r.jsx)(t.h3,{id:"assign",children:"Assign"}),"\n",(0,r.jsx)(t.p,{children:"The fingerprint can be assigned to a user in Backtrace to indicate there is a user that is responsible to resolve it. This action also sets the state of the fingerprint to In Progress."}),"\n",(0,r.jsx)(t.h3,{id:"link-to-issue",children:"Link To Issue"}),"\n",(0,r.jsx)(t.p,{children:"A user can create a new issue in a 3rd party system like Jira or GitHub issues that is populated with some information about the fingerprint, and a link back to more details about the fingerprint in Backtrace. This action also sets the state of the fingerprint to In Progress."}),"\n",(0,r.jsx)(t.h3,{id:"comments-and-tags",children:"Comments and Tags"}),"\n",(0,r.jsx)(t.p,{children:"A comment thread is available in the Details view of a fingerprint soon. Users can post and edit their comments to assist in the resolution flow. Tags can be applied to fingerprints for more ad-hoc grouping and classification."}),"\n",(0,r.jsx)(t.h3,{id:"mute-or-resolve",children:"Mute or Resolve"}),"\n",(0,r.jsx)(t.p,{children:"You can take explicit Mute or Resolve actions on a fingerprint. Mute a fingerprint when you don't want it to appear as Open or In Progress any more. Mark as Resolved when you think the issue is fixed. Fingerprints that have been marked as Resolved or Muted will stay in that state, to allow you to better organize the expected state of instability in your environment."}),"\n",(0,r.jsx)(t.h3,{id:"reopen-criteria---mute-or-resolve-until",children:"Reopen Criteria - Mute or Resolve Until"}),"\n",(0,r.jsx)(t.p,{children:"You can take explicit Mute Until or Resolve Until actions on a fingerprint to specify if/when you would like the fingerprint and any linked issues (i.e. Jira) to be reopened. Customers use this capability to specify which criteria should be used to determine if a fingerprint should be re-opened and to automate issue tracking workflows to respond to regressions."}),"\n",(0,r.jsx)(t.p,{children:'You can specify conditions such as "until the fingerprint is seen in version {choose version attribute} greater than {value}" or "until the fingerprint is seen again after < 30 minutes | 2 hours | 1 day | 1 week | 1 month>".'}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/mute-until.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"If the conditions are met, the system sets the state to Open, reopens any linked issues, increments the attribute invariant_reopen_count by 1, and populates the invariant_reopen_last_time with the date and time the fingerprint was reopened. With this information populated, engineers and managers can build useful views in Triage and Explore to show regressions that were introduced."}),"\n",(0,r.jsx)(t.h3,{id:"merge--unmerge",children:"Merge / Unmerge"}),"\n",(0,r.jsx)(t.p,{children:"If you find 2 or more fingerprints that should really be grouped together, take the Merge action after selecting multiple fingerprints in the Triage view to create a new fingerprint to group future incoming errors into. Unmerge from a fingerprint's Details view."}),"\n",(0,r.jsx)(t.h3,{id:"inspect--copypaste-callstack",children:"Inspect + Copy/Paste Callstack"}),"\n",(0,r.jsx)(t.p,{children:'By hovering over a fingerprint\'s callstack (in the "Description" field) it will expand out so you can see more of it. If you want to see or share the full callstack, you can press the "Copy Callstack" button at the top of the window that comes up.'}),"\n",(0,r.jsx)("img",{src:(0,a.A)("img/error-reporting/console-views/triage-view-copy-callstack.png"),alt:"Shows the callstack for the fingerprint, which you can copy."}),"\n",(0,r.jsx)(t.p,{children:"The callstack shown in the UI on hover and the callstack you copy can be slightly different. This is because the callstack you are seeing in the UI has been normalized / deduplicated and grouped into a fingerprint by our processes, whereas the copy button grabs the raw callstack data. While the normalized callstack is great for quickly trying to understand where in your application an error has occurred, copying the callstack will give you more details (including frame + line numbers)."}),"\n",(0,r.jsxs)(t.p,{children:["For more context on the deduplication process, see ",(0,r.jsx)(t.a,{href:"/error-reporting/project-setup/deduplication/",children:"Deduplication Overview"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=g({queryString:n,groupId:i}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function x(e){const t=(0,f.A)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);