---
id: downloading-files-vm-before-testing
title: Downloading Files to a Virtual Machine Before Testing
sidebar_label: Downloading Files to a Virtual Machine Before Testing
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
