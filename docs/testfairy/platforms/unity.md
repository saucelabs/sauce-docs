---
id: unity
title: Unity
sidebar_label: Unity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Learn

- [Installation](#installation)
- [Setting Screen Name](#set-screen-name)
- [Logging Exceptions](#log-exceptions)
- [Troubleshooting](#troubleshooting)
- [Identifying Your Users](#identify-users)
- [Setting Session Attributes](#session-attributes)
- [Remote Logging](#remote-logging)

## Installation

The steps in this section are an example of how to add the TestFairy Unity SDK to your Unity project.

1. From the TestFairy Unity SDK GitHub page, download the [latest](https://github.com/testfairy/testfairy-unity-plugin/releases) version of the `unitypackage`.
   <img src={useBaseUrl('/img/testfairy/platform/unity-latest.png')} alt="download latest"/>

2. In your open Unity project, navigate to **Assets** > **Import Package** > **Custom Package**.
   <img src={useBaseUrl('/img/testfairy/platform/custom-import.png')} alt="custom import"/>

3. In the Import Unity Package window, first click **All** to include the TestFairy SDK in your app. Then click **Import**.
   <img src={useBaseUrl('/img/testfairy/platform/file-select.png')} alt="select file"/>

4. To use the TestFairy Unity SDK, click `mainCamera` in Hierarchy and click `Add Component` in the Inspector.

   :::note
   You can add the TestFairy script to any game object. TestFairy is a singleton so no harm is done.
   :::

   <img src={useBaseUrl('/img/testfairy/platform/step2.png')} alt="step 2"/>

5. Click **Add Component** again, and select a **Script** component. Type in the script's name, for example, `mainCameraScript`, and click on **Create and Add**.
   <img src={useBaseUrl('/img/testfairy/platform/step3.png')} alt="step 3"/>

6. Edit the newly created CSharp script, add `using TestFairyUnity;` to the import section, and a call to `TestFairy.begin();` with your app token. You can find your app token on the [Account Settings](https://app.testfairy.com/settings/#apptoken) page.
   <img src={useBaseUrl('/img/testfairy/platform/step4.png')} alt="step 4"/>

   Below is the code for copy-pasting:

   ```java
   using UnityEngine;
   using System.Collections;
   using TestFairyUnity;

   public class mainCameraScript : MonoBehaviour {

   // Use this for initialization
   void Start () {
      TestFairy.begin("PUT YOUR SDK APP TOKEN HERE SEE COMMENT ABOVE");
   }

   ...
   }
   ```

7. Save, build, and run.

## Usage

### Setting Screen Name

TestFairy can capture screenshots during a recorded session. It attempts to name a screenshot based on different measures automatically. To override this, you can invoke `setScreenName` and set a name for a captured screen. `setScreenName` expects a String so that developers can label screenshots with any appropriate label. Some developers make use of the level name to set the screenshot, for example:

```js
using UnityEngine;
using System.Collections;
using TestFairyUnity;
using UnityEngine.SceneManagement;

public class cameraScript : MonoBehaviour {
...
 void OnLevelWasLoaded(int level) {
 TestFairy.setScreenName(Application.loadedLevelName);
 }
...
}
```

### Log Your Exceptions

If you would like to capture exception logs and send them to the TestFairy dashboard, use the below code example:

```js
private void OnEnable()
{
 Application.logMessageReceivedThreaded += HandleLog;
}

private void OnDisable()
{
 Application.logMessageReceivedThreaded -= HandleLog;
}

private void HandleLog(string message, string stackTrace, LogType type)
{
 TestFairy.log(message);
 TestFairy.log(stackTrace);
}
```

### Troubleshooting

If you omit to add the above script, you may encounter the following errors:

```bash
ERROR ITMS-90087: "Unsupported Architectures. The executable TestFairy.framework contains unsupported architectures '[x86_64, i386]'
```

This error happens when you export your iOS app to the App Store. The App Store only supports apps built for the ARM architecture; however, to allow developers to test in the iOS Simulator, we include the architectures for 64-bit (x86_64) and 32-bit (i386) Intel architectures.

```bash
Error: exportArchive: IPA processing failed
Error Domain=IDEFoundationErrorDomain Code=1 "IPA processing failed" UserInfo={NSLocalizedDescription=IPA processing failed}
```

This error happens when you export an Ad hoc version of your iOS app. Most often seen in Unity Cloud build.

### Identifying Your Users

See the [SDK Documentation](/testfairy/sdk/identifying-users#unity) for more information.

### Session Attributes

See the [SDK Documentation](/testfairy/sdk/session-attributes#unity) for more information.

### Remote Logging

See the [SDK Documentation](/testfairy/sdk/remote-logging#unity) for more information.
