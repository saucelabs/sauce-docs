---
id: limitations
title: Limitations for TestCafe
sidebar_label: Limitations
---


### Firefox on macOS 15 (Sequoia)

Firefox is not supported on macOS 15 (Sequoia) due to a [known macOS firewall bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1919173) that blocks Firefox network connections. Use macOS 14 for Firefox testing on ARM.

### Special Characters in Test Names

Test names are validated before execution. The following rules apply:

**Allowed characters (no change):**
- Letters: `A-Z`, `a-z`
- Digits: `0-9`
- Dash: `-`
- Underscore: `_`

**Replaced characters (automatically converted to `-`):**

`` + , @ / % ' \ = ? < > ` # & $ " | ``

These characters are silently replaced with a dash (`-`) to prevent errors in report generation.

**Disallowed characters (test will fail to start):**
- Non-ASCII characters such as `®`, `™`, `–`, `é`
- Emoji characters
- Spaces, dots, colons, parentheses, and other characters not listed above

If your test name contains disallowed characters, the test will be rejected with an error response before execution begins.

### Chrome 130+

TestCafe 3.6.2 and lower [do not work](https://github.com/DevExpress/testcafe/issues/8286)
with Chrome 130+. [Disable native automation](#disable-native-automation) as a
workaround.

### Chrome/Edge + Sauce Connect

When using Sauce-Connect, the browsers Chrome and Edge will not make use of the
tunnel when browsing a website. They will behave as if there is no tunnel
defined.

### TestCafe Native Automation + Chrome + Sauce Connect

If your tests are issuing [TestCafe HTTP requests](https://testcafe.io/documentation/403971/guides/intermediate-guides/api-testing#proxy-settings)
and require a Sauce Connect tunnel, you will need to either [set the proxy manually](https://testcafe.io/documentation/403971/guides/intermediate-guides/api-testing#proxy-settings) or disable TestCafe's Native Automation.

#### Disable Native Automation

This is the recommended approach, which poses less of a hassle.
Disable Native Automation in your `.testcaferc.js`:
```javascript
module.exports = {
  disableNativeAutomation: true,
};
```

and then ensure that our runner picks up the TestCafe config file by also
specifying it in the saucectl yaml config:
```yaml
testcafe:
  version: 3.4.0
  configFile: .testcaferc.js
```

#### Manually Setting the Request Proxy:

Alternatively, you can apply the proxy settings as you make requests:
```javascript
// HTTP_PROXY is pre-populated when using Sauce Connect
const items = process.env.HTTP_PROXY.split(':');
const host = items[1].replaceAll('/', '');
const port = items[2];
const response = await t.request({
  url: `http://some-internal-resource.example.com/`,
  method: 'get',
  proxy: {
    protocol: 'http',
    host,
    port,
  }
});
```
