"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[73644],{98923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453),i=t(86025);const s={id:"pagerduty",title:"Connectors: PagerDuty",sidebar_label:"PagerDuty",keywords:["api-testing","integrations","pagerduty","connectors"]},a=void 0,c={id:"api-testing/on-prem/integrations/connectors/pagerduty",title:"Connectors: PagerDuty",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/pagerduty.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/pagerduty",permalink:"/api-testing/on-prem/integrations/connectors/pagerduty",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/pagerduty.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"pagerduty",title:"Connectors: PagerDuty",sidebar_label:"PagerDuty",keywords:["api-testing","integrations","pagerduty","connectors"]},sidebar:"apif",previous:{title:"Jira",permalink:"/api-testing/on-prem/integrations/connectors/jira"},next:{title:"StatusPage",permalink:"/api-testing/on-prem/integrations/connectors/statuspage"}},l={},d=[{value:"Connector Setup",id:"connector-setup",level:2},{value:"Step 1: Create an Alert Group",id:"step-1-create-an-alert-group",level:3},{value:"Step2: Configure the Connector",id:"step2-configure-the-connector",level:3},{value:"Step 3: Set Up Alerts",id:"step-3-set-up-alerts",level:3},{value:"Video Example",id:"video-example",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:'Below are some "API Fortress + PagerDuty" integration benefits:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Notify on-call responders based on failures in your API Fortress tests."}),"\n",(0,o.jsx)(n.li,{children:"Send critical information on the failure as well as a link to the test report from the failed test."}),"\n",(0,o.jsx)(n.li,{children:"Create high and low urgency incidents based on the severity of the failure via dynamic tags in the test."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,o.jsx)(n.h2,{id:"connector-setup",children:"Connector Setup"}),"\n",(0,o.jsxs)(n.p,{children:["This connector is built and supported by API Fortress. If you need any help with this connector please reach out to API Fortress support at ",(0,o.jsx)(n.a,{href:"mailto:support@saucelabs.com",children:"support@saucelabscom"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"step-1-create-an-alert-group",children:"Step 1: Create an Alert Group"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go to settings page by clicking on the gear icon in the upper right-hand corner"}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/Cogwheel-1.png"),alt:"Cogwheel-1.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Alert Groups"})," on the left-hand nav bar:"]}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/AlertGroup.png"),alt:"AlertGroup.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create a new group or select an existing alert group"}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/Connector.png"),alt:"Connector.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a new connector by selecting ** + Connector to this group**"}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/ConnectorNew.png"),alt:"ConnectorNew.png"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step2-configure-the-connector",children:"Step2: Configure the Connector"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Choose the ",(0,o.jsx)(n.strong,{children:"PagerDuty"})," connector from the dropdown menu"]}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/PickPagerDuty.png"),alt:"PickPagerDuty.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The connector configuration page now appears"}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.13.53-PM.png"),alt:"Screen-Shot-2019-08-12-at-4.13.53-PM.png"}),"\n",(0,o.jsx)(n.p,{children:"Configure the connector with the following params:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"routing_key"})," is the integration key generated for a service in PagerDuty. The ",(0,o.jsx)(n.code,{children:"routing_key"})," can be generated as such:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'click on the service you would like to alert, and click on the "Integrations tab"'}),"\n",(0,o.jsxs)(n.li,{children:["Use an existing integration or create a new one specifically for API Fortress. The integration key provided is the ",(0,o.jsx)(n.code,{children:'"routing_key"'}),"\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.48.09-PM.png"),alt:"Screen-Shot-2019-08-12-at-4.48.09-PM.png"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"severity"})," is the level the alert should be sent as. (critical, error, warning, and info)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dedup_key"})," is a key that will allow to you match a triggered alert with a response for that alert"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"event_action"})," is the action you would like the alert to take. (trigger, acknowledge, and resolve)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-3-set-up-alerts",children:"Step 3: Set Up Alerts"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go into project settings for a project you would like PagerDuty alerts set up for","\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2020/01/Settings.png"),alt:"Settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add the alert group that contains your PagerDuty connector to this project","\n",(0,o.jsx)("img",{src:(0,i.A)("img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.43.16-PM.png"),alt:"screenshot.png"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"video-example",children:"Video Example"}),"\n",(0,o.jsx)(n.p,{children:"Watch a quick video tutorial of the integration below:"}),"\n",(0,o.jsx)(n.a,{href:"https://player.vimeo.com/video/390023384",title:"PagerDuty Video - Click to Watch!",children:(0,o.jsx)(n.img,{src:"https://i.imgur.com/6vZV6wr.png",alt:"PagerDuty Video"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);