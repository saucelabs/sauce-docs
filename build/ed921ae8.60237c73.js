(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{153:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return u})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return b}));var i=t(3),n=t(8),r=(t(0),t(222)),s=(t(223),t(228)),p=t.n(s),o=t(229),l=t.n(o),c={id:"virtual-devices",title:"Appium Testing with Emulators and Simulators",sidebar_label:"Virtual Devices"},u={unversionedId:"mobile-apps/automated-testing/appium/virtual-devices",id:"mobile-apps/automated-testing/appium/virtual-devices",isDocsHomePage:!1,title:"Appium Testing with Emulators and Simulators",description:"With Sauce Labs, you can run automated Appium tests against many virtual OS and platform combinations with Android emulators and iOS simulators.",source:"@site/docs/mobile-apps/automated-testing/appium/virtual-devices.md",slug:"/mobile-apps/automated-testing/appium/virtual-devices",permalink:"/mobile-apps/automated-testing/appium/virtual-devices",editUrl:"https://github.com/saucelabs/sauce-docs/edit/master/docs/mobile-apps/automated-testing/appium/virtual-devices.md",version:"current",lastUpdatedBy:"Kim",lastUpdatedAt:1613804175,sidebar_label:"Virtual Devices",sidebar:"someSidebar",previous:{title:"Appium Testing with Real Devices",permalink:"/mobile-apps/automated-testing/appium/real-devices"},next:{title:"Mobile App Testing with Espresso and XCUITest",permalink:"/mobile-apps/automated-testing/espresso-xcuitest"}},d=[{value:"What You&#39;ll Need",id:"what-youll-need",children:[]},{value:"Uploading Your App to Emulators and Simulators",id:"uploading-your-app-to-emulators-and-simulators",children:[]},{value:"Setting Your Test Credentials",id:"setting-your-test-credentials",children:[]},{value:"Configuring Appium for Emulator and Simulator Tests",id:"configuring-appium-for-emulator-and-simulator-tests",children:[{value:"Setting appiumVersion",id:"setting-appiumversion",children:[]},{value:"Checking the Appium Version for Your Test",id:"checking-the-appium-version-for-your-test",children:[]},{value:"Setting Browser Name",id:"setting-browser-name",children:[]},{value:"Setting the Location of Your Mobile App",id:"setting-the-location-of-your-mobile-app",children:[]},{value:"Setting automationName for Android Apps",id:"setting-automationname-for-android-apps",children:[]}]},{value:"Setting Appium Capabilities for Emulators and Simulators",id:"setting-appium-capabilities-for-emulators-and-simulators",children:[{value:"iOS Project",id:"ios-project",children:[]},{value:"Android Project",id:"android-project",children:[]}]},{value:"Configuring Native Apps vs. Hybrid Apps",id:"configuring-native-apps-vs-hybrid-apps",children:[]},{value:"Example Appium Test Scripts",id:"example-appium-test-scripts",children:[]},{value:"Best Practices and Reporting Test Results",id:"best-practices-and-reporting-test-results",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],m={toc:d};function b(e){var a=e.components,t=Object(n.default)(e,["components"]);return Object(r.mdx)("wrapper",Object(i.default)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"With Sauce Labs, you can run automated Appium tests against many virtual OS and platform combinations with ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://developer.android.com/studio/run/emulator"}),"Android emulators")," and ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device"}),"iOS simulators"),"."),Object(r.mdx)("h2",{id:"what-youll-need"},"What You'll Need"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"A Sauce Labs Account."),Object(r.mdx)("li",{parentName:"ul"},"The mobile app you want to test. If you don't have one, you can use our ",Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs/sample-app-mobile"}),"Sauce Labs demo mobile app"),"."),Object(r.mdx)("li",{parentName:"ul"},"Ensure that your system fulfills the project support and requirements prior to uploading your apps or leveraging device emulators and simulators. Review the",Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCS/Mobile+Application+Testing+Admin+Guide#mobile-test-admin-emusim"})," Automated Mobile App Testing Admin Guide")," for further details.")),Object(r.mdx)("h2",{id:"uploading-your-app-to-emulators-and-simulators"},"Uploading Your App to Emulators and Simulators"),Object(r.mdx)("p",null,"Before running your automated test, you will need to upload your app \u2013 an Android package file (",Object(r.mdx)("inlineCode",{parentName:"p"},".apk"),") for emulators or an iOS package file (",Object(r.mdx)("inlineCode",{parentName:"p"},".zip)")," for simulators \u2013 to a publicly available source. There are three ways you can upload your app for automated testing:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Sauce App Storage"),Object(r.mdx)("li",{parentName:"ul"},"Install from a Remote Location"),Object(r.mdx)("li",{parentName:"ul"},"Legacy Sauce Storage")),Object(r.mdx)("p",null,"For detailed instructions, see ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"/mobile-apps/app-storage"}),"Application Storage"),"."),Object(r.mdx)("h2",{id:"setting-your-test-credentials"},"Setting Your Test Credentials"),Object(r.mdx)("p",null,"After you've uploaded your app, you must set your Sauce Labs credentials in your test script and configure your app. How you configure your app depends on your testing use case. Authentication of the Sauce Labs platform, as well as advanced",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492"})," Test Configuration Options"),", requires the use of the W3C WebDriver-compliant ",Object(r.mdx)("code",null,Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414463"}),"sauce:options"))," capability."),Object(r.mdx)("p",null,"We also recommend ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921"}),"exporting your Sauce Labs credentials to environment variables"),"."),Object(r.mdx)("h2",{id:"configuring-appium-for-emulator-and-simulator-tests"},"Configuring Appium for Emulator and Simulator Tests"),Object(r.mdx)("p",null,"Here are some tips for configuring Appium for your tests:"),Object(r.mdx)("h3",{id:"setting-appiumversion"},"Setting appiumVersion"),Object(r.mdx)("p",null,"If you omit the ",Object(r.mdx)("inlineCode",{parentName:"p"},"appiumVersion")," in your test configuration, your test will be running with our default Appium version. We recommend that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs."),Object(r.mdx)("h3",{id:"checking-the-appium-version-for-your-test"},"Checking the Appium Version for Your Test"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Log in to Sauce Labs."),Object(r.mdx)("li",{parentName:"ol"},"Find and select the test that you ran using Appium to view the ",Object(r.mdx)("strong",{parentName:"li"},"Test Details")," page."),Object(r.mdx)("li",{parentName:"ol"},"Click the ",Object(r.mdx)("strong",{parentName:"li"},"Metadata")," tab."),Object(r.mdx)("li",{parentName:"ol"},"Look for the ",Object(r.mdx)("strong",{parentName:"li"},"Logs")," row and select ",Object(r.mdx)("strong",{parentName:"li"},"Appium Log"),". \\\nThe first line should indicate the Appium version. For example, ",Object(r.mdx)("inlineCode",{parentName:"li"},"2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6."))),Object(r.mdx)("h3",{id:"setting-browser-name"},"Setting Browser Name"),Object(r.mdx)("p",null,"When testing a native mobile app, the value for ",Object(r.mdx)("inlineCode",{parentName:"p"},"browserName")," is an empty string, as in ",Object(r.mdx)("inlineCode",{parentName:"p"},'caps.setCapability("browserName", "");')),Object(r.mdx)("h3",{id:"setting-the-location-of-your-mobile-app"},"Setting the Location of Your Mobile App"),Object(r.mdx)("p",null,"If the app you want to test has been uploaded to a location other than Sauce Storage, you need to specify this location for ",Object(r.mdx)("inlineCode",{parentName:"p"},"app"),", and make sure that this location is accessible to Sauce Labs browsers. For example, ",Object(r.mdx)("inlineCode",{parentName:"p"},'caps.setCapability("app","sauce-storage:mapp.zip");')),Object(r.mdx)("h3",{id:"setting-automationname-for-android-apps"},"Setting automationName for Android Apps"),Object(r.mdx)("p",null,"If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability ",Object(r.mdx)("inlineCode",{parentName:"p"},'"automationName","selendroid"'),". These Android versions are only supported via Appium\u2019s bundled version of Selendroid, which utilizes ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"http://developer.android.com/reference/android/app/Instrumentation.html"}),"Instrumentation"),". Later versions of Android are supported via Appium\u2019s own UIAutomator library."),Object(r.mdx)("h2",{id:"setting-appium-capabilities-for-emulators-and-simulators"},"Setting Appium Capabilities for Emulators and Simulators"),Object(r.mdx)("p",null,"Before you run your native/hybrid mobile app tests, you will need to configure the Appium capabilities in order to communicate with Sauce Labs virtual devices (emulators and simulators). Described below are required and optional Appium test capabilities and example scripts."),Object(r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.mdx)("div",Object(i.default)({parentName:"div"},{className:"admonition-heading"}),Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",Object(i.default)({parentName:"h5"},{className:"admonition-icon"}),Object(r.mdx)("svg",Object(i.default)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.mdx)("path",Object(i.default)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"For Example Purposes Only")),Object(r.mdx)("div",Object(i.default)({parentName:"div"},{className:"admonition-content"}),Object(r.mdx)("p",{parentName:"div"},'The code in these scripts is provided on an "AS-IS\u201d basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify these scripts. Issues regarding these scripts should be submitted through ',Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://github.com/saucelabs-training"}),"GitHub"),". These scripts are not maintained by Sauce Labs Support."))),Object(r.mdx)("h3",{id:"ios-project"},"iOS Project"),Object(r.mdx)("p",null,"Below are examples of an iPhone 8 project using iOS version 12.2:"),Object(r.mdx)(p.a,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],mdxType:"Tabs"},Object(r.mdx)(l.a,{value:"Java",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-java"}),'DesiredCapabilities caps = DesiredCapabilities.iphone();\n    caps.setCapability("appiumVersion", "1.13.0");\n    caps.setCapability("deviceName","iPhone 8 Simulator");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("platformVersion","12.2");\n    caps.setCapability("platformName", "iOS");\n    caps.setCapability("browserName", "");\n    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");\n'))),Object(r.mdx)(l.a,{value:"Python",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-py"}),"caps['browserName'] = \"\"\ncaps['appiumVersion'] = \"1.13.0\"\ncaps['deviceName'] = \"iPhone 8 Simulator\"\ncaps['deviceOrientation'] = \"portrait\"\ncaps['platformVersion'] = \"12.2\"\ncaps['platformName'] = \"iOS\"\ncaps['app'] = \"https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip\"\n"))),Object(r.mdx)(l.a,{value:"Node.js",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-js"}),"caps['browserName'] = '';\ncaps['appiumVersion'] = '1.13.0';\ncaps['deviceName'] = 'iPhone 8 Simulator';\ncaps['deviceOrientation'] = 'portrait';\ncaps['platformVersion'] = '12.2';\ncaps['platformName'] = 'iOS';\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip';\n"))),Object(r.mdx)(l.a,{value:"Ruby",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-rb"}),"caps = Selenium::WebDriver::Remote::Capabilities.iphone()\ncaps['appiumVersion'] = '1.13.0'\ncaps['deviceName'] = 'iPhone 8 Simulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['platformVersion'] = '12.2'\ncaps['platformName'] = 'iOS'\ncaps['browserName'] = ''\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip'\n"))),Object(r.mdx)(l.a,{value:"C#",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-Csharp"}),'DesiredCapabilities caps = new DesiredCapabilities();\n    caps.SetCapability("appiumVersion", "1.13.0");\n    caps.SetCapability("deviceName", "iPhone 8 Simulator");\n    caps.SetCapability("deviceOrientation", "portrait");\n    caps.SetCapability("platformVersion", "12.2");\n    caps.SetCapability("platformName", "iOS");\n    caps.SetCapability("browserName", "");\n    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");\n')))),Object(r.mdx)("h3",{id:"android-project"},"Android Project"),Object(r.mdx)("p",null,"Below are examples of an Samsung Galaxy S9 Plus project using Android version 8.1:"),Object(r.mdx)(p.a,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],mdxType:"Tabs"},Object(r.mdx)(l.a,{value:"Java",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-java"}),'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.9.1");\n    caps.setCapability("deviceName","Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","8.1");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");\n'))),Object(r.mdx)(l.a,{value:"Python",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-py"}),"caps = {}\ncaps['appiumVersion'] = \"1.9.1\"\ncaps['deviceName'] = \"Samsung Galaxy S9 Plus FHD GoogleAPI Emulator\"\ncaps['deviceOrientation'] = \"portrait\"\ncaps['platformVersion'] = \"8.1\"\ncaps['platformName'] = \"Android\"\ncaps['app'] = \"https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk\"\n"))),Object(r.mdx)(l.a,{value:"Node.js",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-js"}),"caps = {};\ncaps['appiumVersion'] = '1.9.1';\ncaps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator';\ncaps['deviceOrientation'] = 'portrait';\ncaps['browserName'] = '';\ncaps['platformVersion'] = '8.1';\ncaps['platformName'] = 'Android';\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk';\n"))),Object(r.mdx)(l.a,{value:"Ruby",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-rb"}),"caps = Selenium::WebDriver::Remote::Capabilities.android()\ncaps['appiumVersion'] = '1.9.1'\ncaps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['browserName'] = ''\ncaps['platformVersion'] = '8.1'\ncaps['platformName'] = 'Android'\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk'\n"))),Object(r.mdx)(l.a,{value:"C#",mdxType:"TabItem"},Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{className:"language-Csharp"}),'DesiredCapabilities caps = new DesiredCapabilities();\n    caps.SetCapability("appiumVersion", "1.9.1");\n    caps.SetCapability("deviceName", "Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");\n    caps.SetCapability("deviceOrientation", "portrait");\n    caps.SetCapability("browserName", "");\n    caps.SetCapability("platformVersion", "8.1");\n    caps.SetCapability("platformName", "Android");\n    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");\n')))),Object(r.mdx)("br",null),Object(r.mdx)("h2",{id:"configuring-native-apps-vs-hybrid-apps"},"Configuring Native Apps vs. Hybrid Apps"),Object(r.mdx)(p.a,{defaultValue:"iOS",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"}],mdxType:"Tabs"},Object(r.mdx)(l.a,{value:"iOS",mdxType:"TabItem"},Object(r.mdx)("p",null,"iPhone Native App"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{}),'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.4.16");\ncaps.setCapability("deviceName","iPhone 5");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","10.3");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "");\ncaps.setCapability("app","sauce-storage:mapp.zip");\n')),Object(r.mdx)("p",null,"iPad Native App"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{}),'DesiredCapabilities caps = DesiredCapabilities.iphone();\n  caps.setCapability("appiumVersion", "1.4.16");\n  caps.setCapability("deviceName","iPad Retina");\n  caps.setCapability("deviceOrientation", "portrait");\n  caps.setCapability("platformVersion","9.2");\n  caps.setCapability("platformName", "iOS");\n  caps.setCapability("browserName", "");\n  aps.setCapability("app","sauce-storage:myapp.zip");\n')),Object(r.mdx)("p",null,"iPhone Hybrid App"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{}),'DesiredCapabilities caps = DesiredCapabilities.iphone();\n    caps.setCapability("appiumVersion", "1.4.16");\n    caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("platformVersion","7.1");\n    caps.setCapability("platformName", "iOS");\n    caps.setCapability("browserName", "");\n    caps.setCapability("app","sauce-storage:myapp.zip");\n'))),Object(r.mdx)(l.a,{value:"Android",mdxType:"TabItem"},Object(r.mdx)("p",null,"Android Native App, Android v. 4.3"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{}),'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.4.16");\n    caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");\n    caps.setCapability("deviceOrientation", "portrait");  \n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","4.3");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app","sauce-storage:myapp.zip");\n')),Object(r.mdx)("p",null,"Android Hybrid App, Android v. 4.1"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(i.default)({parentName:"pre"},{}),'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.4.16");\n    caps.setCapability("deviceName","Android Emulator");\n    caps.setCapability("deviceType","tablet");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","4.1");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app","sauce-storage:myapp.zip");\n    caps.setCapability("automationName","Selendroid");\n')))),Object(r.mdx)("h2",{id:"example-appium-test-scripts"},"Example Appium Test Scripts"),Object(r.mdx)("p",null,"These Appium scripts for iOS and Android mobile app tests on emulators and simulators can help streamline your testing process. See ","[Sauce Labs Training on GitHub]","((",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://github.com/saucelabs-training/"}),"https://github.com/saucelabs-training/"),") for a full repository of demo scripts to get you started with automated testing on Sauce Labs."),Object(r.mdx)("p",null,"Visit the following repositories for Appium iOS and Android app example scripts:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-java/tree/master/appium-example/src/test/java/example/ios"}),"Java for iOS"),", ",Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-java/tree/master/appium-example/src/test/java/example/android"}),"Java for Android")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/appium-app/examples"}),"JavaScript")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-python/tree/master/appium-examples"}),"Python")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-ruby/tree/master/appium-examples"}),"Ruby")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://github.com/saucelabs-training/demo-csharp/tree/master/SauceExamples/AppiumLatestOnDotNetFramework"}),"C#"))),Object(r.mdx)("h2",{id:"best-practices-and-reporting-test-results"},"Best Practices and Reporting Test Results"),Object(r.mdx)("p",null,"Now that you've been able to get a test running on Sauce, check out ",Object(r.mdx)("a",Object(i.default)({parentName:"p"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Best+Practices+for+Running+Tests"}),"Best Practices for Running Tests")," and available modifications you can make to your tests:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492#TestConfigurationOptions-Timeouts"}),"Implement timeouts to control text execution times")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Annotating+Tests+with+the+Sauce+Labs+REST+API"}),"Annotating Tests with the Sauce Labs REST API")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Annotating+Tests+with+Selenium%27s+JavaScript+Executor"}),"Annotating Tests with Selenium's JavaScript Executor")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Setting+Test+Status+to+Pass+or+Fail"}),"Setting Test Status to Pass or Fail")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Best+Practice%3A+Use+Build+IDs%2C+Tags%2C+and+Names+to+Identify+Your+Tests"}),"Use Build IDs and tags to differentiate and identify test runs"))),Object(r.mdx)("h2",{id:"additional-resources"},"Additional Resources"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Create your own test script examples using our ",Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Platform+Configurator"}),"Platform Configurator"),"."),Object(r.mdx)("li",{parentName:"ul"},"See ",Object(r.mdx)("a",Object(i.default)({parentName:"li"},{href:"https://wiki.saucelabs.com/display/DOCSDEV/Test+Configuration+Options"}),"Test Configuration Options")," for our full suite of capabilities and advanced configurations.")))}b.isMDXComponent=!0},222:function(e,a,t){"use strict";t.r(a),t.d(a,"MDXContext",(function(){return c})),t.d(a,"MDXProvider",(function(){return m})),t.d(a,"mdx",(function(){return O})),t.d(a,"useMDXComponents",(function(){return d})),t.d(a,"withMDXComponents",(function(){return u}));var i=t(0),n=t.n(i);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),u=function(e){return function(a){var t=d(a.components);return n.a.createElement(e,s({},a,{components:t}))}},d=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=d(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},f=n.a.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,m=c["".concat(s,".").concat(u)]||c[u]||b[u]||r;return t?n.a.createElement(m,o(o({ref:a},p),{},{components:t})):n.a.createElement(m,o({ref:a},p))}));function O(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=f;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=t[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},223:function(e,a,t){"use strict";var i=t(4);Object.defineProperty(a,"__esModule",{value:!0}),a.useBaseUrlUtils=s,a.default=function(e,a){void 0===a&&(a={});return(0,s().withBaseUrl)(e,a)};var n=i(t(29)),r=t(224);function s(){var e=(0,n.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,i=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,i){var n=void 0===i?{}:i,s=n.forcePrependBaseUrl,p=void 0!==s&&s,o=n.absolute,l=void 0!==o&&o;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.hasProtocol)(t))return t;if(p)return a+t;var c=t.startsWith(a)?t:a+t.replace(/^\//,"");return l?e+c:c}(i,t,e,a)}}}},224:function(e,a,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.hasProtocol=i,a.default=function(e){return void 0!==e&&!i(e)}},225:function(e,a,t){"use strict";function i(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=i(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}t.r(a),a.default=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=i(e))&&(n&&(n+=" "),n+=a);return n}},226:function(e,a,t){"use strict";var i=t(4);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(0),r=i(t(227));var s=function(){var e=(0,n.useContext)(r.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};a.default=s},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=(0,t(0).createContext)(void 0);a.default=i},228:function(e,a,t){"use strict";var i=t(4),n=t(30);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=i(t(226)),p=i(t(225)),o=i(t(198)),l=37,c=39;var u=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,n=e.values,u=e.groupId,d=e.className,m=(0,s.default)(),b=m.tabGroupChoices,f=m.setTabGroupChoices,O=(0,r.useState)(i),h=O[0],v=O[1],y=r.Children.toArray(e.children);if(null!=u){var g=b[u];null!=g&&g!==h&&n.some((function(e){return e.value===g}))&&v(g)}var j=function(e){v(e),null!=u&&f(u,e)},x=[];return r.default.createElement("div",null,r.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":t},d)},n.map((function(e){var a=e.value,t=e.label;return r.default.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:(0,p.default)("tabs__item",o.default.tabItem,{"tabs__item--active":h===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case c:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case l:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e)},onFocus:function(){return j(a)},onClick:function(){j(a)}},t)}))),a?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.default.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))};a.default=u},229:function(e,a,t){"use strict";var i=t(4);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(3)),r=i(t(0));var s=function(e){var a=e.children,t=e.hidden,i=e.className;return r.default.createElement("div",(0,n.default)({role:"tabpanel"},{hidden:t,className:i}),a)};a.default=s}}]);