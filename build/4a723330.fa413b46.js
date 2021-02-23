(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return u})),a.d(t,"MDXProvider",(function(){return p})),a.d(t,"mdx",(function(){return f})),a.d(t,"useMDXComponents",(function(){return m})),a.d(t,"withMDXComponents",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),d=function(e){return function(t){var a=m(t.components);return o.a.createElement(e,i({},t,{components:a}))}},m=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,p=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return a?o.a.createElement(p,c(c({ref:t},s),{},{components:a})):o.a.createElement(p,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(8),r=(a(0),a(222)),i={id:"troubleshooting",title:"Troubleshooting Automated Mobile App Tests",sidebar_label:"Troubleshooting"},s={unversionedId:"mobile-apps/automated-testing/troubleshooting",id:"mobile-apps/automated-testing/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Automated Mobile App Tests",description:"There are several ways to troubleshoot your automated mobile app tests. Below are some common error messages and how to resolve them.",source:"@site/docs/mobile-apps/automated-testing/troubleshooting.md",slug:"/mobile-apps/automated-testing/troubleshooting",permalink:"/mobile-apps/automated-testing/troubleshooting",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/mobile-apps/automated-testing/troubleshooting.md",version:"current",lastUpdatedBy:"Kim",lastUpdatedAt:1612830613,sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Microsoft App Center Integration",permalink:"/mobile-apps/automated-testing/microsoft-app-center"},next:{title:"Mobile App Storage",permalink:"/mobile-apps/app-storage"}},c=[{value:"Abuse Job",id:"abuse-job",children:[]},{value:"Failed to Download Mobile Application",id:"failed-to-download-mobile-application",children:[]},{value:"Internal Server Error",id:"internal-server-error",children:[]},{value:"Invalid Parent Tunnel",id:"invalid-parent-tunnel",children:[]},{value:"Test Didn&#39;t See a New Command for 90 Seconds",id:"test-didnt-see-a-new-command-for-90-seconds",children:[]},{value:"Test Exceeded Maximum Duration of 1800 Seconds",id:"test-exceeded-maximum-duration-of-1800-seconds",children:[]},{value:"User Terminated",id:"user-terminated",children:[]},{value:"You&#39;ve Exceeded Your Sauce Labs Concurrency Limit",id:"youve-exceeded-your-sauce-labs-concurrency-limit",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.default)(e,["components"]);return Object(r.mdx)("wrapper",Object(n.default)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"There are several ways to troubleshoot your automated mobile app tests. Below are some common error messages and how to resolve them."),Object(r.mdx)("h2",{id:"abuse-job"},"Abuse Job"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"Your job or account has been banned for abusing the Sauce Labs service."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("p",null,"Sauce Labs takes measures to safeguard our price and performance for our paying customers, including termination of accounts we believe are not operating in good faith."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("p",null,"If you are a paying customer, please open a support ticket at ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"http://support.saucelabs.com/"}),"support.saucelabs.com")," to request your ban be reviewed. Sauce Labs will not reverse abuse bans for Free or Open Sauce users."),Object(r.mdx)("h2",{id:"failed-to-download-mobile-application"},"Failed to Download Mobile Application"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"The desired capabilities you've supplied include a URL to a mobile application to install and test. This may be a URL pointing to ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage"),", or a hosted app online. When we started your test, we were unable to correctly download a valid application from that URL. We may have been able to download something, but that something was not a valid application."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"You've specified an app hosted in ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage"),", but there is nothing stored for your account with the given name"),Object(r.mdx)("li",{parentName:"ul"},"You've specified an app hosted online, but the URL you've used can't be contacted by Sauce Labs"),Object(r.mdx)("li",{parentName:"ul"},"You've specified an app hosted in your corporate network which can't be accessed via the Internet"),Object(r.mdx)("li",{parentName:"ul"},"You're not providing the full path to the app file itself"),Object(r.mdx)("li",{parentName:"ul"},"The site serving your application requires authentication")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("p",null,"We recommend avoiding all problems with apps hosted internally by uploading ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage")," instead."),Object(r.mdx)("p",null,"If you're already using ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage"),", check:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Your upload to ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage")," has succeeded"),Object(r.mdx)("li",{parentName:"ul"},"Your upload to ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137"}),"storage")," was within the last week, since Sauce Storage is cleaned out on a weekly basis"),Object(r.mdx)("li",{parentName:"ul"},"Your uploaded app has the same MD5 hash as it does on your machine"),Object(r.mdx)("li",{parentName:"ul"},"You're starting the ",Object(r.mdx)("inlineCode",{parentName:"li"},"app")," desired capability with ",Object(r.mdx)("inlineCode",{parentName:"li"},"sauce-storage:"),". There shouldn't be a leading ",Object(r.mdx)("inlineCode",{parentName:"li"},"http"),"."),Object(r.mdx)("li",{parentName:"ul"},"You're using the exact name you provided via the rest API, not the original filename. For example, if you uploaded a file named ",Object(r.mdx)("inlineCode",{parentName:"li"},"my_app.apk")," to ",Object(r.mdx)("inlineCode",{parentName:"li"},"https://saucelabs.com/rest/v1/storage/YOUR_USERNAME/new_app_name.apk"),", your file is available as ",Object(r.mdx)("inlineCode",{parentName:"li"},"sauce storage:new_app_name.apk"),".")),Object(r.mdx)("h2",{id:"internal-server-error"},"Internal Server Error"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"This is a rare but known error. It indicates that the OnDemand portion of the Sauce Labs service lost its connection with the Virtual Machine running a test. Because the connection with the VM was lost, the details of the test (logs, video, metadata) will also be lost.  "),Object(r.mdx)("p",null,"The error is expected to occur no more often than 0.1% (1 out of 1000 tests) over a sustained period of time. The same test, when run a second time, is very likely (999 out of 1000 times) to succeed."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("p",null,'The first explanation is that the VM crashed. When that happens, the VM stops communicating with our OnDemand services and the VM is effectively "lost." This can happen when:'),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"The VM runs out of disk space or RAM"),Object(r.mdx)("li",{parentName:"ul"},"There is a bug in the browser, OS, virtualization software, or combination of all three, which then causes the VM to crash")),Object(r.mdx)("p",null,"It's difficult to reliably distinguish between these two cases automatically. The error message \u201cinternal server error\u201d is meant to cover both of them.  "),Object(r.mdx)("p",null,"Of the two causes above, the second is more common. Unfortunately, these crashes are hard to isolate much less prevent. They are usually not under our control and quite intermittent. This is the rate at which VMs and browsers crash, and crashes in those components can be triggered more or less often depending on what actions you choose to run within their tests."),Object(r.mdx)("p",null,"A second possible explanation is an infrastructure problem within Sauce's service. The state of a VM running a test is kept track of by a number of daemons and database entries, which are frequently updated. Collectively, they make up the \u201cconnection\u201d between OnDemand and the VM. The connection can be lost if the network drops packets, the database becomes corrupt, or daemons crash."),Object(r.mdx)("p",null,"A third, very rare case is when the error can be correlated to a particular combination of requested capabilities. This happened in May 2016 with the combination of a certain screen resolution (1400x1050) and a certain OS (Windows 7) -- but only for certain tests. We no longer allow that combination to be run on our service."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("p",null,"Check the error rate over time. It is expected to occur approximately 0.1% of the time (1 out of 1000 tests). If the error rate remains below this level, add a retry for this kind of error into your Continuous Integration program. You can contact ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"mailto:help@saucelabs.com"}),"help@saucelabs.com")," to check the error rate if it\u2019s not easy to ascertain from your own CI program."),Object(r.mdx)("p",null,"If the error rate is over 0.1% for a short period of time, check ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"http://status.saucelabs.com/"}),"status.saucelabs.com")," for signs of an incident at a time corresponding to the elevated error rate. Some types of incidents (but not all) will cause Internal Server Errors."),Object(r.mdx)("p",null,"If the error rate is over 0.1% for a sustained period of time (days or weeks), contact ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"mailto:help@saucelabs.com."}),"help@saucelabs.com.")," We'll try to identify a pattern to the errors (for example, is it particular to one type of browser, OS, or test). Note that this is the least likely explanation."),Object(r.mdx)("h2",{id:"invalid-parent-tunnel"},"Invalid Parent Tunnel"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"Your tests are requesting a Sauce Connect tunnel opened by one of the accounts above it in your account hierarchy. That tunnel is not available for use."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("p",null,"When requesting a new Sauce Labs job, you provided the ",Object(r.mdx)("inlineCode",{parentName:"p"},"parentTunnel")," desired capability. Sauce Labs attempted to find an account above you in your account hierarchy, running a Sauce Connect tunnel, configured to be shared with subaccounts. We did not find a matching account, for one of the following reasons:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"You are requesting an account that does not exist"),Object(r.mdx)("li",{parentName:"ul"},"You are requesting an account that is not on your team or an admin account"),Object(r.mdx)("li",{parentName:"ul"},"You are requesting an account that is not sharing any Sauce Connect tunnels"),Object(r.mdx)("li",{parentName:"ul"},"You are requesting an account that is not running any Sauce Connect tunnels"),Object(r.mdx)("li",{parentName:"ul"},"You are requesting an account for which Sauce Connect tunnels have been shut down (by the user ",Object(r.mdx)("em",{parentName:"li"},"or")," an error)")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("p",null,"Reach out to the person who administers the account that you set as the ",Object(r.mdx)("inlineCode",{parentName:"p"},"parentTunnel")," desired capability; this person sets the tunnel sharing permissions. Ask them to confirm the following:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"They have an open Sauce Connect tunnel (they can check on the ",Object(r.mdx)("strong",{parentName:"li"},"Tunnels")," page)"),Object(r.mdx)("li",{parentName:"ul"},"They opened a tunnel with the ",Object(r.mdx)("inlineCode",{parentName:"li"},"--shared-tunnel")," option (see ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781"}),"Sauce Connect Proxy Command-Line Quick Reference Guide")," for more information)"),Object(r.mdx)("li",{parentName:"ul"},"They are an Admin and/or a member of your team")),Object(r.mdx)("p",null,"Restarting the Sauce Connect tunnel may be required."),Object(r.mdx)("p",null,"Alternatively, you can remove the ",Object(r.mdx)("inlineCode",{parentName:"p"},"parentTunnel")," desired capability from your tests. If you need Sauce Connect to run your tests, you will need to set up an alternative tunnel."),Object(r.mdx)("h2",{id:"test-didnt-see-a-new-command-for-90-seconds"},"Test Didn't See a New Command for 90 Seconds"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"You'll see this error when Sauce Labs doesn't receive a new command from your Selenium script in more than 90 seconds (the default duration for a timeout)."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("p",null,"There are a couple potential causes for this error:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"The most common cause is that your script crashed, was** **forcefully interrupted, or you lost internet connectivity"),Object(r.mdx)("li",{parentName:"ul"},"If your tests don't include a session ending request, such as a call to ",Object(r.mdx)("inlineCode",{parentName:"li"},"driver.quit()")," or ",Object(r.mdx)("inlineCode",{parentName:"li"},"browser.stop()"),", they will will keep running forever, consuming all test minutes available in your account. This error is thrown after 90 seconds as a means of preventing this."),Object(r.mdx)("li",{parentName:"ul"},"A less common, but still possible cause, is that your test legitimately needs more than 90 seconds to send a new command to the browser. This happens most often when a network or disk IO error occurs between Selenium API calls in your tests (for example, for DB queries, local file reads, or changes).")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Make sure you have internet connectivity"),Object(r.mdx)("li",{parentName:"ul"},"Make sure your script includes ",Object(r.mdx)("inlineCode",{parentName:"li"},"driver.quit()")," or ",Object(r.mdx)("inlineCode",{parentName:"li"},"browser.stop()")," to conclude the test"),Object(r.mdx)("li",{parentName:"ul"},"If your test needs more than 90 seconds to send a new command to the browser, use the ",Object(r.mdx)("inlineCode",{parentName:"li"},"idleTimeout")," desired capability to modify Sauce's wait time for further commands. For more information, see the ",Object(r.mdx)("strong",{parentName:"li"},"Timeouts")," section of ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options"}),"Test Configuration Options"),".")),Object(r.mdx)("h2",{id:"test-exceeded-maximum-duration-of-1800-seconds"},"Test Exceeded Maximum Duration of 1800 Seconds"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"You'll see this error when your test suite is still running in a session that has lasted more than 1800 seconds (30 minutes)."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"The most common cause for this is an infinite loop in your tests that keeps sending commands without an end clause"),Object(r.mdx)("li",{parentName:"ul"},"Tests that run locally can take longer when run with Sauce")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Check for infinite loops in your test"),Object(r.mdx)("li",{parentName:"ul"},"If you suspect that the error is related to latency in the Sauce network or testing infrastructure, consider breaking your test suite up into ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933"}),"small, autonomous, atomic tests")),Object(r.mdx)("li",{parentName:"ul"},"If your test needs more than 1800 seconds to complete, you can use the ",Object(r.mdx)("inlineCode",{parentName:"li"},"maxDuration")," desired capability to make Sauce wait longer for your test to complete. You can find more information about this desired capability in the Timeouts section of the ",Object(r.mdx)("a",Object(n.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492"}),"Test Configuration Options")," topic.")),Object(r.mdx)("h2",{id:"user-terminated"},"User Terminated"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"The testing session was terminated by the user."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Your test was manually interrupted using the ",Object(r.mdx)("strong",{parentName:"li"},"Cancel")," or ",Object(r.mdx)("strong",{parentName:"li"},"Breakpoint")," buttons in the Sauce Labs application. Since both of these take control of the virtual machine immediately, test assets like screenshots, video, or logs that require additional execution time will not be collected and made available afterwards.")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Don't push the buttons!")),Object(r.mdx)("h2",{id:"youve-exceeded-your-sauce-labs-concurrency-limit"},"You've Exceeded Your Sauce Labs Concurrency Limit"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Description")),Object(r.mdx)("p",null,"You have requested too many tests to run at the same time."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Cause(s)")),Object(r.mdx)("p",null,"Each Sauce Labs account has a maximum number of tests it's allowed to have open at the same time. We refer to this as your concurrency. You can see your concurrency limit on your Sauce Labs.Sauce Labs will not run additional tests once you've reached your concurrency limit."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Resolution")),Object(r.mdx)("p",null,"Run fewer tests, or ",Object(r.mdx)("a",Object(n.default)({parentName:"p"},{href:"https://saucelabs.com/pricing"}),"upgrade your account")," to run more."))}u.isMDXComponent=!0}}]);