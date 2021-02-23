(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{222:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return c})),r.d(t,"MDXProvider",(function(){return f})),r.d(t,"mdx",(function(){return g})),r.d(t,"useMDXComponents",(function(){return d})),r.d(t,"withMDXComponents",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){return function(t){var r=d(t.components);return a.a.createElement(e,o({},t,{components:r}))}},d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(r),p=n,f=c["".concat(o,".").concat(p)]||c[p]||m[p]||i;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},223:function(e,t,r){"use strict";var n=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=o,t.default=function(e,t){void 0===t&&(t={});return(0,o().withBaseUrl)(e,t)};var a=n(r(29)),i=r(224);function o(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.hasProtocol)(r))return r;if(s)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+c:c}(n,r,e,t)}}}},224:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=n,t.default=function(e){return void 0!==e&&!n(e)}},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(8),i=(r(0),r(222)),o=r(223),s=r.n(o),l={id:"failure-analysis",title:"Analyzing Failure Patterns Across Your Test Suite",sidebar_label:"Failure Analysis",description:"Use the machine learning power of Sauce Failure Analytics to uncover errors and inefficiencies in your tests to improve your testing process."},u={unversionedId:"insights/failure-analysis",id:"insights/failure-analysis",isDocsHomePage:!1,title:"Analyzing Failure Patterns Across Your Test Suite",description:"Use the machine learning power of Sauce Failure Analytics to uncover errors and inefficiencies in your tests to improve your testing process.",source:"@site/docs/insights/failure-analysis.md",slug:"/insights/failure-analysis",permalink:"/insights/failure-analysis",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/insights/failure-analysis.md",version:"current",lastUpdatedBy:"Nancy Sweeney",lastUpdatedAt:1609353627,sidebar_label:"Failure Analysis",sidebar:"someSidebar",previous:{title:"Comparing Statistical Trends",permalink:"/insights/trends"},next:{title:"Front-End Performance Testing",permalink:"/performance"}},c=[{value:"How it Works",id:"how-it-works",children:[]}],p={toc:c};function d(e){var t=e.components,r=Object(a.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(n.default)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("button",{class:"badge-blue"},"ENTERPRISE PLANS ONLY")),Object(i.mdx)("p",null,"Failure Analysis is designed to help you optimize test efficiency and efficacy. The proprietary machine learning algorithms  review pass/fail data along with Selenium and Appium command logs to unearth common failures and their impact on the test suite as a whole. It then presents a report with tabs that aggregate patterns that are predictive of failure, helping you avoid similar or duplicate failures in future tests. Using Failure Analysis:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Improves developer efficiency, streamlining detection and triage of the most pervasive errors"),Object(i.mdx)("li",{parentName:"ul"},"Validates investment in test automation by showing larger patterns as a source of failure, allowing for global mitigation and faster time-to-market with better quality")),Object(i.mdx)("h2",{id:"how-it-works"},"How it Works"),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"NOTE:")," Failure Analysis can only be effective if your automation tests are configured to ",Object(i.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/display/DOCS/Setting+Test+Status+to+Pass+or+Fail"}),"report a pass/fail outcome"),".")),Object(i.mdx)("p",null,"Failure Analysis leverages your test data and identifies potential failure patterns based on aggregate test errors. More specifically, the tool:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Identifies failed tests"),Object(i.mdx)("li",{parentName:"ul"},"Aggregates failures on test names"),Object(i.mdx)("li",{parentName:"ul"},"Detects common failure patterns"),Object(i.mdx)("li",{parentName:"ul"},"Ranks and prioritizes patterns by most pervasive impact")),Object(i.mdx)("p",null,"For example, the image below shows a failed build where each test contains a bad, or outdated, web element locator. Failure Analysis detects any failure patterns and attributes a percentage to show how pervasive this failure is within this particular build."),Object(i.mdx)("img",{src:s()("img/insights/fa-tests.png"),alt:"Failed Tests View",width:"650","margin-bottom":"50px"}),Object(i.mdx)("p",null,"To see the specifics of each failure pattern, go to ",Object(i.mdx)("strong",{parentName:"p"},"Insights > Failure Analysis"),", or select ",Object(i.mdx)("strong",{parentName:"p"},"Failure Patterns")," when viewing data about your build. As you can see in the next image, a pattern of failures due to invalid element locators has emerged that is impacting 25% of the tests in the build."),Object(i.mdx)("img",{src:s()("img/insights/fa-tests.png"),alt:"Failed Tests View",width:"650"}),Object(i.mdx)("p",null,"You can optimize the power of the Failure Analysis tool by ",Object(i.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/display/DOCS/Annotating+Tests+with+Selenium%27s+JavaScript+Executor#AnnotatingTestswithSelenium'sJavaScriptExecutor-ProvidingContextforSeleniumCommands"}),"Providing Context for Selenium Commands with the JavaScript Executor"),"."))}d.isMDXComponent=!0}}]);