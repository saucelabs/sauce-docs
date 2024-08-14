---
id: limitations 
title: Limitations for TestCafe
sidebar_label: Limitations
---


### Special Characters in Test Names

We recommend that you avoid using special characters when naming your tests. If your test name contains any special characters, your test may not run, or its artifacts may not be visible on our platform.

### TestCafe 3.0.1 + Chrome/Edge + Sauce Connect

When using Sauce-Connect, Chrome, and Edge browsers cannot load any website through the tunnel. It will behave as if there is no tunnel defined.

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
