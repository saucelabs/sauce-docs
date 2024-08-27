"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16830],{563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(74848),o=n(28453),r=n(86025);const a={id:"kv",title:"Key / Value Store",sidebar_label:"Key / Value Store",keywords:["api-testing","how-to","key-value-store"]},i=void 0,l={id:"api-testing/on-prem/how-to/kv",title:"Key / Value Store",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/kv.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/kv",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/how-to/kv",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/kv.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"kv",title:"Key / Value Store",sidebar_label:"Key / Value Store",keywords:["api-testing","how-to","key-value-store"]},sidebar:"apif",previous:{title:"Import / Export Tests",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/how-to/import-export-tests"},next:{title:"Keystores for Downloader",permalink:"/sauce-docs/pr-preview/pr-2908/api-testing/on-prem/how-to/keystores-for-downloader"}},h={},c=[{value:"Methods",id:"methods",level:2},{value:"Set",id:"set",level:3},{value:"Load",id:"load",level:3},{value:"Push",id:"push",level:3},{value:"Pop",id:"pop",level:3},{value:"Basic Workflow",id:"basic-workflow",level:2},{value:"Push/Pop Workflow",id:"pushpop-workflow",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.22.48-PM-1.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.p,{children:"The Key/Value store allows API Fortress users to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"These key/value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself."})}),"\n",(0,s.jsx)(t.p,{children:"The Key/Value Store Component has four methods available for use."}),"\n",(0,s.jsx)(t.h3,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(t.p,{children:['Set will create a new key/value pair in the Key/Value store. The value is entered in the "',(0,s.jsx)(t.em,{children:"Object"}),'" field.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.19-AM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.h3,{id:"load",children:"Load"}),"\n",(0,s.jsx)(t.p,{children:"Load will recall a value from the Key/Value store when provided with a key."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.36-AM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.h3,{id:"push",children:"Push"}),"\n",(0,s.jsxs)(t.p,{children:["Push will add a value to the end of an existent value ",(0,s.jsx)(t.strong,{children:'of the datatype "Array"'}),' in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.\xa0 The passed in value is entered in the "',(0,s.jsx)(t.em,{children:"Object"}),'" field.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.51.09-AM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.h3,{id:"pop",children:"Pop"}),"\n",(0,s.jsxs)(t.p,{children:["Pop will remove a value from the end of an existent value ",(0,s.jsx)(t.strong,{children:'of the datatype "Array"'})," in the Key/Value store."]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.52-AM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.h2,{id:"basic-workflow",children:"Basic Workflow"}),"\n",(0,s.jsx)(t.p,{children:"Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store."}),"\n",(0,s.jsx)(t.p,{children:"First, we'll make a GET request to an endpoint."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.21.40-PM.png"),alt:"screenshot"}),"\n",(0,s.jsx)(t.p,{children:"Next, we'll add a K/V Store component."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/component.png"),alt:"component.png"}),"\n",(0,s.jsxs)(t.p,{children:["This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use \"",(0,s.jsx)(t.strong,{children:"Set."}),'"']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.46.41-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsx)(t.p,{children:'In this case we\'re setting the Key "prods" equal to "products[0].name", which in this case evaluates to "Baseball Cap."'}),"\n",(0,s.jsxs)(t.p,{children:["Next, we're going to retrieve this Key/Value pair from the store with the \"",(0,s.jsx)(t.strong,{children:"Load"}),'" method. In the K/V Store "',(0,s.jsx)(t.strong,{children:"Load"}),'" component, we\'re going to assign the retrieved value to the variable "kvprods."']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.47.22-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we'll add in a \"",(0,s.jsx)(t.strong,{children:"Comment"}),'" component to ensure that the data was recovered successfully.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.01-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsx)(t.p,{children:"When we run the test, we're presented with the following result:"}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.28-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsx)(t.p,{children:"Success!"}),"\n",(0,s.jsx)(t.h2,{id:"pushpop-workflow",children:"Push/Pop Workflow"}),"\n",(0,s.jsxs)(t.p,{children:["Next, we're going to take a look at how \"",(0,s.jsx)(t.strong,{children:"Push"}),'" and "',(0,s.jsx)(t.strong,{children:"Pop"}),'" work. "',(0,s.jsx)(t.strong,{children:"Push"}),'" and "',(0,s.jsx)(t.strong,{children:"Pop"}),'" are both array methods and behave as they normally do outside of this context. "',(0,s.jsx)(t.strong,{children:"Push"}),'" will append a value to the end of an array. "',(0,s.jsx)(t.strong,{children:"Pop"}),'" will remove the last value in an array.']}),"\n",(0,s.jsxs)(t.p,{children:["First, we're going to use \"",(0,s.jsx)(t.strong,{children:"Push"}),'." It should be noted that "',(0,s.jsx)(t.strong,{children:"Pop"}),'" works similarly but with the opposite result. "',(0,s.jsx)(t.strong,{children:"Pop"}),'" ',(0,s.jsx)(t.em,{children:"also"})," assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at \"",(0,s.jsx)(t.strong,{children:"Pop"}),'."']}),"\n",(0,s.jsxs)(t.p,{children:["First, we're going to send a ",(0,s.jsx)(t.code,{children:"GET"}),' request and assign a key in the Key/Value Store to a value from the response body. In this case, we\'re going to use "Color," which is an array.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.49.16-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:["Next, we're going to \"",(0,s.jsx)(t.strong,{children:"Load"}),'" and "',(0,s.jsx)(t.strong,{children:"Comment"}),"\" this key. We're doing that so we can actually see the change on the test report at the end of this workflow."]}),"\n",(0,s.jsxs)(t.p,{children:['The next step is to "',(0,s.jsx)(t.strong,{children:"Push"}),'" the new data on to the end of the existing array.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.43.53-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:["In this case, we're pushing the integer ",(0,s.jsx)(t.em,{children:"999"})," onto the ",(0,s.jsx)(t.em,{children:"prods"})," array."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we're going to \"",(0,s.jsx)(t.strong,{children:"Load"}),'" the modified data into the test from the K/V Store.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.48-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsx)(t.p,{children:"When we run the test, we're presented with the following test report."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.59-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:["The comments show us clearly that we have pushed the number 999 onto the array stored in the key ",(0,s.jsx)(t.em,{children:"prods."})]}),"\n",(0,s.jsxs)(t.p,{children:["Now, we've added something to the array. Let's remove it with \"",(0,s.jsx)(t.strong,{children:"Pop"}),'!"']}),"\n",(0,s.jsxs)(t.p,{children:['The first step is to introduce a "',(0,s.jsx)(t.strong,{children:"Pop"}),'" K/V Store component.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.31.17-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:['We provide the "Pop" component with the name of the key from the Key/Value Store, and the name of the variable we\'d like to assign the popped value to. Remember, "',(0,s.jsx)(t.strong,{children:"Pop"}),'" removes the last value in an array and returns the value itself. In this case, we\'re going to assign it to a variable called "Popped."']}),"\n",(0,s.jsx)(t.p,{children:"Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.28.58-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsxs)(t.p,{children:['In the Test Report, we can clearly see the full workflow. First, we assigned an array to the Key/Value Store with "',(0,s.jsx)(t.strong,{children:"Set"}),'." Then, we added to that array with "',(0,s.jsx)(t.strong,{children:"Push"}),'." Finally, we removed the added value with "',(0,s.jsx)(t.strong,{children:"Pop"}),'." Each time we made a change, we used "',(0,s.jsx)(t.strong,{children:"Load"}),'" to retrieve an updated value from the Key/Value Store.']}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.29.09-PM.png"),alt:"screenshot.png"}),"\n",(0,s.jsx)(t.p,{children:"The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's\xa0most recent modification."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:'"Load" does not reset the timer. Only "Set," "Push," and "Pop" reset the timer.'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);