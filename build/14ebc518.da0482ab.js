(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return o})),a.d(t,"MDXProvider",(function(){return b})),a.d(t,"mdx",(function(){return O})),a.d(t,"useMDXComponents",(function(){return u})),a.d(t,"withMDXComponents",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){return function(t){var a=u(t.components);return r.a.createElement(e,l({},t,{components:a}))}},u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),o=u(a),d=n,b=o["".concat(l,".").concat(d)]||o[d]||g[d]||i;return a?r.a.createElement(b,c(c({ref:t},m),{},{components:a})):r.a.createElement(b,c({ref:t},m))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},223:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=l,t.default=function(e,t){void 0===t&&(t={});return(0,l().withBaseUrl)(e,t)};var r=n(a(29)),i=a(224);function l(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,l=r.forcePrependBaseUrl,m=void 0!==l&&l,c=r.absolute,s=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,i.hasProtocol)(a))return a;if(m)return t+a;var o=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+o:o}(n,a,e,t)}}}},224:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=n,t.default=function(e){return void 0!==e&&!n(e)}},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(222)),l=a(223),m=a.n(l),c={id:"managing-user-info",title:"Managing User Information",sidebar_label:"Managing User Information"},s={unversionedId:"basics/acct-team-mgmt/managing-user-info",id:"basics/acct-team-mgmt/managing-user-info",isDocsHomePage:!1,title:"Managing User Information",description:"ENTERPRISE PLANS ONLY",source:"@site/docs/basics/acct-team-mgmt/managing-user-info.md",slug:"/basics/acct-team-mgmt/managing-user-info",permalink:"/basics/acct-team-mgmt/managing-user-info",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/basics/acct-team-mgmt/managing-user-info.md",version:"current",lastUpdatedBy:"James Tacker",lastUpdatedAt:1612372425,sidebar_label:"Managing User Information",sidebar:"someSidebar",previous:{title:"Adding and Deactivating Users",permalink:"/basics/acct-team-mgmt/adding-deactivating-users"},next:{title:"Viewing and Exporting Usage Data",permalink:"/basics/acct-team-mgmt/viewing-exporting-usage-data"}},o=[{value:"Updating User Information",id:"updating-user-information",children:[]},{value:"Filtering Users",id:"filtering-users",children:[{value:"General Filters",id:"general-filters",children:[]},{value:"Team Filters",id:"team-filters",children:[]}]},{value:"Changing a User&#39;s Role",id:"changing-a-users-role",children:[{value:"Changing a User\u2019s Role - Organization Management",id:"changing-a-users-role---organization-management",children:[]},{value:"Changing a User\u2019s Role - User Details",id:"changing-a-users-role---user-details",children:[]}]},{value:"Regenerating Access Keys",id:"regenerating-access-keys",children:[]},{value:"User Roles",id:"user-roles",children:[]}],d={toc:o};function u(e){var t=e.components,a=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(n.default)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("button",{class:"badge-blue"},"ENTERPRISE PLANS ONLY")),Object(i.mdx)("h2",{id:"updating-user-information"},"Updating User Information"),Object(i.mdx)("p",null,"Organization admins can update the name, email address, user name, role, and team assignment for any user in their organization. Team admins can update that information for users on their team. If you invite a user via email, you will need to edit their concurrency limit and other account details after they have accepted your invitation and created an account."),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"In Sauce Labs, click ",Object(i.mdx)("strong",{parentName:"p"},"Account")," and then click ",Object(i.mdx)("strong",{parentName:"p"},"Team Management"),"."),Object(i.mdx)("img",{src:m()("img/team-mgmt/team-mgmt-nav.jpg"),alt:"Team management navigation",width:"400"})),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"Users")," tab, click the user name of the user whose information you want to edit."),Object(i.mdx)("img",{src:m()("img/team-mgmt/users-list-username.jpg"),alt:"User details"})),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"User Details")," page, in the ",Object(i.mdx)("strong",{parentName:"p"},"User Information")," section, make the necessary changes and then click ",Object(i.mdx)("strong",{parentName:"p"},"Update"),"."),Object(i.mdx)("img",{src:m()("img/team-mgmt/user-details-user-info.jpg"),alt:"User details"}))),Object(i.mdx)("h2",{id:"filtering-users"},"Filtering Users"),Object(i.mdx)("p",null,"Sauce Labs offers several options for filtering your list of users. To apply one or more of the available filters:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"In Sauce Labs, click ",Object(i.mdx)("strong",{parentName:"li"},"Account")," and then click ",Object(i.mdx)("strong",{parentName:"li"},"Team Management"),"."),Object(i.mdx)("li",{parentName:"ol"},"On the ",Object(i.mdx)("strong",{parentName:"li"},"Users")," tab, select the checkboxes of the filters you want to apply. The user list will update accordingly.")),Object(i.mdx)("h3",{id:"general-filters"},"General Filters"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Filter"),Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Description"),Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Org Admin Options"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Active"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Active user"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Deactivate")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Inactive"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"The user has been deactivated by the organization admin"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Reactivate")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Pending"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"The user has been invited via email but has not yet confirmed their invite, or the user was added manually and has not verified their email address"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Deactivate")))),Object(i.mdx)("h3",{id:"team-filters"},"Team Filters"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Filter"),Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Team name"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Filters by team")))),Object(i.mdx)("h2",{id:"changing-a-users-role"},"Changing a User's Role"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"NOTE:")," Only an organization admin can change a user\u2019s role."),Object(i.mdx)("p",null,"You can change a user\u2019s role on the ",Object(i.mdx)("strong",{parentName:"p"},"Organization Management")," page and also on the ",Object(i.mdx)("strong",{parentName:"p"},"User Details")," page."),Object(i.mdx)("h3",{id:"changing-a-users-role---organization-management"},"Changing a User\u2019s Role - Organization Management"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"In Sauce Labs, click ",Object(i.mdx)("strong",{parentName:"p"},"Account")," and then click ",Object(i.mdx)("strong",{parentName:"p"},"Team Management"),".")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"Users")," tab, select the checkbox of the user you want to deactivate.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Above the list of users, in the ",Object(i.mdx)("strong",{parentName:"p"},"Action")," dropdown, click ",Object(i.mdx)("strong",{parentName:"p"},"Assign Role")," and then click the new role."),Object(i.mdx)("img",{src:m()("img/team-mgmt/change-role-org-mgmt.jpg"),alt:"Change a user's role"}))),Object(i.mdx)("h3",{id:"changing-a-users-role---user-details"},"Changing a User\u2019s Role - User Details"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"In Sauce Labs, click ",Object(i.mdx)("strong",{parentName:"p"},"Account")," and then click ",Object(i.mdx)("strong",{parentName:"p"},"Team Management"),".")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"Users")," tab, click the user name of the user whose role you want to change."),Object(i.mdx)("img",{src:m()("img/team-mgmt/users-list-username.jpg"),alt:"Users list"})),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"User Details")," page, in the ",Object(i.mdx)("strong",{parentName:"p"},"User Information")," section, click the ",Object(i.mdx)("strong",{parentName:"p"},"Org. Role")," dropdown and then click the new role."),Object(i.mdx)("img",{src:m()("img/team-mgmt/change-role-user-details.jpg"),alt:"Change a user's role"})),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Click ",Object(i.mdx)("strong",{parentName:"p"},"Update"),"."))),Object(i.mdx)("h2",{id:"regenerating-access-keys"},"Regenerating Access Keys"),Object(i.mdx)("p",null,"You can regenerate a user's access key on the ",Object(i.mdx)("strong",{parentName:"p"},"Organization Management")," page."),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"In Sauce Labs, click ",Object(i.mdx)("strong",{parentName:"p"},"Account")," and then click ",Object(i.mdx)("strong",{parentName:"p"},"Team Management"),".")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"Users")," tab, click the user name of the user whose access key you want to regenerate."),Object(i.mdx)("img",{src:m()("img/team-mgmt/users-list-username.jpg"),alt:"Users list"})),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"On the ",Object(i.mdx)("strong",{parentName:"p"},"User Details")," page, in the ",Object(i.mdx)("strong",{parentName:"p"},"Access Key")," section, click ",Object(i.mdx)("strong",{parentName:"p"},"Regenerate Access Key"),"."),Object(i.mdx)("img",{src:m()("img/team-mgmt/user-details-access-key.jpg"),alt:"User Details - Access Key"}))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"NOTE:")," Regenerating your access key will update the access key throughout your configuration. Commands containing your old access key will fail."),Object(i.mdx)("h2",{id:"user-roles"},"User Roles"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Role"),Object(i.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Permissions"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Organization Admin"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,"Create and delete teams, and move teams within an organization"),Object(i.mdx)("li",null,"Manage Organization Settings"),Object(i.mdx)("li",null,"Manage users across the organization:",Object(i.mdx)("ul",null,Object(i.mdx)("li",null,"Add and deactivate users"),Object(i.mdx)("li",null,"Reset user passwords"),Object(i.mdx)("li",null,"Change email addresses and names"),Object(i.mdx)("li",null,"Assign user roles"),Object(i.mdx)("li",null,"View user activity"))),Object(i.mdx)("li",null,"Set concurrency allocation for teams"),Object(i.mdx)("li",null,"Create Sauce Connect Proxy tunnels for users across the organization to share, or limit access to only other organization admins"),Object(i.mdx)("li",null,"View all jobs in the organization")))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Team Admin"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,"Only a user assigned to a team can become a team admin"),Object(i.mdx)("li",null,"Manage the team and users on the team"),Object(i.mdx)("li",null,"View team usage and users assigned to the team"),Object(i.mdx)("li",null,"View the shared tunnels and non-shared tunnels created by team members"),Object(i.mdx)("li",null,"Manage users on the team:",Object(i.mdx)("ul",null,Object(i.mdx)("li",null,"Reset user passwords"),Object(i.mdx)("li",null,"Change email addresses and names"),Object(i.mdx)("li",null,"Move users between their team and the list of users who are not assigned to any team"),Object(i.mdx)("li",null,"View user activity"))),Object(i.mdx)("li",null,"View jobs that were run by team members"),Object(i.mdx)("li",null,"View jobs that were run by members of other teams")))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Team Member"),Object(i.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,"Edit personal information such as name, password, and email address"),Object(i.mdx)("li",null,"View jobs that were run by other team members"),Object(i.mdx)("li",null,"View jobs that were run by members of other teams in the organization"),Object(i.mdx)("li",null,"Create Sauce Connect Proxy tunnels for individual use or to be shared with other team members")))))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"NOTE:")," In every organization, multiple organization admins and/or team admins can exist. However, users can only be part of one organization."))}u.isMDXComponent=!0}}]);