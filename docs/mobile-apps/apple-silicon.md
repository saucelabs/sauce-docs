# iOS 17.5 and iOS 18 Now Available on Apple Silicon

Sauce Labs now supports **iOS 17.5 and iOS 18** on Apple Silicon-based simulators. These environments offer improved performance, modern architecture alignment, and compatibility with Xcode's latest features. This release enables you to test apps in the most current Apple environments across iPhone and iPad simulators.

## Key Benefits

- High-fidelity iOS testing environments on M-series macOS VMs  
- Full support for **Appium 2.1.3+**, **XCUITest**, and **Safari 17**  
- Compatibility with **macOS 14** for Safari testing on Apple Silicon  

---

## Getting Started with Apple Silicon on Sauce Labs

### Building Your iOS/iPadOS App

By default, Xcode builds apps for simulators that support both `arm64` and `x86_64` architectures.

To build specifically for **Apple Silicon (arm64)** simulators:

```bash
xcodebuild -arch arm64 -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 15,OS=17.5' -configuration Debug
```

#### Locate the .app File

- **Xcode UI:**  
  `$HOME/Library/Developer/Xcode/DerivedData/<project-name>/Build/Products/Debug-iphonesimulator`

- **Terminal:**  
  `$PROJECT_PATH/<project-name>/build/Debug-iphonesimulator`

#### Archive the Build

1. Create a folder named `Payload`
2. Copy your `.app` file into the `Payload` directory
3. Compress the folder into a `.zip`
4. Rename the file to match your app, e.g. `MyApp.zip`

---

### Uploading the App to Sauce Labs

You can upload the `.zip` archive:

- Via the **App Management** section in the Sauce Labs web UI  
- Or via the **Sauce Labs File Storage API**

➡️ [Uploading Apps to Sauce Labs](https://docs.saucelabs.com/mobile-apps/app-storage/)

---

## Appium Capabilities for iOS

To test your app on Apple Silicon simulators, use the following capabilities:

### Required Capabilities

| OS Version | Appium Version | Device Name          | `armRequired` |
|------------|----------------|-----------------------|---------------|
| iOS 17.5   | 2.1.3          | iPhone 15 Simulator    | true          |
| iOS 18.0   | 2.11.3         | iPhone 15/16 Simulator | true          |

```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPhone 15 Simulator",
  "appium:platformVersion": "17.5",
  "appium:automationName": "XCUITest",
  "sauce:options": {
    "appiumVersion": "2.1.3",
    "armRequired": true
  }
}
```

### Java Example for iOS

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("platformName", "iOS");
caps.setCapability("appium:app", "storage:filename=<your app>.zip");
caps.setCapability("appium:deviceName", "iPhone 15 Simulator");
caps.setCapability("appium:deviceOrientation", "portrait");
caps.setCapability("appium:platformVersion", "17.5");
caps.setCapability("appium:automationName", "XCUITest");

MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "2.1.3");
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.setCapability("name", "<your test name>");
sauceOptions.setCapability("armRequired", true);

caps.setCapability("sauce:options", sauceOptions);
```

---

## Appium Capabilities for iPadOS

For iPad simulators with iOS 18.0:

```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPad Simulator",
  "appium:platformVersion": "18.0",
  "appium:automationName": "XCUITest",
  "sauce:options": {
    "appiumVersion": "2.11.3",
    "armRequired": true
  }
}
```

### Java Example for iPadOS

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("platformName", "iOS");
caps.setCapability("appium:app", "storage:filename=<your app>.zip");
caps.setCapability("appium:deviceName", "iPad Simulator");
caps.setCapability("appium:deviceOrientation", "portrait");
caps.setCapability("appium:platformVersion", "18.0");
caps.setCapability("appium:automationName", "XCUITest");

MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "2.11.3");
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.setCapability("name", "<your test name>");
sauceOptions.setCapability("armRequired", true);

caps.setCapability("sauce:options", sauceOptions);
```

---

## Selenium Capabilities for macOS Desktop (Safari on Apple Silicon)

To run Safari browser tests on Apple Silicon VMs:

```json
{
  "platformName": "macOS 14",
  "browserName": "Safari",
  "browserVersion": "17",
  "sauce:options": {
    "armRequired": true,
    "name": "<your test name>",
    "username": "<env.SAUCE_USERNAME>",
    "accessKey": "<env.SAUCE_ACCESS_KEY>"
  }
}
```

### Java Example for Safari

```java
SafariOptions caps = new SafariOptions();
caps.setCapability("platformName", "macOS 14");
caps.setCapability("browserVersion", "17");
caps.setCapability("browserName", "Safari");

Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("armRequired", true);
sauceOptions.put("name", "<your test name>");
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));

caps.setCapability("sauce:options", sauceOptions);
```

---

## SauceCTL YAML Config for XCUITest

```yaml
apiVersion: v1alpha
kind: xcuitest

sauce:
  region: us-west-1
  concurrency: 20

xcuitest:
  app: storage:filename=YourApp.ipa
  testApp: storage:filename=YourAppUITests-Runner.ipa

suites:
  - name: "iOS Regression"
    simulators:
      - name: "iPhone 15 Simulator"
        armRequired: true
        platformVersions:
          - "17.5"
      - name: "iPhone 16 Simulator"
        armRequired: true
        platformVersions:
          - "18.0"

reporters:
  spotlight:
    enabled: true
  junit:
    enabled: true

artifacts:
  download:
    when: always
    match:
      - "junit.xml"
    directory: ./artifacts/
```

---

## Known Issues and Migration Notes

As you upgrade to iOS 17.5 and 18, be aware of the following:

- **UIAutomation is no longer supported** — use XCUITest  
- **Touch ID / Face ID simulation** may not be consistent across versions  
- **WebDriverAgent** changes in iOS 18 can impact test sync/stability  
- **Device orientation bugs** have been reported in iOS 17.5 simulators  
- Ensure your project uses **Appium 2.1.3+**

➡️ [Troubleshooting Appium](https://docs.saucelabs.com/dev/appium/troubleshooting/)

---

## Learn More

- [Apple Silicon Overview](https://docs.saucelabs.com/mobile-apps/apple-silicon/)
- [App Upload Instructions](https://docs.saucelabs.com/mobile-apps/app-storage/)
- [Appium Version Compatibility](https://docs.saucelabs.com/dev/appium/appium-version/)
- [iOS Platform Support Matrix](https://docs.saucelabs.com/mobile-apps/platforms/ios/)
- [SauceCTL for XCUITest](https://docs.saucelabs.com/ci/saucectl/xcuitest/)

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
