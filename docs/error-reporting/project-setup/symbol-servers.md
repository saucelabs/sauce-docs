---
id: symbol-servers
title: Connecting to Symbol Servers
sidebar_label: Connecting to Symbol Servers
description: Backtrace offers customers the ability to upload their symbols directly to our systems, or to retrieve symbols from your managed private symbol server on demand.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Background
Debug symbols are needed when crashes are reported from binaries that have information such as function names and line numbers stripped away. Without debug symbols, Backtrace can't provide human-readable callstacks or deduplicate effectively. Backtrace offers customers the ability to upload their symbols directly to our systems, or to retrieve symbols from your managed private symbol server on demand.

symbold is the name of the service in Backtrace that is responsible to gather symbols from connected symbol servers or stores (see this [guide from Microsoft](https://docs.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-symbol-stores) about setting up symbol servers and symbol stores). symbold scans the missing symbols logs, downloads those symbols from connected symbol servers, converts them into a variety of formats, and then reprocesses the set of objects referencing those missing symbols. symbold comes preconfigured by Backtrace to automatically download symbols from public 3rd party symbol servers of commonly used libraries such as those from Electron, Microsoft, and others. We refer to these as default public symbol servers. Backtrace also allows administrators to configure connections to their own private symbol servers to further speed debugging time and minimize setup effort.

## Feature Overview
Customers on our Enterprise plan can manage whitelists and blacklists for the default public symbol servers, and can add their own private symbol servers to simplify configuration and speed up debugging time by making sure every callstack is human readable. Specific features we will review in this guide include:
- View statistics and information about default public symbol servers configured by Backtrace, and manage whitelist / blacklists for them.
- Add one or more private symbol servers for use by your project.
 -View statistics and usage of your private symbol servers.
- Manage whitelists and blacklists.
- View skipped lists and log files to better diagnose issues with symbol retrieval and conversion.

## Feature Details
Symbol Servers can be accessed under Project Settings.

### Default Public Symbol Servers configured by Backtrace
For each project, you can view information about the default public symbol servers configured by Backtrace. These include symbols servers for msdl.microsoft.com, symbols.mozilla.org, electron-symbols.githubapp.com, and download.amd.com.

If you are on an Enterprise plan and dedicated or on-prem host, you can self manage connections, retries, blacklist, and whitelists for these default public symbol servers configured by Backtrace. If you are on a shared deployment (non-enterprise), you will share public symbol server configurations with all other organizations on your shared host. As such, you can view shared information such as the stats and usage, whitelist, blacklist, skiplist and logs, but you can not edit these.

Below is a screenshot of the Symbol Servers Management UI - It is accessed under Project Settings > Symbols > Symbol Servers.

<img src={useBaseUrl('img/error-reporting/project-settings/symbol-servers.png')} alt="" />

NOTE - These default public symbols servers are scoped to your entire organization. This means that usage and statistics, whitelist, blacklist, skip list and logs will not change from project to project. Following is some brief information about each of the tabs and the data within them.
- Statistics and Usage - This tab show information about how much has been data has been downloaded, and how many successful or failed downloads there have been since the Symbol Server was added to the system
- Whitelist - If the whitelist is enabled, then only symbol files in the whitelist will be downloaded. For the public symbol servers that are seeded by default, whitelists are enabled and commonly used symbols are listed for retrieval.
- Blacklist - Items in the blacklist will never try to be downloaded from symbol server. Admin would add items to the blacklist if they won't change anything on their stack trace information, won't add any additional debugging information, or might cause only networking problems (i.e files too big, they change too often).
- Skiplist - Items are automatically added to the skiplist if they cannot be downloaded from the symbol server in the specified number of retries. Symbols in the skiplist will not try to be downloaded on subsequent times.
- Logs - Log information about successful and unsuccessful download and conversion attempts.

### Add or Edit New Symbol Servers
Customers on our Enterprise plan can add new private symbol servers to connect to. These can be a symbol server or symbol store provided by [Microsoft Debugging tools for Windows](https://docs.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-symbol-stores), or a simple AWS S3 Bucket.

You will need the following information to connect:
- URL - HTTPS URL to connect to the the symbol server or S3 bucket.
  - When using an AWS S3 bucket, use the HTTPS URL of the region the S3 bucket is hosted from.
- Name - A friendly name for this connection.
- Whether you want to enable Whitelist or not. Most common configuration for private symbol servers is NOT use the Whitelist, and have all symbols attempted to be downloaded on demand for any not in the blacklist or skiplist. If Whitelist is enabled, then the system will try to download ONLY the symbols specified in the whitelist (no other symbols will be downloaded).
- Credentials - Basic Auth os S3 Authentication with bucket name, s3 key and s3 secret are supported.
- Proxy options - If a proxy server is required.
Download options - How many concurrent downloads to allow, and retry options before adding a symbol to the skiplist.

See a screenshot of the Add Symbol Server UI below:

<img src={useBaseUrl('img/error-reporting/project-settings/add-symbol-server.png')} alt="" />

When an admin adds a new symbol server, symbold will validate connection. By doing that we will avoid a situation when defined symbol server doesn’t work because of connection problems.

As an admin user, you can disable symbol server - if you have problems with your symbol server or your symbol server won’t be available for some reason, you can disable/enable symbol server.

After you add a symbol server, you can Edit or Delete it using the context menu on the entry.

<img src={useBaseUrl('img/error-reporting/project-settings/edit-delete-symbol-server.png')} alt="" />

Note: Deleting a symbol server does not delete the debug symbols that were downloaded.

### View Statistics and Usage
For each selected symbol server, you can view usage and download statistics. This includes:
- Total Bytes Downloaded
- Total Number of Successful and Failed Downloads
- Breakdown of failures based on which stage (download or conversion)

This information is valid since the item was added as a symbol server to symbold. See a screenshot with this information below:

<img src={useBaseUrl('img/error-reporting/project-settings/symbol-server-stats-usage.png')} alt="" />

### Manage Whitelist and Blacklist
For each server, you can manage a whitelist and a blacklist.

It is most common to configure the blacklist for any symbols that you don't want to download from the symbol server. User would set these if they won't change anything on their stack trace information, won't add any additional debugging information, might cause only networking problems (i.e files too big, they change too often).

Items in the whitelist will be fetched if the server itself has toggled whitelist mode on.

Entries can be deleted from the whitelist or blacklist by hovering over row and choosing the delete icon.

Following is a screenshot to show the whitelist entries and a dialog to enter more items to the whitelist, as well as a delete icon for one of the items in the list to show how it can be removed.

<img src={useBaseUrl('img/error-reporting/project-settings/whitelist-symbols.png')} alt="" />

### View Skiplist & Logs
Skiplist - Items appear in the skiplist when they cannot be fetched after multiple retries. The administrator can specify the retry information in the main configuration for the symbol server. Items in the skiplist will be skipped during subsequent download attempts so as to not cause further download issues. Items can be removed from the skiplist using the delete icon if you want to retry download for them.

<img src={useBaseUrl('img/error-reporting/project-settings/symbols-skiplist.png')} alt="" />

The Logs tab shows successful and failed attempts at downloading, receiving, or retrying, amongst other. This is useful to understand how the symbol server connection has been behaving.

<img src={useBaseUrl('img/error-reporting/project-settings/symbols-logs.png')} alt="" />
