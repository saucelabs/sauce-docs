---
id: specialized-environments
title: Specialized Environment Setups
sidebar_label: Specialized Environment Setups
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
  * We recommend setting these values as [environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/) to protect your username and api key from exposure, and also for future convenience.
* The name of your closest regional Sauce Labs Data Center (see the [SC CLI](/dev/cli/sauce-connect-proxy/#--region) and [Data Center Endpoints](/basics/data-center-endpoints/).


## Sauce Connect Docker Container Setup

As an alternative to downloading and installing the SC Client, you can leverage Docker containers to manage Sauce Connect Proxy tunnels. See [Using Docker Containers to Install/Run Sauce Connect](/secure-connections/sauce-connect/installation/#using-docker-containers-to-installrun-sauce-connect) for use cases.

### Running the SC Docker Image

1. Before running the container, you'll need to pull the Sauce Connect Proxy Docker Image from the Docker Hub. This will always pull the latest version of Sauce Connect Proxy.
  ```bash
  $ docker pull saucelabs/sauce-connect
  ```
   * Or - if you _do_ want to use a specific SC version - you can specify that as a tag. The example below pulls v4.7.0.
   ```bash
   $ docker pull saucelabs/sauce-connect:4.7.0
   ```
2. To run the Sauce Connect Proxy Docker image, execute the below script, which will also set your Sauce Labs username and access key as [environment variables](/basics/environment-variables/).
  ```bash
  $ export SAUCE_USERNAME="my-user"
  $ export SAUCE_ACCESS_KEY="my-access-key"
  docker run \
      -e SAUCE_USERNAME=${SAUCE_USERNAME} \
      -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
      -it saucelabs/sauce-connect
  ```

If desired, you can specify any additional [SC CLI arguments](/dev/cli/sauce-connect-proxy/) here.

If your tests are using localhost addresses, you should also set `--network="host"` as an argument in the above script. Otherwise Sauce Connect within the Docker container will not be able to access your local services in the host machine.


### Running the SC Docker Image with a CI/CD Pipeline
If you want to run this Docker image as part of your CI/CD pipeline, you can run the following steps:
1. Create a `wait-for-sc.sh` file to ensure we only continue our pipeline.
1. Once Sauce Connect is fully connected, we need a simple shell script that waits for Sauce Connect to be ready:
   ```bash title="wait-for-sc.sh"
   until [ -f /tmp/sc.ready ]
   do
       sleep 5
   done
   echo "SC ready"
   1. exit
   2. Pull docker image
   $ docker pull saucelabs/sauce-connect
   ```
1. Start Sauce Connect using the script below. It is important that you mount a temp folder here so that `wait-for-sc.sh` can detect when Sauce Connect has launched. Also, make sure that you set `--network="host"` to allow Sauce Connect to access your application in the host machine. This script also sets your Sauce Labs username and access key as [environment variables](/basics/environment-variables/).
  ```bash
  $ docker run \
      -e SAUCE_USERNAME=${SAUCE_USERNAME} \
      -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
      -v /tmp:/tmp \
      --network="host" \
      -t saucelabs/sauce-connect:latest \
      -f /tmp/sc.ready \
      -i some-identifier --detach
    $ ./wait-for-sc.sh
  ```

For additional help, contact [Sauce Labs Support](https://saucelabs.com/training-support) or create a GitHub Issue from the [Stack Overflow GitHub Repository](https://github.com/saucelabs/sauce-connect-docker).


## Real Device Cloud Setup

Real Device Cloud on Sauce Labs offers public and private mobile devices for users looking to expedite automated and live testing for their mobile apps. You can run a high volume of tests across a broad range of real devices without compromising performance, quality, or reliability.

With Sauce Connect Proxy, you’ll have a secure tunnel for testing applications and websites on your local machine (or behind a firewall) against devices and browsers in the Sauce Labs Real Device Cloud.


### Security Considerations

#### Restricting Tunnel Deployment to Organization Admins

If you'd like to restrict Sauce Connect Proxy tunnel deployment to organization admins only, follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to only allow organization admins to start Sauce Connect Proxy tunnels.

#### Testing with Public Devices
In order to begin running tests on public devices using Sauce Connect Proxy or IPSec VPN, your organization admin must enable this option in their settings. Follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to enable Sauce Connect Proxy/VPN for public cloud devices.

Once the setting is enabled, all users across your organization can run live and automated tests on public devices over Sauce Connect Proxy or IPSec VPN. Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted Sauce Connect Proxy or IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy.

#### Testing Mobile Devices Against `localhost`
Testing with the address `localhost` (or the IP address `127.0.0.1`) is not supported with iOS or Android real devices in Sauce Connect Proxy.

To work around this, you'll need to edit your hosts file on the machine on which you are running Sauce Connect Proxy. Add an entry for a dummy hostname (such as `localtestsite`) and the IP address `127.0.0.1`. Requests for `localtestsite` in your tests will then be sent through your Sauce Connect Proxy tunnel to `localhost`, which is the machine on which you are running Sauce Connect Proxy.

For tips on editing your hosts file, see [How To Edit Hosts File In Linux, Windows, or Mac](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux).

#### SSL Bumping
While rare, there are some test cases that will require you to disable SSL Bumping when using Sauce Connect Proxy in order to avoid certificate issues. For more information, see [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication).

### Selecting the Tunnel to Use
Sauce Connect Proxy can have multiple tunnels running simultaneously, as described in [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). You can select which tunnel to use in a real device test in the same way as you would any other type of automated test.

1. Start Sauce Command Proxy from the command line, using the [`-u (--user)`](/dev/cli/sauce-connect-proxy/#--user), [`-k (--api-key)`](/dev/cli/sauce-connect-proxy/#--api-key), [`-r (--region`)](/dev/cli/sauce-connect-proxy/#--region), and [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-name) flags.
  ```bash
  ./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY} -r {SAUCE_DATA_CENTER} --tunnel-name {TUNNEL_NAME}
  ```

  In this example, we'll [set our credentials (username/access key) as environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/), start a tunnel in US West Data Center and name the tunnel `rdc-on-sauce-tunnel-us`.
  ```bash
  ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r us-west --tunnel-name rdc-on-sauce-tunnel-us
  ```

2. In your device testing script, specify the tunnel name with `tunnelName` in your capabilities, as shown in this Java example:

```java
final DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("username", System.getenv("SAUCE_USERNAME"));
    capabilities.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion,"  "81.0");
    capabilities.setCapability("deviceName", "Samsung_Galaxy_Note_5_real"); // Will only run on the specified device
    capabilities.setCapability("tunnelName", "rdc-on-sauce-tunnel-us");
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```


### Selecting the Right Data Center Endpoint
By default, Sauce Labs will automatically connect you to the main US-West-1 Data Center. For information on Sauce Connect Proxy endpoints, see the [Sauce Connect Proxy CLI documentation](/dev/cli/sauce-connect-proxy/#data-center-endpoints) and [Data Center Endpoints](/basics/data-center-endpoints).

At present, real device testing is supported in the following data centers:
 - US West Data Center (`us-west`)
 - EU Central Data Center (`eu-central`)

:::note
Once you establish a Sauce Connect Proxy tunnel for real device testing, you can also use it for virtual devices (and vice versa).
:::


#### OnDemand Endpoint Examples for Driver Setup

To ensure you're testing against the correct data center, you'll need to add the correct OnDemand endpoint when you instantiate a MobileDriver in your automated test:

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

Driver Setup for US Data Center (Java)

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>

<TabItem value="EU Data Center">

Driver Setup for EU Data Center (Java)

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.eu-central-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>
</Tabs>


## Headless Setup
Sauce Headless is a lightweight infrastructure that allows developers to run early pipeline component tests and sanity checks at scale. It is a container-based architecture for the Virtual Machines that host our headless browsers.

At present, Sauce Headless testing is supported in the following data centers:
 - US East Data Center (`us-east`)

Example of starting Sauce Connect Proxy in conjunction with your Sauce Headless tests:

```bash
./sc -u $SAUCE_USERNAME
     -k $SAUCE_ACCESS_KEY \
     -r us-east \
     --tunnel-name {TUNNEL_NAME}
```


## API Testing Setup

See [API Testing with Sauce Connect Proxy](/api-testing/sauce-connect/) to learn how to start a tunnel for API Testing. It requires the use of a YAML config file.

This setup has a unique endpoint, `https://api.us-west-4-i3er.saucelabs.com/rest/v1`. Currently, only the US-West region is supported.
