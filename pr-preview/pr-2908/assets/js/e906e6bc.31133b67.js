"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[21835],{49024:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(74848),s=o(28453);const i={id:"fine-tuning",title:"Bloodhound: Fine Tuning",sidebar_label:"Fine Tuning",description:"This page covers recommendations on how to fine-tune Bloodhound's configurations."},r=void 0,a={id:"api-testing/on-prem/bloodhound/fine-tuning",title:"Bloodhound: Fine Tuning",description:"This page covers recommendations on how to fine-tune Bloodhound's configurations.",source:"@site/docs/api-testing/on-prem/bloodhound/fine-tuning.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/fine-tuning",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/bloodhound/fine-tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/fine-tuning.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"fine-tuning",title:"Bloodhound: Fine Tuning",sidebar_label:"Fine Tuning",description:"This page covers recommendations on how to fine-tune Bloodhound's configurations."},sidebar:"apif",previous:{title:"Load Balancing",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/bloodhound/load-balancing"},next:{title:"Advanced Actors",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/bloodhound/advanced-actors"}},d={},l=[{value:"Actors",id:"actors",level:2},{value:"Thread pools",id:"thread-pools",level:2},{value:"HTTP Client Configuration",id:"http-client-configuration",level:2},{value:"This is Complicated!",id:"this-is-complicated",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Bloodhound can be fine-tuned for your needs. This ability comes with the price of complexity, so it is important to understand the inner mechanisms before modifying the configuration files."}),"\n",(0,t.jsx)(n.h2,{id:"actors",children:"Actors"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"implementers.yml"})," file defines which actors need to be instantiated, as in:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: request\n  class: com.apifortress.afthem.actors.proxy.RequestActor\n  type: proxy\n"})}),"\n",(0,t.jsx)(n.p,{children:'An actor instance can do one thing at a time, and if new tasks come up as it\'s involved in a task, the new inbound tasks get queued in a "mailbox". The actor will proceed with the next task when available.'}),"\n",(0,t.jsxs)(n.p,{children:["You can clearly declare multiple actors of the same type in ",(0,t.jsx)(n.code,{children:"implementers.yml"}),", using different IDs, and in that case the actors will be completely distinct and will need to be explicitly referenced."]}),"\n",(0,t.jsx)(n.p,{children:"For Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: transform_headers_1\n  class: com.apifortress.afthem.actors.transformers.TransformHeadersActor\n  type: transformer\n- id: transform_headers_2\n  class: com.apifortress.afthem.actors.transformers.TransformHeadersActor\n  type: transformer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is useful if you need to proxy completely different APIs, and you want to make sure they will not interfere one with the other. In that case you will use ",(0,t.jsx)(n.code,{children:"transformer/transform_headers_1"})," in one flow, and ",(0,t.jsx)(n.code,{children:"transformer/transform_headers_2"})," in another flow."]}),"\n",(0,t.jsxs)(n.p,{children:["A single actor implementer, however, can have a multiplicity. In other words, one ID in the ",(0,t.jsx)(n.code,{children:"implementers.yml"})," file could represent a team of actors of the same type, sharing the effort in parallel and share the same mailbox. This allows a step in the sequence to be served by multiple actors, and ideally, speed up the process. This is important, for example, when a step is CPU-intensive. As in:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: request\n  class: com.apifortress.afthem.actors.proxy.RequestActor\n  type: proxy\n  instances: 3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notice the ",(0,t.jsx)(n.code,{children:"instances"})," keyword."]}),"\n",(0,t.jsx)(n.h2,{id:"thread-pools",children:"Thread pools"}),"\n",(0,t.jsxs)(n.p,{children:["Actors, as previously said, ",(0,t.jsx)(n.strong,{children:"could"})," allow you to work in parallel, but actors need tools to do so. The tools are the threads. Threads are expensive both in terms of memory and CPU so you don't want to spawn too many. Bloodhound gives you the option to decide how the system resources need to be utilized with great detail."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"implementers.yml"})," file, the ",(0,t.jsx)(n.code,{children:"thread_pools"})," section allows you to create pools of threads that can be assigned to actors."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"thread_pools:\ndefault:\nmin: 1\nmax: 2\nfactor: 1\ncomputational:\nmin: 2\nmax: 2\nfactor: 2\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"min"})," is the minimum number of threads created for this thread pool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max"})," is the maximum number of threads created for this thread pool (the threads exceeding ",(0,t.jsx)(n.code,{children:"min"})," get decommissioned when not in use)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"factor"})," is a multiplier that depends on the server Bloodhound is operating on and it works like this ",(0,t.jsx)(n.code,{children:"factor"})," * ",(0,t.jsx)(n.code,{children:"cpu"})," = ",(0,t.jsx)(n.code,{children:"number_of_threads"}),". A way to make the system more adaptive to the context."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"default"})," thread pool is used when no pool is assigned to an implementer. To assign a specific thread pool, update the implementer like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: header_filter\n  class: com.apifortress.afthem.actors.filters.FilterActor\n  type: filter\n  instances: 2\n  thread_pool: computational\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Thread pools can be assigned to a specific implementer or to multiple implementers. This is crucial because a good balance strongly reduces resource waste. In ",(0,t.jsx)(n.code,{children:"etc.simplest"}),", for example, two instances of ",(0,t.jsx)(n.code,{children:"header_filter"})," and two instances of ",(0,t.jsx)(n.code,{children:"transform_headers"})," share a single pool with 2 threads max. This means that at most, 2 filter operations OR 2 transformation operations OR 1 filter and 1 transformation operations can happen at the same time."]}),"\n",(0,t.jsx)(n.h2,{id:"http-client-configuration",children:"HTTP Client Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The HTTP Client is the component that will perform the call from Bloodhound to the upstreams. The client, one for the whole application, can be fine tuned based on your knowledge of your use case. The configuration of these aspects happen in the ",(0,t.jsx)(n.code,{children:"application.properties"})," file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"httpclient.max_threads"}),": number of I/O dispatchers thread to be created and reserved to the HTTP Client;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"httpclient.idle_timeout_seconds"}),": number of seconds before an idle open connection needs to be considered ",(0,t.jsx)(n.em,{children:"stale"})," and candidate for removal;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"httpclient.max_connections"}),": max number of open connections the system should be able to keep up, before it starts dropping some;"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"this-is-complicated",children:"This is Complicated!"}),"\n",(0,t.jsx)(n.p,{children:"Indeed, but if you understand how this can help you, good things will happen."}),"\n",(0,t.jsx)(n.admonition,{title:"Think about this",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Actors are about how many tasks can potentially be executed at the same time, but also how things will line up. A team of actors (instead of just one) make so that if a task is taking longer than expected, the tasks lining up will get assigned to the other actors of the team and not wait forever."}),"\n",(0,t.jsx)(n.li,{children:"Threads, instead, are about how you want to assign the resources of your system to the actors."}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);