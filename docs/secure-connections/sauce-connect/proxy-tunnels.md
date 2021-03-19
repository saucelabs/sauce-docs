---
id: proxy-tunnels
title: Using Sauce Connect Proxy Tunnels
sidebar_label: Proxy Tunnels
---
## Sauce Connect Proxy Tunnel Management
You can manage and monitor all Sauce Connect Proxy tunnel activity from the **Tunnels** menu. You can also launch and stop tunnels from this page.

Tunnel Information on Your Sauce Labs Dashboard
The Tunnels page displays useful information, such as the number of active tunnels, tunnel status, specific attributes for each tunnel.

Type	The icon shows whether the tunnel is a Sauce Connect Proxy tunnel, or an IPSec VPN tunnel.
State	The icon shows whether the tunnel is running or stopped.
Tunnel Name	The name of the tunnel. This is the "tunnel identifier" used when starting the Sauce Connect tunnel.
Client Hostname	The name of the machine where the Sauce Connect Proxy client is running.
Owner	The name of the account that is running the tunnel.
Sharing	Indicates whether or not the tunnel is shared.
Duration	The amount of time the tunnel has been running.
Best Practice: Use a Single Sauce Connect Tunnel or Tunnel Pool for Each Test Suite or Build
If you're using Sauce Connect to build a tunnel between your application and the Sauce Labs testing infrastructure, we recommend using a single Sauce Connect instance for each test suite or build. Your test automation framework should launch Sauce Connect before the test suite is triggered and shut it down when the suite finishes.

If you're using a continuous integration platform like Jenkins, you can use the Sauce OnDemand plugin to launch and tear down your Sauce Connect instance.For more information, see [Setting Up CI Platform Integrations with Sauce Plugins](https://wiki.saucelabs.com/display/DOCS/Setting+Up+CI+Platform+Integrations+with+Sauce+Plugins)

## How to Start and Stop Sauce Connect Tunnels (Startup and Teardown)
Every Sauce Connect tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed. As a best practice, we recommend you create a new tunnel for each test suite or build and tear it down at the end of your test.

### Starting New Sauce Connect Tunnels
**Start a New Tunnel via Command-Line**
You can launch a new tunnel from the command line of the machine where the Sauce Connect Proxy client is installed by copying the **Run Command**, which will include your authentication credentials. You can also add any Sauce Connect Proxy parameters you want to use in configuring your tunnel.

See [Basic Sauce Connect Proxy Setup](https://wiki.saucelabs.com/display/DOCS/Basic+Sauce+Connect+Proxy+Setup) for full instructions on launching tunnels.

### Stop an Individual Tunnel via Command-Line
Once Sauce Connect has been terminated (typically via ctrl-c), a call will be made from Sauce Connect to the REST API with instructions to terminate the Tunnel VM. Sauce Connect will continue to poll the REST API until the Tunnel VM has been halted and deleted. 

NOTE: If you are using the Sauce Connect High Availability Configuration and attempt to terminate a running test with ctrl-c, you will see a message that Sauce Connect will not terminate until tests have completed. If you want to force Sauce Connect to terminate before the test finishes, enter ctrl-c again to force it to quit.

Stop an Individual Tunnel from the User Interface
From the Tunnels page of Sauce Labs, click Stop under the Actions column in the tunnel information table.

Stop All Tunnels in Your Account from the User Interface
From Tunnels page of Sauce Labs, click Stop My Tunnels in the top-right corner of the page.

Stop an Individual Tunnel via the Command Line
To stop an individual tunnel via the command line/prompt, you must send some sort of KILL signal to the running Process ID (pid).

Start the Sauce Connect process

$ sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
Fetch and Save the process IDs for later use:

$ ps aux | grep bin/sc
Output:

$SAUCE_USERNAME   38312   0.1  0.1  4461780  20084 s000  S+    2:58PM   0:00.33 sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
Send some sort of KILL signal to each Process ID (pid)

$ kill -2 38312
NOTE: Windows has no "signals" command the way Linux/Unix/MacOS does, instead they use TaskKill iirc, for example: taskill /PID 1234

Stopping Multiple Tunnels via the Command Line
Before you attempt to stop/teardown all your running tunnels, please understand the following workflow:

Here is an example using Linux commands:

ps aux | grep sc: Lists matching process(es),
| grep -v grep : Filters out the grep process itself,
| awk '{print $2}': Grabs the pid,
| xargs kill -9: Passes it to kill -9.
NOTE:  xargs kill -9 will immediately disrupt all jobs currently running through that tunnel.  If you wish to interrupt the program in order to gracefully shutdown the tunnels use the xargs kill -2 signal instead. Sauce Labs recommends first trying this command without xargs kill -9 to ensure you don't unnecessarily delete adjacent running processes.

Read the kill command manual to find out more information about acceptable signals and parameters.

Example Linux command of killing all running tunnels
$ ps aux | grep sc | grep -v grep | awk  '{print $2}' | xargs kill -9




* [Sauce Connect Proxy Tunnel Management](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Tunnel+Management?src=sidebar)
    * [How to Start and Stop Tunnels](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365900&src=sidebar)
    * [Performance Metrics](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Performance+Metrics?src=sidebar)
    * [Improving Performance](https://wiki.saucelabs.com/display/DOCS/Improving+Sauce+Connect+Proxy+Performance?src=sidebar)
    * [Service Management Tools](https://wiki.saucelabs.com/display/DOCS/Monitoring+Sauce+Connect+Proxy+with+Service+Management+Tools?src=sidebar)
    * [Running Sauce Connect as a Microsoft Windows Service](https://wiki.saucelabs.com/display/DOCS/Running+Sauce+Connect+Proxy+as+a+Microsoft+Windows+Service?src=sidebar)
    * [Proxy Tunnel Types: Ephemeral, Long-Running, Combination](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Tunnel+Types%3A+Ephemeral%2C+Long-Running%2C+Combination?src=sidebar)
    * [Using the Selenium Relay](https://wiki.saucelabs.com/display/DOCS/Using+the+Selenium+Relay+with+Sauce+Connect+Proxy?src=sidebar)
