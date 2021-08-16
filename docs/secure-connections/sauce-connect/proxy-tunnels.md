---
id: proxy-tunnels
title: Using Tunnels
sidebar_label: Using Tunnels
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tunnel Management
You can manage and monitor all Sauce Connect Proxy tunnel activity from the **Tunnels** menu. You can also launch and stop tunnels from this page.

### Tunnel Information on Your Sauce Labs Dashboard
The Tunnels page displays useful information, such as the number of active tunnels, tunnel status, specific attributes for each tunnel.

| Column | Description |
| :--- | :--- |
| Type | The icon shows whether the tunnel is a Sauce Connect Proxy tunnel, or an IPSec VPN tunnel. |
| State | The icon shows whether the tunnel is running or stopped. |
| Tunnel Name | The name of the tunnel. This is the "tunnel identifier" used when starting the Sauce Connect tunnel. |
| Client Hostname | The name of the machine where the Sauce Connect Proxy client is running. |
| Owner | The name of the account that is running the tunnel. |
| Sharing | Indicates whether or not the tunnel is shared. |
| Duration | The amount of time the tunnel has been running. |

### Use a Single Tunnel or Tunnel Pool for Each Test Suite or Build
If you're using Sauce Connect Proxy to build a tunnel between your application and the Sauce Labs testing infrastructure, we recommend using a single Sauce Connect Proxy instance for each test suite or build. Your test automation framework should launch Sauce Connect Proxy before the test suite is triggered and shut it down when the suite finishes.

If you're using a continuous integration platform like Jenkins, you can use the Sauce OnDemand plugin to launch and tear down your Sauce Connect Proxy instance. For more information, see [Setting Up CI Platform Integrations with Sauce Plugins](/ci)

## Starting and Stopping Tunnels
Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed. As a best practice, we recommend you create a new tunnel for each test suite or build and tear it down at the end of your test. For information about user roles and permissions, see [User Roles](/basics/acct-team-mgmt/managing-user-info).

### Starting a New Tunnel via Command Line
You can launch a new tunnel from the command line of the machine where the Sauce Connect Proxy client is installed by copying the **Run Command**, which will include your authentication credentials. You can also add any Sauce Connect Proxy parameters you want to use in configuring your tunnel.

See [Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for full instructions on launching tunnels.

### Stopping an Individual Tunnel via the Command Line
Once Sauce Connect has been terminated (typically via `ctrl-c`), a call will be made from Sauce Connect to the REST API with instructions to terminate the Tunnel VM. Sauce Connect will continue to poll the REST API until the Tunnel VM has been halted and deleted.

:::note
If you are using the [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability) and attempt to terminate a running test with `ctrl-C`, you will see a message that Sauce Connect Proxy will not terminate until tests have completed. If you want to force Sauce Connect Proxy to terminate before the test finishes, enter 'ctrl-C' again to force it to quit.
:::

### Stopping an Individual Tunnel in Sauce Labs
In Sauce Labs, in the left navigation panel, click **Tunnels**. On the **Tunnels** page, the tunnel information table, click **Stop** in the **Actions** column.

### Stopping All Tunnels in Your Account in Sauce Labs
On the Tunnels page, click **Stop My Tunnels**.

### Stopping an Individual Tunnel via the Command Line**
To stop an individual tunnel via the command line/prompt, you must send some sort of `KILL` signal to the running `Process ID` (pid).

1. Start the Sauce Connect Proxy process.

```
    $ sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
```

2. Fetch and Save the process IDs for later use.

```
$ ps aux | grep bin/sc
```

Output:
```
$SAUCE_USERNAME   38312   0.1  0.1  4461780  20084 s000  S+    2:58PM   0:00.33 sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
```

3. Send a `KILL` signal to each `Process ID` (pid):

```
$ kill -2 38312
```

:::note Windows Users
Windows has no "signals" command the way Linux/Unix/MacOS does, instead they use TaskKill iirc, for example: `taskill /PID 1234`.
:::

### Stopping Multiple Tunnels via the Command Line
Before you attempt to stop/teardown all your running tunnels, please understand the following workflow:

Here is an example using Linux commands:

* `ps aux | grep sc`: Lists matching process(es),
* `| grep -v grep`: Filters out the grep process itself,
* `| awk '{print $2}'`: Grabs the `pid`,
* `| xargs kill -9`: Passes it to `kill -9`.

:::warning
`xargs kill -9` will immediately disrupt all jobs currently running through that tunnel. If you wish to interrupt the program in order to gracefully shutdown the tunnels use the `xargs kill -2` signal instead.

**Sauce Labs recommends first trying this command without `xargs kill -9` to ensure you don't unnecessarily delete adjacent running processes.**

For more information about acceptable signals and parameters, see the [Linux kill command manual](http://linuxcommand.org/lc3_man_pages/kill1.html).
:::

```jsx title="Example command for killing all running proxy tunnels"
$ ps aux | grep sc | grep -v grep | awk  '{print $2}' | xargs kill -9
```

## Performance Metrics
Sauce Connect Proxy has a performance metrics feature that you can use to monitor and measure the data and activities of your Sauce Connect Proxy client. You can access these metrics over an HTTP connection to a local expvar server, which will display the metrics as a JSON file.

### Configuring Performance Metrics Monitoring
By default, the `expvar server` listens on 'localhost:8888', but you can change the interface and port with the `--metrics-address` command.

```
--metrics-address :8000 # listens on all the interfaces' port 8080
--metrics-address 1.2.3.4:80 # listens on 1.2.3.4 port 80
```

### Viewing Performance Metrics
You can view performance metrics by using an HTTP client or web browser to access 'http://{SauceConnect IP or Localhost:8888}/debug/vars'. Once you've got access, the performance metrics will typically look like this:

```
"cmdline": ["/Users/<USER_ID>/Downloads/sc-<VERSION>-<PLATFORM>/bin/sc","-u","User","-k","<ACCESS_KEY>"],

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
        },
"memstats": {
            "Alloc":1630808,
            "TotalAlloc":10647440,
            "Sys":9509112,
            "Lookups":55,
            "Mallocs":220719,
            "Frees":204517,
            "HeapAlloc":1630808,
            "HeapSys":5668864,
            "HeapIdle":1753088,
            "HeapInuse":3915776,
            "HeapReleased":270336,
            "HeapObjects":16202,
            "StackInuse":622592,
            "StackSys":622592,
            "MSpanInuse":74024,
            "MSpanSys":98304,
            "MCacheInuse":4800,
            "MCacheSys":16384,
            "BuckHashSys":1446894,
            "GCSys":436224,
            "OtherSys":1219850,
            "NextGC":4194304,
            "LastGC":1532052496921727000,
            "PauseTotalNs":753000,
            "PauseNs":[...]
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
While Sauce Connect Proxy is running, a basic webpage with metrics is made available at `localhost:8888/debug/vars` on the host machine. It serves a JSON blob containing a plethora of information, including the important `healthMetrics` section, which gives three vital metrics to the state of the Sauce Connect Proxy client:

| Metric | Value | Definition |
| :--- | :--- | :--- |
| `kgpIsConnected` | True/False | True if the KGP connection is currently alive and healthy, false otherwise|
| `kgpLastStatusChange` | Unix Epoch Timestamp | Timestamp of when the value for kgpIsConnected last changed |
| `kgpReconnectCount` | Integer | A running count of how many times Sauce Connect Proxy had to re-establish its KGP connection |


```jsx title="Example Raw Output"
{
"cmdline": ["/Users/acampbell/Documents/sc-4.4.6-osx/bin/sc","-u","******","-k","******","--pidfile","currentA","--se-port","4445"],
"healthMetrics": {"kgpIsConnected": true, "kgpLastStatusChange": 1492568535, "kgpReconnectCount": 0},
"memstats": {"Alloc":1891072,"TotalAlloc":11894816,"Sys":10590456,"Lookups":23,"Mallocs":171948,"Frees":155551,"HeapAlloc":1891072,"HeapSys":6619136,"HeapIdle":2277376,"HeapInuse":4341760,"HeapReleased":0,"HeapObjects":16397,"StackInuse":720896,"StackSys":720896,"MSpanInuse":82536,"MSpanSys":98304,"MCacheInuse":4800,"MCacheSys":16384,"BuckHashSys":1446133,"GCSys":471040,"OtherSys":1218563,"NextGC":4194304,"LastGC":1492568665306899183,"PauseTotalNs":449320,"PauseNs":[124228,169728,73016,38885,43463,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"PauseEnd":[1492568520772418515,1492568575257556530,1492568624109846929,1492568644101261105,1492568665306899183,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"NumGC":5,"NumForcedGC":0,"GCCPUFraction":0.000017483197350069177,"EnableGC":true,"DebugGC":false,"BySize":[{"Size":0,"Mallocs":0,"Frees":0},{"Size":8,"Mallocs":638,"Frees":602},{"Size":16,"Mallocs":67329,"Frees":62319},{"Size":32,"Mallocs":31514,"Frees":23432},{"Size":48,"Mallocs":14514,"Frees":13882},{"Size":64,"Mallocs":11311,"Frees":10957},{"Size":80,"Mallocs":7748,"Frees":7476},{"Size":96,"Mallocs":3122,"Frees":2969},{"Size":112,"Mallocs":1350,"Frees":1267},{"Size":128,"Mallocs":1133,"Frees":1079},{"Size":144,"Mallocs":665,"Frees":622},{"Size":160,"Mallocs":1033,"Frees":686},{"Size":176,"Mallocs":713,"Frees":663},{"Size":192,"Mallocs":2538,"Frees":2524},{"Size":208,"Mallocs":162,"Frees":137},{"Size":224,"Mallocs":445,"Frees":295},{"Size":240,"Mallocs":30,"Frees":27},{"Size":256,"Mallocs":283,"Frees":254},{"Size":288,"Mallocs":436,"Frees":395},{"Size":320,"Mallocs":274,"Frees":50},{"Size":352,"Mallocs":622,"Frees":590},{"Size":384,"Mallocs":50,"Frees":36},{"Size":416,"Mallocs":167,"Frees":95},{"Size":448,"Mallocs":133,"Frees":84},{"Size":480,"Mallocs":20,"Frees":17},{"Size":512,"Mallocs":65,"Frees":62},{"Size":576,"Mallocs":335,"Frees":272},{"Size":640,"Mallocs":91,"Frees":83},{"Size":704,"Mallocs":280,"Frees":263},{"Size":768,"Mallocs":216,"Frees":215},{"Size":896,"Mallocs":125,"Frees":80},{"Size":1024,"Mallocs":106,"Frees":43},{"Size":1152,"Mallocs":424,"Frees":173},{"Size":1280,"Mallocs":56,"Frees":44},{"Size":1408,"Mallocs":59,"Frees":39},{"Size":1536,"Mallocs":105,"Frees":80},{"Size":1792,"Mallocs":30,"Frees":19},{"Size":2048,"Mallocs":79,"Frees":53},{"Size":2304,"Mallocs":164,"Frees":154},{"Size":2688,"Mallocs":25,"Frees":18},{"Size":3072,"Mallocs":10,"Frees":4},{"Size":3200,"Mallocs":0,"Frees":0},{"Size":3456,"Mallocs":4,"Frees":1},{"Size":4096,"Mallocs":186,"Frees":155},{"Size":4864,"Mallocs":153,"Frees":144},{"Size":5376,"Mallocs":5,"Frees":4},{"Size":6144,"Mallocs":151,"Frees":144},{"Size":6528,"Mallocs":0,"Frees":0},{"Size":6784,"Mallocs":1,"Frees":0},{"Size":6912,"Mallocs":0,"Frees":0},{"Size":8192,"Mallocs":5,"Frees":5},{"Size":9472,"Mallocs":0,"Frees":0},{"Size":9728,"Mallocs":0,"Frees":0},{"Size":10240,"Mallocs":0,"Frees":0},{"Size":10880,"Mallocs":4,"Frees":2},{"Size":12288,"Mallocs":0,"Frees":0},{"Size":13568,"Mallocs":0,"Frees":0},{"Size":14336,"Mallocs":0,"Frees":0},{"Size":16384,"Mallocs":0,"Frees":0},{"Size":18432,"Mallocs":0,"Frees":0},{"Size":19072,"Mallocs":0,"Frees":0}]}
}
```


If you plan to run multiple instances of Sauce Connect Proxy on a single machine and wish to access the health metrics of each tunnel, then you''ll need to assign a unique port to each instance of Sauce Connect Proxy that is running.

For example, if we were to start two instances of Sauce Connect Proxy on the same machine, using the following commands in the code block below, then the metrics for SCP1 would be available at `http://localhost:8001/debug/vars`. Similarly, SCP2's metrics would be available at `http://localhost:8000/debug/vars`.

```
>./sc --user *** --api-key *** --metrics-address localhost:8000 --se-port 4445 --tunnel-identifier SCP1 --pidfile SCP1
>...
>./sc --user *** --api-key *** --metrics-address localhost:8001 --se-port 4446 --tunnel-identifier SCP2 --pidfile SCP2
```

:::note
If you start multiple instances of Sauce Connect Proxy without assigning unique ports, this would not affect their normal operations, however, only the first instance of Sauce Connect Proxy started to the duplicated port would be available.
:::

### Specifying a Custom URL for Client Metrics
If you wish to customize the URL where metrics are served, you can do so by adding an entry to the host file on the machine where Sauce Connect Proxy is running and then updating the `--metrics-address` command line arguments when starting Sauce Connect Proxy.

For example, let's say we want to have the metrics available at `http://tunnelmetrics.com:8080/debug/vars`. In order to accomplish this, add the entry `127.0.0.1 tunnelmetrics.com` to the host file where Sauce Connect Proxy is running.

```jsx title="Example Host File"
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

## Improving Performance
During testing, your website or application may load resources (e.g., tracking services, images/videos, advertisements), which can impact page load times and even cause tests to fail. If these external assets are publicly available on the Internet, then they can be cached to speed up requests. If these are not needed at all for testing purposes, you can disable or redirect traffic to improve performance.

### Disable Traffic to External Resources
You can improve your overall test performance by disabling these third-party resource calls. If you're using Sauce Connect Proxy, the additional network hops required to access external resources has the potential to slow test execution dramatically. To retrieve resources directly, you can use the `--tunnel-domains` and `--direct-domains` flags to control which domains Sauce Connect will access during the test. To blocklist traffic so it is immediately dropped, use the `--fast-fail-regexps` command.

See the following for more information:

* [Sauce Connect Proxy Command Line Quick Reference Guide](/dev/cli/sauce-connect-proxy)
* [How to Remove Third Party Resources](http://elementalselenium.com/tips/66-blacklist) by Dave Haeffner, Elemental Selenium

### Be Aware of How Sauce Connect Proxy Caches Traffic
By default, Sauce Connect Proxy will cache all traffic with SSL Bumping (see [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication)). Caching of resources takes place on the Sauce Labs side, resulting in faster test execution.

If you're in a situation where you have to manually disable SSL bumping (`--no-ssl-bump-domains` command), be aware the Sauce Connect Proxy will no longer be able to cache SSL-encrypted traffic, possibly impacting your test performance. If you're running multiple tests that access the same external resources, you can improve performance by having those tests all use the same tunnel because Sauce Connect Proxy will cache all HTTP and HTTPS traffic.

## Service Management Tools
For Linux users, systemd and upstart are service management tools that facilitate Sauce Connect Proxy tunnel monitoring, system startup/shutdown, and rolling restarts.

When used to perform rolling restarts, systemd and upstart allow time for Sauce Connect Proxy to clean up on exit, making it a more fluid experience. This is useful in scenarios where you want to kill and quickly restart a new Sauce Connect Proxy instance; you can use systemd and upstart to schedule and control the timing of shutdown and clean-up processes.

### Setting Up systemd
1. Create a system user to run the Sauce Connect Proxy.

```
sudo adduser --system --no-create-home --group --disabled-login --home /nonexistent sauceconnect
```

2. Download Sauce Connect Proxy.

```
wget https://saucelabs.com/downloads/sc-<VERSION>-linux.tar.gz
```

3. Untar the Sauce Connect Proxy file.

```
tar -zxvf sc-<VERSION>-linux.tar.gz
```

4. Copy the Sauce Connect Proxy file into a dedicated directory.

```
cp sc-<VERSION>-linux/bin/sc /usr/local/bin/sc
```

5. Copy the 'systemd' config files.

```
cp sc-<VERSION>-linux/config_examples/systemd/ /etc/systemd/system
```

6. In the system directory, edit the service file named `sc@.service`.
  * In the `User=nobody` and `Group=nobody` lines, you will need to replace nobody the with the name of the system user you created in Step 1.
  * In the `Environment` lines, you will need to replace 'username' and the placeholder string with your Sauce Labs username and access key.

```
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
                --se-port "%i" \
                --no-remove-colliding-tunnels
  # Not needed with systemd
  ExecStartPost = /bin/rm -f /tmp/sauceconnect_%i.pid

[Install]
WantedBy=multi-user.target
```

7. Create a directory `sc.service.wants` in `/etc/systemd/system`. You'll have to create symbolic links inside this directory to set up new instances of Sauce Connect Proxy. For example, if you'd like to have two Sauce Connect Proxy instances listening on `port 8000` and `8001`, your script would look something like this.

```
sudo cd /etc/systemd/system/
sudo mkdir -p ./sc.service.wants
sudo ln -s /etc/systemd/system/sc@.service ./sc.service.wants/sc@8000.service
sudo ln -s /etc/systemd/system/sc@.service ./sc.service.wants/sc@8001.service
```

8. Reload the service file.

```
sudo systemctl daemon-reload
```

9. Start the service.

```
sudo systemctl start sc
```

10. Check the status of the service.

```
sudo systemctl status sc
```

11. You can also check the status of the individual instances.

```
sudo systemctl status 'sc@*'
```

12. You can stop the service with this command.

```
sudo systemctl stop sc
```

### Setting Up 'upstart'
1. Navigate to your `/local/bin` directory where you want to install Sauce Connect Proxy.

```
cd /usr/local/bin
```

2. Download Sauce Connect Proxy.

```
wget https://saucelabs.com/downloads/sc-<VERSION>-linux.tar.gz
```

3. Untar the Sauce Connect Proxy file.

```
tar -zxvf sc-<VERSION>-linux.tar.gz
```

4. Copy the Sauce Connect Proxy file into a dedicated directory.

```
cp sc-<VERSION>-linux/bin/sc
```

5. Make sure Sauce Connect Proxy is located in the correct directory.

```
ls /usr/local/bin/sc
```

6. Change to the `/etc/init` directory.

```
cd /etc/init
```

7. In the `/etc/init` directory, create a file `sc.conf` with these contents.
Change the username and access key in the file to match your own.  

```jsx title="sc.conf example"
#
#This Upstart config expects that Sauce Connect is installed at
#/usr/local/bin/sc. Edit that path if it is installed somewhere else.
#
#Copy this file to /etc/init/sc.conf, and do:
#
# $ sudo initctl reload-configuration
#
#Then you can manage SC via the usual upstart tools, e.g.:
#
#$ sudo start sc
#$ sudo restart sc
#$ sudo stop sc
#$ sudo status sc
#
start on filesystem and started networking
stop on runlevel 06

respawn
respawn limit 15 5

#Wait for tunnel shutdown when stopping Sauce Connect.
kill timeout 120

#Bump maximum number of open files/sockets.
limit nofile 8192 8192

#Make Sauce Connect output go to /var/log/upstart/sc.log.
console log

env LOGFILE="/tmp/sc_long.log"
env PIDFILE="/tmp/sc_long.pid"
env SAUCE_USERNAME="CHANGEME" # XXX
env SAUCE_ACCESS_KEY="CHANGEME" # XXX

post-start script
  # Save the pidfile, since Sauce Connect might remove it before the
  # post-stop script gets a chance to run.
  n=0
  max_tries=30
  while [ $n -le $max_tries ]; do
    if [ -f $PIDFILE ]; then
      cp $PIDFILE ${PIDFILE}.saved
      break
    fi
    n=$((n+1))
    [ $n -ge $max_tries ] && exit 1
    sleep 1
  done
end script

post-stop script
  # Wait for Sauce Connect to shut down its tunnel.
  n=0
  max_tries=30
  pid="$(cat ${PIDFILE}.saved)"
  while [ $n -le $max_tries ]; do
    kill -0 $pid || break
    n=$((n+1))
    [ $n -ge $max_tries ] && exit 1
    sleep 1
  done
end script

setuid nobody
setgid nogroup

chdir /tmp

exec /usr/local/bin/sc -l $LOGFILE --pidfile $PIDFILE
```

8. Reload the service.

```
sudo initctl reload-configuration
```

9. Start the service.

```
sudo start sc
```

10. Check the status of the service.

```
sudo status sc
```

11. You can stop the service with this command.

```
sudo stop sc
```

## Running as a Microsoft Windows Service
If you haven't yet, download the latest version of Sauce Connect Proxy (see [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation).

1. Download [NSSM (Non-Sucking Service Manager)](http://nssm.cc/download), a free Windows Service manager utility that manages background and foreground services and processes. Please note that this is a third-party tool, not a product of Sauce Labs.

2. Once you've downloaded NSSM, expand the program.

3. Navigate to the NSSM directory via the command line and create the service with the following command:
`nssm install SauceConnect "C:/SauceConnect/bin/sc.exe" "-u " "-k "`

4. Open the Windows services manager and ensure the new service (named SauceConnect) is set to start manually.

5. Create a batch file (let's call it restartSC.bat) that contains the following:

```
NET STOP SauceConnect
sleep 30
NET START SauceConnect
```

6. Open Windows scheduler and set it to call `restartSC.bat` once a day.

Once the above steps are in place, the Sauce Connect Proxy tunnel should restart itself daily at the time of your choosing.

## Security Considerations with Tunnel Config

:::warning
If the SC client is running on a multi-user system, we recommend using config files or environment variables instead of command line arguments to hide sensitive information like [`--api-key`](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/index.html#--api-key-string) and proxy credentials so they aren't visible in the list of running processes.
:::

## Tunnel Types
When testing with Sauce Labs, there are two different types of tunnel scenarios:

* **Ephemeral (short-lived)**: Starts a tunnel when you start a build. The tunnel is shut down when the build is completed.
* **Long-running**: Starts one or more tunnels that remain active indefinitely. We recommend restarting them every 24 hours for best performance.

Which one is right for you? That depends on your testing goals, number of parallel tests, duration of testing, number of Sauce Connect Proxy users in your team.

Regarding of the type of tunnel you launch, it is important to be diligent about assigning names (tunnel identifiers) to each tunnel to distinguish them and ensure smooth testing.

We also recommend verifying if your team has a tunnels setup that you can share. Please note that tunnel sharing should only be undertaken by well-coordinated users. For more information on sharing Sauce Connect Proxy tunnels within your organization, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).

### What You'll Need
* If you haven't already, make sure you can cURL or ping the website or mobile app that you'll be testing from your computer. If you can't reach it, neither can Sauce Connect Proxy.
* Check to see if you have any proxies that are required to access the public Internet
* Review the [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for instructions on how to set your Sauce Labs username and access key and launch a tunnel
* If you're using Jenkins or Bamboo, be sure to review [Sauce Connect Proxy for CI/CD Environments](/secure-connections/sauce-connect/setup-configuration/ci-cd-environments)

### Ephemeral (Short-Lived) Tunnels
Ephemeral tunnels (short-lived tunnels) are ideal for the following test situations:
* If you're testing from your laptop and start your tests from an Integrated Development Environment (IDE) or terminal
* If you’re starting your builds/suites from a Jenkins or Bamboo server
* If you plan to start and stop your tests quickly and need to be more hands-on
* If you need to test potentially build-breaking changes like modifying the tunnel to fast-fail scripts/trackers, change the geolocation, or change how SSL/TLS encryption happens

#### Starting an Ephemeral Tunnel From Your Local Workstation
One option to start Ephemeral tunnels is to do so from your local workstation.

1. Set your Sauce Labs username and access key as environmental variables. For more information, see [Using Environment Variables for Authentication Credentials](/basics/environment-variables).

2. Run the simplest of startup commands to ensure that the tunnel starts:

```jsx title="MacOS/Linux"
$ bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
```

```jsx title="Windows Example"
> bin\sc -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY%
```

Once you see a tunnel in Sauce Labs, you can start testing against a site that is hosted on your network. You can leave it up for as long as you'd like and test at a fairly reasonable volume. Start it and stop it as needed!

#### Starting an Ephemeral Tunnel From a Continuous Integration (CI) Build Server
You can also launch Ephemeral tunnels from a continuous integration (CI) build server, where the code is being pulled from a repository.

1. When putting together test suites or builds from a CI build server, we recommend first creating an automated loop that contains the following steps:
  * Build starts (scheduled or user-initiated).
* (Optional) Start an instance of the website or mobile app being tested.
* Script starts your tunnel on the server.
* Your tests start on Sauce Labs.

2. Determine the number of tunnels you'll need for your tests. For this example, we'll use one tunnel. As a rule of thumb, if you're running less than 200 parallel tests, one tunnel is fine; for 200 or more parallel tests, you'll need two tunnels. For more information, see [System and Network Requirements](/secure-connections/sauce-connect/system-requirements).

3. How you start your tunnel is up to you. You can run a simple Bash shell script (or PowerShell script, if you're in Windows) that simply executes the start commands as if you were starting it locally:  

```
$ /bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
```

:::note
If you don't specify a Data Center Sauce Connect Proxy uses the US Data Center for `SAUCE_DC` by default. So for example if you need to run tests on the Sauce Labs EU Data Center, you need to modify the '-x' flag like so:
:::

```
$ /bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i singleton-eu-tunnel -x ht<span>tp://</span>eu-central-1.saucelabs.com/rest/v1/
```

Once you've established your automated loop, you should be able to kick off builds as needed, automatically.

### Long-Running Tunnels
Long-running tunnels are especially useful for large enterprise customers, who often set their tunnels to run automatically for 12-48 hours over the course of their testing. They are ideal for situations like the following:

* If you're running a high number of parallel tests (50 or more)
* If you have a test automation infrastructure that can utilize the Sauce Connect Proxy service and wish to have your Sauce Connect client component up and running for a long time (i.e., 12-48 hours)
* If you plan to share tunnels across teams

Long-running tunnels go hand in hand with our [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability), which allows you to run multiple tunnels to support a very high number of parallel tests. If you're part of a team of multiple people and/or departments running tests simultaneously on Sauce Labs, we strongly recommend utilizing long-running tunnels in High Availability Mode. Once you (or your systems administrator) set your long-running tunnel configuration for your account in Sauce Labs, the settings will be remembered in your account and you won't have to set them again. Here are some benefits to this:

* When provisioning new user accounts, these tunnel settings will be ready and waiting for them when they log in
* All Sauce Labs users in your organization will have immediate access to existing, launched tunnels
* Redundancy; if a tunnel fails, tests will flow to the other tunnel(s)
* Tunnel logs can be rotated automatically and used to troubleshoot as needed
* If the infrastructure for your site under test changes, you will have a known configuration that works. Keeping a group of tunnels alive 24/7 is generally easier than setting up new tunnels for every change that happens.

#### Launching High Availability, Long-Running Tunnels via Command Lines
**Single Tunnel**
A single tunnel that you'd start from your laptop or CICD system would look like this on the command line:

```
/Users/you/sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACESS_KEY -i my-single-tunnel-- --pidfile /tmp/sc_client.pid
```

**Multiple Tunnels**
High Availability tunnels would look like this if they were run as part of a script or from the command line:

```
$ /Users/you/sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --no-remove-colliding-tunnels -i main-tunnel-pool --se-port 0 --pidfile /tmp/sc_client-1.pid

$ /Users/you/sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --no-remove-colliding-tunnels -i main-tunnel-pool --se-port 0 --pidfile /tmp/sc_client-2.pid

$/ Users/you/sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --no-remove-colliding-tunnels -i main-tunnel-pool --se-port 0 --pidfile /tmp/sc_client-3.pid

$ /Users/you/sc-<VERSION>-<PLATFORM>/bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --no-remove-colliding-tunnels -i main-tunnel-pool --se-port 0 --pidfile /tmp/sc_client-4.pid
```

## Code Block Legend

**`--no-remove-colliding-tunnels`**

This command line prevents the removal of identified tunnels with the same name and any default tunnels, if you're using them. Jobs will be distributed across these tunnels, enabling load balancing and High Availability. It is required when running High Availability tunnels to allow multiple tunnels with the same name. What happens if you don't use this command? By default, colliding tunnels (i.e., tunnels with the same identifier) would be removed when Sauce Connect is starting up. If you start another tunnel with the same identifier as an existing pool without adding `--no-remove-colliding-tunnels`, the new tunnel would be established, but all tunnels in the pre-existing pool would be closed.

**`-i main-tunnel-pool`**

`-i` is shorthand for the `--tunnel-identifier` command and `main-tunnel-pool` is the tunnel name. Defining a name is required so that your tests can find your tunnels. This is required to start a long-running pool of tunnels.

**`--se-port 0`**

Enables Sauce Connect Proxy to find the first available port for the Selenium Relay.

**`--pidfile /some/dir/my_unique_file.pid`**

File that auto-generates whenever a process for Sauce Connect Proxy starts. Must be unique per tunnel. To see where the file is saved, you can check your Sauce Connect Proxy Log.


For more information, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy).

## Keeping Your Long-Running Tunnels Fresh

Tunnels running for an extended period of time (i.e., more than a day) are actively and continuously used for running Sauce Labs website and mobile app tests throughout their duration. That said, keeping your Sauce Connect Proxy instances up and running for weeks or longer may result in maintenance difficulties, instability or performance degradation.

To keep tunnels working their best, we recommend not letting your tunnels run for more than 24 hours. Your systems administrator would need to write a script to restart Sauce Connect Proxy clients daily or at the time of your choosing. Rolling restarts to refresh the tunnels is preferred--restarting only a portion of your tunnel pool at a time will allow for continuous testing without interruption.

:::note
If a tunnel fails or is absent, your tests will also fail. You'll be able to see this from Sauce Labs. For a quick reference guide on how to start and stop tunnels, see [Starting and Stopping Tunnels](/secure-connections/sauce-connect/proxy-tunnels).
:::

## Combining Ephemeral and Long-Running Tunnels
If needed, you can also start a combination of Ephemeral and Long-Running tunnels (i.e., your teams aren't bound to one type or the other) provided you're staying within your concurrency limit. This may be useful if you're a large enterprise user. As an example, if you have long-running tunnels already going, you can still start up ephemeral on the side.

## Using the Selenium Relay
The Selenium Relay is an optional configuration, built into Sauce Connect Proxy, that acts as a listener for Selenium commands. When enabled, it sends all inbound and outbound Selenium commands through an encrypted Sauce Connect tunnel (instead of HTTP/HTTPS) to the Sauce Labs browser cloud. Your tests would not use a Sauce Labs OnDemand endpoint (see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints) for more information).

Effective with Sauce Connect Proxy version 4.6.x and higher, this feature is disabled by default. Leveraging Sauce Connect Proxy as a Selenium Relay is generally not recommended and should only be used in rare scenarios, such as:

* Running tests written in Python that can't use HTTPS due to a known issue with the Selenium Python bindings
* Allowing only machines in a DMZ to have access to Sauce Labs
* Ensuring that all Selenium commands are routed through a Sauce Connect tunnel

### Setting Up Your Tests to Use the Selenium Relay
#### Why We Don't Recommend Using Selenium Relay
* Added traffic can impact performance of the server where Sauce Connect Proxy is running
* Selenium Relay itself is an extra dependency that can impact test performance
* It's not compatible with our [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability) because all traffic must be routed through a specific listener.

For best test performance, we recommend sticking with HTTPS to connect with Sauce Labs or if you use a corporate proxy to control outbound traffic. Should you decide to enable the Selenium Relay, set the listener port with the `-P`, `--se-port` command (as described in the [Sauce Connect Proxy Command Line Quick Reference Guide](/dev/cli/sauce-connect-proxy)) and substitute the name of the server where Sauce Connect Proxy is installed for ondemand.saucelabs.com:

```
public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@mymachine.mydomain.com:4445/wd/hub";
```

If you have Sauce Connect Proxy installed on your local machine, you would use localhost for the name of the server:

```
public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@localhost:4445/wd/hub";
```

### Recommended: Connecting Directly to Sauce Labs Over HTTPS
This example shows how you would specify the connection to Sauce Labs over HTTPS in a Java test script:

```
public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";
```

### Routing Protractor Traffic through Sauce Connect Proxy
Sauce Connect Proxy sends all traffic--including test commands--through the tunnel. Typically, your Selenium commands are sent to Sauce's servers over the standard internet, and only browser requested traffic goes via Sauce Connect Proxy. In some restricted networks, access to Sauce Labs servers isn't available over `port 443` on the standard internet. In cases like these, sending all traffic through the Sauce Connect Proxy tunnel is the easiest way to get your tests running.

You achieve this by pointing your Remote WebDriver at the address and port of the Sauce Connect Proxy tunnel, instead of 'ondemand.saucelabs.com'. You can set this port by passing the `--se-port` option to Sauce Connect Proxy. For example, with `--se-port 4445`, you'd use `localhost:4445/wd/hub`.

When using [Protractor](https://github.com/angular/protractor), the standard Sauce Connect Proxy configuration doesn't allow for alternative endpoint addresses. Instead, you can use the sauceSeleniumAddress config value to set a custom Selenium address:

```
exports.config = {
      sauceSeleniumAddress: 'localhost:4445/wd/hub',
      sauceUser: process.env.SAUCE_USERNAME,
      sauceKey: process.env.SAUCE_ACCESS_KEY
    }
```
