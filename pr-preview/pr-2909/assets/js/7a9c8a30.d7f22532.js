"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15243],{58889:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var c=i(74848),n=i(28453);const t={id:"push",title:"saucectl docker push",sidebar_label:"push"},a=void 0,l={id:"dev/cli/saucectl/docker/push",title:"saucectl docker push",description:"Push a Docker image to the Sauce Labs Container Registry.",source:"@site/docs/dev/cli/saucectl/docker/push.md",sourceDirName:"dev/cli/saucectl/docker",slug:"/dev/cli/saucectl/docker/push",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/docker/push",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/docker/push.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"push",title:"saucectl docker push",sidebar_label:"push"},sidebar:"dev",previous:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/configure/list"},next:{title:"artifacts download",permalink:"/sauce-docs/pr-preview/pr-2909/dev/cli/saucectl/imagerunner/artifacts-download"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--timeout</span>',id:"--timeout",level:3},{value:'<span class="cli">--quiet</span>',id:"--quiet",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"Push a Docker image to the Sauce Labs Container Registry."}),"\n",(0,c.jsxs)(s.p,{children:["Explore ",(0,c.jsx)(s.a,{href:"/sauce-docs/pr-preview/pr-2909/orchestrate/saucelabs-private-registry",children:"additional details"})," about the Sauce Labs Container Registry."]}),"\n",(0,c.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ saucectl docker push image_name [flags]\n"})}),"\n",(0,c.jsxs)(s.admonition,{type:"note",children:[(0,c.jsx)(s.p,{children:"Please make sure the Docker daemon is running when triggering this CLI."}),(0,c.jsx)(s.p,{children:"In order to join the Sauce Labs Container Registry, please contact SauceLabs customer support."})]}),"\n",(0,c.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,c.jsxs)("table",{id:"table-cli",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{width:"30%",children:"Flag"}),(0,c.jsx)("th",{width:"10%",children:"Shorthand"}),(0,c.jsx)("th",{children:"Description"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"t-cli",children:(0,c.jsx)("a",{href:"#--timeout",children:"--timeout"})})}),(0,c.jsx)("td",{}),(0,c.jsx)("td",{children:"Configure the timeout duration for docker push. Default: 5 minutes."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"t-cli",children:(0,c.jsx)("a",{href:"#--quiet",children:"--quiet"})})}),(0,c.jsx)("td",{}),(0,c.jsx)("td",{children:"Run silently, suppressing output messages."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"t-cli",children:(0,c.jsx)("a",{href:"#--region",children:"--region"})})}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"t-cli",children:"-r"})}),(0,c.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,c.jsx)("code",{children:"us-west-1"})," (default) and ",(0,c.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,c.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,c.jsx)(s.h3,{id:"--timeout",children:(0,c.jsx)("span",{className:"cli",children:"--timeout"})}),"\n",(0,c.jsxs)("div",{className:"cli-desc",children:[(0,c.jsx)("p",{children:(0,c.jsx)("small",{children:"| OPTIONAL | DURATION |"})}),"Configure the timeout duration for docker push.",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --timeout 10m\n"})})]}),"\n",(0,c.jsx)(s.h3,{id:"--quiet",children:(0,c.jsx)("span",{className:"cli",children:"--quiet"})}),"\n",(0,c.jsxs)("div",{className:"cli-desc",children:[(0,c.jsx)("p",{children:(0,c.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"Run silently, suppressing output messages.",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --quiet\n"})})]}),"\n",(0,c.jsx)(s.h3,{id:"--region",children:(0,c.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,c.jsxs)("div",{className:"cli-desc",children:[(0,c.jsx)("p",{children:(0,c.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs authentication region. Options are ",(0,c.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,c.jsx)(s.code,{children:"eu-central-1"}),".",(0,c.jsx)(s.strong,{children:"Shorthand:"})," ",(0,c.jsx)(s.code,{children:"-r <region>"}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"saucectl docker push my_image_name:tag --region us-west-1\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var c=i(96540);const n={},t=c.createContext(n);function a(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);