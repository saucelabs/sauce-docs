"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[9544],{29812:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(74848),t=n(28453);n(11470),n(19365),n(86025);const s={id:"package-installation",title:"Package Installation",sidebar_label:"Package Installation",description:"Instructions for installing Backtrace's packages."},l=void 0,c={id:"error-reporting/advanced/package-installation",title:"Package Installation",description:"Instructions for installing Backtrace's packages.",source:"@site/docs/error-reporting/advanced/package-installation.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/package-installation",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/advanced/package-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/package-installation.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"package-installation",title:"Package Installation",sidebar_label:"Package Installation",description:"Instructions for installing Backtrace's packages."},sidebar:"backtrace",previous:{title:"Platform Overview",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/advanced/platform-overview"},next:{title:"Server Installation",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/advanced/coroner/server-installation"}},i={},o=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Linux (RHEL)",id:"linux-rhel",level:2},{value:"Debian-Based Systems (Including Ubuntu)",id:"debian-based-systems-including-ubuntu",level:2},{value:"FreeBSD",id:"freebsd",level:2}];function u(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Follow the instructions below to install Backtrace's packages using your preferred package manager."}),"\n",(0,r.jsx)(a.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["A Backtrace account (",(0,r.jsx)(a.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,r.jsx)(a.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(a.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,r.jsx)(a.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["A Backtrace project and a ",(0,r.jsx)(a.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"linux-rhel",children:"Linux (RHEL)"}),"\n",(0,r.jsx)(a.p,{children:"To install Backtrace packages, first install Backtrace's RPM mirror by running the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"$ curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.rpm.sh | sudo bash\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Replace ",(0,r.jsx)(a.code,{children:"<LICENSE>"})," with your license number. Contact us, if you haven't received your license yet."]}),"\n",(0,r.jsxs)(a.p,{children:["This configures ",(0,r.jsx)(a.code,{children:"yum"})," to pull from Backtrace's RPM mirror. To verify the proper ",(0,r.jsx)(a.code,{children:"yum"})," configuration, run the following commands:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# Clean and update yum package listing\n$ sudo yum clean; sudo yum update\n\n# Confirm that the backtrace-* packages are available\n$ yum list ^backtrace-*\nbacktrace-coresnap\nbacktrace-coronerd\nbacktrace-coroner\nbacktrace-ptrace\nbacktrace-hydra\n[...]\n"})}),"\n",(0,r.jsx)(a.p,{children:"To install the desired packages, use the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# Install packages\n$ yum install backtrace-<package-name>\n"})}),"\n",(0,r.jsx)(a.h2,{id:"debian-based-systems-including-ubuntu",children:"Debian-Based Systems (Including Ubuntu)"}),"\n",(0,r.jsx)(a.p,{children:"To install Backtrace packages, first install Backtrace's APT mirror by running the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"$ curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.deb.sh | sudo bash\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Replace ",(0,r.jsx)(a.code,{children:"<LICENSE>"})," with your license number. Contact us, if you haven't received your license yet."]}),"\n",(0,r.jsxs)(a.p,{children:["This configures ",(0,r.jsx)(a.code,{children:"apt"})," to pull from Backtrace's APT mirror. To verify proper ",(0,r.jsx)(a.code,{children:"apt"})," configuration, run the following commands:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# Clean and update apt package listing\n$ apt-get clean; apt-get update\n\n# Confirm that backtrace-* packages are available\n$ apt-cache search ^backtrace-*\nbacktrace-coresnap\nbacktrace-coronerd\nbacktrace-coroner\nbacktrace-ptrace\nbacktrace-hydra\n[...]\n"})}),"\n",(0,r.jsx)(a.p,{children:"To install the necessary packages, use the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"# Install packages (on machines which submit snapshots)\n$ apt-get install backtrace-<package-name>\n"})}),"\n",(0,r.jsx)(a.h2,{id:"freebsd",children:"FreeBSD"}),"\n",(0,r.jsxs)(a.p,{children:["Refer to the ",(0,r.jsx)(a.a,{href:"/error-reporting/platform-integrations/coresnap/setup",children:"dedicated page for FreeBSD"})," for installation instructions."]})]})}function d(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var r=n(18215);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>y});var r=n(96540),t=n(18215),s=n(23104),l=n(56347),c=n(205),i=n(57485),o=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:t}}=e;return{value:a,label:n,attributes:r,default:t}}))}(n);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(t.location.search);a.set(s,e),t.replace({...t.location,search:a.toString()})}),[s,t])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[o,d]=m({queryString:n,groupId:t}),[b,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,s]=(0,u.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),f=(()=>{const e=o??b;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function v(e){let{className:a,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const a=e.currentTarget,n=i.indexOf(a),t=c[n].value;t!==r&&(o(a),l(t))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:c.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,t.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===a}),children:n??a},a)}))})}function x(e){let{lazy:a,children:n,selectedValue:t}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function j(e){const a=b(e);return(0,k.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,k.jsx)(v,{...e,...a}),(0,k.jsx)(x,{...e,...a})]})}function y(e){const a=(0,g.A)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>c});var r=n(96540);const t={},s=r.createContext(t);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);