---
id: selenium-webdriver
title: Visual E2E Testing with Selenium WebDriver
sidebar_label: Selenium WebDriver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Selenium WebDriver

This doc explains how to integrate Screener into your existing Selenium WebDriver functional tests, using the language/library of your choice. Any programming language that Selenium WebDriver supports can be used with Screener without needing you to install any additional libraries or SDKs.

It takes only a few minutes to integrate Screener into your existing Selenium WebDriver scripts:

1. Update WebDriver URL.
2. Update DesiredCapabilities object.
3. Add Screener Snapshots in your code wherever you want a visual test.

## 1. Getting Started

Before you start, you will need to retrieve the Screener API Key and Test Group ID for the tests you want to run.

#### API Key

You need your project's **API key**, which is available from the Project Dashboard:
<img src={useBaseUrl('img/visual/e2e-api-key.png')} alt="API Key"/>

#### Test Group ID

Create a Test Group configured to run on a WebDriver client, or select a Test Group that has been configured to run tests "On Client". Only Test Groups that have been configured to run tests "On Client" can be used with your own Selenium WebDriver client.
<img src={useBaseUrl('img/visual/e2e-add-test-group-on-client.png')} alt="Test Group on client"/>

You will need your Test Group ID, which is available from the Test Group's Project Dashboard:
<img src={useBaseUrl('img/visual/e2e-group-id.png')} alt="Group ID"/>

## 2. Screener Configuration

To use Screener, you will need to update your WebDriver URL and DesiredCapabilities object.


#### Remote WebDriver URL

https://hub.screener.io/wd/hub


#### Example Code (using Protractor):

```js
exports.config = {
  seleniumAddress: 'https://hub.screener.io/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    screener: {
      name: 'My Test',
      resolution: '1280x1024',
      apiKey: '<your-api-key>',
      group: '<your-group-id>'
    }
  }
};
```

#### Configuration Details

All configurations listed below would go into the `desiredCapabilities.screener` hash.

**Required**

### `apiKey`
__Description__: The API Key associated with your Screener Account. You can get this from the Screener Dashboard.

### `name`
__Description__: The name of your test. Used as both a display label and to uniquely identify your test. It is recommended to include browser/platform information so it can be easily differentiated from other tests.

### `group`
__Description__: The Test Group id this test belongs to. You can get this by selecting the desired group in the Screener Dashboard.

### `resolution`
__Description__: A width-by-height representation of your desired resolution.


**Optional**

### `environment`
__Description__: An optional string representing the environment or locale associated with this test.

### `reference`
__Description__: An object with a combination of id/name/environment key/values. Used to reference another test to diff against. Useful for Cross-Browser testing (comparing a browser to another reference browser), and Localization testing (comparing a locale to another reference locale).


#### Advanced Configuration (Optional)

### `ignore`
__Description__: A comma-delimited list of css selectors to ignore when performing visual diffs.

### `options`
__Description__: An object for enabling/disabling different types of UI validation. All validation types are enabled by default. The validation options are listed below:

<table>
  <tr>
   <td><code>structure</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable structural validation. Enabled by default.
   </td>
  </tr>
  <tr>
   <td><code>layout</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable layout validation. Enabled by default.
   </td>
  </tr>
  <tr>
   <td><code>style</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable style validation. Enabled by default.
   </td>
  </tr>
  <tr>
   <td><code>content</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable content validation (including text & images). Enabled by default.
   </td>
  </tr>
  <tr>
   <td><code>text</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable text validation. Do not use with "content" option. Enabled by default.
   </td>
  </tr>
  <tr>
   <td><code>graphic</code>
   </td>
   <td>(Optional) Boolean true/false value, to enable or disable validation of images and charts. Do not use with "content" option. Enabled by default.
   </td>
  </tr>
</table>

__Example__: Example to disable content validation for a locale-to-locale test:

```js
...
screener: {
  options: {
    structure: true,
    layout: true,
    style: true,
    content: false
  }
}
...
```

## 3. Screener Snapshots

To take a Screener Snapshot, we wanted a very simple, safe, and unobtrusive way to integrate it into your existing code without needing to install anything.

A Screener Snapshot is simply a JavaScript comment:

```js
/*@screener.snapshot*/
```

This allows us to extend the capabilities of Selenium without breaking anything, or requiring the user to install anything. The result is that if you wanted to run against the Screener Hub, then it would take snapshots. If you wanted to run against your own Selenium Grid, then it would do nothing.

This JS comment can be added into your code wherever you want a snapshot to be taken.


#### Example Code (using Protractor):

```js
browser.driver.executeScript('/*@screener.snapshot*/', 'State Name');
```

#### Snapshot Parameters

### `State Name`
__Description__: (Required) The name of the state associated with the snapshot.

### `Options`
__Description__: (Optional) An object with a combination of `id`/`cropTo`/`ignore` key/values.

* The `"id"` option is a string which unique identifies this snapshot. Useful if you plan on changing the State Name, and want to retain associations to older tests.
* The `"cropTo"` option is a css selector to crop the snapshot to.
* The `"ignore"` option is a comma-delimited list of css selectors to ignore for this snapshot when performing visual diffs.


## 4. Run Tests

Run your functional tests as you normally would, locally or through your CI process.

To view the progress of your test run in Screener, select the associated Test Group in the Dashboard, and click the History tab:
<img src={useBaseUrl('img/visual/e2e-history.png')} alt="History"/>

Details and current status of your test runs will be displayed.

## 5. Code Examples

<Tabs
  defaultValue="Node.js"
  values={[
    {label: 'Node.js', value: 'Node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'Java', value: 'Java'},
    {label: 'C#', value: 'C#'},
    {label: 'Python', value: 'Python'},
    {label: 'PHP', value: 'PHP'},
  ]}>

<TabItem value="Node.js">

#### **Protractor/conf.js**

```js
exports.config = {
  seleniumAddress: 'https://hub.screener.io/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    screener: {
      name: 'My Test',
      resolution: '1280x1024',
      apiKey: '<your-api-key>',
      group: '<your-group-id>'
    }
  }
};
```

#### **Protractor/spec.js**

```js
describe('Protractor Example', function() {
  it('should take snapshot of homepage', function() {
    browser.driver.get('https://screener.io');
    browser.driver.executeScript('/*@screener.snapshot*/', 'Home');
  });
});
```

#### **nightwatch.json**

```js
{
  "src_folders": ["tests"],
  "test_settings": {
    "default": {
      "selenium_port": 80,
      "selenium_host": "hub.screener.io",
      "desiredCapabilities": {
        "browserName": "chrome",
        "screener": {
          "name": "My Test",
          "resolution": "1280x1024",
          "apiKey": "<your-api-key>",
          "group": "<your-group-id>"
        }
      }
    }
  }
}
```

#### **tests/basic.js**

```js
module.exports = {
  'Nightwatch Example' : function (browser) {
    browser
      .url('https://screener.io')
      .execute('/*@screener.snapshot*/', ['Home'])
      .end();
  }
};
```

</TabItem>
<TabItem value="Ruby">

```rb
require 'rubygems'
require 'selenium-webdriver'
screener = {
  :name => 'My Test',
  :resolution => '1280x1024',
  :apiKey => '<your-api-key>',
  :group => '<your-group-id>'
}
caps = {
  :browserName => 'chrome',
  :screener => screener
}
driver = Selenium::WebDriver.for(
  :remote,
  :url => 'https://hub.screener.io/wd/hub',
  :desired_capabilities => caps)
driver.get 'https://screener.io'
driver.execute_script('/*@screener.snapshot("Home")*/')
driver.quit
```

#### **Capybara/RSpec**

```rb
require 'capybara/rspec'
require 'selenium/webdriver'

caps = Selenium::WebDriver::Remote::Capabilities.new
caps.browser_name = 'chrome'
caps['screener.name'] = 'My Test'
caps['screener.resolution'] = '1280x1024'
caps['screener.apiKey'] = '<your-api-key>'
caps['screener.group'] = '<your-group-id>'

Capybara.register_driver :remote do |app|
  Capybara::Selenium::Driver.new(app, :browser => :remote, :url => 'https://hub.screener.io/wd/hub', :desired_capabilities => caps)
end
Capybara.default_driver    = :remote
Capybara.javascript_driver = :remote

describe 'Capybara Example', :type => :feature do
  it 'should take snapshot of Homepage' do
    visit('https://screener.io')
    page.execute_script('/*@screener.snapshot("Home")*/')
  end
end
```

</TabItem>
<TabItem value="Java">

```java
import org.openqa.selenium.*;
import org.openqa.selenium.remote.*;
import java.net.URL;
import java.util.*;
public class Test {
  public static void main(String[] args) throws Exception {
    Map screener = new HashMap();
    screener.put("name", "My Test");
    screener.put("resolution", "1280x1024");
    screener.put("apiKey", "<your-api-key>");
    screener.put("group", "<your-group-id>");
    DesiredCapabilities capabilities = DesiredCapabilities.firefox();
    capabilities.setCapability("screener", screener);
    WebDriver driver = new RemoteWebDriver(
         new URL("https://hub.screener.io/wd/hub"),
         capabilities);
    driver.get("https://screener.io");
    ((JavascriptExecutor) driver).executeScript("/*@screener.snapshot*/", "Home");
    driver.quit();
  }
}
```

</TabItem>
<TabItem value="C#">

```csharp
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
namespace SeleniumTest {
  class Program {
    static void Main(string[] args) {
      IWebDriver driver;
      DesiredCapabilities capability = DesiredCapabilities.Firefox();
      capability.SetCapability("screener.name", "My Test");
      capability.SetCapability("screener.resolution", "1280x1024");
      capability.SetCapability("screener.apiKey", "<your-api-key>");
      capability.SetCapability("screener.group", "<your-group-id>");
      driver = new RemoteWebDriver(new Uri("https://hub.screener.io/wd/hub/"), capability);
      driver.Navigate().GoToUrl("https://screener.io");
      IJavaScriptExecutor js = driver as IJavaScriptExecutor;
      js.ExecuteScript("/*@screener.snapshot('Home')*/");
      driver.Quit();
    }
  }
}
```

</TabItem>
<TabItem value="Python">

```python
from selenium import webdriver
screener = {
  'name': 'My Test',
  'resolution': '1280x1024',
  'apiKey': '<your-api-key>',
  'group': '<your-group-id>'
}
caps = {
  'browserName': 'chrome',
  'screener': screener
}
driver = webdriver.Remote(
  desired_capabilities=caps,
  command_executor="https://hub.screener.io/wd/hub"
)
driver.get("https://screener.io")
driver.execute_script('/*@screener.snapshot*/', 'Home')
driver.quit()
```

</TabItem>
<TabItem value="PHP">

```
<?php
// Facebook PHP Webdriver
require_once('lib/__init__.php');
$host = 'https://hub.screener.io/wd/hub';
$capabilities = DesiredCapabilities::firefox();
$capabilities = array(
  WebDriverCapabilityType::BROWSER_NAME => WebDriverBrowserType::FIREFOX,
  'screener' => array(
   'name' => 'My Test',
   'resolution' => '1280x1024',
   'apiKey' => '<your-api-key>',
   'group' => '<your-group-id>'
  )
);
$driver = RemoteWebDriver::create($host, $capabilities);
$driver->get('https://screener.io');
$driver->executeScript('/*@screener.snapshot*/', array('Home'));
$driver->quit();
?>

```

</TabItem>
</Tabs>


## 6. Supported Browsers

<Tabs
  defaultValue="Chrome"
  values={[
    {label: 'Chrome', value: 'Chrome'},
    {label: 'Firefox', value: 'Firefox'},
    {label: 'Internet Explorer', value: 'Internet Explorer'},
  ]}>

<TabItem value="Chrome">

Test script capability:
```js
{
  browserName: "chrome"
}
```

Current Chrome version: 87.0

</TabItem>
<TabItem value="Firefox">

Test script capability:

```js
{
 browserName: "firefox"
}
```

Current Firefox version: 83.0

</TabItem>
<TabItem value="Internet Explorer">

Test script capability:

```js
{
 browserName: "internet explorer",
 version: "11"
}
```

</TabItem>
</Tabs>
