---
id: source-code
title: Source Code
sidebar_label: Source Code
description: Administrators can configure Source Code display in their Debugger views using the "Project Settings/ Source Code" tab.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

An engineer who is using the Backtrace Debugger to root cause an issue will find it useful to see source code that is associated with frames in the stack trace. Backtrace has provided a Source Code Integration Service to support this.

Administrators can configure Source Code display in their Debugger views using the Project Settings > Source Code tab. If you have Backtrace or your source code deployed on premises, you may need to deploy a backtrace-source-control service. Talk to our support team to learn more.

## Supported Source Control Systems

The Source Code integration service will integrate with your cloud based or on-premises GIT and Perforce Helix based systems. Reach out to our support team to learn more about on-premises deployments.

## Manage Source Control

In the Project Settings section, go to the **Source Code** tab.

You can manage Repositories and Rules. Repositories are the source code repositories that the Source Code Integration Service will connect to search for source code to display to the end user alongside the selected frames in the Debugger view. Rules are used when you want to nudge the source code integration service to choose one repository over another as it searches for the proper source code. Rules are not required, but useful if you see source code being displayed from the wrong repository.

### Add and Manage Repositories

Add as many repositories as you want to check for source code. Typically, teams will add their private repositories that may be protected behind authentication, and any 3rd party public or private repositories for other components they use (i.e. through github.com).

Once created, you'll see a small status icon to indicate the status of the Repository and what actions are being performed. Backtrace will attempt to connect and fetch to test URL and authentication information, and then begin to clone the repo (Error messages are provided when appropriate. Note it may take a few minutes to clone large repositories)

#### GIT Based Systems

Use the "Add a Github repository" button to begin configuring a repository.

<img src={useBaseUrl('img/error-reporting/project-settings/edit-git-repo.png')} alt="" />

- Connection Information: Backtrace Source Control can integrate with GIT based systems. You must provide a Name, URL (HTTP or SSH based), and Authentication method (None, User Name / Password, SSH Key).
  - NOTE - You may need to work with your source control system to get the proper URL and credentials to provide access to your SCM.
- Revisions: GIT systems take snapshots of the source code at different times and manage those as Revisions. You can specify the ordered list of Revisions to try when searching for matching source code. Acceptable revision types include branch names, tags, as well as short and long SHA-1 hashes. You can specify an attribute to be dynamically included in the revision string by using \{attribute} template syntax.

By default, we'll check the main branch, but we expect you will want to specify more granular branches to be checked first. For example, a common pattern is to have 'release/\{application}/\{version}' as a standard way to tag releases. Other examples:

- release/\{version}
- \{commit}
- 729e0d9a
- master
- main

Backtrace will try to search these revisions within the repository in order to fetch the appropriate source code.

#### Perforce Systems

Use the "Add a Perforce Depot" button to begin configuring a repository.

<img src={useBaseUrl('img/error-reporting/project-settings/perforce-server.png')} alt="" />

- Connection Information: Backtrace Source Control can integrate with Perforce systems using the p4 command line utility. You must provide a Name, Host and Port, User Name and Password.
- Source Code Depot Paths: You will need to specify a list of depot paths to try, in order, when searching for matching source code.

You can specify an attribute to be dynamically included in the path by using \{attribute} template syntax.
For example, you might choose to first search "//depot/releases/\{version}/" followed by "//depot/develop/". If the version attribute is set to '1.15' on the error that you are inspecting, then it will be used to create a search path of "//depot/releases/1.15/".
Some examples:

- //depot/project/release/\{version}
- //depot/project/main/
- //depot/project/develop/

Backtrace will try to search these depot paths in order to fetch the appropriate source code.

### Configuration and Clone Successful

Once configured, a Source tab becomes available in the Debugger for all errors in a project. You can navigate through frames to see source code if it can be found.

Notice we'll identify the file name and path, which Repository and revision it came from, and the date that revision was published.

<img src={useBaseUrl('img/error-reporting/project-settings/debug-source.webp')} alt="" />

You can navigate up and down, Jump back to the highlighted line, and optionally show time that each line was committed, who did that commit, and the commit hash.

Some frame will get a 'Not enough information to locate source code'. That means that there is not enough information in the frame to find the source code in the defined repositories. You may not have this source code available in the defined repositories.

### Multiple Repositories and Rules

By default, we search each repository in sequential order to try to find relevant source code. If you see incorrect information being displayed, you can "Add a rule" to nudge the system to one repository over another. Rules take the form "if a \<attribute / file name / function name / object name> has a certain value, use or skip a specific repository.

<img src={useBaseUrl('img/error-reporting/project-settings/source-code-rules.webp')} alt="" />

For example, "If the module name is regular expression libc.\*so, then use repository glibc".
