(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return i}));var a,r=n(3),c=n(8),o=(n(0),n(222)),m={id:"testcafe",title:"Configuration Syntax: TestCafe",sidebar_label:"TestCafe"},s={unversionedId:"testrunner-toolkit/configuration/testcafe",id:"testrunner-toolkit/configuration/testcafe",isDocsHomePage:!1,title:"Configuration Syntax: TestCafe",description:"Please refer to the Common Configuration Syntax Referencefor information regarding fields such as apiVersion, kind, and sauce.",source:"@site/docs/testrunner-toolkit/configuration/testcafe.md",slug:"/testrunner-toolkit/configuration/testcafe",permalink:"/testrunner-toolkit/configuration/testcafe",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/testrunner-toolkit/configuration/testcafe.md",version:"current",lastUpdatedBy:"James Tacker",lastUpdatedAt:1614015110,sidebar_label:"TestCafe",sidebar:"someSidebar",previous:{title:"Configuration Syntax: Playwright",permalink:"/testrunner-toolkit/configuration/playwright"},next:{title:"Running Tests in Testrunner Toolkit",permalink:"/testrunner-toolkit/running-tests"}},l=[{value:"Example Configuration",id:"example-configuration",children:[]},{value:"<code>testcafe</code>",id:"testcafe",children:[{value:"<code>version</code>",id:"version",children:[]},{value:"<code>projectPath</code>",id:"projectpath",children:[]}]},{value:"<code>suites</code>",id:"suites",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>browserName</code>",id:"browsername",children:[]},{value:"<code>src</code>",id:"src",children:[]},{value:"<code>env</code>",id:"env",children:[]},{value:"<code>screenshots</code>",id:"screenshots",children:[]},{value:"<code>speed</code>",id:"speed",children:[]},{value:"<code>platformName</code>",id:"platformname",children:[]},{value:"<code>testMatch</code>",id:"testmatch",children:[]},{value:"<code>screenResolution</code>",id:"screenresolution",children:[]}]}],d=(a="Highlight",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",e)}),p={toc:l};function i(e){var t=e.components,n=Object(c.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Please refer to the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/testrunner-toolkit/configuration#common-syntax-reference"}),"Common Configuration Syntax Reference"),"for information regarding fields such as ",Object(o.mdx)("inlineCode",{parentName:"p"},"apiVersion"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"kind"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"sauce"),"."),Object(o.mdx)("h2",{id:"example-configuration"},"Example Configuration"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1alpha\nkind: testcafe\nsauce:\n  region: us-west-1\n  concurrency: 1\n  metadata:\n    name: Testing Testcafe Support\n    tags:\n      - e2e\n      - release team\n      - other tag\n    build: Release $CI_COMMIT_SHORT_SHA\nsuites:\n  - name: "saucy test"\n    browserName: "chrome"\n    src:\n      - "*/*.test.js"\n    screenshots:\n      takeOnFails: true\n      fullPage: true\n    platformName: "windows 10"\n    env:\n      hello: world\n    speed: 1\n    screenResolution: "1920x1080"\ndocker:\n  fileTransfer: mount\ntestcafe:\n  projectPath: tests/e2e/testcafe\n  version: 1.8.5\n')),Object(o.mdx)("h2",{id:"testcafe"},Object(o.mdx)("inlineCode",{parentName:"h2"},"testcafe")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Details specific to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"testcafe")," project configuration."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"object")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"testcafe:\n  projectPath: tests/\n  version: ##VERSION##\n")),Object(o.mdx)("h3",{id:"version"},Object(o.mdx)("inlineCode",{parentName:"h3"},"version")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Version of ",Object(o.mdx)("inlineCode",{parentName:"p"},"testcafe")," to use during tests"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"  version: ##VERSION##\n")),Object(o.mdx)("h3",{id:"projectpath"},Object(o.mdx)("inlineCode",{parentName:"h3"},"projectPath")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Absolute path to the test directory and related test files."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"  projectPath: /path/to/tests/\n")),Object(o.mdx)("h2",{id:"suites"},Object(o.mdx)("inlineCode",{parentName:"h2"},"suites")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Field for defining test suite details such as the suite ",Object(o.mdx)("inlineCode",{parentName:"p"},"name"),", desired ",Object(o.mdx)("inlineCode",{parentName:"p"},"browserName"),", and test configurations."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"object")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'suites:\n  - name: "saucy test"\n    platformName: "Windows 10"\n    testMatch: \'**/*.js\'\n\n    params:\n      browserName: "firefox"\n      headful: false\n      slowMo: 1000\n')),Object(o.mdx)("h3",{id:"name"},Object(o.mdx)("inlineCode",{parentName:"h3"},"name")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Name of the test suite."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'  - name: "saucy test"\n')),Object(o.mdx)("h3",{id:"browsername"},Object(o.mdx)("inlineCode",{parentName:"h3"},"browserName")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Name of desired browser. Although Testcafe supports triggering one test in multiple browsers, it is better here to split them into every suite to indicate each suite has its own test point."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'  browserName: "chrome"\n')),Object(o.mdx)("h3",{id:"src"},Object(o.mdx)("inlineCode",{parentName:"h3"},"src")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": The explicit name, file glob, or location of the test files."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"object")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'  src:\n    - "tests/test_file1.test.js"\n    - "tests/integrations"\n    - "*/*.test.js"\n')),Object(o.mdx)("h3",{id:"env"},Object(o.mdx)("inlineCode",{parentName:"h3"},"env")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Environment variables. Substituted variables like $MY_VAR can be expanded."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"object")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"  env:\n    hello: world\n    foo: $MY_BAR\n")),Object(o.mdx)("h3",{id:"screenshots"},Object(o.mdx)("inlineCode",{parentName:"h3"},"screenshots")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Screenshots settings for testcafe. ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#screenshots"}),"See link in Testcafe"),"."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"object")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"  screenshots:\n    takeOnFails: true\n    fullPage: true\n")),Object(o.mdx)("h3",{id:"speed"},Object(o.mdx)("inlineCode",{parentName:"h3"},"speed")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Specifies the test execution speed. Tests are run at the maximum speed by default. You can use this option to slow the test down. Provide a number between 1 (the fastest) and 0.01 (the slowest)."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"float64")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"  speed: 1\n")),Object(o.mdx)("h3",{id:"platformname"},Object(o.mdx)("inlineCode",{parentName:"h3"},"platformName")),Object(o.mdx)("p",null,Object(o.mdx)("small",null,Object(o.mdx)(d,{color:"#ad1415",mdxType:"Highlight"},"sauce cloud only")),Object(o.mdx)("a",{href:"/testrunner-toolkit/running-tests#test-on-sauce-labs"},"\u2139")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Operating system on which the browser and test runs."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'    platformName: "Windows 10"\n')),Object(o.mdx)("h3",{id:"testmatch"},Object(o.mdx)("inlineCode",{parentName:"h3"},"testMatch")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": The explicit name, regex, or location of the test files."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")," | ",Object(o.mdx)("em",{parentName:"p"},"regex")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),"    testMatch: '**/*.js'\n")),Object(o.mdx)("h3",{id:"screenresolution"},Object(o.mdx)("inlineCode",{parentName:"h3"},"screenResolution")),Object(o.mdx)("p",null,Object(o.mdx)("small",null,Object(o.mdx)(d,{color:"#ad1415",mdxType:"Highlight"},"sauce cloud only")),Object(o.mdx)("a",{href:"/testrunner-toolkit/running-tests#test-on-sauce-labs"},"\u2139")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Description"),": Set browser window screen resolution."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Type"),": ",Object(o.mdx)("em",{parentName:"p"},"string")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Example"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-yaml"}),'    screenResolution: "1920x1080"\n')))}i.isMDXComponent=!0},222:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return i})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){return function(t){var n=i(t.components);return r.a.createElement(e,o({},t,{components:n}))}},i=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,u=d["".concat(o,".").concat(p)]||d[p]||b[p]||c;return n?r.a.createElement(u,s(s({ref:t},m),{},{components:n})):r.a.createElement(u,s({ref:t},m))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=O;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);