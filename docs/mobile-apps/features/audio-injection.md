---
id: audio-injection
title: Audio Injection (Speech-to-Text)
sidebar_label: Audio Injection (STT)
description: Test your app's speech recognition by injecting a pre-recorded audio file in place of the device microphone.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

Does your mobile app use speech-to-text (STT), such as voice search, voice commands, or dictation, that you want to test without speaking into a microphone every time?

Audio Injection is a Sauce Labs Real Device Cloud (RDC) feature that simulates speaking into your app. Instead of using the device microphone, your app receives a pre-recorded audio file that you upload. When the app starts listening for speech, it gets your audio as if someone had spoken it into the device, so you can run the same voice input on every test, in both live and automated sessions.

Sauce Labs plays the audio you upload. The transcription itself comes from the device's own speech service, so the recognized text is whatever that audio would normally produce.

:::caution Beta
Audio Injection (Speech-to-Text) is currently in **beta** and may have limited availability. Reach out to your Sauce Labs representative or [Support](https://support.saucelabs.com/) to have it enabled for your account.
:::

:::caution
Make sure you have a debuggable AND non-obfuscated version of your application uploaded to Mobile App Storage.
:::

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- [Upload your app to Sauce Labs](/mobile-apps/app-storage) prior to testing. Audio Injection points to Sauce Labs storage to get your app information.
- A pre-recorded audio file with the speech you want to inject (see [Key Specs](#key-specs) for supported formats).

## Key Specs

Audio Injection is available for testing on Sauce Labs Android and iOS real devices. The audio file requirements differ by platform.

|                           |  Supported  | Not Supported |
| :------------------------ | :---------: | :-----------: |
| **Device Type**           |             |               |
| Android real devices      | &checkmark; |               |
| iOS real devices          | &checkmark; |               |
| Android Emulators         |             |   &#x2715;    |
| iOS Simulators            |             |   &#x2715;    |
|                           |             |               |
| **App Type**              |             |               |
| Flutter (iOS/Android)     |             |   &#x2715;    |
| React Native (iOS/Android)|             |   &#x2715;    |
| Cordova (iOS/Android)     |             |   &#x2715;    |
|                           |             |               |
| **Framework Type**        |             |               |
| Appium                    | &checkmark; |               |
| Espresso (Android)        |             |   &#x2715;    |
| XCUITest (iOS)            |             |   &#x2715;    |

Audio file requirements:

|               | iOS                    | Android                        |
| :------------ | :--------------------- | :----------------------------- |
| Audio format  | MP3, WAV, M4A, or AAC  | MP3 only                       |
| Maximum size  | 15 MB                  | 15 MB                          |
| OS version    | iOS 13 and above       | Android 13 (API 33) and above  |

:::note Not Supported

- Mobile browsers and pre-installed system apps.
- Cross-platform development frameworks like Flutter, React Native, and Cordova (libraries and frameworks are not supported).
- Android versions below 13 (API 33).
- Device voice assistants such as Google Assistant or Siri. Audio Injection works with your app's own speech-to-text, not the device assistant.

:::

## Example Use Cases

Below are common use cases ideal for implementing Audio Injection in your tests.

- **Voice search and voice commands**: Check that spoken queries and commands are transcribed and handled correctly, with the same clip on every run.
- **Dictation and note-taking**: Confirm that dictated text lands in the right fields and displays correctly.
- **In-app voice assistants and chatbots**: Start a conversational flow with a spoken prompt, without a person talking during the test.
- **Accessibility and localization**: Test speech recognition with clips in different languages or accents.

## Live Testing

During a live test, you'll enable Audio Injection for your app and then upload the audio file that will be fed to your app in place of the device microphone.

1. In Sauce Labs, click **App Management**, hover over the test, and then click **Settings**.

<img src={useBaseUrl('img/mobile-apps/audio-injection-1.png')} alt="App Management settings navigation" width="650"/>

2. On the **Settings** page, ensure that **Instrumentation** and **Audio Injection** are enabled, and then return to the **App Management** page.

<img src={useBaseUrl('img/mobile-apps/audio-injection-2.png')} alt="Instrumentation and Audio Injection enabled in app settings" width="650"/>

3. On the **App Management** test page, hover over the test and then click **Start Test**.

<img src={useBaseUrl('img/mobile-apps/audio-injection-3.png')} alt="Start Test on the App Management page" width="650"/>

4. On the device selection page, hover over a device and then click **Start Test**.

<img src={useBaseUrl('img/mobile-apps/audio-injection-4.png')} alt="Select a device and start the test" width="650"/>

5. In the live test window, in the right toolbar, click **Tools** and then click **Audio Upload**.

<img src={useBaseUrl('img/mobile-apps/audio-injection-5.png')} alt="Audio Upload in the Tools menu" width="650"/>

6. Click **Choose Audio** and select your audio file (up to 15 MB; MP3 on Android, or MP3, WAV, M4A, or AAC on iOS).

<img src={useBaseUrl('img/mobile-apps/audio-injection-6.png')} alt="Choose Audio to upload the file" width="450"/>

Once the upload succeeds, trigger speech recognition inside your app. The app receives your uploaded audio as if it had been spoken into the device microphone. You can upload another file to inject different audio later in the same session.

## Automated Testing

During an automated test, you'll enable Audio Injection for your app and then pass an audio file to the audio injection command. When your app starts listening for speech, it receives your uploaded audio instead of input from the device microphone.

1. Enable Audio Injection for the app under test, either in **App Management** (see [Live Testing](#live-testing)) or by adding the `audioInjection` capability to your test configuration and setting it to `true`. The `audioInjection` capability requires instrumentation to be enabled for the session.

   ```js
   exports.config = {
   //...
   capabilities: [
   {
   deviceName: 'Google Pixel 8',
   platformName: 'Android',
   platformVersion: '14',
   automationName: 'UiAutomator2',
   // Enable audio injection on RDC
   audioInjection: true
   }
   ]
   //...
   }
   ```

2. In your test script, provide your audio file to the audio injection command by passing it as a base64-encoded string. You can call this command in one or more places in your test, and each call injects the audio for the next speech-recognition request.

   :::note
   The audio file path must be converted to base64 encoding ([RFC 4648](https://www.rfc-editor.org/rfc/rfc4648)). If the payload is not valid base64, the command fails.
   :::

   <Tabs
   defaultValue="Webdriver.io example"
   values={[
   {label: 'Webdriver.io example', value: 'Webdriver.io example'},
   {label: 'Java example', value: 'Java example'},
   ]}>

   <TabItem value="Webdriver.io example">

   ```js
   const { readFileSync } = require('fs')
   const { join } = require('path')

   // Read the audio file from your project and transform it to a base64 string
   const audio = readFileSync(
     join(process.cwd(), 'assets/speech.mp3'),
     'base64'
   )

   // Provide the transformed audio to the device
   driver.execute(`sauce:inject-audio=${audio}`)
   ```

   </TabItem>
   <TabItem value="Java example">

   ```java
   import java.util.Base64;
   import static org.apache.commons.io.IOUtils.toByteArray;

   // Read the audio file and transform it to a base64 string
   FileInputStream in = new FileInputStream("assets/speech.mp3");
   String audio = Base64.getEncoder().encodeToString(toByteArray(in));

   // Provide the transformed audio to the device
   ((JavascriptExecutor) driver).executeScript("sauce:inject-audio=" + audio);
   ```

   </TabItem>
   </Tabs>

3. Drive your app to start speech recognition and assert on the transcribed result. To inject different audio later in the same test, call `sauce:inject-audio` again with a new file. On Android, if injection is enabled but no valid audio has been provided, speech recognition falls back to the device microphone.

## Common Errors

Here are some common errors you may see while testing with Audio Injection and how to resolve them. For a full reference, see [Audio Injection Failed](/dev/error-messages/#audio-injection-failed).

When you call `sauce:inject-audio`, Sauce Labs checks the request and rejects it right away if something is wrong, so the errors below surface as a failed command in your test. That is separate from what happens when your app actually starts listening, described in [When no audio is available](#when-no-audio-is-available).

#### Error: `Audio data cannot be parsed because it is empty.`

The payload passed to `sauce:inject-audio` was empty. Pass a base64-encoded audio file (see the [Automated Testing](#automated-testing) examples).

#### Error: `The audio cannot be injected because it is not base64 encoded according to chapter 4 of RFC 4648.`

The payload passed to `sauce:inject-audio` is not valid base64. Encode the audio file to a base64 string before injecting it (see the [Automated Testing](#automated-testing) examples).

#### Error: `The audio cannot be injected because it is too large.`

The audio file is over the 15 MB maximum. Reduce the file size (for example, lower the bitrate or trim the clip) before injecting it.

#### Error: `Cannot inject audio: Unsupported audio format.`

The file is not a supported format. Use MP3, WAV, M4A, or AAC on iOS, or MP3 on Android (see [Key Specs](#key-specs)).

#### Error: `Cannot inject audio: Audio injection is not enabled.`

Audio Injection is not enabled for the app. Enable it in **App Management** (see [Live Testing](#live-testing)), or set the `audioInjection` capability to `true`, before running the test.

#### Error: `Audio was not injected because no app is installed.`

No app is installed on the device, or the app has not fully loaded. Wait until your app has fully launched before injecting audio.

### When No Audio Is Available

Injecting audio and using it are two separate steps. The errors above happen at injection time, when you send a file that Sauce Labs rejects. Using the audio happens later, when your app starts listening for speech.

On Android, if Audio Injection is enabled but no valid audio file is available when your app starts listening (for example, you never injected one), speech recognition uses the device microphone instead of returning an error. A missing file on Android shows up as normal microphone recognition, not as a failed command.

## Additional Resources

- [Camera Image Injection](/mobile-apps/features/camera-image-injection): the equivalent feature for injecting images through the device camera.
- [Audio Capture](/mobile-apps/features/audio-capture): recording the audio your app produces during a test.
- [Audio Injection Failed](/dev/error-messages/#audio-injection-failed): error reference for audio injection.
