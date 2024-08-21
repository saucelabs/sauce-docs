"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[31933],{69586:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can clip to a specific element on the page by using the ",(0,i.jsx)(n.code,{children:"clipSelector"})," option when calling Sauce visual."]}),"\n",(0,i.jsx)(n.p,{children:"Notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clipping is done by taking a screenshot of the page then clipping it to the location of the requested element."}),"\n",(0,i.jsx)(n.li,{children:"We will attempt to scroll the element into view before taking the snapshot."}),"\n",(0,i.jsx)(n.li,{children:"We can only take a screenshot of what is visible in the current viewport, however, this can be combined with full page option to enable clipping large vertical elements."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},76632:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>a});var i=s(74848),t=s(28453),r=s(69586);const a=[...r.RM];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Visible Sale Banner', {\n  // A document.querySelector compatible selector that we should crop the screenshot to\n  clipSelector: '.your-css-selector',\n})\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8254:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Variable Name"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,i.jsx)(n.td,{children:"required"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs username. You can get this from the header of app.saucelabs.com"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,i.jsx)(n.td,{children:"required"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs access key. You can get this from the header of app.saucelabs.com"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_REGION"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The region you'd like to run your Visual tests in. Defaults to ",(0,i.jsx)(n.code,{children:"us-west-1"})," if not supplied. Can be one of the following: ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"'eu-central-1'"}),", ",(0,i.jsx)(n.code,{children:"'us-west-1'"})," or ",(0,i.jsx)(n.code,{children:"'us-east-4'"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_NAME"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The name you would like to appear in the Sauce Visual dashboard."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_BRANCH"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The branch name you would like to associate this build with. We recommend using your current VCS branch in CI."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_DEFAULT_BRANCH"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The main branch name you would like to associate this build with. Usually ",(0,i.jsx)(n.code,{children:"main"})," or ",(0,i.jsx)(n.code,{children:"master"})," or alternatively the branch name your current branch was derived from. ",(0,i.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2897/visual-testing/workflows/ci",children:"Follow me to learn more"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_PROJECT"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The label / project you would like to associate this build with."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_ID"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["For advanced users, a user-supplied SauceLabs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. ",(0,i.jsx)("br",{})," By default, this is not set and we create / finish a build during setup / teardown."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SAUCE_VISUAL_CUSTOM_ID"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID."})]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},78679:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>c});var i=s(74848),t=s(28453);function r(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["By default, only the current viewport is captured when ",(0,i.jsx)(n.code,{children:".sauceVisualCheck"})," is used. You can opt in to capturing the entire page by using the ",(0,i.jsx)(n.code,{children:"fullPage"})," option. It will capture everything by scrolling and stitching multiple screenshots together."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["It's recommended to use the ",(0,i.jsx)(n.code,{children:"hideAfterFirstScroll"})," option for fixed or sticky position elements such as sticky headers or consent banners."]})}),"\n",(0,i.jsx)(n.p,{children:"Options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delayAfterScrollMs"}),": Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disableCSSAnimation"}),": Disable CSS animations and the input caret in the app. The default value is true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hideAfterFirstScroll"}),": One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hideScrollBars"}),": Hide all scrollbars in the app. The default value is true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scrollLimit"}),": Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var l=s(62443);const c=[...l.RM];function o(e){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Long content page', {\n  // Enable full page screenshots using the default options\n  fullPage: true,\n});\n\nawait browser.sauceVisualCheck('Long content page', {\n  // Enable full page screenshots and customize the behavior\n  fullPage: {\n    delayAfterScrollMs: 500,\n    disableCSSAnimation: false,\n    hideAfterFirstScroll: [\"#header\"],\n    hideScrollBars: false,\n    scrollLimit: 5\n  },\n});\n"})}),"\n",(0,i.jsx)(l.Ay,{})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},62443:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The maximum number of scrolls and stitches in a full page screenshot is 10."})})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},32309:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective on snapshot."})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},12758:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective specific regions of the snapshot."})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59697:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var i=s(74848),t=s(28453);const r=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Sauce Visual allows selective diffing that permits to ignore changes from a certain kind (",(0,i.jsxs)(n.em,{children:["more information ",(0,i.jsx)(n.a,{href:"/visual-testing/selective-diffing/",children:"here"})]}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Selective diffing is only available with ",(0,i.jsx)(n.code,{children:"Balanced"})," diffing method ",(0,i.jsx)(n.strong,{children:"AND"})," with DOM capture enabled."]})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},52328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>u,default:()=>m,frontMatter:()=>h,metadata:()=>p,toc:()=>g});var i=s(74848),t=s(28453),r=s(78679),a=s(76632),l=s(8254),c=s(59697),o=s(32309),d=s(12758);const h={sidebar_label:"WebdriverIO"},u="WebdriverIO Integration",p={id:"visual-testing/integrations/webdriverio",title:"WebdriverIO Integration",description:"Introduction",source:"@site/docs/visual-testing/integrations/webdriverio.md",sourceDirName:"visual-testing/integrations",slug:"/visual-testing/integrations/webdriverio",permalink:"/sauce-docs/pr-preview/pr-2897/visual-testing/integrations/webdriverio",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/integrations/webdriverio.md",tags:[],version:"current",lastUpdatedBy:"F\xe9lix P",lastUpdatedAt:1719584288e3,frontMatter:{sidebar_label:"WebdriverIO"},sidebar:"docs",previous:{title:"Storybook",permalink:"/sauce-docs/pr-preview/pr-2897/visual-testing/integrations/storybook"},next:{title:"Python",permalink:"/sauce-docs/pr-preview/pr-2897/visual-testing/integrations/python"}},x={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Step 1: Add Sauce Visual dependency",id:"step-1-add-sauce-visual-dependency",level:3},{value:"Step 2: Add SauceVisualService to your WebdriverIO configuration",id:"step-2-add-saucevisualservice-to-your-webdriverio-configuration",level:3},{value:"Step 3: Add visual tests in your project",id:"step-3-add-visual-tests-in-your-project",level:3},{value:"Step 4: Configure your Sauce Labs credentials",id:"step-4-configure-your-sauce-labs-credentials",level:3},{value:"Step 5: Run the test",id:"step-5-run-the-test",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Customizing Your Builds (Environment Variables)",id:"customizing-your-builds-environment-variables",level:3},...l.RM,{value:"Test results summary",id:"test-results-summary",level:3},{value:"Build attributes",id:"build-attributes",level:3},{value:"Ignored regions",id:"ignored-regions",level:3},{value:"Component-based ignored region",id:"component-based-ignored-region",level:4},{value:"User-specified ignored region",id:"user-specified-ignored-region",level:4},{value:"Selective Diffing",id:"selective-diffing",level:3},...c.RM,{value:"Screenshot-wide configuration",id:"screenshot-wide-configuration",level:4},...o.RM,{value:"Area-specific configuration",id:"area-specific-configuration",level:4},...d.RM,{value:"Capturing the DOM snapshot",id:"capturing-the-dom-snapshot",level:3},{value:"Full page screenshots",id:"full-page-screenshots",level:3},...r.RM,{value:"Clip to an element",id:"clip-to-an-element",level:3},...a.RM,{value:"Example",id:"example",level:2}];function j(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webdriverio-integration",children:"WebdriverIO Integration"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This guide requires an existing WebdriverIO project.",(0,i.jsx)("br",{}),"\nYou can alternatively take a look to our ",(0,i.jsx)(n.a,{href:"#example",children:"example repository"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Sauce Visual provides an integration with ",(0,i.jsx)(n.a,{href:"https://webdriver.io/",children:"WebdriverIO"})," through a service that you can add to any existing WebdriverIO project."]}),"\n",(0,i.jsxs)(n.p,{children:["Sauce Visual adds new commands to the WebdriverIO's ",(0,i.jsx)(n.code,{children:"browser"})," object:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"browser.sauceVisualCheck()"}),": Takes a screenshot and send it to Sauce Visual for comparison."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"browser.sauceVisualResults()"}),": Waits for diff calculations to complete and returns a summary of results.\nSee ",(0,i.jsx)(n.a,{href:"#test-results-summary",children:"Test results summary"})," for more details about summary format and sample usage."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-add-sauce-visual-dependency",children:"Step 1: Add Sauce Visual dependency"}),"\n",(0,i.jsx)(n.p,{children:"Install the Sauce Visual service in your current project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @saucelabs/wdio-sauce-visual-service\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-add-saucevisualservice-to-your-webdriverio-configuration",children:"Step 2: Add SauceVisualService to your WebdriverIO configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"SauceVisualService"})," to your existing configuration (E.g. ",(0,i.jsx)(n.code,{children:"wdio.conf.(js|ts)"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { Options } from '@wdio/types';\n\nexport const config: Options.Testrunner = {\n    //...\n    services: [\n    //\n    // This service is needed for WDIO to make sure it can connect to Sauce Labs to:\n    // - automatically update the names\n    // - automatically update the status (passed/failed)\n    // - automatically send the stacktrace in case of a failure\n    //\n    'sauce',\n    //\n    // This service is needed for the Sauce Visual service to work\n    //\n    [\n      '@saucelabs/wdio-sauce-visual-service',\n      // The options for the Sauce Visual service\n      {\n        buildName: 'Sauce Demo Test',\n        branch: 'main',\n        project: 'WDIO examples',\n      },\n    ],\n  ],\n  //...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-add-visual-tests-in-your-project",children:"Step 3: Add visual tests in your project"}),"\n",(0,i.jsx)(n.p,{children:"Add a check to one of your tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"describe('Login Flow', () => {\n    it('should login with valid credentials', async () => {\n        //...\n        await browser.sauceVisualCheck('My Login Page')\n        //...\n    });\n})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-configure-your-sauce-labs-credentials",children:"Step 4: Configure your Sauce Labs credentials"}),"\n",(0,i.jsxs)(n.p,{children:["Sauce Visual relies on environment variables for authentications.",(0,i.jsx)("br",{}),"\nBoth ",(0,i.jsx)(n.code,{children:"SAUCE_USERNAME"})," and ",(0,i.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," need to be set prior starting your WebdriverIO job."]}),"\n",(0,i.jsxs)(n.p,{children:["Username and Access Key can be retrieved from ",(0,i.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"https://app.saucelabs.com/user-settings"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-5-run-the-test",children:"Step 5: Run the test"}),"\n",(0,i.jsxs)(n.p,{children:["Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent WebdriverIO tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at ",(0,i.jsx)(n.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review."}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,i.jsx)(n.h3,{id:"customizing-your-builds-environment-variables",children:"Customizing Your Builds (Environment Variables)"}),"\n",(0,i.jsx)(n.p,{children:"Below are the environment variables available in the Sauce Visual WebdriverIO plugin. Keep in mind that the variables defined in WebdriverIO configuration have precedence over these variables."}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"test-results-summary",children:"Test results summary"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"browser.sauceVisualResults()"})," returns a summary of test results in format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"{\n    QUEUED: number; // Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts\n    EQUAL: number; // Diffs that have no changes detected\n    UNAPPROVED: number; // Diffs that have detected changes and waiting for action\n    APPROVED: number; // Diffs that have detected changes and have been approved\n    REJECTED: number; // Diffs that have detected changes and have been rejected\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"{ APPROVED: 0, EQUAL: 0, UNAPPROVED: 2, REJECTED: 0, QUEUED: 0 }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;\n\nexpect((await browser.sauceVisualResults()).UNAPPROVED).toBe(EXPECTED_TOTAL_UNAPPROVED_DIFFS);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"build-attributes",children:"Build attributes"}),"\n",(0,i.jsxs)(n.p,{children:["When creating the service in WebdriverIO's configuration, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. (",(0,i.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2897/visual-testing#baseline-matching",children:"More info on baseline matching"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"buildName"}),": Name of the build"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"project"}),": Name of the project"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"branch"}),": Name of the branch, used for matching"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"defaultBranch"}),": Name of the default branch, used for matching"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["They need to be set through the ",(0,i.jsx)(n.code,{children:"options"})," parameter."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"...\nexport const config: Options.Testrunner = {\n...\n    services: [\n        'sauce',\n        [\n            '@saucelabs/wdio-sauce-visual-service',\n            {\n                buildName: 'Sauce Demo Test',\n                branch: 'main',\n                project: 'WDIO examples',\n            },\n        ],\n    ],\n...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ignored-regions",children:"Ignored regions"}),"\n",(0,i.jsx)(n.h4,{id:"component-based-ignored-region",children:"Component-based ignored region"}),"\n",(0,i.jsx)(n.p,{children:"Sauce Visual provides a way to ignore a list of components."}),"\n",(0,i.jsx)(n.p,{children:"An ignored component can be a specific element from the page."}),"\n",(0,i.jsx)(n.p,{children:"Those ignored components are specified when requesting a new snapshot."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Inventory Page', {\n    ignore: [\n        // addBackPackToCartButton will be ignored\n        InventoryPage.addBackPackToCartButton,\n    ],\n});\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"user-specified-ignored-region",children:"User-specified ignored region"}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, ignored regions can be user-specified areas. A region is defined by four elements."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"}),": The location of the top-left corner of the ignored region"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"width"}),": The width of the region to ignore"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"height"}),": The height of the region to ignore"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: all values are pixels"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await browser.sauceVisualCheck('Before Login', {\n    ignore: [\n        {\n            x: 100,\n            y: 100,\n            width: 200,\n            height: 200,\n        },\n    ],\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"selective-diffing",children:"Selective Diffing"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h4,{id:"screenshot-wide-configuration",children:"Screenshot-wide configuration"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"    await browser.sauceVisualCheck('Inventory Page', {\n      diffingMethod: DiffingMethod.Balanced,\n      captureDom: true,\n      // Every content change will be ignored\n      disable: ['content'],\n    });\n"})}),"\n",(0,i.jsx)(n.h4,{id:"area-specific-configuration",children:"Area-specific configuration"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"    await browser.sauceVisualCheck('login-page', {\n      diffingMethod: DiffingMethod.Balanced,\n      captureDom: true,\n      regions: [\n        // Any change will be ignored.\n        { element: $('[id=\"user-name\"]'), enableOnly: [] },\n        // Only style changes won't be ignored.\n        { element: $('[id=\"password\"]'), enableOnly: ['style'] },\n      ],\n    });\n"})}),"\n",(0,i.jsx)(n.h3,{id:"capturing-the-dom-snapshot",children:"Capturing the DOM snapshot"}),"\n",(0,i.jsxs)(n.p,{children:["Sauce Visual does not capture dom snapshot by default. It can be changed in ",(0,i.jsx)(n.code,{children:"sauceVisualCheck"})," options."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"browser.sauceVisualCheck('Before Login', {\n    captureDom: true\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"full-page-screenshots",children:"Full page screenshots"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"clip-to-an-element",children:"Clip to an element"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["An example project is available ",(0,i.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/wdio",children:"here"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);