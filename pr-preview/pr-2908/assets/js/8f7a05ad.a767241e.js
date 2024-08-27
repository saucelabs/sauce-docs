"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67759],{37504:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>t});var n=s(74848),l=s(28453);const c={id:"cli",title:"Sauce Visual CLI",sidebar_label:"Sauce Visual CLI"},d=void 0,a={id:"visual-testing/cli",title:"Sauce Visual CLI",description:"The Sauce Visual CLI (command line interface) allows you to easily interact with Sauce Visual, streamlining your visual testing workflows. With this tool, you can create new builds, mark builds as completed, and retrieve the current status of any build. This simplifies the process of integrating visual testing into your continuous integration and delivery pipelines, ensuring efficient and accurate visual validation of your applications.",source:"@site/docs/visual-testing/cli.md",sourceDirName:"visual-testing",slug:"/visual-testing/cli",permalink:"/sauce-docs/pr-preview/pr-2908/visual-testing/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/cli.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"cli",title:"Sauce Visual CLI",sidebar_label:"Sauce Visual CLI"},sidebar:"docs",previous:{title:"Python (Robot Framework)",permalink:"/sauce-docs/pr-preview/pr-2908/visual-testing/integrations/python-robot-framework"},next:{title:"Selective Diffing",permalink:"/sauce-docs/pr-preview/pr-2908/visual-testing/selective-diffing"}},r={},t=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Commands",id:"commands",level:2},{value:"create",id:"create",level:3},{value:"Required",id:"required",level:4},{value:"Options",id:"options",level:4},{value:"finish",id:"finish",level:3},{value:"Required",id:"required-1",level:4},{value:"Options",id:"options-1",level:4},{value:"status",id:"status",level:3},{value:"Required",id:"required-2",level:4},{value:"Options",id:"options-2",level:4},{value:"help",id:"help",level:3}];function o(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The Sauce Visual CLI (command line interface) allows you to easily interact with Sauce Visual, streamlining your visual testing workflows. With this tool, you can create new builds, mark builds as completed, and retrieve the current status of any build. This simplifies the process of integrating visual testing into your continuous integration and delivery pipelines, ensuring efficient and accurate visual validation of your applications."}),"\n",(0,n.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A Sauce Labs account (",(0,n.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(i.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["Your Sauce Labs ",(0,n.jsx)(i.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})," to be set in ",(0,n.jsx)(i.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(i.code,{children:"SAUCE_ACCESS_KEY"})," environment variables"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USERNAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,n.jsx)(i.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Node.js: Version 18.x or higher"}),"\n",(0,n.jsx)(i.li,{children:"npx: Included with Node.js (version 10.x or higher)"}),"\n",(0,n.jsx)(i.li,{children:"Operating System: macOS 10.15+, Linux, or Windows 10/11"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.p,{children:"You can run Sauce Visual CLI using:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build [command] [options]"})}),"\n",(0,n.jsx)(i.p,{children:"Run the following command to see the list of available commands:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build"})}),"\n",(0,n.jsx)(i.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsx)(i.h3,{id:"create",children:"create"}),"\n",(0,n.jsx)(i.p,{children:"Creates a Sauce Visual build"}),"\n",(0,n.jsxs)(i.p,{children:["Usage: ",(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build create [options]"})]}),"\n",(0,n.jsx)(i.h4,{id:"required",children:"Required"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-n"}),", ",(0,n.jsx)(i.code,{children:"--name"}),": Build name"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-r"}),", ",(0,n.jsx)(i.code,{children:"--region"}),": The Sauce Labs region. Possible values: ",(0,n.jsx)(i.code,{children:"us-west-1"}),", ",(0,n.jsx)(i.code,{children:"eu-central-1"}),", ",(0,n.jsx)(i.code,{children:"us-east-4"}),". Default: ",(0,n.jsx)(i.code,{children:"us-west-1"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"--branch"}),": Branch name to associate the build with."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"--default-branch"}),": Main branch name to associate the build with. Usually ",(0,n.jsx)(i.code,{children:"main"})," or ",(0,n.jsx)(i.code,{children:"master"}),". Read more ",(0,n.jsx)(i.a,{href:"https://docs.saucelabs.com/visual-testing/workflows/ci/",children:"here"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-p"}),", ",(0,n.jsx)(i.code,{children:"--project"}),": Label/project to associate the build with."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-c"}),", ",(0,n.jsx)(i.code,{children:"--custom-id"}),": User-supplied custom ID to associate the build with. For advanced users."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"finish",children:"finish"}),"\n",(0,n.jsx)(i.p,{children:"Finishes a Sauce Visual build"}),"\n",(0,n.jsxs)(i.p,{children:["Usage: ",(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build finish [options]"})]}),"\n",(0,n.jsx)(i.h4,{id:"required-1",children:"Required"}),"\n",(0,n.jsx)(i.p,{children:"One of the following:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-b"}),", ",(0,n.jsx)(i.code,{children:"--build-id"}),": Build ID to finish. Format: ",(0,n.jsx)(i.code,{children:"UUID"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-c"}),", ",(0,n.jsx)(i.code,{children:"--custom-id"}),": Custom ID associated with a build to finish."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"options-1",children:"Options"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-r"}),", ",(0,n.jsx)(i.code,{children:"--region"}),": The Sauce Labs region. Possible values: ",(0,n.jsx)(i.code,{children:"us-west-1"}),", ",(0,n.jsx)(i.code,{children:"eu-central-1"}),", ",(0,n.jsx)(i.code,{children:"us-east-4"}),". Default: ",(0,n.jsx)(i.code,{children:"us-west-1"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"status",children:"status"}),"\n",(0,n.jsx)(i.p,{children:"Fetches status from a Sauce Visual build"}),"\n",(0,n.jsxs)(i.p,{children:["Usage: ",(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build status [options]"})]}),"\n",(0,n.jsx)(i.h4,{id:"required-2",children:"Required"}),"\n",(0,n.jsx)(i.p,{children:"One of the following:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-b"}),", ",(0,n.jsx)(i.code,{children:"--build-id"}),": Build ID. Format: ",(0,n.jsx)(i.code,{children:"UUID"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-c"}),", ",(0,n.jsx)(i.code,{children:"--custom-id"}),": Custom ID associated with a build."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"options-2",children:"Options"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"-r"}),", ",(0,n.jsx)(i.code,{children:"--region"}),": The Sauce Labs region. Possible values: ",(0,n.jsx)(i.code,{children:"us-west-1"}),", ",(0,n.jsx)(i.code,{children:"eu-central-1"}),", ",(0,n.jsx)(i.code,{children:"us-east-4"}),". Default: ",(0,n.jsx)(i.code,{children:"us-west-1"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"help",children:"help"}),"\n",(0,n.jsx)(i.p,{children:"Displays help for a command"}),"\n",(0,n.jsxs)(i.p,{children:["Usage: ",(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build help [command]"})]}),"\n",(0,n.jsxs)(i.p,{children:["Example: ",(0,n.jsx)(i.code,{children:"npx @saucelabs/visual build help create"})]}),"\n",(0,n.jsxs)(i.p,{children:["In addition to ",(0,n.jsx)(i.code,{children:"help"})," command there's also ",(0,n.jsx)(i.code,{children:"-h"}),", ",(0,n.jsx)(i.code,{children:"--help"})," option available for every command to display the available options."]})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>d,x:()=>a});var n=s(96540);const l={},c=n.createContext(l);function d(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);