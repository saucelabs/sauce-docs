"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33658],{11554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453),l=n(86025);n(11470),n(19365);const r={id:"live-mobile-app-testing",title:"Live Mobile App Testing",sidebar_label:"Live Mobile App Testing"},a=void 0,o={id:"mobile-apps/live-testing/live-mobile-app-testing",title:"Live Mobile App Testing",description:"With Sauce Labs, you can test your mobile apps on a variety of Android and iOS/iPadOS devices. If you do not have an app, consider using the Sauce Labs demo app for validating your account functionality as well as your tests.",source:"@site/docs/mobile-apps/live-testing/live-mobile-app-testing.md",sourceDirName:"mobile-apps/live-testing",slug:"/mobile-apps/live-testing/live-mobile-app-testing",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/live-testing/live-mobile-app-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/live-testing/live-mobile-app-testing.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1718276959e3,frontMatter:{id:"live-mobile-app-testing",title:"Live Mobile App Testing",sidebar_label:"Live Mobile App Testing"},sidebar:"docs",previous:{title:"Network Traffic Capture",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/features/network-capture"},next:{title:"Testing Push Notifications",permalink:"/sauce-docs/pr-preview/pr-2897/mobile-apps/live-testing/testing-push-notifications"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Uploading an App",id:"uploading-an-app",level:3},{value:"Deleting an App",id:"deleting-an-app",level:3},{value:"App Settings",id:"app-settings",level:3},{value:"Default App Settings",id:"default-app-settings",level:4},{value:"Selecting a Device",id:"selecting-a-device",level:3},{value:"Real Devices",id:"real-devices",level:4},{value:"Virtual Devices",id:"virtual-devices",level:4},{value:"<strong>Public vs. Private Devices</strong>",id:"public-vs-private-devices",level:4},{value:"Launching a Test",id:"launching-a-test",level:3},{value:"Time Limits and Timeouts for Real Devices",id:"time-limits-and-timeouts-for-real-devices",level:4},{value:"Trusting Enterprise Certificates",id:"trusting-enterprise-certificates",level:3},{value:"Adding a Test Name and Outcome for Your Test",id:"adding-a-test-name-and-outcome-for-your-test",level:3},{value:"Live Test Interface",id:"live-test-interface",level:2},{value:"Device Log",id:"device-log",level:3},{value:"Changing an App Version",id:"changing-an-app-version",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["With Sauce Labs, you can test your mobile apps on a variety of Android and iOS/iPadOS devices. If you do not have an app, consider using the ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-rn",children:"Sauce Labs demo app"})," for validating your account functionality as well as your tests."]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs account (",(0,i.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["Your mobile app file. If you don't have one on hand, consider using our Demo Apps:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-rn/releases",children:"React Native Demo App"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-ios/releases",children:"iOS Demo App"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-android/releases",children:"Android Demo App"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"uploading-an-app",children:"Uploading an App"}),"\n",(0,i.jsxs)(t.p,{children:["You can upload your app via the Sauce Labs UI or via the REST API. For information about uploading via the API, see ",(0,i.jsx)(t.a,{href:"/mobile-apps/app-storage",children:"Upload Files with the REST API"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To upload an app via the Sauce Labs UI:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On Sauce Labs, in the left panel, click ",(0,i.jsx)(t.strong,{children:"App Management"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"To upload an app you can either drag and drop an app or browse for and select the file. We currently support *.apk Android app files, *.aab Android App Bundle files, and *.ipa or *.zip iOS app files (*.zip files are parsed to determine whether a valid *.app bundle exists). Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you don't have an app to test, you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/sample-app-mobile",children:"Sauce Labs sample mobile app"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management.png"),alt:"Upload an app",width:"650"}),"\n",(0,i.jsx)(t.h3,{id:"deleting-an-app",children:"Deleting an App"}),"\n",(0,i.jsx)(t.p,{children:"Deleting an app in Sauce Labs will delete the whole app (i.e., the group of builds belonging to the same app package). Files associated with app identifiers (i.e., belonging to the same platform and accessible to the same team) are indicated by the + symbol next to the version number. Also, the version number shown is the most recently updated file, not necessarily the latest version of the app."}),"\n",(0,i.jsxs)(t.p,{children:["To delete an app, on the ",(0,i.jsx)(t.strong,{children:"App Management"})," page, hover over the app and then click ",(0,i.jsx)(t.strong,{children:"Delete"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-delete.png"),alt:"Delete an app",width:"850"}),"\n",(0,i.jsx)(t.h3,{id:"app-settings",children:"App Settings"}),"\n",(0,i.jsxs)(t.p,{children:["To view or change the app settings, on the ",(0,i.jsx)(t.strong,{children:"App Management"})," page, hover over the app and then click ",(0,i.jsx)(t.strong,{children:"Settings"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-settings.png"),alt:"App settings",width:"850"}),"\n",(0,i.jsx)(t.p,{children:"To easily copy a test's file name or ID, hover over the test and then click the clipboard icon."}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-copy.png"),alt:"Copy a file name or ID",width:"850"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The app settings screen is only available for real device testing."})}),"\n",(0,i.jsxs)(t.p,{children:["To view your recent configurations, click ",(0,i.jsx)(t.strong,{children:"Recents"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-testing-recent-tests-nav.png"),alt:"Recent tests",width:"550"}),"\n",(0,i.jsx)(t.h4,{id:"default-app-settings",children:"Default App Settings"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Setting"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Device Language"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Use the dropdown to select the device language. The language selector will tell your application that the locale of the device and region is set to the selected parameter. You won't need to change the language of the OS manually during a session inside iOS/Android settings. For more information about the locale setting, see the documentation for ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/foundation/locale",children:"iOS"})," and ",(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/java/util/Locale",children:"Android"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Device Orientation"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Use the dropdown to set the device orientation (Landscape or Portrait)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Proxy"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable/disable the use of a proxy. Enter the ",(0,i.jsx)(t.strong,{children:"Hostname"})," and ",(0,i.jsx)(t.strong,{children:"Port"})," and then click ",(0,i.jsx)(t.strong,{children:"Update"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Device Passcode ",(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable/disable the device passcode for your apps. If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device. On Android we are setting 000000, on iOS 089675 as passcode. This is available during Live Testing sessions, see it below in the ",(0,i.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface",children:"Live Testing interface section"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Instrumentation"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/disable device instrumentation. Enabling allows you to use advanced features when testing your app in the real device cloud, like image injection and taking screenshots of secure views."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Image Injection"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/disable image injection. Image injection allows you to mimic camera behavior when testing apps by letting you upload an image and present it to the app as if it were read by the device camera."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Bypass Screenshot Restriction ",(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Android Only"})})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable/disable Bypass Screenshot Restriction (not supported on apps uploaded to the legacy sauce storage). If you're testing Android mobile apps on Sauce Labs and see a black screen in your live testing session, you might need to enable the ",(0,i.jsx)("b",{children:"Bypass Screenshot Restriction"}),". This allows Sauce Labs to work around a setting on those apps that prevents screenshots or videos from being taken. However, there are other details to keep in mind. To effectively test apps that have this setting, see ",(0,i.jsx)(t.a,{href:"/mobile-apps/features/bypass-screenshot",children:"Bypass Screenshot Restriction"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["System Alerts Display ",(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"iOS Only"})})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/disable a system alerts delay. Enabling delays alerts, such as asking for permission to access the camera, to prevent app crashes at startup."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Biometrics Interception"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable/disable biometrics. Enabling allows you to choose authentication options if your mobile app requires a biometric authentication, such as fingerprint or face recognition on Android, and Face ID or Touch ID on iOS.",(0,i.jsx)("br",{})," This setting is disabled by default for iOS apps."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Group Folder Redirect ",(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"iOS Only"})})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/disable a group directory redirect. Enabling allows you to use your app's private app container directory instead of the shared app group container directory. When your app gets resigned, the shared directory is not accessible."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Any changes you make to the app settings will affect all uploaded versions of the app."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example Settings - iOS"})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-ios.png"),alt:"App settings - iOS",width:"750"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example Settings - Android"})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-android.png"),alt:"App settings - Android",width:"780"}),"\n",(0,i.jsxs)(t.p,{children:["Most settings update automatically, however, when you make changes to the proxy setting, click ",(0,i.jsx)(t.strong,{children:"Update"})," to finish."]}),"\n",(0,i.jsx)(t.h3,{id:"selecting-a-device",children:"Selecting a Device"}),"\n",(0,i.jsx)(t.p,{children:"You must select a device prior to launching a session."}),"\n",(0,i.jsxs)(t.p,{children:["On the ",(0,i.jsx)(t.strong,{children:"App Management"})," page, hover over the app you want to test and then click ",(0,i.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-test.png"),alt:"Choose a device",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"The device selection page will open, with the option to test on a real device or a virtual device."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If you are testing an iOS app, the device selection will only display the type (real/virtual) configured on the app."})}),"\n",(0,i.jsx)(t.p,{children:"To mark a device as a favorite so you can find it easily in the future, click the pin icon next to the device name."}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/device-favorite.png"),alt:"Favorite a device",width:"350"}),"\n",(0,i.jsxs)(t.p,{children:["The default sorting for the device list is ",(0,i.jsx)(t.strong,{children:"Pinned First"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"real-devices",children:"Real Devices"}),"\n",(0,i.jsxs)(t.p,{children:["On the device selection page, click the ",(0,i.jsx)(t.strong,{children:"Mobile Real"})," tab. Use the search box and filters to find the device you want to test on, or select the device in the grid."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-real.png"),alt:"Mobile Real tab",width:"750"}),"\n",(0,i.jsx)(t.h4,{id:"virtual-devices",children:"Virtual Devices"}),"\n",(0,i.jsxs)(t.p,{children:["On the device selection page, click the ",(0,i.jsx)(t.strong,{children:"Mobile Virtual"})," tab. Use the dropdowns to select the details for the virtual device you want to test on, and then click ",(0,i.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-virtual.png"),alt:"Mobile Virtual tab",width:"550"}),"\n",(0,i.jsx)(t.h4,{id:"public-vs-private-devices",children:(0,i.jsx)(t.strong,{children:"Public vs. Private Devices"})}),"\n",(0,i.jsxs)(t.p,{children:["There is a distinction between ",(0,i.jsx)(t.strong,{children:"Public Devices"})," and ",(0,i.jsx)(t.strong,{children:"Private Devices"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Public devices are accessible by anyone with a Sauce Labs account and are subject to availability. If a device is in use, you will see a yellow ",(0,i.jsx)(t.strong,{children:"In Use"})," flag across the thumbnail."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live9.png"),alt:"Busy public device",width:"400"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Private devices are associated with your account and are an ",(0,i.jsx)(t.strong,{children:"enterprise only"})," feature. Private devices are indicated by a green device icon."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If you are interested in upgrading to an enterprise plan, contact your Sauce Labs Sales Engineer or Customer Success Manager."})}),"\n",(0,i.jsx)(t.h3,{id:"launching-a-test",children:"Launching a Test"}),"\n",(0,i.jsx)(t.p,{children:"You can launch a test from the following screens:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Hover over the device in the grid and then click ",(0,i.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Hover over the device in the grid and then click ",(0,i.jsx)(t.strong,{children:"Details"}),". On the ",(0,i.jsx)(t.strong,{children:"Details"})," screen, click ",(0,i.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"If you have issues starting live tests, check your IT infrastructure and make sure you are not blocking WebSockets."})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-start-test.png"),alt:"Launch a test from the Details screen",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"You'll see a loading screen, and then the app will launch in a live test window using the device you selected."}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-demo-app.png"),alt:"Mobile real device test interface",width:"550"}),"\n",(0,i.jsx)(t.h4,{id:"time-limits-and-timeouts-for-real-devices",children:"Time Limits and Timeouts for Real Devices"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Live tests for free users have a 10 minute limit from session start"}),"\n",(0,i.jsx)(t.li,{children:"Live tests for all other users are limited to six hours"}),"\n",(0,i.jsx)(t.li,{children:"Live tests for paid users will timeout after 15 minutes of inactivity"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"trusting-enterprise-certificates",children:"Trusting Enterprise Certificates"}),"\n",(0,i.jsxs)(t.p,{children:["If you upload an app that is signed with an enterprise certificate, and ",(0,i.jsx)(t.strong,{children:"Instrumentation"})," is DISABLED in app settings, you must manually trust the certificate before it will successfully launch."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If you receive an app installation failed error, click the ",(0,i.jsx)(t.strong,{children:"X"})," in the app loading screen to exit the device home screen."]}),"\n",(0,i.jsxs)(t.li,{children:["On the device home screen, navigate to ",(0,i.jsx)(t.strong,{children:"Settings"})," -> ",(0,i.jsx)(t.strong,{children:"General"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Profiles & Device Management"}),", tap the app you are trying to install and test."]}),"\n",(0,i.jsxs)(t.li,{children:["Tap ",(0,i.jsx)(t.strong,{children:'Trust "app name"'})," and then tap ",(0,i.jsx)(t.strong,{children:"Trust"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Reopen the app to continue the test."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-test-name-and-outcome-for-your-test",children:"Adding a Test Name and Outcome for Your Test"}),"\n",(0,i.jsx)(t.p,{children:"Sauce Labs has introduced a new feature that allows you to enter a test name and test status (passed/failed) for your Live Tests after cross-browser and mobile app testing. This update enhances the testing efficiency by enabling you to add more context to test descriptions and add more clarity to your test repository."}),"\n",(0,i.jsx)(t.p,{children:"Adding a test name is a straightforward process, and there are two ways to do it:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the end session screen:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Start a Live Test session."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["End the Live Test Session by clicking on the ",(0,i.jsx)(t.strong,{children:"End"})," button from the toolbar. The end session screen will pop up, and from there, you can edit the test name and select test outcome status:"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/mobile-live-failed-passed.png"),alt:"Test Name",width:"550"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the test details page:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Live"})," -> ",(0,i.jsx)(t.strong,{children:"Test results"})," -> click on a test."]}),"\n",(0,i.jsxs)(t.li,{children:["On the test details page, click on the pencil nearby the test name to edit it:","\n",(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/change-name-test-1.png"),alt:"Test Name",width:"550"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"This feature works the same way for both cross-browser testing and mobile app testing."})}),"\n",(0,i.jsx)(t.p,{children:"Use test names to customize your testing experience:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Add descriptive names to your tests to quickly identify your findings."}),"\n",(0,i.jsx)(t.li,{children:"Keep track of tested steps by adding details to test names."}),"\n",(0,i.jsx)(t.li,{children:"Easily rename your tests to reflect Jira tickets or other related tasks."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"LIMITATIONS",type:"note",children:(0,i.jsx)(t.p,{children:"This feature has a constraint on the maximum allowable length of the test name, which is limited to 255 characters. The utilization of emojis is not supported in the test name."})}),"\n",(0,i.jsx)(t.h2,{id:"live-test-interface",children:"Live Test Interface"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Icon"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/pin-unpin-icon.png"),alt:"Unpin/Pin Toolbar icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unpin/Pin Toolbar"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unpins or pins the live testing toolbar."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/session-info-icon.png"),alt:"Session Info icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Session Info"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Current Session"})," window, which includes app and device details."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/take-screenshot-icon.png"),alt:"Take Screenshot icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Take Screenshot"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Takes a screenshot of the current device screen. The image downloads automatically as a .png file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/share-session-icon.png"),alt:"Share Session icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Share Session"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Share Device"})," window. For a sharable link to the device, click ",(0,i.jsx)(t.strong,{children:"Get Link"}),". ",(0,i.jsx)("br",{}),"Users must be logged in to be able to view the test."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/rotate-button.png"),alt:"Rotate Device icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rotate Device"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rotates the device between portrait and landscape."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/home-icon.png"),alt:"Home icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Home"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Opens the device home screen."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/more-device-options-icon.png"),alt:"More Device Options icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"More Device Options"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.strong,{children:"Set Location"})," - Set the GPS location using coordinates or by dropping a pin on the map. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.strong,{children:"Camera Injection"})," - Opens the ",(0,i.jsx)(t.strong,{children:"Camera Injection"})," window. See ",(0,i.jsx)(t.a,{href:"/mobile-apps/features/camera-image-injection",children:"Camera Image Injection"})," for more information.",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.strong,{children:"Biometric Injection"})," - Opens the ",(0,i.jsx)(t.a,{href:"/mobile-apps/features/biometric-authentication",children:"Biometric Authentication"})," window. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.strong,{children:"Performance mode On/Off"})," - Enables you to increase frame rate per second, or switch back to lower frame rate video streaming, when your network connection or VPN is restrictive and you experience blurred screen."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/restart-app-button.png"),alt:"Restart App icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Restart App"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Restarts the app."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/switch-app-version-icon.png"),alt:"Switch App Version icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Switch App Version"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Switch App Version"})," window. To change the version of the app you are testing, hover over the version and then click ",(0,i.jsx)(t.strong,{children:"Choose version"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/clipboard-button.png"),alt:"Clipboard icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Clipboard"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Paste Content Into Device"})," window."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/install-dependency-icon.png"),alt:"Install Dependency icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Install Dependency"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Install Dependent App"})," window."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/mobile-apps/devtools-button.png"),alt:"Developer Options icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Developer Options"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Developer Options"})," panel, which includes the ",(0,i.jsx)(t.strong,{children:"Device Log"})," and ",(0,i.jsx)(t.strong,{children:"Dev Tools"})," tabs."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-audio.png"),alt:"Developer Options icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Mute/Unmute"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Mutes or unmutes audio for your testing session."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/passcode.png"),alt:"Passcode icon",width:"35"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Passcode - Android Only"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device. On Android we are setting 000000."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"device-log",children:"Device Log"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/device-log.png"),alt:"Device Log",width:"450"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Icon"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/log-level.png"),alt:"Log Level",width:"85"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Log Level"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"VERBOSE "}),(0,i.jsx)("li",{children:"DEBUG "}),(0,i.jsx)("li",{children:"INFO "}),(0,i.jsx)("li",{children:"WARN "}),(0,i.jsx)("li",{children:"ERROR "}),(0,i.jsx)("li",{children:"ASSERT "})]})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/68342451/236323299-3e75d296-a6ec-4130-b131-e9c901c43429.png"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/mobile-apps/features/mobile-app-diagnostics/app-logs/",children:"App Log"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"VERBOSE "}),(0,i.jsx)("li",{children:"DEBUG "}),(0,i.jsx)("li",{children:"INFO "}),(0,i.jsx)("li",{children:"WARN "}),(0,i.jsx)("li",{children:"ERROR "}),(0,i.jsx)("li",{children:"ASSERT "})]})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/search-log-icon.png"),alt:"Search Log icon",width:"40"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Search Log"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Opens the ",(0,i.jsx)(t.strong,{children:"Search log"})," interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"REGEX "}),(0,i.jsx)("li",{children:"IGNORE CASE "}),(0,i.jsx)("li",{children:"INVERT "})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/pause-log-icon.png"),alt:"Pause Log icon",width:"40"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Pause Log"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Pauses the log feed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/wrap-text-icon.png"),alt:"Wrap Text icon",width:"40"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Wrap Text"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Wraps text in the log for easier reading."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/clear-log-icon.png"),alt:"Clear Log icon",width:"40"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Clear Log"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Clears the log feed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/download-log-icon.png"),alt:"Download Log icon",width:"40"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Download Log"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Downloads the log as a .txt file."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"changing-an-app-version",children:"Changing an App Version"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes you need to conduct A/B testing, or document and validate feature parity between different versions of the same app. You can change the app version, as well as the real device, and launch a new test session."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.strong,{children:"App Upload"})," page, click ",(0,i.jsxs)(t.strong,{children:["+",(0,i.jsx)(t.em,{children:"#"})]})," in the ",(0,i.jsx)(t.strong,{children:"Version"})," column.","\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-version.png"),alt:"App with multiple versions",width:"750"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.strong,{children:"Settings"})," page, in the versions list, hover over the version you want to launch."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Start Test"}),".","\n",(0,i.jsx)("img",{src:(0,l.A)("img/live-testing/live-mobile-app-management-version-start.png"),alt:"Change the version of an app",width:"750"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(18215);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(96540),s=n(18215),l=n(23104),r=n(56347),a=n(205),o=n(57485),c=n(31682),d=n(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=p(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[c,h]=u({queryString:n,groupId:s}),[x,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),j=(()=>{const e=c??x;return g({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function f(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==i&&(c(t),r(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function A(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);