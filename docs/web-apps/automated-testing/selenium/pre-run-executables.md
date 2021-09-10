---
id: pre-run-executables
title: Using Pre-Run Executables
sidebar_label: Using Pre-Run Executables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In the real world, there's no such thing as a "stock" version of any particular browser, because users can easily modify them with add-ons, change settings, and set profiles with specific functionality. There are also situations in which browser or virtual machine configurations can cause issues with your tests. For these reasons, you may want to make changes to the browser or VM configuration before your test runs. For example, you might want to test against a security-conscious user profile that includes using private windows, blocking all pop-ups, and disabling JavaScript, or you may want to change settings that could raise dialogs and cause your tests to fail.

There are different ways to deal with these situations, depending on the type of browser you're testing against.

* Firefox includes a [Profiles feature](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) that lets you manage everything from passwords to security settings to site-specific settings, like which sites are allowed to display pop-ups. The [Selenium driver for Firefox](https://code.google.com/p/selenium/wiki/FirefoxDriver) includes a `webdriver.firefox.profile` system property that lets you select which profile you want to use in your testing.
* With Chrome, there is a [long list of switches](http://peter.sh/experiments/chromium-command-line-switches/) that you can set to change browser behavior, which you can pass as arguments to the [Chrome WebDriver](https://sites.google.com/a/chromium.org/chromedriver/capabilities).
* Unfortunately, neither Safari or Internet Explorer have a built-in way to edit user settings, which is where pre-run executables come into play.

A pre-run executable is simply a script that you download to the Sauce Labs virtual machine and run prior to a test to change settings for Safari, Internet Explorer, or any other browser, or to configure the virtual machine that your tests will run on.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings).

## Setting Up Pre-Run Executables
You can configure your Sauce testing jobs to use  pre-run executables with the `prerun` capability as described in [Test Configuration Options](/dev/test-configuration-options#pre-run-executables).

Pre-run executables are commonly used to change browser settings and VM configurations before a test starts. This page provides a few examples of these scripts, and covers setting `prerun` as a desired capability during [test configuration](/dev/test-configuration-options#pre-run-executables).

:::note Root and Administrative Permissions on Sauce Labs Virtual Machines
`sudo` access is not allowed on Linux/Mac virtual machines. Administrative access is not allowed on Windows VMs.
:::

### Writing a Configuration Script
This example script disables the warning that Safari pops up when using basic HTTP authentication to access a website.

```bash title="disable_fraud.sh"
#!/bin/bash
defaults write com.apple.Safari WarnAboutFraudulentWebsites false
```

:::note Match File Types to Your Operating System
When creating your executable file, take into account the operating system you'll use for your tests. For example, Bash commands won't work on Windows machines, which instead require a `.bat` or `.com` file.
:::

### Storing a Configuration Script
Your script can be stored in GitHub or in [Sauce Storage](/mobile-apps/app-storage/). You can also use [Gist](https://gist.github.com/) to easily host your executable file. Make sure to use the link containing the raw file contents.

### Set the `prerun` Capability
This example sets `prerun` to point to `myscriptstorage.com`, which hosts the script `disable_fraud.sh` used as an example in step 1.

```
desired_capabilities['prerun'] = {
    'executable':'http://myscriptstorage.com/disable_fraud.sh',
    'background': 'false'
}
```

This example accesses the same script from Sauce Storage:

```
desired_capabilities['prerun'] = {
    'executable':'storage:filename=disable_fraud.sh',
    'background': 'false'
}
```

## Setting Up Silent Mode
One of the arguments that can be added to the `prerun` capability in your test configuration options is `--silent`, which can be abbreviated to `/S`. This argument will "silently" install the executable without any modal dialogs or other installation processes showing up in your tests. Here's an example of how you would set the prerun capability to run in silent mode:

```
"prerun": {
    "executable": "http://url.to/your/executable.exe",
    "args": [ "/S", "-a", "-q" ],
    "background": true,
    "timeout": 120
}
```

## Setting Basic Authentication in Safari
In Safari, when you try to navigate to a URL that uses basic HTTP authentication, a warning dialog pops up that will derail your automated tests unless you can resolve it. You can execute a short shell script as a pre-run executable to configure Safari to not show this message.

:::note
You can only use this for Safari versions up to and including 10.x.
:::

This script clears the Warn when visiting a fraudulent website option in Safari's preferences, so that your automated tests that use basic authentication over HTTP will execute without triggering the warning.

```
#!/bin/bash
defaults write com.apple.Safari WarnAboutFraudulentWebsites false
```

[The disable_fraud script](https://gist.githubusercontent.com/saucyallison/3a73a4e0736e556c990d/raw/d26b0195d48b404628fc12342cb97f1fc5ff58ec/disable_fraud.sh) used in the preceding examples is hosted as a Gist on GitHub.

## Downloading Files to a VM Prior to Testing

You can use a pre-run executable script to download files from a public location to the Sauce Labs virtual machine running your tests. This topic contains example scripts for downloading remote files on different operating systems, and details configuring the prerun capability in your tests.

<Tabs
  defaultValue="macOS"
  values={[
    {label: 'macOS', value: 'macOS'},
    {label: 'Windows', value: 'Windows'},
    {label: 'Windows XP', value: 'Windows XP'},
    {label: 'Linux', value: 'Linux'},
  ]}>

<TabItem value="macOS">

### OS X 10.6, 10.8, 10.9, 10.10
This shell script will fetch the file at the URL and save it to **/tmp/file.txt**.

```js
#!/bin/bash
curl -o /tmp/file.txt http://mywebsite.com/file.txt
```
</TabItem>

<TabItem value="Windows">

### Windows 7, 8, 8.1
This batch file accomplishes the same thing as the OS X curl method, but using **bitsadmin.exe** since Windows doesn't ship with curl.

```js
@echo off
bitsadmin.exe /transfer "JobName" http://mywebsite.com/file.txt C:\Users\Administrator\Desktop\file.txt
```
</TabItem>

<TabItem value="Windows XP">

### Windows XP
This batch file creates a VBScript file, **dl.vbs**, which will perform the download, and then runs it:

```js
@echo off

echo strFileURL="http://mywebsite.com/file.txt" > C:\dl.vbs
echo strHDLocation = "C:\file.csv" >> C:\dl.vbs
echo Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP") >> C:\dl.vbs
echo objXMLHTTP.open "GET", strFileURL, false >> C:\dl.vbs
echo objXMLHTTP.send() >> C:\dl.vbs
echo If objXMLHTTP.Status = 200 Then >> C:\dl.vbs
echo Set objADOStream = CreateObject("ADODB.Stream") >> C:\dl.vbs
echo objADOStream.Open >> C:\dl.vbs
echo objADOStream.Type = 1 'adTypeBinary >> C:\dl.vbs
echo objADOStream.Write objXMLHTTP.ResponseBody >> C:\dl.vbs
echo objADOStream.Position = 0 'Set the stream position to the start >> C:\dl.vbs
echo Set objFSO = Createobject("Scripting.FileSystemObject") >> C:\dl.vbs
echo If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation >> C:\dl.vbs
echo Set objFSO = Nothing >> C:\dl.vbs
echo objADOStream.SaveToFile strHDLocation >> C:\dl.vbs
echo objADOStream.Close >> C:\dl.vbs
echo Set objADOStream = Nothing >> C:\dl.vbs
echo End if >> C:\dl.vbs
echo Set objXMLHTTP = Nothing >> C:\dl.vbs

cscript.exe C:\dl.vbs
```

</TabItem>

<TabItem value="Linux">

### Linux
This shell script downloads **file.txt** at **mywebsite.com** to the **/tmp** directory.

```js
#!/bin/bash
wget -O /tmp/file.txt http://mywebsite.com/file.txt
```
</TabItem>
</Tabs>

## Set Prerun Capability
After you've created the download script, use the prerun capability in your test script to point to its location.

If your script is in a publicly accessible location, you need to add the URL to the prerun capability.

```js
capabilities['prerun'] = "http://location.of/curl.sh"
```

## Editing the VM's Host File
:::note
Editing the Host file of the virtual machine will not work if [Sauce Connect Proxy](/secure-connections/sauce-connect) is in use because the Host file of the machine running Sauce Connect Proxy is referenced, so make the desired changes there, instead.
:::

An example of configuring a Sauce Labs virtual machine with a pre-run executable is editing the host file in the virtual machine, so when the driver tries to access a particular domain, like google.com, it will be redirected to a new IP address, for example 162.222.75.243 ([saucelabs.com](http://saucelabs.com/)). As with other `prerun` configurations, the basic steps are:

1. Write a script with the URL redirect to the new IP address.
1. Upload the script to a publicly accessible location, like GitHub or Sauce Storage
1. Set the [`prerun` capability](/dev/test-configuration-options#pre-run-executables) in your test script to load the script as host file in the Sauce Labs virtual machine.

### Host File Script
Here are examples of the host file script, `EditDNS`, in both OS X/Linux and Windows versions.

#### bash OS X/Linux Host File Script

```
#!/bin/bash
echo "162.222.75.243 www.google.com" >> /etc/hosts
```

#### Windows Host File Script
```
@echo off
echo 162.222.75.243 www.google.com > %temp%\temphosts.txt
type C:\WINDOWS\system32\drivers\etc\hosts >> %temp%\temphosts.txt
copy /Y %temp%\temphosts.txt C:\WINDOWS\system32\drivers\etc\hosts
```

## Creating JSON Objects for Multiple Arguments

If your test script is written in Java, you will need to create a JSON object if you want to include multiple arguments, such as `--silent, -a` with the `prerun` capability.

:::note The JSONObject Class/Library
Make sure your test script imports the `JSONObject` class/library so you can create the JSON object.
:::

```js
JSONObject obj = new JSONObject();
obj.put("executable","http://url.to/your/executable.exe");
LinkedList<String> list = new LinkedList<String>();
list.add("/S");
list.add("-a");
list.add("-q");
obj.put("args",list);
obj.put("background","true");
obj.put("timeout", "240");
System.out.print(obj);
```

If your test script is written in C#, you will need to create a Dictionary object with the `prerun` capability as JSON Objects do not work well with C# projects.

:::note The C# Dictionary Object
When creating the Dictionary object, make sure the TKey is of value "string" and the TValue is of value "object"
:::

```
var obj = new Dictionary<string, object>();
obj.Add("executable", "http://url.to/your/executable");
obj.Add("background", true);
obj.Add("timeout", 120);
```

When you set the desired capabilities of your test, refer to the object you created as the path to the executable, as in this example:

```
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("prerun", obj);
```

## Running an AutoIt Script

When using Sauce Connect to run local tests on a Windows machine, you may encounter an Integrated Windows Authentication (IWA) dialog, also known as NTLM or Domain authentication. This is because the machine that Sauce Connect is running on is used to look up the host where the site or application under test is located. If the host has IWA enabled, the authentication request will be passed back through Sauce Connect to the Sauce Labs browser. Because there is no registry key available on our Windows virtual machines to disable this authentication, the solution is to create an AutoIT script to respond to the dialog.

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
"prerun": { "executable": "storage:filename=executable.exe",
            "args": [ "--silent", "-a", "-q" ], "background": true }
```
### 64 v. 32-bit Version of AutoIT

 The 64bit version of AutoIT works on IE11, and not on IE9. The 32bit version works with both browser versions.
