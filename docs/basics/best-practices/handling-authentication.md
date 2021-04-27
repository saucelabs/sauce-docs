---
id: handling-authentication
title: Handling Authentication
sidebar_label: Handling Authentication
---
There are several ways to handle authentication and security dialogs during testing. You might, for example, need to log a user in, or bypass a browser warning. The topics in this section cover cookie injection with Selenium, basic HTTP authentication, and other options.

## Basic HTTP Authentication
Basic HTTP authentication supplies a username and password via URL, such as **https://admin:admin@<span></span>the-internet.herokuapp.com/basic_auth**. This request sends the credentials in the standard HTTP "Authorization" header.

Because browser support for basic HTTP authentication is limited, we recommend injecting cookies to bypass authentication dialogs and running an AutoIt script as a pre-run executable to handle Windows security authentication dialogs as solutions for authentication while testing.

| Browser | HTTP Authentication Support |
| ------------- | ------------- |
| Safari  | Unsupported. See [Setting Basic Authentication in Safari with a Pre-Run Executable](https://wiki.saucelabs.com/display/DOCS/Setting+Basic+Authentication+in+Safari+with+a+Pre-Run+Executable) for an example of how you can handle this situation.  |
| Internet Explorer  | Unsupported  |
| Firefox  | Supported, but Firefox will display a prompt asking you to confirm.  |
| Chrome  | Supported  |

## Injecting Cookies to Bypass Authentication Dialogs
Authentication dialogs present a challenge for automated testing, because Selenium has no way to interact with them. One solution is to bypass authentication by injecting cookies, setting an authenticated state for the application or site you're testing.

You may need to make a change in the source code of the web app itself so that the cookie is acknowledged, but your tests will run without the need for user credentials.

The basic process to test with cookies is:
1. Launch the browser on your Sauce Labs VM.
2. Inject cookies using Selenium.
3. Open the site or web app you want to test.
4. Run your tests.

>**NOTE:** You must be on the same domain that the cookie is valid for in order for this to work. If the homepage of the site you want to test takes a long time to load, you can try accessing a smaller page (like the 404 page) where you can inject the cookie before accessing the homepage.

### Code Sample
You can find additional examples for Java, Python, Ruby, and Perl on the official [Selenium Commands and Operations](https://www.selenium.dev/documentation/en/) page.

```js
# prereq: Sauce username and accesskey set as environment variables
# i.e. export SAUCE_USERNAME=YOUR_USERNAME
#      export SAUCE_ACCESS_KEY=YOUR_ACCESS_KEY

require 'selenium-webdriver'

url = "http://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}@ondemand.saucelabs.com:80/wd/hub".strip

browser = Selenium::WebDriver.for(:remote, :url => url,
                :desired_capabilities => {
                    :browserName => 'firefox',
                    :version => '40',
                    :platform => 'Windows 7'
                })

browser.manage.add_cookie({
    :name => 'CookieName',
    :value => 'CookieValue',
    :path => '/',
    :secure => false

})

puts "Printing out cookies : #{browser.manage.all_cookies}"

# go to URL / app where authentication was needed / prompted.
# i.e.
# browser.get 'http://yourwebsite.com'
# ...
browser.quit
```

## Running an AutoIt Script as a Pre-run Executable to Handle Windows Security Authentication Dialogs

When using Sauce Connect to run local tests on a Windows machine, you may encounter an Integrated Windows Authentication (IWA) dialog, also known as NTLM or Domain authentication. This is because the machine that Sauce Connect is running on is used to look up the host where the site or application under test is located. If the host has IWA enabled, the authentication request will be passed back through Sauce Connect to the Sauce Labs browser. Because there is no registry key available on our Windows virtual machines to disable this authentication, the solution is to create an AutoIT script to respond to the dialog, and run it as a pre-run executable in advance of running the test.

### The AutoIT Script
You can use the AutoIT Script editor to write and save your script.

The script for handling the IWA dialog should look like this:

```js
WinWaitActive(“Windows Security”)
Send(“Username”)
Send(“{TAB}”)
Send(“mysupersecretpassword”)
Send(“{ENTER}”)
```
For **Username** and **mysupersecretpassword**, enter the authentication credentials required by the Windows host.

When you save the script, it will be an **.au3** file, and you will need to compile it as an **.exe** file. Once compiled, you can use it as a pre-run executable with this desired capability call:

```js
"prerun": { "executable": "http://url.to/your/executable.exe",
            "args": [ "--silent", "-a", "-q" ], "background": true }
```
If using Sauce Storage for your pre-run executable send the following desired capability:
```js
"prerun": { "executable": "sauce-storage:executable.exe",
            "args": [ "--silent", "-a", "-q" ], "background": true }
```
### 64 v. 32-bit Version of AutoIT

 The 64bit version of AutoIT works on IE11, and not on IE9. The 32bit version works with both browser versions.

## Using **--auth** with **Sauce Connect ProxyPUBLISHED**

This approach to authentication works by configuring [Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) to send authentication details to any URL requesting them. It works for all requests, even those where you're asked for credentials in response to a click or form submission.


For each URL where you need to bypass HTTP authentication, add this to your Sauce Connect Proxy startup command:
```js
--auth host:port:username:password
```
If your website doesn't need a port, you can use the default port, **port 80**. Let's say that your website under test is **mysite.com**, your user name is **awesometester**, and your password is **supersekrit**. Here's how you'd write your Sauce Connect Proxy startup command:
```js
--auth mysite.com:80:awesometester:supersekrit
```
You can use this option multiple times in a row, like so:
```js
--auth mysite.com:80:awesometester:supersekrit --auth myothersite.com:443:awesometester:supersekrit --auth mythirdsite.com:80:awesometester:supersekrit
```
