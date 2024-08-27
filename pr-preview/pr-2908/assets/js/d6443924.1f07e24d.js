"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1155],{61953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(74848),a=t(28453);t(11470),t(19365),t(86025);const l={id:"client-tools-unix",title:"Client Tools for UNIX",sidebar_label:"Client Tools for UNIX",description:"Client tools installation for Unix."},o=void 0,s={id:"error-reporting/advanced/client-tools-unix",title:"Client Tools for UNIX",description:"Client tools installation for Unix.",source:"@site/docs/error-reporting/advanced/client-tools-unix.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/client-tools-unix",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/client-tools-unix",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/client-tools-unix.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"client-tools-unix",title:"Client Tools for UNIX",sidebar_label:"Client Tools for UNIX",description:"Client tools installation for Unix."},sidebar:"backtrace",previous:{title:"PAM-LDAP Authentication",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/pam-ldap"},next:{title:"DWARF",permalink:"/sauce-docs/pr-preview/pr-2908/error-reporting/advanced/dwarf"}},i={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Client Tools Installation",id:"client-tools-installation",level:2},{value:"Coroner",id:"coroner",level:3},{value:"RHEL/CentOS",id:"rhelcentos",level:4},{value:"Ubuntu/Debian",id:"ubuntudebian",level:4},{value:"ptrace",id:"ptrace",level:3},{value:"RHEL/CentOS",id:"rhelcentos-1",level:4},{value:"Ubuntu/Debian",id:"ubuntudebian-1",level:4},{value:"Hydra",id:"hydra",level:3},{value:"RHEL/CentOS",id:"rhelcentos-2",level:4},{value:"Ubuntu/Debian",id:"ubuntudebian-2",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Backtrace account (",(0,r.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,r.jsx)(n.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A Backtrace project and a ",(0,r.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"client-tools-installation",children:"Client Tools Installation"}),"\n",(0,r.jsx)(n.p,{children:"These steps require a license number from Backtrace to install the necessary packages. Contact us to receive a license number before proceeding."}),"\n",(0,r.jsxs)(n.p,{children:["All tools are installed in ",(0,r.jsx)(n.code,{children:"/opt/backtrace/bin/"})," by default. We recommend you add this to your path:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ export PATH=$PATH:/opt/backtrace/bin\n"})}),"\n",(0,r.jsx)(n.h3,{id:"coroner",children:"Coroner"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"coroner"})," is the Backtrace object store client. It is used to submit and query the object store. Check out the ",(0,r.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-usage/",children:"coroner client usage"})," for more information."]}),"\n",(0,r.jsx)(n.h4,{id:"rhelcentos",children:"RHEL/CentOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ yum install backtrace-coroner\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ubuntudebian",children:"Ubuntu/Debian"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ apt-get install backtrace-coroner\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After installed, you need to generate and install ",(0,r.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-getting-started/",children:"coroner.cf"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ptrace",children:"ptrace"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ptrace"})," is the Backtrace snapshot generator. It is used to generate application snapshots."]}),"\n",(0,r.jsx)(n.h4,{id:"rhelcentos-1",children:"RHEL/CentOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ yum install backtrace-ptrace\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ubuntudebian-1",children:"Ubuntu/Debian"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ apt-get install backtrace-ptrace\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"For Ubuntu 10.10 or later:",type:"caution",children:[(0,r.jsxs)(n.p,{children:["Starting from Ubuntu 10.10, a change prevents users who are not root from ",(0,r.jsx)(n.code,{children:"ptrace"})," processes that are not children. With this restriction in place, running ",(0,r.jsx)(n.code,{children:"ptrace"})," as root is necessary, resulting in the snapshot files being permissioned for root as well."]}),(0,r.jsx)(n.p,{children:"This restriction can be disabled by issuing the command:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope\n"})}),(0,r.jsxs)(n.p,{children:["For additional information, refer to the following comprehensive guide: ",(0,r.jsx)(n.a,{href:"https://askubuntu.com/questions/41629/after-upgrade-gdb-wont-attach-to-process",children:"After Upgrade, GDB Won't Attach to Process"})," on the Ask Ubuntu website."]})]}),"\n",(0,r.jsx)(n.h3,{id:"hydra",children:"Hydra"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hydra"})," is the Backtrace terminal snapshot viewer. It is used to dig into application snapshots generated by ",(0,r.jsx)(n.code,{children:"backtrace-ptrace"}),". You must install ",(0,r.jsx)(n.code,{children:"hydra"})," on any machine you wish to dig into snapshots (for example, dev box, laptop)."]}),"\n",(0,r.jsx)(n.h4,{id:"rhelcentos-2",children:"RHEL/CentOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ yum install backtrace-hydra\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ubuntudebian-2",children:"Ubuntu/Debian"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ apt-get install backtrace-hydra\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once installed, you may want to ",(0,r.jsx)(n.a,{href:"https://help.backtrace.io/advanced/component-hydra/hydra-setup",children:"configure Hydra"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),l=t(23104),o=t(56347),s=t(205),i=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);