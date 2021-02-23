(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,s({},t,{components:n}))}},d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.a.createElement(b,c(c({ref:t},i),{},{components:n})):a.a.createElement(b,c({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(222)),s={id:"web-apps",title:"Web Application Testing",sidebar_label:"Getting Started"},i={unversionedId:"web-apps",id:"web-apps",isDocsHomePage:!1,title:"Web Application Testing",description:"It's easy to run automated web application tests in the Sauce Labs device cloud.",source:"@site/docs/web-apps.md",slug:"/web-apps",permalink:"/web-apps",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/web-apps.md",version:"current",lastUpdatedBy:"spider-sauce",lastUpdatedAt:1613086534,sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Mobile App Testing FAQ",permalink:"/mobile-apps/faq"},next:{title:"Web Live Testing Quickstart",permalink:"/web-apps/live-testing"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"It's easy to run automated web application tests in the Sauce Labs device cloud."),Object(o.mdx)("div",{class:"box-wrapper",markdown:"1"},Object(o.mdx)("div",{class:"box box1 card"},Object(o.mdx)("div",{class:"container"},Object(o.mdx)("h2",null,"Live Testing"),Object(o.mdx)("p",null,"Use Sauce Labs to live test web apps on a desktop browser, and on native browsers for real and virtual devices."),Object(o.mdx)("ul",null,Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Live+Web+App+Testing+on+Mobile+Browsers+with+Virtual+and+Real+Devices"},"Testing on Mobile Browsers")),Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Live+Web+App+Testing+on+Desktop+Browsers"},"Testing on Desktop Browsers")),Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Best+Practices+for+Live+Testing"},"Best Practices for Live Testing"))))),Object(o.mdx)("div",{class:"box box2 card"},Object(o.mdx)("div",{class:"container"},Object(o.mdx)("h2",null,"Automated Testing"),Object(o.mdx)("p",null,"Run automated tests of web apps on desktop and mobile browsers."),Object(o.mdx)("ul",null,Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Automated+Web+App+Testing+on+Desktop+and+Mobile+Browsers"},"Testing on Desktop and Mobile Browsers")),Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"/testrunner-toolkit"},"Run tests with Cypress, Playwright, and TestCafe"))))),Object(o.mdx)("div",{class:"box box3 card"},Object(o.mdx)("div",{class:"container"},Object(o.mdx)("h2",null,"Selenium"),Object(o.mdx)("p",null,"Selenium is designed to automate web browser interaction."),Object(o.mdx)("ul",null,Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing"},"Getting Started")),Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Example+Selenium+Scripts+for+Automated+Web+App+Tests"},"Example Scripts"))))),Object(o.mdx)("div",{class:"box box4 card"},Object(o.mdx)("div",{class:"container"},Object(o.mdx)("h2",null,"Troubleshooting"),Object(o.mdx)("p",null,"There are several ways to troubleshoot your manual and automated website tests."),Object(o.mdx)("ul",null,Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Troubleshooting+Automated+Website+Tests"},"Troubleshooting Automated Website Tests")),Object(o.mdx)("li",null,Object(o.mdx)("a",{href:"https://wiki.saucelabs.com/display/DOCS/Common+Error+Messages"},"Common Error Messages")))))))}u.isMDXComponent=!0}}]);