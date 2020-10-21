---
id: web-apps
title: Live Testing Web Apps
sidebar_label: Web Apps
---

You can run live tests of your websites/web-applications on a wide range of operating systems and web browser versions.

__What You'll Need__

* A Sauce Labs Account
* A Publicly Available Web Application to Test

> If you do not have an app, consider using the Sauce Labs [Swag Labs](https://www.saucedemo.com/) sample app for validating your account functionality as well as your tests.

## Testing on Desktop Browsers

1. Log in to Sauce Labs and go to __Live > Cross-Browser__. 
2. Click __Web Browser__.
3. Click __Desktop__.
4. For __Test URL__, enter the URL of the website you want to test in the browser.
5. Select the __Browser Version__ and __Screen Resolution__ you want to use in your test. 
6. Select the __OS Version__ you want to use. 
7. You can find previous configurations you've used in your tests under __Recent__. You can also save configurations for later use by selecting __Save this Configuration__. 
8. If you use [Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) to test application on local host or behind a firewall, select the tunnel to use for your tests.
9. Test assets such as screenshots are automatically saved. If you don't want to save them, clear the __Save Screenshots, Logs, & Video__ option. 
10. Click __Start Session__.

You'll see a loading screen, and then the application will launch in a live test window using the configuration you selected. Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

### Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. If you want to start additional sessions, click the __+__ icon next to the tab containing the URL of your current test session. Follow the steps to set up the session, and then you can switch back and forth between the sessions by clicking on the URL tabs.

## Testing on Mobile Browsers

### Real Devices

1. Log in to Sauce Labs and go to __Live > Cross-Browser__ from the options in the left-hand navigation. 
2. Select __Mobile Real__.
3. Use the filter options or __Search__ field to find the type of real device you want to use in your test, and select it. You can find previous devices you've used in your tests under __Recent__. You can also save devices for later use by selecting __Save this Configuration__. 
4. For __Test URL__, enter the URL of the website you want to test in the browser.
5. If you are using __Sauce Connect Proxy__ to access the web app you want to test, enter the ID of the tunnel to use. 
6. Click __Start Session__. 

You'll see a loading screen, and then the URL you entered will launch in a live test window using the real device you selected.

### Virtual Devices

1. Log in to Sauce Labs and select __Live > Cross Browser__ from the options in the left-hand navigation. 
2. Select __Mobile Virtual__.
3. Select the specifications for the virtual device you want to use from the __Manufacturer__, __Device__, and __OS Version__ menus. 
4. For __Test URL__, enter the URL of the website you want to test in the browser.
5. If you are using __Sauce Connect Proxy__ to access the web app you want to test, enter the ID of the tunnel to use. 
6. Click __Start Session__.

You'll see a loading screen, and then the URL you entered will launch in a live test window using the virtual device you selected.
