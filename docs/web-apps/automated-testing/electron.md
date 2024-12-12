---
id: electron
title: Electron Support on Sauce Labs [Beta]
sidebar_label: Using Electron
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Electron](https://electronjs.org/) embeds Chromium and Node.js to enable web developers to create desktop applications. Sauce Labs is beta trialing support for automated testing with Electron-based apps on Windows 10 and 11, available to all users with VDC concurrency at US West or EU Central.

## Supported Testing Platforms

Sauce Labs currently supports the following test configurations for Electron.
- Platforms
  - Windows 10 
  - Windows 11
  - MacOS 11
  - MacOS 12
  - MacOS 13
  - (Linux support to be decided)
- Electron versions
  - versions 5 - 31 inclusive

## How to Get Started

### App management

Upload a zip file containing your Electron app via [REST API](/mobile-apps/app-storage/#upload-apps-via-rest-api). You can refer to uploaded apps by either the file ID or filename. Note that as with mobile apps, Electron apps are accessible only to members of the same team, and retained for 60 days.

### Binary location

The `binary_location` is the folderpath and filename of your Electron executable within your zip file structure.

For example, if your zip file is structured like this:
```
SauceLabsElectronAppv1.zip
-- [ Sauce Labs Test ]
  -- SauceLabsElectronApp.exe
  -- mobi.dll
  -- [ resources ]
      -- ffmpeg.dll  
  [ guide ]
  -- config.yaml
  -- readme.txt
```

then the `binary` value is `'Sauce Labs Test\SauceLabsElecronApp.exe'`.

### Configuring your tests

You need to specify Electron as the [`browserName`](https://docs.saucelabs.com/dev/test-configuration-options/#browsername) along with the Electron version needed as the [`browserVersion`](https://docs.saucelabs.com/dev/test-configuration-options/#browserversion). You will also need to include either the file ID or file name of your uploaded zip file containing your Electron app, with the path to the binary inside that zip.

Because Electron is based on the Chromium browser, you need to specify the options using the `ChromeOptions` class.

Example written in Python with an Electron app test running on Windows 11 with Electron 29 at US West:

```python
options = ChromeOptions()
options.set_capability('browserName', 'electron')
options.browser_version = '29'
options.platform_name = 'Windows 11'
options.binary_location='<app_folder_name>\\<app_file_name.exe>'
sauce_options = {}
sauce_options['username'] = ‘<username>’
sauce_options['accessKey'] = ‘<accesskey>’
sauce_options['app'] = 'storage:<file_id>'
options.set_capability('sauce:options', sauce_options)
url = 'https://ondemand.us-west-1.saucelabs.com:443/wd/hub'
driver = webdriver.Remote(command_executor=url, options=options)
```

## Viewing results

Test results are visible on the UI under “Automated Tests > Test Results.’ You can filter directly for Electron test results by selecting “Electron” from the “Browser” drop-down.

## Limitations

- Electron support is only enabled for automated testing on Windows 10 and 11, and MacOS 11, 12 and 13.
- Electron apps uploaded via REST API are not currently visible within the App Management of the UI. 
- Live testing and UI enhancements to come in a future release.
