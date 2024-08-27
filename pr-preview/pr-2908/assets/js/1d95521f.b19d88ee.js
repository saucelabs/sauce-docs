"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99098],{16037:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var l=a(74848),c=a(28453);const t={id:"upload",title:"saucectl storage upload",sidebar_label:"upload"},n=void 0,i={id:"dev/cli/saucectl/storage/upload",title:"saucectl storage upload",description:"Uploads an app file to Sauce Storage and returns a unique file ID assigned to the app. Sauce Storage supports app files in .apk, .aab, .ipa, or .zip format.",source:"@site/docs/dev/cli/saucectl/storage/upload.md",sourceDirName:"dev/cli/saucectl/storage",slug:"/dev/cli/saucectl/storage/upload",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/storage/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/storage/upload.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"upload",title:"saucectl storage upload",sidebar_label:"upload"},sidebar:"dev",previous:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/storage/list"},next:{title:"delete",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/storage/delete"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--force</span>',id:"--force",level:3},{value:'<span class="cli">--out</span>',id:"--out",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"Uploads an app file to Sauce Storage and returns a unique file ID assigned to the app. Sauce Storage supports app files in _.apk, _.aab, _.ipa, or _.zip format."}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ saucectl storage upload filename [flags]\n"})}),"\n",(0,l.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,l.jsxs)("table",{id:"table-cli",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{width:"30%",children:"Flag"}),(0,l.jsx)("th",{width:"10%",children:"Shorthand"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--force",children:"--force"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli"})}),(0,l.jsx)("td",{children:"Forces the upload to happen, even if there's already a file in storage with a matching checksum."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--out",children:"--out"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-o"})}),(0,l.jsxs)("td",{children:["Output format to the console. Options are ",(0,l.jsx)("code",{children:"text"})," (default) and ",(0,l.jsx)("code",{children:"json"}),"."]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--region",children:"--region"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-r"})}),(0,l.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,l.jsx)("code",{children:"us-west-1"})," (default) and ",(0,l.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,l.jsx)(s.h3,{id:"--force",children:(0,l.jsx)("span",{className:"cli",children:"--force"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"Forces the upload to happen, even if there's already a file in storage with a matching checksum.",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"saucectl storage upload app.apk --force\n"})})]}),"\n",(0,l.jsx)(s.h3,{id:"--out",children:(0,l.jsx)("span",{className:"cli",children:"--out"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Output format to the console. Options are ",(0,l.jsx)(s.code,{children:"text"})," (default) and ",(0,l.jsx)(s.code,{children:"json"}),".",(0,l.jsx)(s.strong,{children:"Shorthand:"})," ",(0,l.jsx)(s.code,{children:"-o <format>"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"saucectl storage upload app.apk --out json\n"})})]}),"\n",(0,l.jsx)(s.h3,{id:"--region",children:(0,l.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,l.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,l.jsx)(s.code,{children:"eu-central-1"}),".",(0,l.jsx)(s.strong,{children:"Shorthand:"})," ",(0,l.jsx)(s.code,{children:"-r <region>"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"saucectl storage upload app.apk --region us-west-1\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>n,x:()=>i});var l=a(96540);const c={},t=l.createContext(c);function n(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);