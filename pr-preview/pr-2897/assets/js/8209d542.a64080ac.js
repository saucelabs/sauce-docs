"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15139],{81246:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var s=n(74848),l=n(28453),i=n(11470),c=n(19365);const t={id:"usage",title:"Usage Analytics API Endpoints",sidebar_label:"Usage Analytics",description:"Retrieve Sauce Labs raw usage analytics data."},a=void 0,d={id:"dev/api/usage",title:"Usage Analytics API Endpoints",description:"Retrieve Sauce Labs raw usage analytics data.",source:"@site/docs/dev/api/usage.md",sourceDirName:"dev/api",slug:"/dev/api/usage",permalink:"/sauce-docs/pr-preview/pr-2897/dev/api/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/api/usage.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"usage",title:"Usage Analytics API Endpoints",sidebar_label:"Usage Analytics",description:"Retrieve Sauce Labs raw usage analytics data."},sidebar:"dev",previous:{title:"Insights",permalink:"/sauce-docs/pr-preview/pr-2897/dev/api/insights"},next:{title:"Orchestrate",permalink:"/sauce-docs/pr-preview/pr-2897/dev/api/orchestrate"}},o={},u=[{value:"Organization Concurrency",id:"organization-concurrency",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Teams Concurrency",id:"teams-concurrency",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Use the Usage Analytics API methods to retrieve information about your concurrency usage that you can then use to populate a dashboard that is meaningful for your organization."}),"\n",(0,s.jsxs)(r.p,{children:["Refer to ",(0,s.jsx)(r.a,{href:"/dev/api",children:"Getting Started"})," for Authentication and Server information."]}),"\n",(0,s.jsx)(r.h3,{id:"organization-concurrency",children:"Organization Concurrency"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)("span",{className:"api get",children:"GET"}),(0,s.jsx)("code",{children:"/usage-analytics/v1/concurrency/org"})]}),(0,s.jsx)("p",{}),"Return information about concurrency usage for organization:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"maximum, minimum concurrency for given granularity (monthly, weekly, daily, hourly),"}),(0,s.jsx)("li",{children:"teams' share for the organization maximum concurrency for given granularity (in percentage),"}),(0,s.jsx)("li",{children:"current limits."})]}),"Concurrency data is broken down by resource types for:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Virtual Cloud:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"virtual machines,"}),(0,s.jsx)("li",{children:"mac virtual machines,"}),(0,s.jsx)("li",{children:"mac arm virtual machines,"}),(0,s.jsx)("li",{children:"total virtial machines, combining all resource types."})]})]}),(0,s.jsxs)("li",{children:["Real Device Cloud:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"private devices,"}),(0,s.jsx)("li",{children:"public devices,"}),(0,s.jsx)("li",{children:"total virtial machines, combining all resource types."})]})]})]}),(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["This call requires ",(0,s.jsx)("code",{children:"org_id"})," parameter."]})}),(0,s.jsxs)("table",{id:"table-api",children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"org_id"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY| REQUIRED | STRING |"})}),(0,s.jsxs)("p",{children:["Return results only for the specified ",(0,s.jsx)("code",{children:"org_id"}),"."]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"source"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | ARRAY |"})}),(0,s.jsx)("p",{children:"Return results only for tests run in virtual device cloud or real device cloud. Supported values are:"}),(0,s.jsx)("p",{children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"rdc"})," - Real Device Cloud"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"vdc"})," - Virtual Device Cloud"]})]})}),"Default value is: ",(0,s.jsx)("code",{children:"vdc"})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"granularity"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,s.jsx)("p",{children:"Return results grouped by given granularity:"}),(0,s.jsx)("p",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"hourly"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"weekly"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"daily"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"monthly"})})]})}),"Default value is: ",(0,s.jsx)("code",{children:"daily"})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"resource_type"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,s.jsx)("p",{children:"Return results only for given resource type"}),(0,s.jsx)("p",{}),"For the Virtual Could tests:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"mac_virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"mac_arm_virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"total_virtual_machine"})})]}),"For the Real Devices Could tests:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"private_real_device"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"public_real_device"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"total_real_device"})})]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"start_date"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | DATE |"})}),(0,s.jsxs)("p",{children:["The starting date of the period during which the test runs executed, in ",(0,s.jsxs)("code",{children:["YYYY-MM-DDTHH:mm",":ssZ"]})," (UTC) format."]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"end_date"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | DATE |"})}),(0,s.jsxs)("p",{children:["The ending date of the period during which the test runs executed, in ",(0,s.jsxs)("code",{children:["YYYY-MM-DDTHH:mm",":ssZ"]})," (UTC) format."]})]})]})})]}),(0,s.jsxs)(i.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,s.jsx)(c.A,{value:"us",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \\\n--request GET "https://api.us-west-1.saucelabs.com/usage-analytics/v1/concurrency/org?org_id=<org_id>" | json_pp\n'})})}),(0,s.jsx)(c.A,{value:"eu",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \\\n--request GET "https://api.eu-central-1.saucelabs.com/usage-analytics/v1/concurrency/org?org_id=<org_id>" | json_pp\n'})})})]}),(0,s.jsx)(r.h4,{id:"responses",children:"Responses"}),(0,s.jsxs)("table",{id:"table-api",children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("td",{colSpan:"2",children:"Validation Error."})]})})]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n  "by_org": {\n    "org_id": "string",\n    "data": [\n      {\n        "time": "string",\n        "values": [\n          {\n            "resource_type": "virtual_machine",\n            "concurrency": {\n              "max": 0,\n              "min": 0,\n              "max_org_concurrency_team_share": [\n                {\n                  "team_id": "string",\n                  "pct": 0,\n                  "avg_concurrency": 0\n                }\n              ]\n            },\n            "limits": {\n              "total": 0,\n              "resource": 0,\n              "total_original": 0,\n              "resource_original": 0\n            }\n          }\n        ]\n      }\n    ]\n  }\n}\n'})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"teams-concurrency",children:"Teams Concurrency"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)("span",{className:"api get",children:"GET"}),(0,s.jsx)("code",{children:"/usage-analytics/v1/concurrency/teams"})]}),(0,s.jsx)("p",{}),"Return information about concurrency usage for teams:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"maximum, minimum concurrency for given granularity (monthly, weekly, daily, hourly),"}),(0,s.jsx)("li",{children:"current limits."})]}),"Concurrency data is broken down by resource types for:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Virtual Cloud:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"virtual machines,"}),(0,s.jsx)("li",{children:"mac virtual machines,"}),(0,s.jsx)("li",{children:"mac arm virtual machines,"}),(0,s.jsx)("li",{children:"total virtial machines, combining all resource types."})]})]}),(0,s.jsxs)("li",{children:["Real Device Cloud:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"private devices,"}),(0,s.jsx)("li",{children:"public devices,"}),(0,s.jsx)("li",{children:"total virtial machines, combining all resource types."})]})]})]}),(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["This call requires ",(0,s.jsx)("code",{children:"org_id"})," and ",(0,s.jsx)("code",{children:"team_id"})," parameters."]})}),(0,s.jsxs)("table",{id:"table-api",children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"org_id"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY| REQUIRED | STRING |"})}),(0,s.jsxs)("p",{children:["Return results only for the specified ",(0,s.jsx)("code",{children:"org_id"}),"."]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"team_id"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY| REQUIRED | STRING |"})}),(0,s.jsxs)("p",{children:["Return results only for the specified ",(0,s.jsx)("code",{children:"team_id"}),"."]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"source"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | ARRAY |"})}),(0,s.jsx)("p",{children:"Return results only for tests run in virtual device cloud or real device cloud. Supported values are:"}),(0,s.jsx)("p",{children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"rdc"})," - Real Device Cloud"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"vdc"})," - Virtual Device Cloud"]})]})}),"Default value is: ",(0,s.jsx)("code",{children:"vdc"})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"granularity"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,s.jsx)("p",{children:"Return results grouped by given granularity:"}),(0,s.jsx)("p",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"hourly"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"weekly"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"daily"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"monthly"})})]})}),"Default value is: ",(0,s.jsx)("code",{children:"daily"})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"resource_type"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,s.jsx)("p",{children:"Return results only for given resource type"}),(0,s.jsx)("p",{}),"For the Virtual Could tests:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"mac_virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"mac_arm_virtual_machine"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"total_virtual_machine"})})]}),"For the Real Devices Could tests:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"private_real_device"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"public_real_device"})}),(0,s.jsx)("li",{children:(0,s.jsx)("code",{children:"total_real_device"})})]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"start_date"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | DATE |"})}),(0,s.jsxs)("p",{children:["The starting date of the period during which the test runs executed, in ",(0,s.jsxs)("code",{children:["YYYY-MM-DDTHH:mm",":ssZ"]})," (UTC) format."]})]})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"end_date"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| QUERY | DATE |"})}),(0,s.jsxs)("p",{children:["The ending date of the period during which the test runs executed, in ",(0,s.jsxs)("code",{children:["YYYY-MM-DDTHH:mm",":ssZ"]})," (UTC) format."]})]})]})})]}),(0,s.jsxs)(i.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,s.jsx)(c.A,{value:"us",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \\\n--request GET "https://api.us-west-1.saucelabs.com/usage-analytics/v1/concurrency/teams?org_id=<org_id>" | json_pp\n'})})}),(0,s.jsx)(c.A,{value:"eu",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \\\n--request GET "https://api.eu-central-1.saucelabs.com/usage-analytics/v1/concurrency/teams?org_id=<org_id>" | json_pp\n'})})})]}),(0,s.jsx)(r.h4,{id:"responses-1",children:"Responses"}),(0,s.jsxs)("table",{id:"table-api",children:[(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("td",{colSpan:"2",children:"Validation Error."})]})})]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n  "by_team": [\n    {\n      "team_id": "string",\n      "data": [\n        {\n          "time": "string",\n          "values": [\n            {\n              "resource_type": "virtual_machine",\n              "concurrency": {\n                "max": 0,\n                "min": 0,\n                "max_org_concurrency_team_share": [\n                  {\n                    "team_id": "string",\n                    "pct": 0,\n                    "avg_concurrency": 0\n                  }\n                ]\n              },\n              "limits": {\n                "total": 0,\n                "resource": 0,\n                "total_original": 0,\n                "resource_original": 0\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})})]})]})}function x(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var s=n(18215);const l={tabItem:"tabItem_Ymn6"};var i=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,c),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>_});var s=n(96540),l=n(18215),i=n(23104),c=n(56347),t=n(205),a=n(57485),d=n(31682),o=n(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:l}}=e;return{value:r,label:n,attributes:s,default:l}}))}(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:n}=e;const l=(0,c.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(l.location.search);r.set(i,e),l.replace({...l.location,search:r.toString()})}),[i,l])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,i=h(e),[c,a]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[d,u]=j({queryString:n,groupId:l}),[p,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,i]=(0,o.Dv)(n);return[l,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),v=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{v&&a(v)}),[v]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:r,block:n,selectedValue:s,selectValue:c,tabValues:t}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const r=e.currentTarget,n=a.indexOf(r),l=t[n].value;l!==s&&(d(r),c(l))},u=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;r=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;r=a[n]??a[a.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},r),children:t.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>a.push(e),onKeyDown:u,onClick:o,...i,className:(0,l.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function f(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...r}),(0,g.jsx)(b,{...e,...r})]})}function _(e){const r=(0,m.A)();return(0,g.jsx)(f,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>t});var s=n(96540);const l={},i=s.createContext(l);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);