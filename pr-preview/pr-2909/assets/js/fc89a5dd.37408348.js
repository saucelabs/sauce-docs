"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[92109],{55161:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=r(74848),o=r(28453),c=r(86025);r(11470),r(19365);const s={id:"proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",sidebar_label:"Additional Proxies"},a=void 0,i={id:"secure-connections/sauce-connect-5/operation/proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",description:"The Sauce Connect Proxy 4.x.x version of this article is here.",source:"@site/docs/secure-connections/sauce-connect-5/operation/proxies.md",sourceDirName:"secure-connections/sauce-connect-5/operation",slug:"/secure-connections/sauce-connect-5/operation/proxies",permalink:"/sauce-docs/pr-preview/pr-2909/secure-connections/sauce-connect-5/operation/proxies",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/operation/proxies.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",sidebar_label:"Additional Proxies"},sidebar:"docs",previous:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2909/secure-connections/sauce-connect-5/operation/configuration"},next:{title:"API Server",permalink:"/sauce-docs/pr-preview/pr-2909/secure-connections/sauce-connect-5/operation/api-server"}},l={},u=[{value:"Setting Up Sauce Connect With Your Proxy Server",id:"setting-up-sauce-connect-with-your-proxy-server",level:2},{value:"Proxied Site Under Test (SUT)",id:"proxied-site-under-test-sut",level:2},{value:"<code>--proxy</code>",id:"--proxy",level:3},{value:"<code>--pac</code>",id:"--pac",level:3},{value:"<code>--auth</code>",id:"--auth",level:3},{value:"Proxied Sauce Labs REST API and Sauce Connect Server",id:"proxied-sauce-labs-rest-api-and-sauce-connect-server",level:2},{value:"<code>--proxy-sauce</code>",id:"--proxy-sauce",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The Sauce Connect Proxy 4.x.x version of this article is ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This guide is intended for users who need to set up additional proxies to route traffic originated from their Sauce Connect Proxy client. Additional proxies may be configured for various purposes\nsuch as improved network security, corporate internet usage policy, traffic monitoring, or caching. Sauce Connect Proxy network traffic includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Traffic between Sauce Labs and a Sauce Connect Proxy client.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connections are initiated by a Sauce Connect Proxy client."}),"\n",(0,t.jsx)(n.li,{children:"Requests between a Sauce Connect Proxy client and the Sauce Labs REST API service, such as start and stop requests and status updates."}),"\n",(0,t.jsx)(n.li,{children:"Sauce Connect Proxy long-lived HTTP/2 tunnel connection."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Traffic between Sauce Connect Proxy and the internet or internal servers serving data that your tests running on Sauce Labs infrastructure use.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This traffic originates from Sauce Labs-hosted browsers and mobile devices that are running your tests."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sauce-connect-with-your-proxy-server",children:"Setting Up Sauce Connect With Your Proxy Server"}),"\n",(0,t.jsx)(n.p,{children:"Two types of network traffic that are relevant to using proxy servers with Sauce Connect Proxy:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Test Traffic:"})," The Sauce Connect Proxy communicates with the Site Under Test (SUT) running in your network or public internet."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sauce Labs traffic"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"REST API Traffic:"})," The Sauce Connect Proxy client running on your network communicates to our REST API service some basic information about the Sauce Connect Proxy's status (for example, starting up, ready, stopping)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tunnel Traffic:"})," The Sauce Connect Proxy client establishes a secure long-lived connection to the Sauce Connect Proxy server in the Sauce Labs cloud to multiplex the SUT-bound traffic."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To configure Sauce Connect Proxy to use your proxy or proxies, you will need to include one or more Sauce Connect command-line options (see the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run",children:"Sauce Connect Proxy Command-Line Quick Reference Guide"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:[(0,t.jsx)(n.code,{children:"-x"}),"/",(0,t.jsx)(n.code,{children:"--proxy"})]})," allows configuring proxy for SUT (test) traffic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--pac",children:(0,t.jsx)(n.code,{children:"--pac"})})," allows configuring proxy for SUT (test) traffic via Proxy Auto-Configuration (PAC)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," allows configuring proxy for Sauce Labs REST API traffic and the tunnel traffic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--auth",children:(0,t.jsx)(n.code,{children:"--auth"})})," allows configuring proxy authentication separately."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"proxied-site-under-test-sut",children:"Proxied Site Under Test (SUT)"}),"\n",(0,t.jsx)(n.p,{children:"In this configuration, the Site Under Test (SUT) is behind a proxy (sometimes also called an upstream proxy), see the diagram below. This setup controls access to the SUT by IP allow-listing or by restricting proxy access to users with valid username/password credentials. Depending on your setup, this proxy may or may not be able to access the public internet."}),"\n",(0,t.jsx)("img",{src:(0,c.A)("img/sauce-connect/scp5-sut-proxy.png"),alt:"Site Under Test (SUT) behind a proxy",width:"800"}),"\n",(0,t.jsx)(n.h3,{id:"--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsxs)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:[(0,t.jsx)(n.code,{children:"-x"}),"/",(0,t.jsx)(n.code,{children:"--proxy"})]})," sets a proxy using the following format: ",(0,t.jsx)(n.code,{children:"[protocol://][user:pass@host:port]"}),". For example, ",(0,t.jsx)(n.code,{children:"https://user:auth@internal.dev:443"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Supported protocols are HTTP, HTTPS, SOCKS, and SOCKS5. If not specified, the default protocol is HTTP. Examples of different protocols:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["HTTP: ",(0,t.jsx)(n.code,{children:"--proxy local.dev:8080"})]}),"\n",(0,t.jsxs)(n.li,{children:["HTTP: ",(0,t.jsx)(n.code,{children:"--proxy http://local.dev:8080"})]}),"\n",(0,t.jsxs)(n.li,{children:["HTTPS: ",(0,t.jsx)(n.code,{children:"--proxy https://local.dev:4443"})]}),"\n",(0,t.jsxs)(n.li,{children:["SOCKS5: ",(0,t.jsx)(n.code,{children:"--proxy socks5//stunnel.local.dev:4443"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Authentication is optional and added if your proxy requires it. Alternatively, the authentication can be configured via the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--auth",children:(0,t.jsx)(n.code,{children:"--auth"})})," flag. For example:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--proxy https://user:auth@local.dev:4443"})," or ",(0,t.jsx)(n.code,{children:"--proxy https://local.dev:4443 --auth user:auth@local.dev:4443"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})})," flag configures the proxy for test traffic only. Use the ",(0,t.jsx)(n.a,{href:"#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," flag to configure a proxy for the Sauce Labs REST API and Sauce Connect Server traffic."]})}),"\n",(0,t.jsx)(n.h3,{id:"--pac",children:(0,t.jsx)(n.code,{children:"--pac"})}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes, proxy configuration for test traffic is more complex having just a single proxy for all resources. For example, your organization may have multiple proxy servers that allow access to different URL types i.e. one proxy for internal sites and another one for the public internet.\nSauce Connect Proxy allows configuring multiple proxies using industry-standard Proxy Auto-Configuration (PAC) with the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run#--pac",children:(0,t.jsx)(n.code,{children:"--pac"})})," flag. The argument can be a local path or a URL. For example:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A relative path to a file, ",(0,t.jsx)(n.code,{children:"--pac ../../relative/directory/my.pac"})]}),"\n",(0,t.jsxs)(n.li,{children:["An absolute path to a file, ",(0,t.jsx)(n.code,{children:"--pac /path/to/my.pac"})]}),"\n",(0,t.jsxs)(n.li,{children:["A local file URL, ",(0,t.jsx)(n.code,{children:"--pac file:///path/to/my.pac"})]}),"\n",(0,t.jsxs)(n.li,{children:["A remote URL, ",(0,t.jsx)(n.code,{children:"--pac http://internal.dev:8080/my.pac"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If needed, proxy authentication can be specified with ",(0,t.jsx)(n.a,{href:"#--auth",children:(0,t.jsx)(n.code,{children:"--auth"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--pac",children:(0,t.jsx)(n.code,{children:"--pac"})})," flag configures the proxy for test traffic only. Use the ",(0,t.jsx)(n.a,{href:"#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," flag to configure a proxy for the Sauce Labs REST API and Sauce Connect Server traffic."]})}),"\n",(0,t.jsx)(n.h3,{id:"--auth",children:(0,t.jsx)(n.code,{children:"--auth"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows setting site or upstream proxy basic authentication credentials in the format ",(0,t.jsx)(n.code,{children:"username:password@host:port"}),".\nEither host or port can be set to ",(0,t.jsx)(n.code,{children:'"*"'})," to match all. The flag can be specified multiple times to add multiple credentials."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set authentication for an upstream proxy on port 4443: ",(0,t.jsx)(n.code,{children:"--proxy https://local.dev:4443 --auth user:auth@local.dev:4443"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set authentication for an upstream proxy on all ports: ",(0,t.jsx)(n.code,{children:'--proxy https://local.dev:4443 --auth "user:auth@local.dev:*"'})]}),"\n",(0,t.jsxs)(n.li,{children:["Set authentication to a website: ",(0,t.jsx)(n.code,{children:'--auth "user:auth@httpbin.org*"'})]}),"\n",(0,t.jsxs)(n.li,{children:["Set authentication for different proxies returned by PAC: ",(0,t.jsx)(n.code,{children:"--auth user1:auth1@proxy.myorg.net:443 --auth user2:auth2@local.dev:4443 --pac ./mypac.pac"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"proxied-sauce-labs-rest-api-and-sauce-connect-server",children:"Proxied Sauce Labs REST API and Sauce Connect Server"}),"\n",(0,t.jsx)(n.p,{children:"In this configuration, requests to Sauce Labs are behind a proxy, see the diagram below. This proxy must be able to access Sauce Labs over the public internet."}),"\n",(0,t.jsx)("img",{src:(0,c.A)("img/sauce-connect/scp5-sauce-proxy.png"),alt:"Sauce behind a proxy",width:"800"}),"\n",(0,t.jsx)(n.h3,{id:"--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," defines a proxy that Sauce Connect should use to route requests to the Sauce Labs REST API service and Sauce Connect Proxy Server. The proxy URL format is the same as for the ",(0,t.jsx)(n.a,{href:"#--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})})," flag."]}),"\n",(0,t.jsxs)(n.p,{children:["This flag is introduced in version 5.0.0 to allow separate proxy configuration for test traffic and the tunnel traffic without using a more complex ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--pac",children:(0,t.jsx)(n.code,{children:"--pac"})})," flag."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," flag configures the Sauce Labs REST API and a tunnel server traffic only. Use the ",(0,t.jsx)(n.a,{href:"#--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})})," flag to configure a proxy for the test traffic."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const o={tabItem:"tabItem_Ymn6"};var c=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(96540),o=r(18215),c=r(23104),s=r(56347),a=r(205),i=r(57485),l=r(31682),u=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const o=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(o.location.search);n.set(c,e),o.replace({...o.location,search:n.toString()})}),[c,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,c=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[l,d]=x({queryString:r,groupId:o}),[f,y]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,c]=(0,u.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:o}),j=(()=>{const e=l??f;return p({value:e,tabValues:c})?e:null})();(0,a.A)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,c]),tabValues:c}}var y=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,c.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),o=a[r].value;o!==t&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...c,className:(0,o.A)("tabs__item",j.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:o}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function g(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function S(e){const n=(0,y.A)();return(0,m.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);