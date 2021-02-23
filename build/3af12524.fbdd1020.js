(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return c.a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=d(n),p=r,m=l["".concat(o,".").concat(p)]||l[p]||f[p]||a;return n?c.a.createElement(m,u(u({ref:t},i),{},{components:n})):c.a.createElement(m,u({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(8),a=(n(0),n(222)),o={id:"security",title:"Sauce Connect Authentication and Certificates",sidebar_label:"Security"},i={unversionedId:"secure-connections/sauce-connect/security",id:"secure-connections/sauce-connect/security",isDocsHomePage:!1,title:"Sauce Connect Authentication and Certificates",description:"*   Network Security",source:"@site/docs/secure-connections/sauce-connect/security.md",slug:"/secure-connections/sauce-connect/security",permalink:"/secure-connections/sauce-connect/security",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/secure-connections/sauce-connect/security.md",version:"current",lastUpdatedBy:"Kim",lastUpdatedAt:1612778224,sidebar_label:"Security",sidebar:"someSidebar",previous:{title:"Using Sauce Connect Proxy Tunnels",permalink:"/secure-connections/sauce-connect/proxy-tunnels"},next:{title:"Sauce Connect Troubleshooting",permalink:"/secure-connections/sauce-connect/troubleshooting"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(c.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(r.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+and+Network+Security?src=sidebar"}),"Network Security"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(r.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Securing+Sauce+Connect+Proxy?src=sidebar"}),"Securing Sauce Connect Proxy")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(r.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Authentication?src=sidebar"}),"Proxy Authentication")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(r.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Certificate+Handling?src=sidebar"}),"Certificate Handling")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(r.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+and+SSL+Certificate+Bumping?src=sidebar"}),"SSL Certificate Bumping"))))))}l.isMDXComponent=!0}}]);