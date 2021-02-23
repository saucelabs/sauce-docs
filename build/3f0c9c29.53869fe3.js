(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),i=(n(0),n(222)),a={id:"ci",title:"Incorporating Sauce Labs in Your CI/CD Pipeline",sidebar_label:"Getting Started",description:"Sauce Labs coordinates seamlessly with the most popular CI/CD platforms."},c={unversionedId:"ci",id:"ci",isDocsHomePage:!1,title:"Incorporating Sauce Labs in Your CI/CD Pipeline",description:"Sauce Labs coordinates seamlessly with the most popular CI/CD platforms.",source:"@site/docs/ci.md",slug:"/ci",permalink:"/ci",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/ci.md",version:"current",lastUpdatedBy:"Nancy Sweeney",lastUpdatedAt:1612915133,sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Cypress on Sauce Labs",permalink:"/web-apps/automated-testing/cypress"},next:{title:"Sauce Labs with Bamboo",permalink:"/ci/bamboo"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Incorporating continuous testing into your CI/CD pipeline means designing your tests to fit appropriately into each stage of your application development and delivery cycle. If you are already using one of the many platforms for continuous delivery of your application, we've got instructions for integrating your Sauce Labs test suite right into that pipeline."),Object(i.mdx)("div",{class:"box-wrapper",markdown:"1"},Object(i.mdx)("div",{class:"box box1 card"},Object(i.mdx)("div",{class:"container"},Object(i.mdx)("h2",null,"Sauce OnDemand Plugin"),Object(i.mdx)("p",null,"Use the Sauce Labs OnDemand plugin in conjunction with your existing CI/CD pipeline to integrate your tests.",Object(i.mdx)("br",null),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"/ci/bamboo"},"Bamboo")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"/ci/bitbucket"},"Bitbucket")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"/ci/jenkins"},"Jenkins")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"/ci/teamcity"},"TeamCity")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"/ci/visual-studio"},"Visual Studio")))))),Object(i.mdx)("div",{class:"box box2 card"},Object(i.mdx)("div",{class:"container"},Object(i.mdx)("h2",null,"3rd Party Integrations"),Object(i.mdx)("p",null,"Get set up instructions provided by external developers for CI/CD platforms for which we don't yet have a plugin.",Object(i.mdx)("br",null),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"https://circleci.com/integrations/saucelabs/"},"CircleCI")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"https://docs.travis-ci.com/user/sauce-connect/"},"Travis CI"))))))),Object(i.mdx)("div",null,Object(i.mdx)("div",{class:"box boxwidebottom card"},Object(i.mdx)("div",{class:"container"},Object(i.mdx)("h2",null,"Learn More"),Object(i.mdx)("p",null,"Not a developer? Want to learn more about continuous integration and how you can design a strategy for testing right through your entire software development cycle? Check out some of these helpful resources.",Object(i.mdx)("br",null),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"https://saucelabs.com/resources/articles/automated-testing-in-cicd-a-continuous-integration-server-integration-primer"},"Automated Testing in CI/CD Primer White Paper")),Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"https://saucelabs.com/blog/choosing-a-ci-cd-tool"},"Choosing a CI/CD Tool Blog")),Object(i.mdx)("li",null,"Sauce School CI/CD Training Module (coming soon)")))))))}s.isMDXComponent=!0}}]);