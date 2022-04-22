---
id: proxy-tunnels
title: Using Sauce Connect Proxy Tunnels
sidebar_label: Using Tunnels
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## What You'll Need

* If you haven't already, make sure you can cURL or ping the website or mobile app that you'll be testing from your computer. If you can't reach it, neither can Sauce Connect Proxy.
* Check to see if you have any proxies that are required to access the public Internet.
* Review the [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for instructions on how to set your Sauce Labs username and access key and launch a tunnel.
* If you're using Jenkins or Bamboo, be sure to review [Sauce Connect Proxy CI/CD Integration](/secure-connections/sauce-connect/setup-configuration/ci-cd-integration).

## Best Practice for Using Tunnels
We recommend using a single Sauce Connect Proxy tunnel or tunnel pool for each test suite or build, and tearing it down at the end of your test. Your test automation framework should launch Sauce Connect Proxy before the test suite is triggered and shut it down when the suite finishes.

If you're using a continuous integration platform like Jenkins, you can use the Sauce OnDemand plugin to launch and tear down your Sauce Connect Proxy instance. For more information, see [Setting Up CI Platform Integrations with Sauce Plugins](/ci).

### Security Considerations

If your Sauce Connect client is running on a multi-user system, we recommend using a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/) or [setting environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/) to hide sensitive information like your password (`--api-key`) and proxy credentials. This way, they won't be visible in the list of running processes.


## Starting Tunnels
Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed. For information about user roles and permissions, see [User Roles](/basics/acct-team-mgmt/managing-user-info).

Tunnels must be started from the command line of the machine where the Sauce Connect Proxy client is installed. As a shortcut, you can copy the run command (see **Tunnels** page > Step 3) and paste it into your CLI. Optionally, you can add [tunnel configuration parameters](/dev/cli/sauce-connect-proxy/). See [Quickstart](/secure-connections/sauce-connect/quickstart/) and [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for instructions.


## Monitoring Tunnels
You can manage and monitor all Sauce Connect Proxy tunnel activity from the Sauce Labs [**Tunnels**](https://app.saucelabs.com/tunnels) page, which displays useful information, such as the number of active tunnels, tunnel status, and specific attributes for each tunnel. You can also check the health of an individual tunnel by running a test on it.

| Column | Description |
| :--- | :--- |
| Type | The icon shows whether the tunnel is a Sauce Connect Proxy tunnel, or an IPSec VPN tunnel. |
| State | The icon shows whether the tunnel is running or stopped. |
| Tunnel Name | The name of the tunnel. This is the [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-identifier) used when starting the Sauce Connect tunnel. |
| Client Hostname | The name of the machine where the Sauce Connect Proxy client is running. |
| Owner | The name of the account that is running the tunnel. |
| Sharing | Indicates whether or not the tunnel is shared. |
| Duration | The amount of time the tunnel has been running. |


### Verifying Tunnel Success
To verify that your tunnel is up and running, there are two places you can check:

#### Command-Line Interface
If successful, you'll see a confirmation response like the one below, indicating that you can start your tests.
<details><summary><strong>Click here to expand</strong><br/></summary>

   ```bash

                       ,,                    
                      .;,                    
                 ..,,::i:,,..                
              .:;i1111111111ii;,             
            .;11tttffLLLLLLLfft1i,           
            ;1tfffLLCCCCCCCCCCCL1i           
           ,i1ffLLCCCCCCCCCCCLLCti;          
           :i1fLCCCCCCCCCCCCCCCCti;          
            ;1tLLLCCCCCCCCCCCLLf1i   :;      
            .:;i11ttttttttttt11i;,  ,1.   ;:
                ..,::;iii::,,..     .;;,,;i,
                .,:;;iiii;;:,.       ;1;:,   
              :i1111tfLCft1111i:. .:ii,      
            ,i111i1CG80GC80ti111iii;,        
          ,i1ii11if00GGGC0GGi11i1:.          
        .i1:.;1i1it08GC0080Li11i1.           
      .,1i.  i1111itCLG0GCfi11111.           
    :;:;i;   :iii11iii111ii111ii;.           
    .    1:    .i1i11,  .i1ii1:.             
        :i.    ,1iii1:  ,1iii1;              
        .      :11111:  ,i1111;              
                .,,,.    .,,,.               


   Sauce Connect Proxy™ opens a secure connection between Sauce Labs and a locally hosted application.

     Find more information at: https://docs.saucelabs.com/dev/cli/sauce-connect-proxy

   Sauce Connect 4.7.1, build 5439 fb74241

   Sauce Connect runtime information:
   - Name: YOUR-TUNNEL-NAME
   - PID: 68102
   - PID file: /tmp/sc_client-YOUR-TUNNEL-NAME.pid
   - Log file: /var/folders/xj/9gxlps1566917q90pdb707cm0000gn/T/sc-YOUR-TUNNEL-NAME.log
   - SCProxy Port: 61602
   - Metric Port: None
   - Selenium listener: None
   - External proxy for REST API: None
   Please wait for 'you may start your tests' to start your tests: \
   Secure remote tunnel provisioned. Tunnel ID: 09313680b3ff433ebbb6bca5cb87919c

   Sauce Connect is up, you may start your tests.
   ```

</details>

#### Tunnels Page
Look for the **Active Tunnel** confirmation.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>



## Stopping Tunnels

There are severals ways to stop Sauce Connect Proxy tunnels:


### From the Command Line

#### To Stop a Single Tunnel: `Ctrl+C`
Enter `Ctrl+C` to terminate your tunnel. A call will be made from Sauce Connect to the REST API with instructions to terminate the Tunnel VM. Sauce Connect will continue to poll the REST API until the Tunnel VM has been halted and deleted.

```bash
^C
Stopping client
Will wait for up to 300s for any active jobs using this tunnel to finish.
Note: Press CTRL-C again to shut down immediately.
Note: If you do this, tests that are still running will fail.
Waiting for the connection to terminate...
Connection closed (8).
Goodbye.
```

:::note
If you attempt to terminate a Sauce Connect Proxy tunnel that is running a test with `ctrl-c`, you will see a message indicating that Sauce Connect Proxy will not terminate until tests are completed. To proceed with terminating Sauce Connect Proxy before the test finishes, enter `ctrl-c` again to force it to quit.
:::


#### To Stop a Single Tunnel: `KILL` signal
Another way to stop an individual tunnel via command line is to send a `KILL` command to the running `Process ID` (pid). The kill command sends various signals:
* `kill -9` sends a kill signal (SIGKILL), which forces the program to shut down.
* `kill -2` sends a SIGINT signal, which interrupts the program for a graceful shutdown. This is what we'll use in the below example.

1. Start a Sauce Connect Proxy tunnel [per standard procedure](/secure-connections/sauce-connect/quickstart).
2. Fetch and save the process IDs for later use.
  ```bash
  $ ps aux | grep bin/sc
  ```

  Expected Response:
  ```bash
  $SAUCE_USERNAME   38312   0.1  0.1  4461780  20084 s000  S+    2:58PM   0:00.33 sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
  ```

3. Send a `KILL` signal to each `Process ID` (pid):
  ```bash
  $ kill -2 38312
  ```

:::note Windows Users
Windows does not have signals the same way as Linux, Unix, and macOS. Instead, `taskkill` can be used to immediately disrupt the process, similar to sending a `SIGKILL` signal:

```bash
taskkill /pid 1234
```

:::

#### To Stop Multiple Tunnels
Before you attempt to stop/teardown all your running tunnels, please understand the following workflow:

Here is an example using Linux commands:
* `ps aux | grep sc`: Lists matching process(es).
* `| grep -v grep`: Filters out the grep process itself.
* `| awk '{print $2}'`: Grabs the `pid`.
* `| xargs kill -9`: Passes it to `kill -9`.

:::warning
`xargs kill -9` will immediately disrupt all jobs currently running through that tunnel. If you wish to interrupt the program in order to gracefully shutdown the tunnels use the `xargs kill -2` signal instead.

**We recommend first trying this command without `xargs kill -9` to ensure you don't unnecessarily delete adjacent running processes.**

For more information about acceptable signals and parameters, see the [Linux kill command manual](http://linuxcommand.org/lc3_man_pages/kill1.html).
:::

```bash title="Example command for killing all running proxy tunnels"
$ ps aux | grep sc | grep -v grep | awk  '{print $2}' | xargs kill -9
```

### From the Tunnels Page

#### To Stop a Single Tunnel
From the **Tunnels** page, click the **Stop** icon next to your tunnel.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Stop" width="800"/>

#### To Stop Multiple Tunnels
From the **Tunnels** page, click **Stop My Tunnels**.


## Tunnel Types
When testing with Sauce Labs, there are two different types of tunnel scenarios:

* **Ephemeral (short-lived)**: Starts a tunnel when you start a build. The tunnel is shut down when the build is completed.
* **Long-running**: Starts one or more tunnels that remain active indefinitely. We recommend restarting them every 24 hours for best performance.

Which one is right for you? That depends on your testing goals, number of parallel tests, duration of testing, number of Sauce Connect Proxy users in your team.

Regarding of the type of tunnel you launch, it is important to be diligent about assigning names (tunnel identifiers) to each tunnel to distinguish them and ensure smooth testing.

We also recommend verifying if your team has a tunnels setup that you can share. Please note that tunnel sharing should only be undertaken by well-coordinated users. For more information on sharing Sauce Connect Proxy tunnels within your organization, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).


### Ephemeral (Short-Lived) Tunnels
Ephemeral tunnels (short-lived tunnels) are ideal for the following test situations:
* If you're testing from your laptop and start your tests from an Integrated Development Environment (IDE) or terminal.
* If you’re starting your builds/suites from a Jenkins or Bamboo server.
* If you plan to start and stop your tests quickly and need to be more hands-on.
* If you need to test potentially build-breaking changes like modifying the tunnel to fast-fail scripts/trackers, change the geolocation, or change how SSL/TLS encryption happens.

#### Starting an Ephemeral Tunnel From Your Local Workstation
One option to start Ephemeral tunnels is to do so from your local workstation.

1. [Set your Sauce Labs username and access key as environmental variables](/basics/environment-variables).
2. Run the basic startup commands to ensure that your tunnel starts. Be sure to include the [`--region`](/dev/cli/sauce-connect-proxy/#--region) and [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-identifier) flags for best performance.

  <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows', value: 'Windows'},
      ]}>

  <TabItem value="Mac/Linux">

  ```bash
  ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region {SAUCE_DATA_CENTER} --tunnel-name $TUNNEL_NAME
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  .\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --region {SAUCE_DATA_CENTER} --tunnel-name $TUNNEL_NAME
  ```

  </TabItem>
  </Tabs>

  Once you see a tunnel on Sauce Labs, you can start testing against a site that is hosted on your network. You can leave it up for as long as you'd like and test at a fairly reasonable volume. Start it and stop it as needed!

#### Starting an Ephemeral Tunnel From a Continuous Integration (CI) Build Server
You can also launch Ephemeral tunnels from a continuous integration (CI) build server, where the code is being pulled from a repository.

1. When putting together test suites or builds from a CI build server, we recommend first creating an automated loop that contains the following steps:
   * Build starts (scheduled or user-initiated).
   * (Optional) Start an instance of the website or mobile app being tested.
   * Script starts your tunnel on the server.
   * Your tests start on Sauce Labs.

2. Determine the number of tunnels you'll need for your tests. For this example, we'll use one tunnel. As a rule of thumb, if you're running less than 200 parallel tests, one tunnel is fine; for 200 or more parallel tests, you'll need two tunnels. For more information, see [System and Network Requirements](/secure-connections/sauce-connect/system-requirements).

3. How you start your tunnel is up to you. You can run a simple Bash shell script (or PowerShell script, if you're in Windows) that simply executes the start commands as if you were starting it locally:  
  ```bash
  ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r us-west --tunnel-name $TUNNEL_NAME
  ```

Once you've established your automated loop, you should be able to kick off builds as needed, automatically.

### Long-Running Tunnels
Long-running tunnels are especially useful for large enterprise customers, who often set their tunnels to run automatically for 12-48 hours over the course of their testing. They are ideal for situations like the following:
* If you're running a high number of parallel tests (50 or more).
* If you have a test automation infrastructure that can utilize the Sauce Connect Proxy service and wish to have your Sauce Connect client component up and running for a long time (i.e., 12-48 hours).
* If you plan to share tunnels across teams.

Long-running tunnels go hand in hand with our [High Availability (HA) Setup](/secure-connections/sauce-connect/setup-configuration/high-availability), which allows you to run multiple tunnels to support a very high number of parallel tests. If you're part of a team of multiple people and/or departments running tests simultaneously on Sauce Labs, we strongly recommend utilizing long-running tunnels in HA mode. Once you (or your systems administrator) set your long-running tunnel configuration for your account on Sauce Labs, the settings will be remembered in your account and you won't have to set them again. Here are some benefits to this:

* When provisioning new user accounts, these tunnel settings will be ready and waiting for them when they log in.
* All Sauce Labs users in your organization will have immediate access to existing, launched tunnels.
* Redundancy; if a tunnel fails, tests will flow to the other tunnel(s).
* Tunnel logs can be rotated automatically and used to troubleshoot as needed.
* If the infrastructure for your site under test changes, you will have a known configuration that works. Keeping a group of tunnels alive 24/7 is generally easier than setting up new tunnels for every change that happens.

#### Launching High Availability, Long-Running Tunnels via Command Line

**Single Tunnel** &#8212; A single tunnel that you'd start from your laptop or CI/CD system would look like this on the command line:
  ```bash
  /Users/you/sc-<VERSION>-<PLATFORM>/bin/sc \
    -u $SAUCE_USERNAME -k $SAUCE_ACESS_KEY \
    --tunnel-name my-single-tunnel
  ```

**Multiple Tunnels** &#8212; A high-availability tunnel pool would look like this if it was run as part of a script or from the command line:

```sh
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name main-tunnel-pool
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name main-tunnel-pool
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name main-tunnel-pool
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name main-tunnel-pool
```

The `--tunnel-pool` flag prevents the removal of tunnels with the same name and any default tunnels, if you're using them. Jobs will be distributed across these tunnels, enabling load balancing and HA. This flag is required when running HA tunnels to allow multiple tunnels with the same name. What happens if you don't use this command? By default, colliding tunnels (i.e., tunnels with the same name) would be removed when Sauce Connect is starting up. If you start another tunnel with the same name as an existing pool without adding `--tunnel-pool`, the new tunnel would be established, but all tunnels in the pre-existing pool would be closed.

The `--tunnel-name` flag defines the tunnel name (in the above example, it's `main-tunnel-pool`). This is required so that your tests can find your tunnels. This is required to start a long-running pool of tunnels.

For more information, see the [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy).

#### Keeping Your Long-Running Tunnels Fresh

Tunnels running for an extended period of time (i.e., more than a day) are actively and continuously used for running Sauce Labs website and mobile app tests throughout their duration. That said, keeping your Sauce Connect Proxy instances up and running for weeks or longer may result in maintenance difficulties, instability or performance degradation.

To keep tunnels working their best, we recommend not letting your tunnels run for more than 24 hours. Your systems administrator would need to write a script to restart Sauce Connect Proxy clients daily or at the time of your choosing. Rolling restarts to refresh the tunnels is preferred--restarting only a portion of your tunnel pool at a time will allow for continuous testing without interruption.

:::note
If a tunnel fails or is absent, your tests will also fail. You'll be able to see this from Sauce Labs.
:::

### Combining Ephemeral and Long-Running Tunnels
If needed, you can also start a combination of Ephemeral and Long-Running tunnels (i.e., your teams aren't bound to one type or the other) provided you're staying within your concurrency limit. This may be useful if you're a large enterprise user. As an example, if you have long-running tunnels already going, you can still start up ephemeral on the side.

### Scaling Sauce Connect

If you start creating bigger and bigger builds with a high number of simultaneous test sessions, ephemeral tunnels will not work. Your tests would likely slow down because they'd be cramming into one tunnel.

In this scenario, you’d need to “scale up” by using a tunnel pool in HA mode (multiple tunnels with same tunnel name). We generally recommend switching when running more than 50 parallel test sessions. The mass number of tests will have room to run through, as test traffic will be distributed among the multiple tunnels.


## Sauce Connect Proxy Metrics
Sauce Connect Proxy has a metrics feature that you can use to monitor and measure the data and activities of your Sauce Connect Proxy client. You can access these metrics over an HTTP connection to a local server, which will return the metrics in a JSON format.

### Configuring Metrics Monitoring
As of Sauce Connect Proxy version 4.7.x, the metrics server is disabled by default. You can enable it by specifying the interface and port with the [`--metrics-address`](/dev/cli/sauce-connect-proxy/#--metrics-address) command.

```bash
--metrics-address :8000 # listens on all the interfaces' port 8080
--metrics-address 1.2.3.4:80 # listens on 1.2.3.4 port 80
```

### Viewing Performance Metrics
You can view performance metrics by using an HTTP client or web browser to access `http://{SauceConnect IP}:{metrics address}/debug/vars`.
Once you've got access, the performance metrics will typically look like this:

```java
"cmdline": ["/usr/local/bin/sc","-u","(SAUCE_USERNAME)","-k","{SAUCE_ACCESS_KEY}","-r","us-west","-i","metrics-demo"],

"http": {
            "BytesReceived":31290,
            "BytesTransmitted":1388944,
            "NumRequests":34,
            "NumResponses":34
        },
"kgp":  {
            "Connected":true,
            "LastStatusChange":1532052072,
            "RoundTripTimeMs":35,
            "ReconnectCount":0
        }
}
```

### Client Metrics Definitions
Below is a full list of performance metrics and definitions for the Sauce Connect Proxy client.

| Metric | Definition |
| :--- | :--- |
| `kgp.Connected` | Indicates whether the client is connected to the Sauce Connect Proxy back end. This field can be used for monitoring tunnel health. |
| `kgp.LastStatusChange` | A UNIX timestamp indicating the time of the last connectivity change from the client. |
| `kgp.ReconnectCount` | Number of times the connection to the Sauce Connect Proxy back end had to be re-established because of the timeout. |
| `kgp.RoundTripTimeMs` | Application layer latency over the last minute. |
| `http.BytesReceived` | Number of bytes received by the Sauce Connect Proxy client. |
| `http.BytesTransmitted` | Number of bytes transmitted by the Sauce Connect Proxy client. |
| `http.NumRequests` | Number of requests currently in flight. |
| `http.NumResponses` | Number of responses currently in flight. |

### Client Health Metrics
While Sauce Connect Proxy is running, a basic webpage with metrics is made available at `localhost:8888/debug/vars` on the host machine.
It serves a JSON blob containing a plethora of information, including the important `healthMetrics` section, which gives three vital metrics to the state of the Sauce Connect Proxy client:

| Metric | Value | Definition |
| :--- | :--- | :--- |
| `kgpIsConnected` | True/False | True if the KGP connection is currently alive and healthy, false otherwise|
| `kgpLastStatusChange` | Unix Epoch Timestamp | Timestamp of when the value for kgpIsConnected last changed |
| `kgpReconnectCount` | Integer | A running count of how many times Sauce Connect Proxy had to re-establish its KGP connection |


If you plan to run multiple instances of Sauce Connect Proxy on a single machine and wish to access the health metrics of each tunnel, then you'll need to assign a unique port to each instance of Sauce Connect Proxy that is running.

For example, if we were to start two instances of Sauce Connect Proxy on the same machine, using the following commands in the code block below, then the metrics for SCP1 would be available at `http://localhost:8001/debug/vars`. Similarly, SCP2's metrics would be available at `http://localhost:8000/debug/vars`.

```bash
./sc --u $SAUCE_USERNAME --k $SAUCE_ACCESS_KEY -r us-west --metrics-address localhost:8000 --tunnel-name SCP1
...
./sc --u $SAUCE_USERNAME --api-key $SAUCE_ACCESS_KEY -r us-west --metrics-address localhost:8001 --tunnel-name SCP2
```

### Specifying a Custom URL for Client Metrics
If you wish to customize the URL where metrics are served, you can do so by adding an entry to the host file on the machine where Sauce Connect Proxy is running and then updating the [`--metrics-address`](/dev/cli/sauce-connect-proxy/#--metrics-address) command line arguments when starting Sauce Connect Proxy.

For example, let's say we want to have the metrics available at `http://tunnelmetrics.com:8080/debug/vars`.
In order to accomplish this, add the entry `127.0.0.1 tunnelmetrics.com` to the `/etc/hosts` file where Sauce Connect Proxy is running.

```jsx title="Example Hosts File"
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
fe80::1%lo0 localhost
127.0.0.1 tunnelmetrics.com
```

Once the host file has been altered, start Sauce Connect Proxy with the added argument `--metrics-address tunnelmetrics.com:8080`. Then, on the machine hosting Sauce Connect Proxy, you will see the metrics served at `http://tunnelmetrics.com:8080/debug/vars`.

## Improving Sauce Connect Proxy Performance
During testing, your website or app may load resources (e.g. tracking services, images/videos, advertisements), which can impact page load times and even cause tests to fail.
If these resources are not needed at all for testing purposes, you can disable the traffic to improve performance.

See [How to Remove Third Party Resources](http://elementalselenium.com/tips/66-blacklist) for more information.

### Tuning Sauce Connect Proxy Traffic
If you're using Sauce Connect Proxy, the additional network hops required to access external resources have the potential to slow test execution dramatically.
When Sauce Connect Proxy is used, all the traffic is forwarded over the Sauce Connect Proxy connection.
The following flags provide fine control over the Sauce Connect Proxy tunneled traffic:
  * [`--tunnel-domains`](/dev/cli/sauce-connect-proxy/#--direct-domains)
  * [`--direct-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains)
  * [`--fast-fail-regexps`](/dev/cli/sauce-connect-proxy/#--fast-fail-regexps)

#### Tunnel Domains
[`--tunnel-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) flag allows to specify requests which should always be forwarded from the Sauce Labs hosted browser to customer-side over the Sauce Connect Proxy connection.
Starting Sauce Connect Proxy with [`--tunnel-domains`](/dev/cli/sauce-connect-proxy/#--direct-domains) implies that requests that don't match "tunnel domains" will be forwarded over the public internet.
This is the recommended option for the best performance since it minimizes the expensive tunnelled traffic and uses it only for the internal domains that are not publicly available.

#### Direct Domains
[`--direct-domains`](/dev/cli/sauce-connect-proxy/#--direct-domains) flag allows to specify requests which should always be forwarded from the Sauce Labs browser to their origin server over the public internet.
Starting Sauce Connect Proxy with [`--direct-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) implies that requests that don't match "direct domains" will be forwarded to customer-side over the Sauce Connect Proxy connection.
This option, in general, is not recommended for performance, with the exception of the cases where known large requests can be forwarded to the public internet.

#### Fast-fail Domains

[`--fast-fail-regexps`](/dev/cli/sauce-connect-proxy/#--fast-fail-regexps) flag allows to specify requests which should be immediately dropped.
Unlike tunnel/direct domains, this option takes regular expressions and provides a powerful way to disable unwanted traffic.
It can also be used to simulate non-loading of scripts, styles, or other resources.

#### Configuring Tunnel or Direct Domains
* Use only the domain name. Do not precede it with the scheme like `http://` or `https://`.
  * Example: `mydomain.com`
* Use wildcards to include subdomains by prefix domain name with `.`
  * Example: `.mydomain.com` will include `sub.mydomain.com` and `sub1.mydomain.com` but not `sub.myotherdomain.com`
* See [`Formatting domains for CLI`](/dev/cli/sauce-connect-proxy/#formatting-domains)
* Configuring domains in [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/)
  ```yaml
  ---
  # this will include all subdomains of example.com as well as dev.httpbin.org
  tunnel-domains:
  - ".example.com"
  - "dev.httbin.org"
  ```

#### Configuring Domain Regular Expressions (--fast-fail-regexps)
* Quote to avoid shell expansion
* Make sure to use correct regular expressions
  * Example: `*.mydomain.com` is incorrect and `.*.mydomain.com` is correct regular expression
* Always use quotes to avoid shell expansion
  * Example: `--fast-fail-regexps "*.mydomain.com"` instead of `--fast-fail-regexps *.mydomain.com`
* Configuring multiple regexps for CLI follows formatting rules similar to [`Formatting domains for CLI`](/dev/cli/sauce-connect-proxy/#formatting-domains)
  * Comma-separated
  * No spaces between each regexp
  * Example: `--fast-fail-regexp ".*.mydomain.*,.*.example.com"`
* Configuring regexps in [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/)
  ```yaml
  ---
  fast-fail-regexps:
  - ".*mydomain.*"
  - ".*.example.com"
  ```

## Service Management Tools

### Running systemd for Linux

For Linux users, systemd is a service management tool that may facilitate Sauce Connect Proxy tunnel monitoring, system startup/shutdown, and rolling restarts.

When used to perform rolling restarts, systemd allows time for Sauce Connect Proxy to clean up on exit, making it a more fluid experience. This is useful in scenarios where you want to kill and quickly restart a new Sauce Connect Proxy instance; you can use systemd to schedule and control the timing of shutdown and clean-up processes.

Here's how to set it up:

1. Create a system user to run the Sauce Connect Proxy.
  ```bash
  sudo adduser --system --no-create-home --group --disabled-login --home /nonexistent sauceconnect
  ```

2. [Download Sauce Connect Proxy](/secure-connections/sauce-connect/installation/).
  ```bash
  wget https://saucelabs.com/downloads/sc-<VERSION>-linux.tar.gz
  ```

3. Untar the Sauce Connect Proxy file.
  ```bash
  tar -zxvf sc-<VERSION>-linux.tar.gz
  ```

4. Copy the Sauce Connect Proxy file into a dedicated directory.
  ```bash
  cp sc-<VERSION>-linux/bin/sc /usr/local/bin/sc
  ```

5. Copy the 'systemd' config files.
  ```bash
  cp sc-<VERSION>-linux/config_examples/systemd/ /etc/systemd/system
  ```

6. In the system directory, edit the service file named `sc@.service`.
  * In the `User=nobody` and `Group=nobody` lines, you will need to replace nobody the with the name of the system user you created in Step 1.
  * In the `Environment` lines, you will need to replace 'username' and the placeholder string with your Sauce Labs username and access key.

```js
[Unit]
Description=Sauce Connect worker service on port %i
PartOf=sc.service
ReloadPropagatedFrom=sc.service

[Service]
  Type=simple
  User=nobody
  Group=nobody
  WorkingDirectory=/tmp
  LimitNOFILE=8192
  Restart=always

  # Set those to match your Saucelabs credentials
  Environment=SAUCE_USERNAME=username
  Environment=SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

  ExecStart = /usr/local/bin/sc \
                --logfile - \
                --pidfile "/tmp/sauceconnect_%i.pid" \
                --region us-west \
                --se-port "%i" \
                --tunnel-pool
  # Not needed with systemd
  ExecStartPost = /bin/rm -f /tmp/sauceconnect_%i.pid

[Install]
WantedBy=multi-user.target
```

7. Create a directory `sc.service.wants` in `/etc/systemd/system`. You'll have to create symbolic links inside this directory to set up new instances of Sauce Connect Proxy. For example, if you'd like to have two Sauce Connect Proxy instances listening on `port 8000` and `8001`, your script would look something like this.
  ```bash
  sudo cd /etc/systemd/system/
  sudo mkdir -p ./sc.service.wants
  sudo ln -s /etc/systemd/system/sc@.service ./sc.service.wants/sc@8000.service
  sudo ln -s /etc/systemd/system/sc@.service ./sc.service.wants/sc@8001.service
  ```

8. Reload the service file.
  ```bash
  sudo systemctl daemon-reload
  ```

9. Start the service.
  ```bash
  sudo systemctl start sc
  ```

10. Check the status of the service.
  ```bash
  sudo systemctl status sc
  ```

11. You can also check the status of the individual instances.
  ```bash
  sudo systemctl status 'sc@*'
  ```

12. You can stop the service with this command.
  ```bash
  sudo systemctl stop sc
  ```

### Running NSSM for Windows
If you haven't yet, download the latest version of Sauce Connect Proxy (see [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation).

1. Download [NSSM (Non-Sucking Service Manager)](http://nssm.cc/download), a free Microsoft Windows Service manager utility that manages background and foreground services and processes. Please note that this is a third-party tool, not a product of Sauce Labs.
2. Once you've downloaded NSSM, expand the program.
3. Navigate to the NSSM directory via the command line and create the service with the following command:
  ```bash
  nssm install SauceConnect "C:/SauceConnect/bin/sc.exe" "-u " "-k "
  ```
4. Open the Windows services manager and ensure the new service (named SauceConnect) is set to start manually.
5. Create a batch file (let's call it restartSC.bat) that contains the following:
  ```bash
  NET STOP SauceConnect
  sleep 30
  NET START SauceConnect
  ```
6. Open the Windows Task Scheduler and set it to call `restartSC.bat` once a day or at any other period of time.

Once the above steps are in place, the Sauce Connect Proxy tunnel should restart itself daily at the time of your choosing.

When using NSSM, we recommend changing the shutdown timeout from milliseconds to several minutes. This will prevent NSSM from shutting down the Sauce Connect Proxy client while active jobs are still running through it. For information, refer to the [NSSM README page](https://github.com/rticommunity/nssm/blob/master/README.txt).



## Using the Selenium Relay

The Selenium Relay is an optional configuration, built into Sauce Connect Proxy, that acts as a listener for Selenium commands. This feature is disabled by default. When enabled, it sends all inbound and outbound Selenium commands through an encrypted Sauce Connect tunnel (instead of HTTP/HTTPS) to the Sauce Labs browser cloud. Your tests would not use a [Sauce Labs OnDemand endpoint](/basics/data-center-endpoints/#data-center-endpoints).

Leveraging Sauce Connect Proxy as a Selenium Relay is not recommended because:
* Added traffic can impact performance of the server where Sauce Connect Proxy is running.
* Selenium Relay itself is an extra dependency that can impact test performance.
* It's not compatible with our [HA Setup](/secure-connections/sauce-connect/setup-configuration/high-availability) because all traffic must be routed through a specific listener.

For best test performance, we recommend [sticking with HTTPS](#recommended-connecting-directly-to-sauce-labs-over-https) to connect with Sauce Labs or if you use a corporate proxy to control outbound traffic.

### Setting Up Your Tests to Use the Selenium Relay

The Selenium Relay should only be used in rare scenarios, such as:
* Running tests written in Python that can't use HTTPS due to a known issue with the Selenium Python bindings.
* Allowing only machines in a DMZ to have access to Sauce Labs.
* Ensuring that all Selenium commands are routed through a Sauce Connect tunnel.

To enable the Selenium Relay, set the listener port with the [`-P (--se-port)`](/dev/cli/sauce-connect-proxy/#--se-port) command and substitute the name of the server where Sauce Connect Proxy is installed for ondemand.saucelabs.com:
```bash
public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@mymachine.mydomain.com:4445/wd/hub";
```

If you have Sauce Connect Proxy installed on your local machine, you would use `localhost` for the name of the server:
```bash
public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@localhost:4445/wd/hub";
```

### Recommended: Connecting Directly to Sauce Labs Over HTTPS
This example shows how you would specify the connection to Sauce Labs over HTTPS in a Java test script:

```bash
public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";
```

### Routing Protractor Traffic through Sauce Connect Proxy
Sauce Connect Proxy sends all traffic&#8212;including test commands&#8212;through the tunnel. Typically, your Selenium commands are sent to Sauce's servers over the standard internet, and only browser requested traffic goes via Sauce Connect Proxy. In some restricted networks, access to Sauce Labs servers isn't available over `port 443` on the standard internet. In cases like these, sending all traffic through the Sauce Connect Proxy tunnel is the easiest way to get your tests running.

You achieve this by pointing your Remote WebDriver at the address and port of the Sauce Connect Proxy tunnel, instead of 'ondemand.saucelabs.com'. You can set this port by passing the `--se-port` option to Sauce Connect Proxy. For example, with `--se-port 4445`, you'd use `localhost:4445/wd/hub`.

When using [Protractor](https://github.com/angular/protractor), the standard Sauce Connect Proxy configuration doesn't allow for alternative endpoint addresses. Instead, you can use the sauceSeleniumAddress config value to set a custom Selenium address:

```java
exports.config = {
      sauceSeleniumAddress: 'localhost:4445/wd/hub',
      sauceUser: process.env.SAUCE_USERNAME,
      sauceKey: process.env.SAUCE_ACCESS_KEY
    }
```
