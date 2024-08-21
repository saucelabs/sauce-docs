"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70030],{67335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(74848),n=r(28453),i=(r(11470),r(19365),r(86025));const s={id:"metric-export",title:"Metric Export and External Dashboards",sidebar_label:"Metric Export and External Dashboards",description:"Incorporate error and crash data that Backtrace collects into your central dashboard systems."},o=void 0,c={id:"error-reporting/project-setup/metric-export",title:"Metric Export and External Dashboards",description:"Incorporate error and crash data that Backtrace collects into your central dashboard systems.",source:"@site/docs/error-reporting/project-setup/metric-export.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/metric-export",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/project-setup/metric-export",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/metric-export.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"metric-export",title:"Metric Export and External Dashboards",sidebar_label:"Metric Export and External Dashboards",description:"Incorporate error and crash data that Backtrace collects into your central dashboard systems."},sidebar:"backtrace",previous:{title:"Stability Metrics",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/project-setup/stability-metrics"},next:{title:"Source Code",permalink:"/sauce-docs/pr-preview/pr-2897/error-reporting/project-setup/source-code"}},l={},u=[{value:"Metrics Stores",id:"metrics-stores",level:2},{value:"Metric Sets and Metrics",id:"metric-sets-and-metrics",level:2},{value:"Common examples of Metrics",id:"common-examples-of-metrics",level:3},{value:"Supported Metric Stores",id:"supported-metric-stores",level:2},{value:"Create a Metric Store",id:"create-a-metric-store",level:2},{value:"Circonus",id:"circonus",level:3},{value:"Datadog",id:"datadog",level:3},{value:"Graphite",id:"graphite",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Prometheus",id:"prometheus",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"View Status or Edit Metric Stores",id:"view-status-or-edit-metric-stores",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Teams want to incorporate error and crash data that Backtrace collects into their central dashboard systems that are designed to allow for generic monitoring, time-series data analysis, custom visualizations, alarms and alerts. Backtrace Metric Export allows admins to support this, by defining hierarchal groupings of time-series metrics that can be pushed or pulled to systems like Circonus, Datadog, Graphite, Grafana, Prometheus, and InfluxDB."}),"\n",(0,a.jsx)(t.p,{children:"Below, you can see an example of Backtrace data (number of incoming errors for a project) being exported as a timed metric to a Circonus dashboard system once a minute. In this chart, the average number of errors seen for project are displayed and available for different time windows."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/circonus-dashboard.webp"),alt:""}),"\n",(0,a.jsx)(t.p,{children:"To use the Metric Export feature, a Project Admin user needs to define:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Metric Sets, which are collections of different Metrics that will be shared with one of more Metric Stores."}),"\n",(0,a.jsx)(t.li,{children:"Metrics, each defined as an aggregate query in Backtrace with scalar values (i.e. unique or count or min or max) in the results."}),"\n",(0,a.jsx)(t.li,{children:"Metric Stores, that Backtrace will share metric information with. Metric Sets are associated with one or more Metrics Sets."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This guide will show admin users how to use the Backtrace UI to define Metric Sets and Metrics, configure Metric Stores, and guide you to documentation of supported third party systems so you can further configure those integrations."}),"\n",(0,a.jsx)(t.h2,{id:"metrics-stores",children:"Metrics Stores"}),"\n",(0,a.jsx)(t.p,{children:"Click on Project Settings > Metric Export to manage Metrics Sets and Metrics Stores."}),"\n",(0,a.jsx)(t.p,{children:"In this section, we will describe how to create Metric Sets and Metrics, and how to create and manage Metric Stores that you will share information with your third party systems."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/create-metrics-store.webp"),alt:""}),"\n",(0,a.jsx)(t.h2,{id:"metric-sets-and-metrics",children:"Metric Sets and Metrics"}),"\n",(0,a.jsx)(t.p,{children:"Metric Sets are containers used for grouping various Metrics together. Metric Sets can be connected to one or more Metric Stores. Metrics are created by defining the query in the Backtrace Explore view and using the 'Export As Metric' function. Click the 'Create a Metric set in Explore' to get started."}),"\n",(0,a.jsx)(t.p,{children:"In the Backtrace's Explore view, create a query that mimics the shape the metrics you want to push to your dashboards. Make use of Filters, Group By, and Aggregates that generate scalar values (i.e. count, unique, min, max, sum, first, last)."}),"\n",(0,a.jsx)(t.p,{children:"NOTE - Backtrace will ignore the Time Frame when creating the metric, and allow you to preview the type of data that will be sent in the metric on a regular basis (i.e. once a minute)."}),"\n",(0,a.jsx)(t.h3,{id:"common-examples-of-metrics",children:"Common examples of Metrics"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Number of errors","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Group by None, Add Aggregate "_tx - unique"'}),"\n",(0,a.jsx)(t.li,{children:"_tx is an attribute that identifies the individual error submitted to Backtrace. By calculating an Aggregate unique _tx, we can share how many unique txids, or individual errors were submitted."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Number of error and number of impacted users (or devices)","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Group by None, Add Aggregate "_tx - unique" and "guid - unique"'}),"\n",(0,a.jsx)(t.li,{children:"guid is an attribute that identifies an individual user or device submitting an error to Backtrace. By adding an Aggregate unique guid, we can share how many unique users or devices were impacted by submitted errors."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Number of errors by fingerprint","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Group by Fingerprint, Add Aggregate "_tx - unique"'}),"\n",(0,a.jsx)(t.li,{children:"Group by fingerprint allows Backtrace to share the unique number of errors received for each fingerprint."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Number of errors and number of impacted users by app.version","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Group by app.version, Add Aggregate "_tx - unique" and "guid - unique"'}),"\n",(0,a.jsx)(t.li,{children:"Group by app.version allows Backtrace to share the unique number of errors and users/devices impacted for each version of the game."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'See an example below where we use Explore to group by error.type and aggregate user.id-unique, to share how many users were impacted by each error.type. Use the "Export As" button on the right to Export the query as a Metric. Provide a name that identifies the Metric and save it within a Metric Set (or create a new one). In a subsequent step, we will create Metric Stores that will be associate to gather the Metrics with a Metric Set on a scheduled basis (i.e. once a minute).'}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/metrics-export-example.webp"),alt:""}),"\n",(0,a.jsx)(t.p,{children:"See an example below where a Metric Set called ProjectXErrorsAndImpactedUsers contains 4 metrics (AllErrors2, ErrorsByTypeWithImpactedUsers, UsersImpacted, and UsersImpactedPerFingerprint). You can preview the query that is defining each metric."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/metrics-set-example.webp"),alt:""}),"\n",(0,a.jsx)(t.h2,{id:"supported-metric-stores",children:"Supported Metric Stores"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace will share data from Metric Sets to third party system through Metric Stores. Metric Stores use Adapters to connect with third party stores via push or pull mechanism. In this section, we will discuss which systems are supported and which adapters can be used."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/supported-metrics-stores.png"),alt:""}),"\n",(0,a.jsx)(t.h2,{id:"create-a-metric-store",children:"Create a Metric Store"}),"\n",(0,a.jsx)(t.p,{children:"When creating a Metric Store, you will specify a Name, a period (in seconds) for how often to share data, and choose an Adapter to use. Depending on the Adapter you choose, you will need to specify additional connection information. Please see your third party's documentation for the best way to ingest metrics from third part systems like Backtrace."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/create-metric-store.png"),alt:""}),"\n",(0,a.jsx)(t.p,{children:"See below for details on how to configure supported adapters."}),"\n",(0,a.jsx)(t.h3,{id:"circonus",children:"Circonus"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace connects to Circonus via one of 2 adapters:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Circonus_pull: Backtrace will generate a randomly secure URL from which to pull JSON data and a randomly generated username and password with basic authentication. Enter this URL into your Circonus integration as a JSON",":Pull"," check. See details in the Checks section of the Circonus docs to create your JSON: Pull check."]}),"\n",(0,a.jsx)(t.li,{children:'Circonus_push: You will need to set up a JSON Push check in Circonus, and copy the "Data Submission URL" that Circonus provides. In Backtrace, create a new Circonus_push adapter and paste the Data Submission URL in the Backtrace Circonus_push adapter. You can configure the frequency (in minutes) at which metrics are pushed to this URL in Backtrace. Backtrace sets a default value of 60 seconds.'}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"datadog",children:"Datadog"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace connects to Datadog via the HTTP Post API. When creating as Datadog adapter in Backtrace, you mist specify a DD_CLIENT_API_KEY to use. You can configure the frequency (in minutes) at which metrics are pushed to this API, and the default is 60 seconds."}),"\n",(0,a.jsx)(t.h3,{id:"graphite",children:"Graphite"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace connects to Graphite via the Carbon API and shares plaintext as described here. Specify a hostname and a port to write data into, netcat style. You can configure the frequency, and the default is 60 seconds."}),"\n",(0,a.jsx)(t.h3,{id:"grafana",children:"Grafana"}),"\n",(0,a.jsxs)(t.p,{children:["Backtrace connects to Grafana via the HTTP API as defined ",(0,a.jsx)(t.a,{href:"https://grafana.com/docs/grafana-cloud/metrics-graphite/http-api/",children:"here"}),". Depending on whether you are using a shared or dedicated cluster, you must specify:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["An instance URL","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If it looks like ",(0,a.jsx)(t.a,{href:"https://graphite-us-central1.grafana.net/metrics",children:"https://graphite-us-central1.grafana.net/metrics"})," then it is a shared instance and an instance ID input is also required."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["If it looks like ",(0,a.jsx)(t.a,{href:"https://tsdb-123-your-company-name.hosted-metrics.grafana.net/graphite",children:"https://tsdb-123-your-company-name.hosted-metrics.grafana.net/graphite"})," then it is a dedicated instance and you do not require an instance ID."]}),"\n",(0,a.jsx)(t.li,{children:"An API key."}),"\n",(0,a.jsx)(t.li,{children:"An instance ID (optional, see first bullet point).\nYou can configure the frequency (in seconds), and the default is 60 seconds."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,a.jsx)(t.p,{children:"Backtrace connects to Prometheus via a randomly generated secure URL Backtrace can configure Prometheus to scrape from. See the Prometheus documentation on targets to scrape."}),"\n",(0,a.jsx)(t.h3,{id:"influxdb",children:"InfluxDB"}),"\n",(0,a.jsxs)(t.p,{children:["The API for this is ",(0,a.jsx)(t.a,{href:"https://docs.influxdata.com/influxdb/v1.8/guides/write_data/",children:"here"}),". The user configures the following:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"URL to post to."}),"\n",(0,a.jsx)(t.li,{children:"The user is able to configure the frequency (in minutes), but the default is 1 minute."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"view-status-or-edit-metric-stores",children:"View Status or Edit Metric Stores"}),"\n",(0,a.jsx)(t.p,{children:"Each Metric Store will provide information about how often it shares data with the target (you can see below each Metric store has a Period of 60 seconds), and the last time data was transmitted for the Push type adapters. Additional configuration details can be viewed, For the PUSH type adapters, you can see the configured URL or similar that Backtrace will push data to every ## seconds. For the PULL type adapters, you can view the resource URL you can enter into the third party store to retrieve information from Backtrace."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/view-status-metrics-stores.webp"),alt:""}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"After reading this chapter, you should have a good understanding of components you need to configure in Backtrace to push metric data to your third party dashboard system. To review:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You need one or more Metric Sets, which are named groupings of Metrics, to be connected to one or more Metric Store."}),"\n",(0,a.jsx)(t.li,{children:'Metrics will be defined by queries in the Explore view and saved within one of the Metric Sets. When defining Metrics, use filter, group by, and scalar aggregate values to shape the query, ignoring time filters. "Export" the Query as a Metric Export and preview the Metrics in the Project Settings / Metric Export page.'}),"\n",(0,a.jsx)(t.li,{children:"Metric Stores will use one of the packaged Adapters to define push or pull connectivity to the third party system. Metric Stores will share data with the third party system based on a period specified in Backtrace at second-level granularity."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var a=r(96540),n=r(18215),i=r(23104),s=r(56347),o=r(205),c=r(57485),l=r(31682),u=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,d]=m({queryString:r,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),x=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=o[r].value;n!==a&&(l(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);