---
id: using-attributes-tests
title: Using Attributes to Identify Tests
sidebar_label: Using Attributes to Identify Tests
---
By assigning unique attributes (such as test name, tags, and build ID) in your test capabilities, you can then apply these annotations to filter results on your Sauce Labs Test Results and Archive pages. Although not required, following this best practice can make it easier to monitor tests and builds in your CI pipeline.

You can set these capabilities to be any combination of letters and numbers. To differentiate between builds, it's also a good practice to add a timestamp or CI job/build number at the end of your build tag.

**NOTE:** The build name and tags capabilities are not supported in automated real device testing at this time, please check back for future updates with regards to this functionality.

**NOTE:** While it's technically possible to use the same build name for multiple test runs, this will cause all of your test results to appear incorrectly as part of a single run. This, in turn, will cause your test results for those builds to be inaccurate.

### Code Examples: Build, Tags, and Name
#### Java
```js
String username = System.getenv("SAUCE_USERNAME");
String accessKey = System.getenv("SAUCE_ACCESS_KEY");
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("name", "Web Driver demo Test");
sauceOptions.setCapability("tags", "tag1");
sauceOptions.setCapability("build", "build-1234");
sauceOptions.setCapability("username", username);
sauceOptions.setCapability("accessKey", accessKey);

FirefoxOptions firefoxOptions = new FirefoxOptions();
firefoxOptions.setCapability("platformName", "Windows 10");
firefoxOptions.setCapability("browserVersion", "79.0");
WebDriver driver = new RemoteWebDriver(
new URL("https://ondemand.saucelabs.com/wd/hub"),
    firefoxOptions);
```
#### C# #
```js
string _sauceUsername = Environment.GetEnvironmentVariable("SAUCE_USERNAME", EnvironmentVariableTarget.User);
string _sauceAccessKey = = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY", EnvironmentVariableTarget.User);
var sauceOptions = new Dictionary<string, object>
{
    ["username"] = _sauceUsername,
    ["accessKey"] = _sauceAccessKey,
    ["name"] = "Web Driver demo Test",
    ["build"] = "build-1234",
    ["tags"] = "tag1"
};
var firefoxOptions = new FirefoxOptions()
{
    BrowserVersion = "79.0",
    PlatformName = "Windows 10",
    UseSpecCompliantProtocol = true
};
firefoxOptions.AddAdditionalCapability("sauce:options", sauceOptions, true);
IWebDriver driver = new RemoteWebDriver(new Uri("https://ondemand.saucelabs.com/wd/hub"),
                firefoxOptions.ToCapabilities(), TimeSpan.FromSeconds(600));
```
#### Node.js
```js
const username = process.env.SAUCE_USERNAME;
const accessKey = process.env.SAUCE_ACCESS_KEY;
const tags = ["tag1", "tag2", "tag3" ]
const driver = new webdriver.Builder()
    .withCapabilities({
      'browserName': 'firefox',
      'platform': 'Windows 10',
      'version': '79.0',
      'sauce:options': {
          'name': 'Web Driver demo Test',
          'build': 'build-1234',
          'tags': tags,
          'username': username,
          'accessKey': accessKey
       }
    })
    .usingServer("https://" + username + ":" + accessKey +
          "@ondemand.saucelabs.com:443/wd/hub")
    .build();
```
#### Python
```js
sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
sauceOptions = {
    "build": "build-1234",
    “name”: “Web Driver demo Test”,
    “tags”: [ "tag1", "tag2", "tag3" ]
}
browserOptions =  {
    'platformName':"Windows 10",
    'browserName': "firefox",
    'browserVersion': '79.0',
     'sauce:options': sauceOptions
}
browser = webdriver.Remote(“https://ondemand.saucelabs.com/wd/hub”, desired_capabilities=browserOptions)
```
#### Ruby
```js
caps = {
    browser_name: 'firefox',
    platform_name: 'windows 10',
    browser_version: '79.0',
    "sauce:options" => {
        name: 'Web Driver demo Test',
        build: 'build-1234',
        tags: 'tag1',
        username: ENV['SAUCE_USERNAME'],
        access_key: ENV['SAUCE_ACCESS_KEY']
    }
}
driver = Selenium::WebDriver.for(:remote,
    url: 'https://ondemand.saucelabs.com:443/wd/hub',
    desired_capabilities: caps)
```
