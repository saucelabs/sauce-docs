"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34294],{85583:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=s(74848),t=s(28453);s(11470),s(19365);const l={id:"use-cases",title:"saucectl Common Use Cases",sidebar_label:"Use Cases"},r=void 0,a={id:"dev/cli/saucectl/usage/use-cases",title:"saucectl Common Use Cases",description:"The initial installation and setup of saucectl generates a config.yml file based on the framework and region you select during setup. By default, saucectl will look for this file each time you engage the CLI in order to determine where to find your tests and how and where to run them.",source:"@site/docs/dev/cli/saucectl/usage/use-cases.md",sourceDirName:"dev/cli/saucectl/usage",slug:"/dev/cli/saucectl/usage/use-cases",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/usage/use-cases",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/use-cases.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"use-cases",title:"saucectl Common Use Cases",sidebar_label:"Use Cases"},sidebar:"dev",previous:{title:"delete",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/storage/delete"},next:{title:"CircleCI",permalink:"/sauce-docs/pr-preview/pr-2908/dev/cli/saucectl/usage/ci/circleci"}},c={},o=[{value:"Setting an Alternative Configuration File",id:"setting-an-alternative-configuration-file",level:2},{value:"Run Tests Against a Local App",id:"run-tests-against-a-local-app",level:2},{value:"Including Project Descriptors",id:"including-project-descriptors",level:2},{value:"Concurrency",id:"concurrency",level:2},{value:"Sauce Connect",id:"sauce-connect",level:2},{value:"Setting up a Proxy",id:"setting-up-a-proxy",level:2},{value:"Saucectl",id:"saucectl",level:3},{value:"Integrating saucectl in Your CI Pipeline",id:"integrating-saucectl-in-your-ci-pipeline",level:2},{value:"Tailoring Your Test File Bundle",id:"tailoring-your-test-file-bundle",level:2},{value:"Excluding Files from the Bundle",id:"excluding-files-from-the-bundle",level:3},{value:"Including Node Dependencies",id:"including-node-dependencies",level:3},{value:"Remove &quot;node_modules&quot; from <code>.sauceignore</code>",id:"remove-node_modules-from-sauceignore",level:4},{value:"Install &quot;devDependencies&quot; Only",id:"install-devdependencies-only",level:4},{value:"Uninstall Nonessential Dependencies",id:"uninstall-nonessential-dependencies",level:4},{value:"Install Essential Dependencies Individually",id:"install-essential-dependencies-individually",level:4},{value:"Set NPM Packages in <code>config.yml</code>",id:"set-npm-packages-in-configyml",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The initial ",(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/#installing-saucectl",children:"installation and setup"})," of ",(0,i.jsx)(n.code,{children:"saucectl"})," generates a ",(0,i.jsx)(n.code,{children:"config.yml"})," file based on the framework and region you select during setup. By default, ",(0,i.jsx)(n.code,{children:"saucectl"})," will look for this file each time you engage the CLI in order to determine where to find your tests and how and where to run them."]}),"\n",(0,i.jsx)(n.p,{children:"The configuration file is flexible enough to allow for any customizations and definitions that are required for any of the supported frameworks. The following sections describe some of the most common configurations. For information about configuring individual framework projects, see:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/web-apps/automated-testing/cypress/yaml",children:"Configure Cypress"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/web-apps/automated-testing/playwright/yaml",children:"Configure Playwright"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/web-apps/automated-testing/cucumberjs-playwright/yaml",children:"Configure Cucumber.js with Playwright"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/web-apps/automated-testing/testcafe/yaml",children:"Configure TestCafe"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso",children:"Configure Espresso"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest",children:"Configure XCUITest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/web-apps/automated-testing/replay/yaml",children:"Configure Replay"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-testing/integrations/apitesting-saucectl-integration",children:"Configure API Testing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/orchestrate/saucectl-configuration",children:"Configure Sauce Orchestrate"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-an-alternative-configuration-file",children:"Setting an Alternative Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command to configure ",(0,i.jsx)(n.code,{children:"saucectl"})," to use any configuration file you choose:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"saucectl run -c ./path/to/{config-file}.yml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using multiple frameworks or need to configure different sets of tests to run separately, it might be useful to have individual configuration files that you can simply direct ",(0,i.jsx)(n.code,{children:"saucectl"})," to reference as necessary."]}),"\n",(0,i.jsx)(n.admonition,{title:"YAML Required",type:"note",children:(0,i.jsxs)(n.p,{children:["While you can use multiple files of different names or locations to specify your configurations, each file must be a ",(0,i.jsx)(n.code,{children:"*.yml"})," and follow the ",(0,i.jsx)(n.code,{children:"saucectl"})," syntax outlined in the configuration reference doc for your framework (see links above). If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful."]})}),"\n",(0,i.jsx)(n.h2,{id:"run-tests-against-a-local-app",children:"Run Tests Against a Local App"}),"\n",(0,i.jsxs)(n.p,{children:["If you plan to run tests against a local app server / app running on ",(0,i.jsx)(n.code,{children:"localhost"})," (either on your host machine or in a CI pipeline), there are specific workflows you must follow."]}),"\n",(0,i.jsx)(n.admonition,{title:"Need to Access Custom Node Modules?",type:"tip",children:(0,i.jsxs)(n.p,{children:["If you have third party, or custom modules that are required test dependencies, you can utilize the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"npm"})})," configuration property to include those packages during test execution."]})}),"\n",(0,i.jsx)(n.h2,{id:"including-project-descriptors",children:"Including Project Descriptors"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"metadata"})," parameter in the configuration file allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  metadata:\n    build: RC 10.4.a\n    tags:\n      - e2e\n      - release team\n      - beta\n      - featurex\n"})}),"\n",(0,i.jsx)(n.h2,{id:"concurrency",children:"Concurrency"}),"\n",(0,i.jsxs)(n.p,{children:["You can configure ",(0,i.jsx)(n.code,{children:"saucectl"})," to run test suites in parallel up to the concurrency specified in the config file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  concurrency: 10\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If needed, you can also override the file setting at runtime by specifying a concurrency value as an inline parameter of the ",(0,i.jsx)(n.code,{children:"saucectl run"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"saucectl run --ccy 10\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A setting of ",(0,i.jsx)(n.code,{children:"10"})," runs up to 10 test suites at the same time. If the test has more suites than that, excess suites are queued and run in order as currently running suites complete and new slots are available."]}),"\n",(0,i.jsxs)(n.p,{children:["When running on Sauce Cloud, the maximum concurrency that you can use is defined by your ",(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/concurrency/managing-concurrency",children:"account settings"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sauce-connect",children:"Sauce Connect"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"saucectl"})," supports using Sauce Connect to establish a secure connection when running your tests on Sauce Labs. To do so:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and launch ",(0,i.jsx)(n.a,{href:"/secure-connections",children:"Sauce Connect"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Provide the tunnel identifier in your config file:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yml tunnel setting"',children:"sauce:\n  tunnel:\n    id: my_tunnel_id\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Choose the Correct Tunnel Identifier",type:"note",children:[(0,i.jsxs)(n.p,{children:["When you launch a tunnel, you can accept the tunnel identifier name that Sauce Labs generates for your account (e.g., ",(0,i.jsx)(n.code,{children:"<$SAUCE_USERNAME>_tunnel_id"}),") or specify a name in the launch command:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i <tunnel_name>\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"saucectl"})," expects this ",(0,i.jsx)(n.code,{children:"tunnel_name"})," value in the ",(0,i.jsx)(n.code,{children:"tunnel.name"})," property of your config file."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Check out our working example of this use case using ",(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/github-actions",children:"Sauce Connect and GitHub Actions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-proxy",children:"Setting up a Proxy"}),"\n",(0,i.jsx)(n.p,{children:"If you need to go through a proxy server, you can set it through the following variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HTTP_PROXY"}),": Proxy to use to access HTTP websites"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HTTPS_PROXY"}),": Proxy to use to access HTTPS websites"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"At this time, these proxy settings are not supported for Playwright."})}),"\n",(0,i.jsx)(n.h3,{id:"saucectl",children:"Saucectl"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"saucectl"})," supports going through a proxy to access Sauce Labs API."]}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"HTTP_PROXY"})," and ",(0,i.jsx)(n.code,{children:"HTTPS_PROXY"})," environment variables as specified above. All requests will go through the specified proxy server."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Authenticated proxies are also supported."})}),"\n",(0,i.jsx)(n.h2,{id:"integrating-saucectl-in-your-ci-pipeline",children:"Integrating saucectl in Your CI Pipeline"}),"\n",(0,i.jsxs)(n.p,{children:["You can incorporate your ",(0,i.jsx)(n.code,{children:"saucectl"})," tests as part of your CI pipeline workflow. Observe these key principles to ensure flawless execution, regardless of which CI tool you use."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Understand the current automation framework in the stack"}),"\n",(0,i.jsx)(n.li,{children:"Understand your organization's preferred CI tool"}),"\n",(0,i.jsx)(n.li,{children:"Ensure you have appropriate administrator permissions"}),"\n",(0,i.jsxs)(n.li,{children:["Successfully ",(0,i.jsxs)(n.a,{href:"/dev/cli/saucectl/#run-your-tests",children:["run tests with ",(0,i.jsx)(n.code,{children:"saucectl"})]})," on their own before launching from your CI pipeline"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"saucectl"})," provides instructions for integrating with the following CI tools:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/circleci",children:"CircleCI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/github-actions",children:"GitHub Actions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/gitlab",children:"GitLab"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/jenkins",children:"Jenkins"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ci/azure",children:"Azure"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tailoring-your-test-file-bundle",children:"Tailoring Your Test File Bundle"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"saucectl"})," command line bundles your root directory (",(0,i.jsx)(n.code,{children:"rootDir"})," parameter of ",(0,i.jsx)(n.code,{children:"config.yml"}),") and transmits it to the Sauce Labs cloud, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security."]}),"\n",(0,i.jsx)(n.h3,{id:"excluding-files-from-the-bundle",children:"Excluding Files from the Bundle"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".sauceignore"})," file allows you to designate certain files to be excluded from bundling."]}),"\n",(0,i.jsxs)(n.p,{children:["Add any files that are not direct test dependencies to ",(0,i.jsx)(n.code,{children:".sauceignore"})," to reduce the size of your bundle, improve test speed, and protect sensitive information."]}),"\n",(0,i.jsxs)(n.p,{children:["Examples of what can be included in ",(0,i.jsx)(n.code,{children:".sauceignore"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# .sauceignore\n\n# Ignore node_modules\nnode_modules/\n\n# Ignore all log files\n*.log\n\n# Ignore executables/binaries\n*.exe\n*.bin\n**/*/bin\n\n# Ignore media files\n*.png\n*.jpeg\n*.jpg\n*.mp4\n\n# Ignore documentation\n*.rst\n*.md\n\n# Ignore sensitive data\ncredentials.yml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes it's easier to do the inverse: Including files for the bundle."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Ignore all files by default.\n/*\n\n# Re-include files we selectively want as part of the payload by prefixing the lines with '!'.\n!/node_modules\n!/cypress\n!cypress.config.js\n\n# Since the whole '/cypress' folder is now included, this would also include any\n# subdirectories that potentially contain auto-generated test artifacts from\n# the local dev environment.\n# It'd be wasteful to include them in the payload, so let's ignore those subfolders.\n/cypress/videos/\n/cypress/results/\n/cypress/screenshots/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"including-node-dependencies",children:"Including Node Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:".sauceignore"})," file lists ",(0,i.jsx)(n.code,{children:"node_modules/"})," so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"#remove-node_modules-from-sauceignore",children:["Include ",(0,i.jsx)(n.code,{children:"node_modules"})," with your bundle"]})," or"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#set-npm-packages-in-configyml",children:"Set NPM packages in config.yml"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"remove-node_modules-from-sauceignore",children:['Remove "node_modules" from ',(0,i.jsx)(n.code,{children:".sauceignore"})]}),"\n",(0,i.jsxs)(n.p,{children:["Delete or comment out ",(0,i.jsx)(n.code,{children:"node_modules/"})," in your ",(0,i.jsx)(n.code,{children:".sauceignore"})," file to bundle your node dependencies. For example,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT exclude node_modules from bundle\n# node_modules/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire ",(0,i.jsx)(n.code,{children:"node_modules"})," directory. The following sections provide some methods for limiting the scope of dependencies you must include."]}),"\n",(0,i.jsx)(n.h4,{id:"install-devdependencies-only",children:'Install "devDependencies" Only'}),"\n",(0,i.jsxs)(n.p,{children:["Consider only installing NPM ",(0,i.jsx)(n.code,{children:"devDependencies"})," if your tests do not require all prod ",(0,i.jsx)(n.code,{children:"dependencies"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Only install dev dependencies\nnpm install --only=dev\n\nsaucectl run\n"})}),"\n",(0,i.jsx)(n.h4,{id:"uninstall-nonessential-dependencies",children:"Uninstall Nonessential Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Install node dependencies\nnpm ci # or "npm install"\n\n# Remove unneeded dependencies\nnpm uninstall appium\nnpm uninstall express\n\nsaucectl run\n'})}),"\n",(0,i.jsx)(n.h4,{id:"install-essential-dependencies-individually",children:"Install Essential Dependencies Individually"}),"\n",(0,i.jsxs)(n.p,{children:["If you know that your tests require only specific dependencies, install them individually instead of running ",(0,i.jsx)(n.code,{children:"npm install"})," or ",(0,i.jsx)(n.code,{children:"npm ci"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Install individual dependencies\nnpm install cypress-xpath\nnpm install @cypress/react\n\nsaucectl run\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"set-npm-packages-in-configyml",children:["Set NPM Packages in ",(0,i.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the ",(0,i.jsx)(n.code,{children:"npm"})," parameter, as shown in the following example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title= "config.yml npm example"',children:'npm:\n  registry: https://registry.npmjs.org\n  packages:\n    lodash: "4.17.20"\n    "@babel/preset-typescript": "7.12"\n    "@cypress/react": "^5.0.1"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can let ",(0,i.jsx)(n.code,{children:"saucectl"})," selectively include already installed dependencies from the ",(0,i.jsx)(n.code,{children:"node_modules"})," folder."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title= "config.yml npm dependencies"',children:"npm:\n  dependencies:\n    - lodash\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This feature is highly experimental."})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var i=s(18215);const t={tabItem:"tabItem_Ymn6"};var l=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var i=s(96540),t=s(18215),l=s(23104),r=s(56347),a=s(205),c=s(57485),o=s(31682),d=s(89466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const t=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=h(e),[r,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[o,u]=f({queryString:s,groupId:t}),[g,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Dv)(s);return[t,(0,i.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),x=(()=>{const e=o??g;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function j(e){let{className:n,block:s,selectedValue:i,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=a[s].value;t!==i&&(o(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);