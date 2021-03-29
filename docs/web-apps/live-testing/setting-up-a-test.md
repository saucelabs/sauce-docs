---
id: setting-up-a-test
title: Setting Up a Live Test
sidebar_label: Setting Up a Live Test
---

You can run live tests of your websites on a wide variety of operating system, browser, version, and screen resolution configurations.

## Desktop
1. In Sauce Labs, in the left navigation panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Desktop** tab.

<img src={useBaseUrl('img/live-testing/desktop-test-nav.jpg')} alt="Live desktop test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you use Sauce Connect Proxy to test applications on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown.
5. Under **BROWSER SELECTION**, select the browser version and screen resolution you want to use in your test.
6. In the **OS VERSION** dropdown, select the OS version you want to use.

<img src={useBaseUrl('img/live-testing/desktop-test-setup.jpg')} alt="Desktop test setup" width="650"/>

7. Your recent and saved configurations are listed in the right panel, under **Recent** and **Saved**, respectively.

<img src={useBaseUrl('img/live-testing/desktop-recent-saved.jpg')} alt="Recent and saved tests" width="650"/>

8. To save your current configuration, select the **Save this configuration** check box.  

<img src={useBaseUrl('img/live-testing/desktop-saved-config.jpg')} alt="Saved test configuration" width="650"/>

9. Click **Start Session**.
You'll see a loading screen, and then the application will launch in a live test window using the configuration you selected.

<img src={useBaseUrl('img/live-testing/desktop-test-running.jpg')} alt="Desktop test running" width="650"/>

Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

## Mobile Real
Before you begin to set up a mobile real device test, you need to know if your app is designed to run on internal or otherwise restricted networks. If it does and you're testing on real devices, use Sauce Connect Proxy to connect. For more information, see [Real Device Cloud Setup](docs/secure-connections/sauce-connect/setup-configuration/specialized-environment.md).

1. In Sauce Labs, in the left navigation panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Mobile Real** tab.

<img src={useBaseUrl('img/live-testing/mobile-real-test-nav.jpg')} alt="Mobile real device test navigation" width="650"/>

3. Use the filter options or enter a term in the search field to find the real device you want to use.

<img src={useBaseUrl('img/live-testing/mobile-real-test-search.jpg')} alt="Searching for a mobile real device test" width="650"/>

4. To mark a device as a favorite so you can find it easily in the future, click the star next to the device name. By default, the device list is sorted by Starred First.

<img src={useBaseUrl('img/live-testing/mobile-real-test-favorite.jpg')} alt="Favorite a real device test" width="650"/>

5. If you use Sauce Connect Proxy to test applications on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown.
Hover your mouse over the device box, and then click **LAUNCH** to start the test.

<img src={useBaseUrl('img/live-testing/mobile-real-test-launch.jpg')} alt="Launch a mobile real device test" width="650"/>

6. You'll see a loading screen, and then the URL you entered will launch in a live test window using the real device you selected.

<img src={useBaseUrl('img/live-testing/mobile-real-test-running.jpg')} alt="Mobile real device test running" width="650"/>

## Mobile Virtual
1. In Sauce Labs, in the left navigation panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Mobile Virtual** tab.

<img src={useBaseUrl('img/live-testing/mobile-virtual-test-nav.jpg')} alt="Mobile virtual device test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you use Sauce Connect Proxy to test applications on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown.
5. Select the **Manufacturer**, **Device**, and **OS Version** of the device you want to test on.

<img src={useBaseUrl('img/live-testing/desktop-test-setup.jpg')} alt="Desktop test setup" width="650"/>

6. Your recent and saved configurations are listed in the right panel, under **Recent** and **Saved**, respectively.

7. To save your current configuration, select the **Save this configuration** check box.  
8. Click **Start Session**.
You'll see a loading screen, and then the URL you entered will launch in a live test window using the virtual device you selected.

