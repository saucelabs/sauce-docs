"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[77033],{7386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=t(74848),a=t(28453),i=t(86025);const c={id:"managing-concurrency",title:"Managing Concurrency",sidebar_label:"Managing Concurrency"},o=void 0,s={id:"basics/acct-team-mgmt/concurrency/managing-concurrency",title:"Managing Concurrency",description:"Your subscription to the Sauce Labs Virtual Cloud or Real Device Cloud entitles you to run a certain amount of concurrent tests as many times as you like within a given region. In essence, this means you pay for the ability to run at your peak needs and you can run at that as frequently as you like. Your concurrency can be used for both automated and live testing.",source:"@site/docs/basics/acct-team-mgmt/concurrency/managing-concurrency.md",sourceDirName:"basics/acct-team-mgmt/concurrency",slug:"/basics/acct-team-mgmt/concurrency/managing-concurrency",permalink:"/sauce-docs/pr-preview/pr-2908/basics/acct-team-mgmt/concurrency/managing-concurrency",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/acct-team-mgmt/concurrency/managing-concurrency.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"managing-concurrency",title:"Managing Concurrency",sidebar_label:"Managing Concurrency"},sidebar:"docs",previous:{title:"Switching active team",permalink:"/sauce-docs/pr-preview/pr-2908/basics/acct-team-mgmt/switching-active-team"},next:{title:"Adding and Deleting Teams",permalink:"/sauce-docs/pr-preview/pr-2908/basics/acct-team-mgmt/adding-deleting-teams"}},l={},u=[{value:"Setting Parallel Limits in Common Frameworks",id:"setting-parallel-limits-in-common-frameworks",level:4},{value:"Usage Reporting &amp; Notifications",id:"usage-reporting--notifications",level:4},{value:"Team Management",id:"team-management",level:2},{value:"Virtual Cloud Concurrency",id:"virtual-cloud-concurrency",level:2},{value:"Concurrency API",id:"concurrency-api",level:3},{value:"Exceeding Virtual Cloud Concurrency",id:"exceeding-virtual-cloud-concurrency",level:3},{value:"Real Device Cloud Concurrency",id:"real-device-cloud-concurrency",level:2},{value:"Exceeding Public Real Device Cloud Concurrency",id:"exceeding-public-real-device-cloud-concurrency",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Your subscription to the Sauce Labs Virtual Cloud or Real Device Cloud entitles you to run a certain amount of concurrent tests as many times as you like within a given region. In essence, this means you pay for the ability to run at your peak needs and you can run at that as frequently as you like. Your concurrency can be used for both automated and live testing."}),"\n",(0,r.jsx)(n.p,{children:"Managing your concurrency throughout your organization is an important aspect of administering your Sauce Labs account. We provide multiple options to make it easy for you to optimize your usage and enable your releases to go out smoothly.\nConcurrency is defined at two levels, the organization and the team level."}),"\n",(0,r.jsx)(n.h4,{id:"setting-parallel-limits-in-common-frameworks",children:"Setting Parallel Limits in Common Frameworks"}),"\n",(0,r.jsx)(n.p,{children:"The first and foremost way to manage how many concurrent tests to run on Sauce Labs is to use the out of the box mechanisms available in your test framework. For convenience we have included some of the more populare frameworks below but please consult the documentation for your specific framework to learn more."}),"\n",(0,r.jsx)(n.h4,{id:"usage-reporting--notifications",children:"Usage Reporting & Notifications"}),"\n",(0,r.jsxs)(n.p,{children:["Sauce Labs provides you robust mechanisms to inspect your organization's usage. This includes seeing your organization wide usage over time and a team breakdown. To learn more see ",(0,r.jsx)(n.a,{href:"/insights/usage-report",children:"Usage Report"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["We also provide notification mechanisms to alert you when your organization is reaching its subscription amount. To learn more about these see ",(0,r.jsx)(n.a,{href:"/insights/usage-report",children:"Usage Notifications"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"team-management",children:"Team Management"}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,r.jsx)(n.p,{children:"If your organization has multiple teams sharing a Sauce Labs account, you can use Team Limits to ensure that your organization's concurrency is distributed among different teams."}),"\n",(0,r.jsx)(n.p,{children:"If you are an org admin, you can view and control your organization's concurrency limits:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In Sauce Labs, click ",(0,r.jsx)(n.strong,{children:"ACCOUNT"})," and then click ",(0,r.jsx)(n.strong,{children:"Organization Management"}),"."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/team-mgmt/team-mgmt-nav.png"),alt:"Organization management navigation",width:"300"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Organization Management"})," page, under the ORGANIZATION NAME box, concurrency limits will be displayed for the selected data center."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To view the limits for another data center, in the upper-right corner of the window, click the ",(0,r.jsx)(n.strong,{children:"DATA CENTER"})," dropdown and select the relevant data center."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/team-mgmt/ccy-data-center-dropdown.png"),alt:"Data Center dropdown",width:"250"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Organization Management"})," page, click the ",(0,r.jsx)(n.strong,{children:"TEAMS"})," tab. ",(0,r.jsx)(n.strong,{children:"Team VM Concurrency"}),", ",(0,r.jsx)(n.strong,{children:"Team Real Device Concurrency"})," and ",(0,r.jsx)(n.strong,{children:"Peak VM Concurrency"})," will be displayed for each team in the organization."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/team-mgmt/ccy-limits-teams.png"),alt:"Team concurrency limits",width:"600"}),"\n",(0,r.jsxs)(n.p,{children:["For more usage information, see ",(0,r.jsx)(n.a,{href:"/basics/acct-team-mgmt/viewing-exporting-usage-data/",children:"Viewing and Exporting Usage Data"}),"."]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To allocate concurrency to teams, click on the team name to open the Teams tab."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under the Teams tab, Enter ",(0,r.jsx)(n.strong,{children:"Team VM Concurrency"})," or ",(0,r.jsx)(n.strong,{children:"Team Real Device Concurrency"})," and click on Update."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"virtual-cloud-concurrency",children:"Virtual Cloud Concurrency"}),"\n",(0,r.jsx)(n.p,{children:"For an example, let's say the organization admin allocates 100 VMs to Team A, which has five members. Since the members of a team share the team's VM limit, the number of concurrent tests being run by the five team members cannot exceed 100. However, concurrency limits cannot be set at the user level, so User A could be running 20 tests, while user B is running 50 tests, and users C, D, and E are running 10 tests each. Or User A could be running 100 tests while Users B, C, D, and E are not running any tests."}),"\n",(0,r.jsx)(n.h3,{id:"concurrency-api",children:"Concurrency API"}),"\n",(0,r.jsx)(n.p,{children:"In some cases you might want to configure your test framework to dynamically pull real time information about your organization and teams concurrency usage."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.a,{href:"/dev/api/accounts/#get-user-concurrency",children:"Get User Concurrency"})," API endpoint to retrieve a specific user's concurrency usage compared with their organization and team concurrency allowances."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Concurrency Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \\\n--header 'Content-Type: application/json' \\ | json_pp\n"})}),"\n",(0,r.jsx)(n.h3,{id:"exceeding-virtual-cloud-concurrency",children:"Exceeding Virtual Cloud Concurrency"}),"\n",(0,r.jsx)(n.p,{children:"The Virtual Cloud is used to run business critical pipelines across large enterprise organizations. This means there will be times when it is difficult to predict exactly how much concurrency you will need at all times. For these situations we allow your organization to exceed it's concurrency limit."}),"\n",(0,r.jsx)(n.p,{children:"The following table describes the maximum amount you are allowed to exceed your concurrency limit."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Subscription Amount"}),(0,r.jsx)(n.th,{children:"% You Can Exceed"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1-100"}),(0,r.jsx)(n.td,{children:"200%"}),(0,r.jsx)(n.td,{children:"50 -> 150"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"101-500"}),(0,r.jsx)(n.td,{children:"100%"}),(0,r.jsx)(n.td,{children:"200 -> 400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"501-2000"}),(0,r.jsx)(n.td,{children:"50%"}),(0,r.jsx)(n.td,{children:"1000 -> 1500"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2001+"}),(0,r.jsx)(n.td,{children:"10%"}),(0,r.jsx)(n.td,{children:"2500 -> 2750"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Once your organization attempts to run a test past the maximum amount you can exceed your tests will receive a ",(0,r.jsx)(n.a,{href:"/dev/error-messages/#youve-exceeded-your-sauce-labs-concurrency-limit",children:"You've Exceeding Your Concurrency Limit Error"})]}),"\n",(0,r.jsx)(n.h2,{id:"real-device-cloud-concurrency",children:"Real Device Cloud Concurrency"}),"\n",(0,r.jsx)(n.p,{children:"If your subscription includes access to our Public Real Device Cloud, then your subscription quantity equals the amount of concurrent tests that can be run on Sauce Labs real devices."}),"\n",(0,r.jsxs)(n.p,{children:["In case your organization has private real devices, check out how to ",(0,r.jsx)(n.a,{href:"/basics/acct-team-mgmt/private-device-mgmt",children:"manage and assign your private devices"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"exceeding-public-real-device-cloud-concurrency",children:"Exceeding Public Real Device Cloud Concurrency"}),"\n",(0,r.jsxs)(n.p,{children:["If your organization attempts to run more tests than your subscription permits then your tests will be queued until an available concurrency slot becomes available. Your request for a device will queue for up to 15 minutes by default and it can be configured up to a maximum of 30 minutes by adjusting your ",(0,r.jsx)(n.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example, if you have a Public Real Device Cloud concurrency limit of 5 and you attempt to run 10 tests, 5 of the tests will run immediately and the other 5 will be queued until one of the other tests finishes."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);