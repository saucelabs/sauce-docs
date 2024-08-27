"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[35168],{84330:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=o(74848),s=o(28453),t=o(11470),a=o(19365);const i={id:"proxy-settings-in-downloader",title:"Proxy Settings in Downloader",sidebar_label:"Proxy Settings in Downloader",keywords:["api","api-fortress","proxy","settings"]},l=void 0,d={id:"api-testing/on-prem/self-hosted/proxy-settings-in-downloader",title:"Proxy Settings in Downloader",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/proxy-settings-in-downloader.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/proxy-settings-in-downloader",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/self-hosted/proxy-settings-in-downloader",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/proxy-settings-in-downloader.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"proxy-settings-in-downloader",title:"Proxy Settings in Downloader",sidebar_label:"Proxy Settings in Downloader",keywords:["api","api-fortress","proxy","settings"]},sidebar:"apif",previous:{title:"Multiple Client-Cert Downloader",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/self-hosted/multiple-client-cert-downloader"},next:{title:"Updating the API Fortress License Key",permalink:"/sauce-docs/pr-preview/pr-2909/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key"}},c={},u=[{value:"Downloader Configuration",id:"downloader-configuration",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Proxy Configuration Syntax",id:"proxy-configuration-syntax",level:2},{value:"Priority",id:"priority",level:3},{value:"Wildcards",id:"wildcards",level:3},{value:"Negative Selection",id:"negative-selection",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)(n.p,{children:"If you need your downloader to go through a proxy to reach your API follow the below steps to configure the proxy settings."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This is for Self-Hosted/On-Premises deployments only!"})})}),"\n",(0,r.jsx)(n.h2,{id:"downloader-configuration",children:"Downloader Configuration"}),"\n",(0,r.jsx)(n.p,{children:"You will need to modify the downloader config file, by adding an environment field for proxy settings."}),"\n",(0,r.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the \u201cdownloader\u201d folder within your installation files, and find the file named ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Locate the ",(0,r.jsx)(n.code,{children:"environment"})," field at the end of the file"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a field in this section called ",(0,r.jsx)(n.code,{children:"proxy_configuration"}),".\nSee example below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'proxy_configuration: \'{"*":\n{\n"address":"10.10.10.10",\n"port":3128,\n"authentication":"basic",\n"username":"foo",\n"password":"bar"\n}\n}\'\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to the file named ",(0,r.jsx)(n.code,{children:"downloader.yml"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["You will find a section named ",(0,r.jsx)(n.code,{children:"env"}),", add a field to this section called ",(0,r.jsx)(n.code,{children:"proxy_configuration"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"See example below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'name: proxy_configuration\nvalue: \'{\n"*":\n{\n"address":"10.10.10.10",\n"port":3128,\n"authentication":"basic",\n"username":"foo",\n"password":"bar"\n}\n}\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"address"})," and ",(0,r.jsx)(n.code,{children:"port"})," are, respectively, the addresses and port of the proxy. Authentication is optional."]}),"\n",(0,r.jsx)(n.h2,{id:"proxy-configuration-syntax",children:"Proxy Configuration Syntax"}),"\n",(0,r.jsx)(n.p,{children:"The proxy configuration syntax is as below (multiple proxy configurations should be comma separated):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"foo.com": {\n"address": "172.18.0.1",\n"port": 3128,\n"username": "proxyuser",\n"password": "password"\n},\n"bar.com": {\n"address": "172.18.0.1",\n"port": 3128,\n"username": "proxyuser",\n"password": "password"\n}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"There is also a catch-all syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"*": {\n"address": "172.18.0.1",\n"port": 3128,\n"username": "proxyuser",\n"password": "password"\n}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In addition, you can use a wildcard in place of the lowest level of the domain, as in:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"*.google.com": {\n"address": "172.18.0.1",\n"port": 3128,\n"username": "proxyuser",\n"password": "password"\n}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"priority",children:"Priority"}),"\n",(0,r.jsxs)(n.p,{children:["The proxy configuration now has a priority sequence, the entries at the beginning of the configuration block have ",(0,r.jsx)(n.strong,{children:"higher"})," priority, the ones at the ending have ",(0,r.jsx)(n.strong,{children:"lower"})," priority."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:'"*"'})," entry is not involved in the priority verification, and is always the last to be used, regardless of where it appears."]}),"\n",(0,r.jsx)(n.h3,{id:"wildcards",children:"Wildcards"}),"\n",(0,r.jsxs)(n.p,{children:["In the previous versions of the downloader, the wildcards only cover the level of the domain. For example ",(0,r.jsx)(n.code,{children:"*.domain.com"})," covered ",(0,r.jsx)(n.code,{children:"sub1.domain.com"})," and ",(0,r.jsx)(n.code,{children:"sub2.domain.com"})," but not ",(0,r.jsx)(n.code,{children:"third.sub1.domain.com"})]}),"\n",(0,r.jsxs)(n.p,{children:["This is not the case anymore with the current version of the downloader. The wildcard will cover all the lower levels of the domain. ",(0,r.jsx)(n.strong,{children:"This makes the priority essential"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"negative-selection",children:"Negative Selection"}),"\n",(0,r.jsx)(n.p,{children:"It is now possible to deactivate proxy settings for specific selectors."}),"\n",(0,r.jsxs)(n.p,{children:["Simply add one entry looking like this: ",(0,r.jsx)(n.code,{children:'"sub3.domain.com":{"address":"NONE"}'})]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"sub3.domain.com"})," is matched, then no proxy will be selected and the priority rundown will stop. Wildcards can also apply here, as in ",(0,r.jsx)(n.code,{children:'"*.domain.com": {"address":"NONE"}'})]}),"\n",(0,r.jsx)(n.p,{children:"Again, check the order of appearance for priority!"}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.A,{defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],children:[(0,r.jsxs)(a.A,{value:"ex1",children:["Only ",(0,r.jsx)(n.code,{children:"sub.domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy1.com"}),". Other requests will go through no proxy.",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"sub.domain.com": {\n"address": "http://proxy1.com/",\n"port": 2255\n}\n}\n'})})]}),(0,r.jsxs)(a.A,{value:"ex2",children:["Only ",(0,r.jsx)(n.code,{children:"sub1.domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy1.com"}),". Other requests will go through ",(0,r.jsx)(n.code,{children:"proxy2.com"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"sub1.domain.com": {\n"address": "proxy1.com",\n"port": 2255\n},\n"*": {\n"address": "proxy2.com",\n"port": 2255\n}\n}\n'})})]}),(0,r.jsxs)(a.A,{value:"ex3",children:["Only ",(0,r.jsx)(n.code,{children:"sub1.domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy1.com"}),". Requests to any ",(0,r.jsx)(n.code,{children:"domain.com"})," subdomain will go through ",(0,r.jsx)(n.code,{children:"proxy2.com"}),". Other requests will not go through a proxy.",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"sub1.domain.com": {\n"address": "proxy1.com",\n"port": 2255\n},\n"*.domain.com": {\n"address": "proxy2.com",\n"port": 2255\n}\n}\n'})})]}),(0,r.jsxs)(a.A,{value:"ex4",children:["All subdomains of ",(0,r.jsx)(n.code,{children:"sub1.domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy1.com"}),". Other subdomains of ",(0,r.jsx)(n.code,{children:"domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy2.com"}),". Any other domain will not go through a proxy.",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"*.sub1.domain.com": {\n"address": "proxy1.com",\n"port": 2255\n},\n"*.domain.com": {\n"address": "proxy2.com",\n"port": 2255\n}\n}\n'})})]}),(0,r.jsxs)(a.A,{value:"ex5",children:["All subdomains of ",(0,r.jsx)(n.code,{children:"sub1.domain.com"})," will NOT go through a proxy. All subdomains of ",(0,r.jsx)(n.code,{children:"domain.com"})," will go through ",(0,r.jsx)(n.code,{children:"proxy2.com"}),". All other domains will go through ",(0,r.jsx)(n.code,{children:"proxy3.com"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"*.sub1.domain.com": {\n"address": "NONE"\n},\n"*.domain.com": {\n"address": "proxy2.com",\n"port": 2255\n},\n"*": {\n"address": "proxy3.com",\n"port": 2255\n}\n}\n'})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,o)=>{o.d(n,{A:()=>a});o(96540);var r=o(18215);const s={tabItem:"tabItem_Ymn6"};var t=o(74848);function a(e){let{children:n,hidden:o,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:o,children:n})}},11470:(e,n,o)=>{o.d(n,{A:()=>v});var r=o(96540),s=o(18215),t=o(23104),a=o(56347),i=o(205),l=o(57485),d=o(31682),c=o(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:r,default:s}}=e;return{value:n,label:o,attributes:r,default:s}}))}(o);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:o}=e;const s=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function m(e){const{defaultValue:n,queryString:o=!1,groupId:s}=e,t=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[d,u]=x({queryString:o,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,c.Dv)(o);return[s,(0,r.useCallback)((e=>{o&&t.set(e)}),[o,t])]}({groupId:s}),f=(()=>{const e=d??m;return p({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=o(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=o(74848);function j(e){let{className:n,block:o,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const n=e.currentTarget,o=l.indexOf(n),s=i[o].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":o},n),children:i.map((e=>{let{value:n,label:o,attributes:t}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...t,className:(0,s.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":r===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:s}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(j,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function v(e){const n=(0,g.A)();return(0,y.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var r=o(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);