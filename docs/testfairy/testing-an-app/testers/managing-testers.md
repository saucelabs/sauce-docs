---
id: managing-testers
title: Managing Testers
sidebar_label: Managing Testers
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To see all the testers you have for your app, invite new testers, or import/export a list of testers, click on the **TESTERS** tab:

<img src={useBaseUrl('/img/test-fairy/group-testers.png')} alt="alt upload"/>

## Inviting Testers by Email

1. Login to [TestFairy](https://app.testfairy.com/).
2. To invite testers by email, click on the **Add Testers**.
   <img src={useBaseUrl('/img/test-fairy/add-testers1.png')} alt="alt upload"/>
3. In the Email box, add the email addresses of the testers you wish to invite. Each email address should be entered on a separate row.

:::note
You can also select a Group for the testers in the list or leave it blank (see **Managing tester groups** below).
:::
3. After you finish, click **Add Beta Testers** below the list to complete the process.

You can add testers manually or [import lists of testers](https://app.testfairy.com/testers/import/) in CSV format.

:::note Only for iOS
If you are **not** using an [iOS Enterprise certificate](https://developer.apple.com/programs/ios/enterprise/), you will need to obtain the UDIDs (Unique Device Identifiers) of your testers' devices before sending them the app. The registration link in the email sent to testers will enable them to provide their UDIDs. These details will be added to your [testers page](https://app.testfairy.com/testers).
For more information on how to add UDIDs to provisioning profiles, see [Adding UDIDs to iOS Development Profile](/testfairy/sdk/ios/adding-udids/).

:::


## Managing Tester Groups

You can also divide testers into **groups** to add more structure and organize your testing efforts.

To create a group, follow the steps below:
1. Click in the GROUPS text box and then on `Create new group...`
   <img src={useBaseUrl('/img/test-fairy/testers-new-group.png')} alt="Create new group"/>
2. Choose a group name and click **OK**. The tester you clicked in their group will be assigned the group you created.

Tester groups help you manage the invitation process to your apps. If you want to invite several testers that are all under the same group, filter the list of testers according to that group and then select all and invite them.

<img src={useBaseUrl('/img/test-fairy/group-add.png')} alt="Add multiple testers to the group"/>

## Deleting Groups

To delete a group, you must first delete all its mentions in the GROUPS field. Delete the group by pressing the x next to its name. Once you have deleted all its occurrences, it will be deleted. Then, refresh the page to make sure it was deleted.

<img src={useBaseUrl('/img/test-fairy/remove-group.png')} alt="Add multiple testers to the group"/>
