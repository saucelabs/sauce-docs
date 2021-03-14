---
id: jenkins
title: Sauce Connect Proxy Jenkins Configuration
sidebar_label: Jenkins Configuration
---

## Sauce Connect Proxy Jenkins Configuration
Jenkins is an open-source automation server and continuous integration software tool for testing and reporting on isolated changes in a larger code base in real time.

The Jenkins plugin for Sauce Labs will automatically install Sauce Connect Proxy on your Jenkins server for integration. Once installed, you'll need to configure your project to use Sauce Connect. You can change the location where the plugin extracts Sauce Connect for specific projects or globally for all projects.

### Configuring Sauce Connect Proxy with the Jenkins Plugin
Developing apps on localhost is quick and efficient. The drawback is that localhost is not a publicly-accessible address on the Internet, so the browsers in the Sauce Labs cloud can't load and test your app. The solution is to use Sauce Connect Proxy. Sauce Connect is an application that creates a secure tunnel connection between the Sauce Labs virtual machine that runs your test and your local  network. You can also use Sauce Connect to test applications and websites that are located within your corporate firewall. Sauce Connect Proxy is not required to run tests on Sauce Labs; you'll only need it in situations where the application or website you want to test is not publicly accessible.

The Jenkins plugin for Sauce automatically installs Sauce Connect on your Jenkins server, but you will need to configure your project to use it. There are also global and per-project configuration options for Sauce Connect.

Configuring Your Project to Use Sauce Connect
Changing the Default Location of the Sauce Connect Binary
Changing the Global Default Location
Changing the Per-Project Default Location
Setting Sauce Command Line Options
Setting Global Sauce Connect Command Line Options
Setting Per-Project Sauce Connect Command Line Options
Launching Sauce Connect on the Jenkins Slave Node
Using the Latest Version of Sauce Connect
Configuring Your Project to Use Sauce Connect
Go to your project in Jenkins.
In the left-hand navigation, select Configure.
Under Build Environment, select Sauce OnDemand Support.
This will open up a section for Sauce Labs Options.  
Select Enable Sauce Connect?
After you make this selection, a new Sauce Connect tunnel will launch whenever Jenkins starts a build for the project.

SELENIUM_HOST and SELENIUM_PORT Environment Variables

If you enable Sauce Connect for your project, then the environment variables for SELENIUM_HOST and SELENIUM_PORT will be set to localhost:4445.

Changing the Default Location of the Sauce Connect Binary
When you run a Jenkins build with Sauce Connect enabled, the default behavior of the plugin is to extract the Sauce Connect binary that is appropriate for your operating system to your home directory. You can change the location where the plugin extracts Sauce Connect for specific projects, or at the global level for all projects. Note that Sauce Connect should always run on the same network as the site or application under test, but does not have to be on the same machine.

Changing the Global Default Location
In Jenkins, go to the Administration page.
Click Manage Jenkins.
Click Configure System.
Under Sauce Support, enter the default location for Sauce Connect in the Override Sauce Connect Path field.
Changing the Per-Project Default Location
In Jenkins, go to your project.
Select Configure.
In the Sauce Connect Advanced Options section, click Advanced.
Enter the default location for Sauce Connect for this project in the Sauce Connect Binary Location field.
Setting Sauce Command Line Options
There are a number of command line options you can use with Sauce Connect, which you can configure to execute at both the global level and on a per-project basis when Sauce Connect launches.

Setting Global Sauce Connect Command Line Options
In Jenkins, go to the Administration page.
Click Manage Jenkins.
Click Configure System.
Under Sauce Support, enter the command line options you'd like to use in the Sauce Connect Options field.
Setting Per-Project Sauce Connect Command Line Options
In Jenkins, go to your project.
Select Configure.
In the Sauce Connect Advanced Options section, click Advanced.
Enter the command line options you'd like to use in the Sauce Connect Options field.
Launching Sauce Connect on the Jenkins Slave Node
Another advanced option is launching Sauce Connect on the Jenkins slave node that is executing the build, rather than on the Master node.

In Jenkins, go to your project.
Select Configure.
In the Sauce Connect Advanced Options section, click Advanced.
Select Launch Sauce Connect on Slave.
Creating a new unique Sauce Connect tunnel per build

If you select theCreate a new unique Sauce Connect tunnel per build option, the plugin will spin up a unique tunnel identifier for each build and populate a TUNNEL_IDENTIFIER environment variable. You must then reference this variable in the desired capabilities for your tests.

Using the Latest Version of Sauce Connect
Select Configure.
Go to Sauce Labs Options.
Check the box "Use the latest version of Sauce Connect." The bundled version may be different if your OnDemand plugin is not up to date.

### Installing and Configuring the Sauce OnDemand Plugin for Jenkins
The following guide helps you get up and running with our plugin for Jenkins CI:

What You'll Need
Installing the OnDemand Plugin
Configuring Sauce Labs Credentials
Versions Before 1.147
Configuring the Plugin to Use the European Data Center
What You'll Need
Updating Credentials
Non-Pipeline Build Configuration
Pipeline Build Configuration
What You'll Need
Access the IP range 162.222.72.0/21, saucelabs.com, and ondemand.saucelabs.com from your Jenkins server
You may need to refer to the Jenkins documentation for assistance setting up a proxy
Important Steps for All Continuous Integration Configurations

When you are configuring your continuous integration platform to work with Sauce, always make sure to follow these steps:

Update tests to reference the environment variables set by the plugin. See the topic on Setting Environment Variables for more information.
Output the Sauce session ID to the standard output (stdout) to allow the Sauce plugin to associate test results to Sauce Jobs. See the topic on Outputting Session IDs to stdout for more information.
Installing the OnDemand Plugin
You can install the Sauce OnDemand plugin for Jenkins though the Jenkins Administration page.

In Jenkins, go to the Administration page
Click Manage Jenkins
Click Manage Plugins
Click the Available tab
In the list of plugins, find and select Sauce OnDemand Plugin
Click Download now and install after restart
In the plugin installation dialog, select Restart Jenkins when installation is complete and no jobs are running
The plugin file is fairly large, so download may take several minutes.

Configuring Sauce Labs Credentials
The Jenkins plugin provides an interface for storing your Sauce Labs authentication credentials as environment variables on the Jenkins server, one of our best practices for testing with Sauce. This allows you to reference your credentials without having to hardcode them into your tests. Because the plugin manages authentication at the global level, you can have multiple jobs running at the same time using these credentials.

After the plugin has installed and Jenkins has restarted, go to the Administration page in Jenkins
Click Credentials

You can click an existing domain or click Add domain

Once in your domain of choice, click Add Credentials
Under Kind, select Sauce Labs
Enter the Username and API Access Key for your Sauce account
Click OK to save
Your credentials are now saved, and you can now use them on a per-project basis. To do so:

Go to the Administration page for one of your projects
Click Configure
Under Sauce Labs Options, you will see the credentials you have stored as options under Credentials

Setting Authentication Environment Variables in Your Tests

Once you've set up your authentication credentials as environment variables, you can refer to them in your tests like this:

WebDriver driver = new RemoteWebDriver(
            new URL("http://"+System.getenv("SAUCE_USERNAME")+":"+System.getenv("SAUCE_ACCESS_KEY")+"@ondemand.saucelabs.com:80/wd/hub",
            desiredCapabilities);
See Setting Desired Capabilities for Jenkins Projects for more information on using environment variables.

Versions Before 1.147
In versions of the plugin prior to 1.147, credential management is handled slightly differently. You will find credential management in the Manage Jenkins > Configure System section:

Once the plugin is installed and Jenkins restarted, go to the Administration page in Jenkins
Click Manage Jenkins > Configure System

Under Sauce Support, enter the Username and API Access Key for your Sauce account
You can find the complete changelog for each version of the Jenkins Plugin at GitHub: https://github.com/saucelabs/jenkins-sauce-ondemand-plugin/blob/master/CHANGELOG.md

Configuring the Plugin to Use the European Data Center
If you are running jobs on our European data center, you have an option to use our Jenkins plugin to see all of the integrated results and reports. You can choose the data center you want to use by updating your credentials and then using those in your build configurations.

What You'll Need
Use Sauce OnDemand Plugin version 1.182 or above in order to use the feature outlined here.
Updating Credentials
By default the Jenkins plugin will use your credentials the US data center, so you need to create a new set of credentials to use the EU data center. You should set a descriptive ID for the EU credentials to make them distinct from the US credentials, as this will make it easier to set up pipelines with the appropriate credentials.

After the plugin has installed and Jenkins has restarted, go to the Administration page in Jenkins.
Click Credentials.

You can click an existing domain, or click Add domain.

Once in your domain of choice, click Add Credentials.
Enter the Username and API Access Key for your Sauce account.  
Select EU as a Sauce Data Center.  
Specify an ID that will be used to identify credentials within the pipelines setup.
If the ID field is left blank it will be auto-generated. If you forget or don’t know which ID is associated with the EU credentials, you can use the Pipeline Script page to generate the script with the right ID for you

Click Save.
Non-Pipeline Build Configuration
If you are using non-pipeline builds, select the correct credentials in the Sauce Labs menu within your build.

Select Configure.

Go to Sauce Labs Options.
Under Credentials, select the credentials with the (EU) suffix
Click Save.
Pipeline Build Configuration
For pipeline builds, use the credential ID you created for the European data center, as shown in this code example.

Sample EU and Jenkins Pipelines Block
stage('Test') {
    sauce('sauceuser-EU') {
        sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            sh 'mvn test'
        }
    }
} 
