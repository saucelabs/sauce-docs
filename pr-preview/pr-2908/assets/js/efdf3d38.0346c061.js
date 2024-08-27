"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1888],{41905:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453),r=i(86025);i(11470),i(19365);const a={id:"biometric-authentication",title:"Biometric Authentication",sidebar_label:"Biometric Authentication",description:"Learn how to test facial and fingerprint device authentication."},l=void 0,o={id:"mobile-apps/features/biometric-authentication",title:"Biometric Authentication",description:"Learn how to test facial and fingerprint device authentication.",source:"@site/docs/mobile-apps/features/biometric-authentication.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/biometric-authentication",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/biometric-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/biometric-authentication.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"biometric-authentication",title:"Biometric Authentication",sidebar_label:"Biometric Authentication",description:"Learn how to test facial and fingerprint device authentication."},sidebar:"docs",previous:{title:"Network Throttling",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/network-throttling"},next:{title:"Camera Image Injection",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/camera-image-injection"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Key Specs",id:"key-specs",level:2},{value:"Android Biometrics",id:"android-biometrics",level:3},{value:"iOS Biometrics",id:"ios-biometrics",level:3},{value:"Live Testing",id:"live-testing",level:2},{value:"Automated Testing",id:"automated-testing",level:2},{value:"Real Devices",id:"real-devices",level:3},{value:"iOS Simulators",id:"ios-simulators",level:3},{value:"Android Emulators",id:"android-emulators",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"With Sauce Labs Biometric Authentication, you can simulate biometric authentication events within your app during live and automated testing. This feature allows you to test the app's ability to recognize and respond to biometric events, without physically testing it on a device. Biometric Authentication refers to the use of physical characteristics, such as fingerprint (Touch ID) or facial recognition (Face ID) to verify the user's identity."}),"\n",(0,n.jsx)(t.p,{children:"Sauce Labs provides biometrics interception for our customers to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Access test flows that are dependent on biometrics support, such as a mandatory security layer."}),"\n",(0,n.jsx)(t.li,{children:"Verify that an app responds as expected to biometrics settings (e.g., enabled/disabled and successful/unsuccessful)."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Make sure you have a debuggable AND non-obfuscated version of your application uploaded to Mobile App Storage.\nBiometrics test support in Sauce Labs is not intended to test actual biometrics values for authentication."})}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your mobile app file. If you don't have one on hand, consider using our ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-rn/releases",children:"React Native Demo App"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"key-specs",children:"Key Specs"}),"\n",(0,n.jsx)(t.p,{children:"Biometric Authentication is available for testing on all Sauce Labs Android and iOS real devices."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Not Supported"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"**Device Type **"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android real devices"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS real devices"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android Emulators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS Simulators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"App Type"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Flutter(iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"React Native(iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cordova (iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Framework Type"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Appium"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Espresso (Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XCUITest (iOS)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Not Supported",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Mobile browsers and pre-installed system apps."}),"\n",(0,n.jsx)(t.li,{children:"Cross-platform development frameworks like Flutter, React Native, and Cordova (libraries and frameworks are not supported)."}),"\n",(0,n.jsx)(t.li,{children:"Ephemeral apps."}),"\n"]})}),"\n",(0,n.jsx)(t.h3,{id:"android-biometrics",children:"Android Biometrics"}),"\n",(0,n.jsx)(t.p,{children:"For Android devices, there are multiple ways to configure biometrics. From API 28 and above we support the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/biometrics/BiometricManager",children:(0,n.jsx)(t.code,{children:"BiometricManager"})})," provides APIs to query if the app can authenticate and a list of ",(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/biometrics/BiometricManager.Authenticators",children:"Authenticators"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt",children:(0,n.jsx)(t.code,{children:"BiometricPrompt"})})," provides a user interface in the form of a dialog for the user's finger touch, and the call ",(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt.AuthenticationCallback",children:(0,n.jsx)(t.code,{children:"BiometricPrompt.AuthenticationCallback"})})," provides the response of the fingerprint Authentication."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"From API 23 to 28 we support the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager#authenticate(android.hardware.fingerprint.FingerprintManager.CryptoObject,%20android.os.CancellationSignal,%20int,%20android.hardware.fingerprint.FingerprintManager.AuthenticationCallback,%20android.os.Handler)",children:(0,n.jsx)(t.code,{children:"FingerprintManager.authenticate()"})})," triggers the authentication."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.AuthenticationCallback.html",children:(0,n.jsx)(t.code,{children:"FingerprintManager.AuthenticationCallback"})})," provides an instant response of the fingerprint."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ios-biometrics",children:"iOS Biometrics"}),"\n",(0,n.jsx)(t.p,{children:"For iOS devices, biometrics can be configured with different outputs. We support the following instance methods:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/localauthentication/lacontext/1514176-evaluatepolicy",children:(0,n.jsx)(t.code,{children:"evaluatePolicy"})})," evaluates the specified policy. The method ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/localauthentication/lacontext/1514149-canevaluatepolicy",children:(0,n.jsx)(t.code,{children:"canEvaluatePolicy"})})," checks whether the authentication can proceed for a given policy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/localauthentication/lacontext/2867583-biometrytype",children:(0,n.jsx)(t.code,{children:"biometryType"})})," determines the type of biometric authentication method supported by the device, and the method ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/localauthentication/lacontext/1514150-evaluatedpolicydomainstate",children:(0,n.jsx)(t.code,{children:"evaluatedPolicyDomainState"})})," assesses the current state of the policy domain."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/localauthentication/lacontext/2873508-interactionnotallowed",children:(0,n.jsx)(t.code,{children:"interactionNotAllowed"})})," indicates if the authentication can be interactive."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/1401659-secitemadd",children:(0,n.jsx)(t.code,{children:"SecItemAdd"})})," adds one or more items to a keychain. ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/1398306-secitemcopymatching",children:(0,n.jsx)(t.code,{children:"SecItemCopyMatching"})})," returns more keychain items that match the search query. You can delete items that match the search query by using the ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/1395547-secitemdelete",children:(0,n.jsx)(t.code,{children:"SecItemDelete"})})," method. We support the following SecItem Classes: ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/ksecclassgenericpassword",children:(0,n.jsx)(t.code,{children:"kSecClassGenericPassword"})})," and ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/ksecclassinternetpassword",children:(0,n.jsx)(t.code,{children:"kSecClassInternetPassword"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"live-testing",children:"Live Testing"}),"\n",(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})}),"\n",(0,n.jsx)(t.p,{children:"To use biometric interception in a live mobile app test, you must ensure that the functionality is enabled for your app both through Sauce Labs AND through your app before you can mock the result as passing or failing."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In Sauce Labs, click ",(0,n.jsx)(t.strong,{children:"LIVE"})," and then click ",(0,n.jsx)(t.strong,{children:"Mobile App"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"App Selection"})," page, hover over the test and then click ",(0,n.jsx)(t.strong,{children:"Settings"}),".","\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/live-mobile-app-settings-nav.png"),alt:"Mobile app settings navigation",width:"650"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"Settings"})," page, ensure that ",(0,n.jsx)(t.strong,{children:"Biometrics Interception"})," is enabled and then return to the ",(0,n.jsx)(t.strong,{children:"App Selection"})," page. ",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/biometrics-enabled.png"),alt:"Biometrics Interception - Enabled",width:"650"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"App Selection"})," test page, hover over the test and then click ",(0,n.jsx)(t.strong,{children:"Choose Device"}),".","\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/image-injection-choose-device.png"),alt:"Image Injection - Choose Device",width:"650"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["On the device selection page, hover over a device and then click ",(0,n.jsx)(t.strong,{children:"Launch"}),".","\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/image-injection-launch.png"),alt:"Image Injection - Launch",width:"650"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/mobile-apps/bio-toolbar-icons.png"),alt:"Biometric toolbar icons",width:"300"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["In the live test window, in the right toolbar, click ",(0,n.jsx)(t.strong,{children:"More Device Options"})," and then click ",(0,n.jsx)(t.strong,{children:"Biometric Authentication"}),". ",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/mobile-apps/bio-toolbar-icons.png"),alt:"Biometric toolbar icons",width:"300"}),"\n",(0,n.jsx)("br",{}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Biometric Authentication"})," window, click ",(0,n.jsx)(t.strong,{children:"Pass"})," to imitate successful authentication or click ",(0,n.jsx)(t.strong,{children:"Fail"})," to imitate an unsuccessful authentication. ",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/live-testing/biometric-nav.png"),alt:"Biometric Authentication",width:"450"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"automated-testing",children:"Automated Testing"}),"\n",(0,n.jsx)(t.h3,{id:"real-devices",children:"Real Devices"}),"\n",(0,n.jsx)(t.p,{children:"To enable fingerprint and facial recognition on iOS and Android real devices:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the ",(0,n.jsx)(t.code,{children:"allowTouchIdEnroll"})," capability to your test configuration and set it to ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["Setting ",(0,n.jsx)(t.code,{children:"allowTouchIdEnroll"})," does not update your app's biometric interception setting in Sauce Labs. It only sets the capability for the test in the event that the app setting in Sauce Labs is ",(0,n.jsx)(t.em,{children:"different"})," from the test script capability."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If biometric interception is ENABLED for the app in Sauce Labs, setting ",(0,n.jsx)(t.code,{children:"allowTouchIdEnroll=true"})," or omitting it will have no effect, but setting ",(0,n.jsx)(t.code,{children:"allowTouchIdEnroll=false"})," will disable the enrollment for the test, overriding the app setting."]}),"\n",(0,n.jsx)(t.li,{children:"The opposite is true if biometric interception is DISABLED for the app in Sauce Labs."}),"\n"]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="JavaScript iOS Capabilities Example"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.rdc.conf.ts#L33\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Use the following commands to trigger a successful or failed authentication in response to a biometric prompt:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"driver.execute('sauce:biometrics-authenticate=true');"})," passes a successful authentication to the prompt."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"driver.execute('sauce:biometrics-authenticate=false');"})," passes a failed authentication to the prompt."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Sauce Labs intercepts this command to trigger an authentication response prior to engaging Appium, which is why the result is not captured in the Appium logs. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\nThe following sample test script shows the selectors for Android and iOS, as well as the command to execute the authentication."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="JS-Demo Biometrics Test Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.rdc.spec.ts#L25-L41\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ios-simulators",children:"iOS Simulators"}),"\n",(0,n.jsx)(t.p,{children:"Testing biometric interception on Sauce Labs iOS Simulators or on your local machine involves writing your script to ensure biometrics is enabled for both the device and the app, and then simulating either a successful or failed authentication to ensure that the expected behavior results."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In your test script, check the device setting for biometrics, as shown in the ",(0,n.jsx)(t.code,{children:"prepareBiometrics"})," function in our demo script:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Biometrics Check Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Setting allowTouchIdEnroll capability is optional",type:"note",children:(0,n.jsxs)(t.p,{children:["You can set the desired capability ",(0,n.jsx)(t.code,{children:"allowTouchIdEnroll"})," to ",(0,n.jsx)(t.code,{children:"true"})," to enable enrollment by default for your app, but if you are checking the enrollment in your script anyway, this is not required."]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["If biometrics is disabled, call the ",(0,n.jsx)(t.code,{children:"driver.toggleEnrollTouchId(true)"})," method to enable it.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Toggle Biometrics Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L33-L41\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Now that biometrics is enabled for the device, make sure it is also enabled for the app.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Enable Biometrics in App"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Wait for the login screen to appear, then call the ",(0,n.jsx)(t.code,{children:"submitBiometrics(true)"})," method to simulate a successful biometric authentication.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Submit Bio Auth Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Run your test. Call:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Local environment: ",(0,n.jsx)(t.code,{children:"npm run test.local.ios.simulator"})]}),"\n",(0,n.jsxs)(t.li,{children:["Sauce Labs US Data Center: ",(0,n.jsx)(t.code,{children:"npm run test.sauce.ios.simulator.us"})]}),"\n",(0,n.jsxs)(t.li,{children:["Sauce Labs EU Data Center: ",(0,n.jsx)(t.code,{children:"npm run test.sauce.ios.simulator.eu"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"android-emulators",children:"Android Emulators"}),"\n",(0,n.jsx)(t.p,{children:"As with iOS, when testing on Android Emulators, you can first perform a check to see whether the device is enabled for biometric authentication. The test script in this samples is actually the same script for both iOS and Android -- the only difference is in setting the device enrollment."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In your test script, check the device setting for biometrics, as shown in the ",(0,n.jsx)(t.code,{children:"prepareBiometrics"})," function in our demo script:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Biometrics Check Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Android does not have a capability to control the device's biometric enablement. Instead, you must go through the device's enrollment process and call an ADB command to set the PIN values representing the successful and failed authentication. Our demo repo uses a separate script to do this, and then calls the script in the test.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title\'"AndroidSettings Biometric Enrollment Script Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/screen-objects/AndroidSettings.ts#L87-L105\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="Enable Device Biometrics in Test Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L42-L46\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Now that biometrics is enabled for the device, make sure it is also enabled for the app.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Enable Biometrics in App"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Wait for the login screen to appear, then call the ",(0,n.jsx)(t.code,{children:"submitBiometrics(true)"})," method to simulate a successful biometric authentication.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'reference title="WebdriverIO Submit Bio Auth Sample"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Run your test. Call:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Local environment: ",(0,n.jsx)(t.code,{children:"npm run test.local.ios.simulator"})]}),"\n",(0,n.jsxs)(t.li,{children:["Sauce Labs US Data Center: ",(0,n.jsx)(t.code,{children:"npm run test.sauce.ios.simulator.us"})]}),"\n",(0,n.jsxs)(t.li,{children:["Sauce Labs EU Data Center: ",(0,n.jsx)(t.code,{children:"npm run test.sauce.ios.simulator.eu"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Our ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-js/tree/docs-1.1/webdriverio/appium-app/examples/biometric-login",children:"Biometrics Demo"})," contains all the configuration, helper, and test script files demonstrating Biometric Login use cases for both Android and iOS real and virtual devices, including:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"React Native Sample App for Android and iOS"}),"\n",(0,n.jsx)(t.li,{children:"Test script to validate successful biometric login"}),"\n",(0,n.jsx)(t.li,{children:"Test script to validate failed biometric login"}),"\n",(0,n.jsx)(t.li,{children:"Test script to exit out of biometric auth modal"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md",children:"Appium Documentation for iOS Simulator Touch ID"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(18215);const s={tabItem:"tabItem_Ymn6"};var r=i(74848);function a(e){let{children:t,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>A});var n=i(96540),s=i(18215),r=i(23104),a=i(56347),l=i(205),o=i(57485),c=i(31682),d=i(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function p(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,o.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function x(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,r=u(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,h]=m({queryString:i,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(74848);function f(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,i=o.indexOf(t),s=l[i].value;s!==n&&(c(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;t=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;t=o[i]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:l.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function v(e){let{lazy:t,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function A(e){const t=(0,g.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);