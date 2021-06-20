---
id: supported-devices
title: Supported Browsers and Devices
sidebar_label: Supported Devices
---

Screener provides the ability to test responsive designs across various devices and resolutions.

## Adding Devices and Resolutions

To test against multiple resolutions or devices, add the resolutions option to your `screener.config.js` file, with an array of resolution items.

Each resolution item in the array is either:

* A string in the format: `<width>x<height>` (e.g., `'1024x768'`).
* An object with `deviceName` and optional `deviceOrientation` properties (e.g., `{ deviceName: 'iPhone 6' }`).

`deviceName` value can be one of:

iPad
iPad Pro
iPhone 4
iPhone 5
iPhone 6
iPhone 6 Plus
iPhone 7
iPhone 7 Plus
iPhone 8
iPhone 8 Plus
iPhone X
Galaxy S6
Galaxy S7
Galaxy S8
Nexus 4
Nexus 5
Nexus 5X
Nexus 6P
Nexus 7
Nexus 10

Example config with resolutions:

```java
module.exports = {
  ...

  resolutions: [
    '1024x768',
    {
      deviceName: 'iPhone 6'
    },
    {
      deviceName: 'iPhone 6 Plus',
      deviceOrientation: 'landscape'
    }
  ]
};
```
