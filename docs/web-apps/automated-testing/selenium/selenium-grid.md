---
id: selenium-grid
title: Selenium Grid and Sauce Labs
sidebar_label: Selenium Grid
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Testing new features and bug fixes is vital to enable quick software development. Selenium Grid helps with this by allowing concurrent 
execution of WebDriver tests across different browsers, platforms and devices on multiple remote machines. This page provides an 
overview of Selenium Grid, set up instructions, and advice when to use it and when to avoid it.

In short, Selenium Grid aims to:
* Provide an easy way to run tests in parallel on multiple machines
* Allow testing on different browser versions
* Enable cross platform testing

## What You'll Learn
* How to set up Selenium Grid using its different roles (Standalone, Hub/Node, Distributed)
* Understand how Selenium Grid works and its architecture
* How to extend Selenium Grid with Sauce
* How to move from Selenium Grid to Sauce


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Java 11 or higher installed on every machine part of Selenium Grid
* Browsers and browser drivers you want to support installed on the Node(s)
* Selenium Server jar file from the [latest release](https://github.com/SeleniumHQ/selenium/releases/latest)

## How Selenium Grid works

Selenium is built on a [client-server architecture](/web-apps/automated-testing/selenium), and Selenium Grid plays the 
server role in this architecture. Selenium Grid is composed by six different 
[components](https://www.selenium.dev/documentation/grid/components/), which gives you the option to deploy it in different 
ways. Depending on your needs, you can start each one of them on its own (Distributed), group them in Hub & Node, or all 
in one on a single machine (Standalone). 

### Standalone

Standalone combines all Grid [components](https://www.selenium.dev/documentation/grid/components/) 
seamlessly into one. Running a Grid in Standalone mode gives you a fully functional Grid 
with a single command, within a single process. Standalone can only run on a single machine.

Standalone is also the easiest mode to spin up a Selenium Grid. By default, the server 
will listen for [`RemoteWebDriver`](/web-apps/automated-testing/selenium/#step-1-create-a-remote-session) 
requests on [http://localhost:4444](http://localhost:4444), and it will detect the available browser 
drivers that it can use from the System `PATH`.

```shell
java -jar selenium-server-<version>.jar standalone
```

After starting successfully the Grid in Standalone mode, point your WebDriver tests to 
[http://localhost:4444](http://localhost:4444).

Common use cases for Standalone are:
* Develop or debug tests using [`RemoteWebDriver`](/web-apps/automated-testing/selenium/#step-1-create-a-remote-session) locally
* Running quick test suites before pushing code
* Have a easy to setup Grid in a CI/CD tool (GitHub Actions, Jenkins, etc...)

### Hub and Node

Hub and Node is the most used role because it allows to:
* Combine different machines with different operating systems and/or browser versions in a single Grid
* Have a single entry point to run WebDriver tests in different environments
* Scaling capacity up or down without tearing down the Grid

#### Hub

A Hub is composed by the following [components](https://www.selenium.dev/documentation/grid/components/):
Router, Distributor, Session Map, New Session Queue, and Event Bus.

The Hub acts as the entry point of the Grid, receiving all external requests, creating sessions and 
forwarding commands to the Nodes.

```shell
java -jar selenium-server-<version>.jar hub
```

By default, the server will listen for [`RemoteWebDriver`](/web-apps/automated-testing/selenium/#step-1-create-a-remote-session) 
requests on [http://localhost:4444](http://localhost:4444).

#### Node

During startup time, the Node will detect the available drivers that it can use from the System `PATH`.

The command below assumes the Node is running on the same machine where the Hub is running.
```shell
java -jar selenium-server-<version>.jar node
```

##### More than one Node on the same machine

Node 1
```shell
java -jar selenium-server-<version>.jar node --port 5555
```

Node 2
```shell
java -jar selenium-server-<version>.jar node --port 6666
```

##### Node and Hub on different machines

Hub and Nodes talk to each other via HTTP and through the [Event Bus](https://www.selenium.dev/documentation/grid/components#event-bus)
(which lives inside the Hub). A Node sends a message to the Hub via the Event Bus to start the 
registration process. When the Hub receives the message, reaches out to the Node via HTTP to confirm its existence.

To successfully register a Node to a Hub, it is important to expose the Event Bus ports (4442 and 4443 by 
default) on the Hub machine. This also applies for the Node port. With that, both Hub and Node will
be able to communicate.

If the Hub is using the default ports, the `--hub` flag can be used to register the Node
```shell
java -jar selenium-server-<version>.jar node --hub http://<hub-ip>:4444
```

When the Hub is not using the default ports, the `--publish-events` and `--subscribe-events` flags are needed.

For example, if the Hub uses ports `8886`, `8887`, and `8888`
```shell
java -jar selenium-server-<version>.jar hub --publish-events tcp://<hub-ip>:8886 --subscribe-events tcp://<hub-ip>:8887 --port 8888
```
The Node needs to use those ports to register successfully
```shell
java -jar selenium-server-<version>.jar node --publish-events tcp://<hub-ip>:8886 --subscribe-events tcp://<hub-ip>:8887
```

### Distributed 

When using a Distributed Grid, each component is started separately, and ideally on different machines.

:::tip Expose ports
It is important to expose all component ports properly in order to allow fluent communication between all components.
:::

1. Event Bus

The Event Bus serves as an internal communication path between the Nodes, Distributor, and Session Map. 
The Grid does most of its internal communication through messages, avoiding expensive HTTP calls. When 
starting the Grid in its fully distributed mode, the Event Bus is the first component that should be started.

Default ports are: `4442`, `4443`, and `5557`.
```shell
java -jar selenium-server-<version>.jar event-bus --publish-events tcp://<event-bus-ip>:4442 --subscribe-events tcp://<event-bus-ip>:4443 --port 5557
```

2. New Session Queue

The Router adds the new session request to the New Session Queue and waits for the response. Then
the Distributor attempts to create a new session by matching one of the Nodes with new session request. 

After a session is created successfully, the Distributor sends the session information back to the New 
Session Queue, which then gets sent back to the Router, and finally to the client.


Default port is `5559`.
```shell
java -jar selenium-server-<version>.jar sessionqueue --port 5559
```

3. Session Map

The Session Map keeps the relationship between the session and the Node where the session is running. 
It helps the Router in the process of forwarding a request to the Node.

Default Session Map port is `5556`. Session Map interacts with the Event Bus. 
```shell
java -jar selenium-server-<version>.jar sessions --publish-events tcp://<event-bus-ip>:4442 --subscribe-events tcp://<event-bus-ip>:4443 --port 5556
```

4. Distributor

The Distributor registers and keeps track of all Nodes and their capabilities. It also queries the 
New Session Queue and process any pending new session requests and assigns them to a Node when 
the capabilities match.

Default Distributor port is `5553`. Distributor interacts with New Session Queue, Session Map, Event Bus, and the Node(s).

```shell
java -jar selenium-server-<version>.jar distributor --publish-events tcp://<event-bus-ip>:4442 --subscribe-events tcp://<event-bus-ip>:4443 --sessions http://<sessions-ip>:5556 --sessionqueue http://<new-session-queue-ip>:5559 --port 5553 --bind-bus false
```

5. Router

The Router is the entry point of the Grid, receiving all external requests, and forwards them to 
the correct component. When the Router receives a new session request, it gets forwarded to the 
New Session Queue. If the request belongs to an existing session, the Router will ask the Session 
Map for the Node where the session is running, and then the request will be forwarded directly to the
Node.

The Router balances the load in the Grid by sending the requests to the component that is able 
to handle them better, without overloading any component that is not needed in the process.

Default Router port is `4444`. Router interacts with New Session Queue, Session Map, and Distributor.
```shell
java -jar selenium-server-<version>.jar router --sessions http://<sessions-ip>:5556 --distributor http://<distributor-ip>:5553 --sessionqueue http://<new-session-queue-ip>:5559 --port 4444
```

6. Node(s)

A Grid can contain multiple Nodes, and each one manages the available browsers of the machine where it is running. 
The Node registers itself to the Distributor, and its configuration is sent as part of the registration process.

A Node will auto-register all browser drivers available on the `PATH` of the machine where it runs. The machines 
where the Node is running does not need to have the same operating system as the other components. For example, 
a Windows Node might have the capability of offering IE Mode on Edge as a browser option, whereas this would 
not be possible on Linux or Mac, and a Grid can have multiple Nodes configured with Windows, Mac, or Linux.

Default Node port is `5555`.
```shell
java -jar selenium-server-<version>.jar node --publish-events tcp://<event-bus-ip>:4442 --subscribe-events tcp://<event-bus-ip>:4443
```

## Running tests on Selenium Grid

After following the previous steps to get Selenium Grid up and running, tests that run locally
need to be slightly modified to run them remotely on Selenium Grid. Test code needs
to switch from using a local driver to use a remote driver.

A simple example shown in Java, where code is modified from using a local driver to use a remote one, is shown below.
For extended examples on remote drivers, check the [`RemoteWebDriver`](/web-apps/automated-testing/selenium/#step-1-create-a-remote-session)
section.

:::note Check your Grid URL
The example assumes that your Grid is running at [http://localhost:4444](http://localhost:4444). Replace the 
URL with the one where your Grid is actually running.
:::


<Tabs
  defaultValue="local"
  values={[
    {label: 'Local execution', value: 'local'},
    {label: 'Remote execution', value: 'remote'},
  ]}>

<TabItem value="local">

```java title="Local execution"
WebDriver driver = new ChromeDriver();
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

</TabItem>
<TabItem value="remote">

```java title="Remote execution"
WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), new ChromeOptions());
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

</TabItem>
</Tabs>


## Extending Selenium Grid with Sauce

Setting up your own Grid can be simple at the beginning but as usage grows, and more platforms
and browsers are needed, you will find yourself in the situation where a bigger infrastructure
needs to be supported. Adding macOS and Safari or mobile devices and emulators can be challenging
due to the hardware costs and very diverse requirements. Extending Selenium Grid with Sauce Labs
is an excellent solution to add capacity and support more use cases.

Selenium Grid has a Relay feature that enables a local Grid to add Sauce Labs as an extra Node.
In this way, Grid can enable more coverage to platforms and versions not present locally.

A configuration file in [`toml`](https://toml.io/en/) format is needed to setup a Node and 
relay WebDriver sessions to Sauce Labs. For example, if your local Selenium Grid supports
Chrome and Firefox on Linux, and you want to add support for Windows 11 and macOS, plus iOS
and Android devices, you can configure those extra capabilities in the `toml` configuration
file.

The following is an en example of a `config.toml` file with:

OS | Browser/Device | Version | Concurrent sessions
---|---|---|---
Windows 11 | Chrome | 104 | 5
Windows 10 | Firefox | 103 | 10
macOS Monterey (12) | Safari | 15 | 5
iOS 15.4 | Safari on Simulator | iPhone 13 | 2
Android 12 | Chrome on Emulator | Pixel 6 Pro | 2


Here is how the `config.toml` would look like:

:::note Sauce Labs endpoint URL 
The example file shows the US West data center. Check the different [endpoints](/basics/data-center-endpoints/) 
if you want to use another region. 
:::


```toml
[node]
detect-drivers = false

[relay]
url = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub"
configs = [
  "5", '{"browserName": "chrome", "platformName": "Windows 11", "browserVersion": "104"}',
  "10", '{"browserName": "firefox", "platformName": "Windows 10", "browserVersion": "103"}',
  "5", '{"browserName": "safari", "platformName": "macOS 12", "browserVersion": "15"}',
  "2", '{"browserName": "safari", "platformName": "iOS", "appium:platformVersion": "15.4", "appium:deviceName": "iPhone 13 Simulator"}',
  "2", '{"browserName": "chrome", "platformName": "android", "appium:platformVersion": "12.0", "appium:deviceName": "Google Pixel 6 Pro GoogleAPI Emulator"}'
]
```

Finally, adding a new Node to your local Selenium Grid is possible through the following command:

```bash
java -jar selenium-server-<version>.jar node --config config.toml
```

With that, you will be able to send test requests to your local Grid and when the capabilities match,
they will be redirected to Sauce Labs. Extra capabilities inside `sauce:options` are also supported to
have better readability on the test reports page at Sauce Labs. The following Java example shows how
create send a session request to a local Grid with capabilities to match a Safari 15 on macOS Monterey
served on Sauce Labs.

:::tip Use Credential Environment Variables
Set your Sauce Labs account credentials as [environment variables](/basics/environment-variables) rather than hard-coding them into all your scripts for efficiency and to protect them from unintended exposure.
:::

```java title="Remote execution using an extended Grid with Sauce Labs"
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 12");
browserOptions.setBrowserVersion("15");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
browserOptions.setCapability("sauce:options", sauceOptions);
RemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

## Moving from Selenium Grid to Sauce

A single line of code needs to be changed to execute the same test code directly on Sauce Labs. 
Instead of using `http://localhost:4444` as a URL, a Sauce Labs [endpoint](/basics/data-center-endpoints/) 
URL should be used in the `RemoteWebDriver`. The code below shows that more clearly.

<Tabs
  defaultValue="local"
  values={[
    {label: 'Local Grid', value: 'local'},
    {label: 'Sauce Labs', value: 'sauce'},
  ]}>

<TabItem value="local">

```java title="Local Grid"
RemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);
```

</TabItem>
<TabItem value="sauce">

```java title="Sauce Labs"
RemoteWebDriver driver = new RemoteWebDriver(new URL("https://ondemand.us-west-1.saucelabs.com:443/wd/hub"), browserOptions);
```

</TabItem>
</Tabs>

While building your own testing infrastructure with Selenium Grid might be interesting and fun, maintaining it becomes 
a huge challenge over time due to the continued releases of new browser versions, browser drivers, operating systems, 
and mobile devices. Large amount of time needs to be invested in order to set up a fine tuned Selenium Grid that 
supports cross browser, cross platform, and cross device testing. 

Supporting a new browser version in a local Selenium Grid requires a complete verification of its functionality 
before running your actual tests with it. In addition, providing features like video recording, logs, and screenshots,
comes with the burden of building a custom test results dashboard, which needs provisioning storage for those files
plus an automated archiving strategy.

With Sauce Labs, using new browser versions, platforms, or mobile devices, is as easy as setting the desired configuration 
options in your test. 

:::tip
Use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator) to auto-generate test 
configuration options in the language of your choice to copy and paste into your source code.
:::

By executing your tests on Sauce Labs, aside of getting a solid testing infrastructure, a wide range of features gets
added on top, such as:
- Live debugging, video recording, command tracing, screenshots, and exception highlight enable easy debugging on the Sauce Labs [tests results dashboard](/test-results/viewing-test-results/)
- Share test results securely between team members by configuring [users and teams](/basics/acct-team-mgmt-hub/)
- Understand how your application renders on every device and operating system by analyzing results from [Front-End Performance Testing](/performance/)
- Interpret test results over time and identify failure patterns across through [Insights](/insights/)
- Benefit from the integrations Sauce Labs has with all major [CI/CD platforms](/ci/)

## More Information

### Selenium Grid Build vs. Buy
- [Whitepaper](https://saucelabs.com/resources/white-papers/selenium-grid-build-vs-buy)
- [Webinar](https://www.youtaube.com/watch?v=mSxRf-zaa5I)

### Related Resources

* [Selenium Grid website](https://www.selenium.dev/documentation/grid/)