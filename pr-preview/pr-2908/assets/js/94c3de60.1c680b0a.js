"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71341],{94199:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var t=n(74848),s=n(28453),o=n(86025);const a={id:"audio-capture",title:"Audio Capture"},r=void 0,d={id:"mobile-apps/features/audio-capture",title:"Audio Capture",description:"Real Devices Only",source:"@site/docs/mobile-apps/features/audio-capture.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/audio-capture",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/audio-capture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/audio-capture.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724775805e3,frontMatter:{id:"audio-capture",title:"Audio Capture"},sidebar:"docs",previous:{title:"Camera Image Injection",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/camera-image-injection"},next:{title:"Bypass Screenshot Restriction",permalink:"/sauce-docs/pr-preview/pr-2908/mobile-apps/features/bypass-screenshot"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Audio Capture for Automated Tests on Real Devices",id:"using-audio-capture-for-automated-tests-on-real-devices",level:2},{value:"Using Audio Streaming during a Live Testing session on Real Devices",id:"using-audio-streaming-during-a-live-testing-session-on-real-devices",level:3},{value:"Streaming Limitations",id:"streaming-limitations",level:2},{value:"Using Audio Capture and Streaming on your Android Device",id:"using-audio-capture-and-streaming-on-your-android-device",level:2},{value:"Enabling TalkBack/VoiceOver on your Devices",id:"enabling-talkbackvoiceover-on-your-devices",level:2},{value:"Using Audio Capture on iOS/iPadOS",id:"using-audio-capture-on-iosipados",level:2},{value:"Accessing the Audio in Your Test Tesults for Automated Test",id:"accessing-the-audio-in-your-test-tesults-for-automated-test",level:2},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,t.jsx)(i.p,{children:"Audio Capture is a functionality that gives you the ability to record the audio stream generated by your native mobile app (Android or iOS/iPadOS) during a live or automated real device test."}),"\n",(0,t.jsx)(i.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A Sauce Labs account (",(0,t.jsx)(i.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,t.jsx)(i.li,{children:"A native Android, iOS, or iPadOS mobile app."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"using-audio-capture-for-automated-tests-on-real-devices",children:"Using Audio Capture for Automated Tests on Real Devices"}),"\n",(0,t.jsx)(i.p,{children:"To enable Audio Capture in your automated tests, you need to use the following capabilities:"}),"\n",(0,t.jsx)(i.p,{children:"Click the link below that corresponds to your framework:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso/#audiocapture",children:"Espresso"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#audiocapture",children:"XCUITest"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/dev/test-configuration-options/#audiocapture",children:"Appium"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Now you can start your automated testing session. Your audio recording will be captured and be part of the video recording on the Test Results page."}),"\n",(0,t.jsx)(i.h3,{id:"using-audio-streaming-during-a-live-testing-session-on-real-devices",children:"Using Audio Streaming during a Live Testing session on Real Devices"}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,t.jsx)(i.p,{children:"You just need to launch a Live Testing session on a real device, and the audio will be streamed automatically without any configuration."}),"\n",(0,t.jsx)(i.p,{children:"The Audio Streaming feature ensures a better digital experience by validating audio playback and testing user flows that require audio testing in the early stages of the development lifecycle."}),"\n",(0,t.jsx)(i.p,{children:"With the Audio Streaming feature, you are able to hear the sound your application is making during a Live Testing session. It allows you to validate audio streams, notification sounds, and animations."}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:"You will be able to mute and unmute the sound during your session by clicking on the mute/unmute button on the toolbar:"}),(0,t.jsx)("img",{src:(0,o.A)("img/audio.png"),alt:"Mobile app settings navigation",width:"300"})]}),"\n",(0,t.jsx)(i.h2,{id:"streaming-limitations",children:"Streaming Limitations"}),"\n",(0,t.jsx)(i.admonition,{title:"Limitations",type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"TalkBack Audio is ONLY supported on Private devices, reach out to our Support Team or your Sauce Labs representative to get this configured."}),"\n",(0,t.jsx)(i.li,{children:"Audio Streaming is supported on iOS/iPadOS 13.2 and above."}),"\n",(0,t.jsx)(i.li,{children:"Audio Streaming is supported on Android 10 and above."}),"\n",(0,t.jsx)(i.li,{children:"When Audio Streaming is enabled, we are not attaching the audio to the test results after the session ends."}),"\n",(0,t.jsx)(i.li,{children:"Website testing is not yet available on Android."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"using-audio-capture-and-streaming-on-your-android-device",children:"Using Audio Capture and Streaming on your Android Device"}),"\n",(0,t.jsx)(i.p,{children:"You will have the capability to capture audio on Android 10 and later versions. On private devices, you can test TalkBack on Android 12 and later versions."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Once ",(0,t.jsx)(i.code,{children:"audioCapture"})," is enabled, the status bar will display the recording icon."]})}),"\n",(0,t.jsx)(i.p,{children:"We use native Android audio capture for seamless audio capture for our real devices experience. Your test results and sessions are secured, and can only be viewed by you."}),"\n",(0,t.jsxs)(i.admonition,{type:"caution",children:[(0,t.jsxs)(i.p,{children:["If your apps's manifest.xml file defines ",(0,t.jsx)(i.code,{children:'android:allowAudioPlaybackCapture="false"'}),", you need to enable instrumentation to have Audio Capture work for your apps."]}),(0,t.jsx)("img",{src:(0,o.A)("img/mobile-apps/audio_capture_screen3.png"),alt:"Mobile app settings navigation",width:"800"})]}),"\n",(0,t.jsx)(i.h2,{id:"enabling-talkbackvoiceover-on-your-devices",children:"Enabling TalkBack/VoiceOver on your Devices"}),"\n",(0,t.jsx)(i.p,{children:"To utilize TalkBack/VoiceOver on your Android/iOS devices, make sure you have access to supported devices, We support Android 10 and above, and iOS 13 and above.\nWe are automatically enabling these Accessibility tools for you with a single click without going to the OS setting!"}),"\n",(0,t.jsx)(i.p,{children:"Follow these steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Open a Live Testing Session"}),": Start any Live Testing session, whether it's a Cross Browser or Native Application test."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Open the ",(0,t.jsx)(i.strong,{children:"Device Settings"})," from the left side toolbar."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select and toggle ",(0,t.jsx)(i.strong,{children:"Talkback"})," or ",(0,t.jsx)(i.strong,{children:"VoiceOver"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Skip with OK or Cancel the native Talkback/VoiceOver guide."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"On Android you can use the Arrow keys (Up-Down-Left-Right) to navigate through the elements, and by hitting the ENTER key, you are able to activate a specific element."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For further information, you can refer to the official documentation on ",(0,t.jsx)(i.a,{href:"https://support.google.com/accessibility/android/answer/6006598?sjid=17999569893329555730-EU",children:"TalkBack"}),", ",(0,t.jsx)(i.a,{href:"https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios",children:"VoiceOver"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,o.A)("/img/mobile-apps/talkBack-live.png"),alt:"Sauce Labs TalkBack",width:"751"}),"\n",(0,t.jsx)("img",{src:(0,o.A)("/img/mobile-apps/voiceOver-live.png"),alt:"Sauce Labs Voiceover",width:"751"}),"\n",(0,t.jsx)(i.h2,{id:"using-audio-capture-on-iosipados",children:"Using Audio Capture on iOS/iPadOS"}),"\n",(0,t.jsx)(i.p,{children:"You will be able to capture audio from iOS 10 and above. Additionally, you can validate the sounds produced by your application, enable VoiceOver, and verify its output."}),"\n",(0,t.jsx)(i.h2,{id:"accessing-the-audio-in-your-test-tesults-for-automated-test",children:"Accessing the Audio in Your Test Tesults for Automated Test"}),"\n",(0,t.jsxs)(i.p,{children:["The audio recording will be included in the video recording for automated tests, which you can play back and download from the built-in media player on the ",(0,t.jsx)(i.strong,{children:"Test Results"})," page."]}),"\n",(0,t.jsx)(i.p,{children:"You can also download the video file with the included audio stream programmatically using the following API request:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"curl --compressed \\ -O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/video.mp4\n"})}),"\n",(0,t.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsx)(i.admonition,{title:"Limitations",type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iOS Audio capture for automated test results is supported on iOS/iPadOS 10.1 and above."}),"\n",(0,t.jsx)(i.li,{children:"Android Audio capture for test results is supported on Android 10 and above."}),"\n",(0,t.jsx)(i.li,{children:"When Audio streaming is enabled, we are not attaching the audio to the test results after the session ends."}),"\n",(0,t.jsx)(i.li,{children:"Accessibility and TalkBack on Android are not supported."}),"\n",(0,t.jsx)(i.li,{children:"Emulators and simulators are not supported."}),"\n",(0,t.jsx)(i.li,{children:"Website testing is not yet available on Android."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/test-results/",children:"Test Results"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(96540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);