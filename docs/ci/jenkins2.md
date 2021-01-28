### Customize Sauce Connect Settings

You can manage many of the Sauce Connect settings from within the Jenkins dashboard to ensure your tunnels are launched according to your needs. Some options are set globally for all your Jenkins projects and some options are specific to individual projects. For options that can be set at both levels, project-specific values override global settings.

To access the global Sauce Connect settings:

<ol>
  <li>From your Jenkins dashboard, choose **Manage Jenkins** and then **Configure System**.</li>
  <li>Scroll down to the **Sauce Support** section.</li>
  <li>Configure the optional settings as needed, based on the descriptions in the following table.
    <table>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>**Disable sending build usage stats to Sauce Labs**</td>
        <td>*Not sure what this means? Need to look up*</td>
      </tr>
      <tr>
        <td>**Override Sauce Connect Path**</td>
        <td>Specify a local path into which the Sauce Connect binary compatible with your operating system will be extracted. This value will override the default `$home` directory.<br/> **NOTE:** Always run Sauce Connect on the same network as the site or application under test, but the same machine is not required.</td>
      </tr>
      <tr>
        <td>**Sauce Connect Options**</td>
        <td>The list of command line arguments to apply each time Sauce Connect Proxy is launched for any project. For example:<br/>
        <pre>
        -i myTunnel -l ./jenkins_scp_log
        </pre><br/></td>
      </tr>
        <td>**Sauce Connect Max Retries**</td>
        <td>Maximum number of times Jenkins should attempt to launch a Sauce Connect tunnel before retuning a failure.</td>
      </tr>
      <tr>
        <td>**Sauce Connect Retry Wait Time in Seconds**</td>
        <td>The amount of time Jenkins should wait before retrying a failed Sauce Connect launch attempt.</td>
      </tr>
      <tr>
        <td>**Selenium Environment Variable Prefix**</td>
        <td>A value that will be automatically added to the front of any Jenkins environment variable set by the Sauce OnDemand plugin.</td>
      </tr>
    </table>
  </li>
  <li>Click **Save**</li>
</ol>

To access the Sauce Connect settings for a specific project:

1. From your Jenkins dashboard, select the project you wish to configure.
1. Choose **Configure** from the project menu.
1. Choose the **Sauce Connect Advanced Options** tab and click **Advanced**.
1. Specify a location in the **Sauce Connect Binary Location** field that will be the extraction directory for this project only. This value will override the global setting.



### Setting Sauce Command Line Options

There are a number of command line options you can use with Sauce Connect, which you can configure to execute at both the global level and on a per-project basis when Sauce Connect launches.

Arguments set for a project will override any global command line arguments.

1. From your Jenkins dashboard, select the project you wish to configure.
1. Choose **Configure** from the project menu.
1. Choose the **Sauce Connect Advanced Options** tab and click **Advanced**.
1. In the **Sauce Connect Options** field, enter the list of command line arguments to apply each time Sauce Connect Proxy is launched for this project. For example:
    ```
    -i projectTunnel -l ./scp_project_log
    ```

### Launching Sauce Connect on the Jenkins Slave Node

If you're executing your build using a slave node, you can configure the plugin to launch Sauce Connect from the slave instead the Master node.

1. From your Jenkins dashboard, select the project to configure.
1. Choose **Configure** from the project menu.
1. Choose the **Sauce Connect Advanced Options** tab and click **Advanced**.
1. Check **Launch Sauce Connect on Slave**.

Creating a new unique Sauce Connect tunnel per build

If you select theCreate a new unique Sauce Connect tunnel per build option, the plugin will spin up a unique tunnel identifier for each build and populate a TUNNEL_IDENTIFIER environment variable. You must then reference this variable in the desired capabilities for your tests.

Using the Latest Version of Sauce Connect
Select Configure.
Go to Sauce Labs Options.
Check the box "Use the latest version of Sauce Connect." The bundled version may be different if your OnDemand plugin is not up to date.
