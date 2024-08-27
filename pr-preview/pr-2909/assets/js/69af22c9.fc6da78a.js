"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[97477],{61038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(74848),s=t(28453),i=(t(11470),t(19365),t(86025));const a={id:"user-mgmnt",title:"Account Management",sidebar_label:"Account Management",description:"Manage user accounts."},o=void 0,l={id:"error-reporting/org-settings/user-mgmnt",title:"Account Management",description:"Manage user accounts.",source:"@site/docs/error-reporting/org-settings/user-mgmnt.md",sourceDirName:"error-reporting/org-settings",slug:"/error-reporting/org-settings/user-mgmnt",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/org-settings/user-mgmnt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/org-settings/user-mgmnt.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724777154e3,frontMatter:{id:"user-mgmnt",title:"Account Management",sidebar_label:"Account Management",description:"Manage user accounts."},sidebar:"backtrace",previous:{title:"Access Control",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/project-setup/access-control"},next:{title:"Team Management",permalink:"/sauce-docs/pr-preview/pr-2909/error-reporting/org-settings/team-mgmnt"}},c={},u=[{value:"Configure Self Sign Up",id:"configure-self-sign-up",level:2},{value:"Invite a User",id:"invite-a-user",level:2},{value:"Pending Invitations",id:"pending-invitations",level:3},{value:"Remove a User",id:"remove-a-user",level:2},{value:"User Roles",id:"user-roles",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To manage user accounts, go to the ",(0,r.jsx)(n.strong,{children:"Organization settings"})," menu and select ",(0,r.jsx)(n.strong,{children:"Users"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"On the Users page, the following sections are available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configure self signup"}),": Allows you to add a domain for team members to sign up without an invitation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Manage invitations"}),": Allows you to send invitations to users and see pending invitations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Users"}),": Shows the list of users accounts in the system and their roles."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/user-mgmt.webp"),alt:"Shows the Users page in Organization settings."}),"\n",(0,r.jsx)(n.h2,{id:"configure-self-sign-up",children:"Configure Self Sign Up"}),"\n",(0,r.jsx)(n.p,{children:"You can allow your team members to sign up to your Backtrace instance without an invitation by adding an allowlisted domain."}),"\n",(0,r.jsx)(n.p,{children:"For example, if you supply a domain of backtrace.io, then anyone with a backtrace.io email address will be able to sign up from the login page."}),"\n",(0,r.jsx)(n.p,{children:"To add an allowlisted domain:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Configure self signup"}),", select ",(0,r.jsx)(n.strong,{children:"Allow signups from allowlisted domains"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"+ Add domain"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the Add allowlisted domain dialog:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enter the name of the domain."}),"\n",(0,r.jsxs)(n.li,{children:["Select a default authentication method. Options are:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"password"})," (recommended): The user is required to set a password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pam"}),": The system-configured password will be used for the username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"saml"}),": For more advanced authentication, you can configure SAML in the Single-sign on settings. The Single-sign on settings are available to admin user roles."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Select a default ",(0,r.jsx)(n.a,{href:"#user-roles",children:"user role"}),". Options are member or guest."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"invite-a-user",children:"Invite a User"}),"\n",(0,r.jsx)(n.p,{children:"You can invite a user to create an account in your Backtrace instance. The user will be sent an email with a private invitation link. It is also possible to Copy Invite Link if you would like to provide a link directly to the user."}),"\n",(0,r.jsxs)(n.p,{children:["Once a user has accepted an invitation, they will appear in the ",(0,r.jsx)(n.strong,{children:"Users"})," list and the invitation will be removed."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"To send account-related email messages, you must specify an SMTP server in the Server settings. The Server settings are available for admin user roles."})}),"\n",(0,r.jsx)(n.p,{children:"To invite a new user:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Manage invitations"}),", click ",(0,r.jsx)(n.strong,{children:"Send an invitation"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Invite a new user"})," page:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enter the user's email address."}),"\n",(0,r.jsx)(n.li,{children:"Enter a username."}),"\n",(0,r.jsxs)(n.li,{children:["Select a default authentication method. Options are:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"password"})," (recommended): The user is required to set a password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pam"}),": The system-configured password will be used for the username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"saml"}),": For more advanced authentication, you can configure SAML in the Single-sign on settings. The Single-sign on settings are available to admin user roles."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Select a default ",(0,r.jsx)(n.a,{href:"#user-roles",children:"user role"}),". Options are member or guest."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Send invite"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pending-invitations",children:"Pending Invitations"}),"\n",(0,r.jsx)(n.p,{children:"If an email invitation fails to send, or if a user hasn't yet accepted an invitation, it will appear as a pending invitation. You can either resend the invitation or delete it."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Manage invitations"}),", click ",(0,r.jsx)(n.strong,{children:"Pending Invitations"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"\u22ee"}),", then select either ",(0,r.jsx)(n.strong,{children:"Resend"})," or ",(0,r.jsx)(n.strong,{children:"Delete"}),".","\n",(0,r.jsx)("img",{src:(0,i.A)("img/error-reporting/project-settings/pending-invites.png"),alt:"Shows pending invitations to new users."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"remove-a-user",children:"Remove a User"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Users"}),", select the user accounts you want to remove."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"\u22ee"}),", then select ",(0,r.jsx)(n.strong,{children:"Delete user"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Any configuration objects created by the user are presented before deletion. If a user owns any configuration objects (such as projects or tokens), deletion will fail. You must either delete the dependent objects or transfer ownership in order for the deletion to succeed."}),"\n",(0,r.jsx)(n.h2,{id:"user-roles",children:"User Roles"}),"\n",(0,r.jsx)(n.p,{children:"The following user roles are available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"admin"}),": Able to manage users, domain sign-up and projects in the tenant."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"member"}),": Able to create and manage their own projects in the tenant. Able to send invitations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"guest"}),": Only able to view and manage their own user and settings. Unable to send invitations, modify existing configurations or create new projects."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In addition to the main user roles, there is also a superuser role that can be granted to users (go to the user page and modify the Access Control dropdown list). The superuser role may only be granted by other users with the superuser role."}),"\n",(0,r.jsx)(n.p,{children:"The superuser role is required to modify organization-wide settings, create new tenants, delete tenants, modify SSL settings, modify server-wide SMTP settings, and modify listener configuration (the network ports for receiving crashes and receiving user requests)."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(18215),i=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??m;return g({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);