---
id: helpshift
title: Unity Backtrace and HelpShift SDK integration
sidebar_label: HelpShift SDK
description: Integrate HelpShift SDK in Unity games.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

By combining error and exception capturing from Backtrace with first-class in-app customer support using HelpShift in Unity games, you can collect error information without requiring additional details from the player and have rich in-app communication with individual users or user groups.

## 1. Integrating Both SDKs

Integrate the respective SDKs for Backtrace and HelpShift first.

### Backtrace SDK

- [Unity Integration Guide for Backtrace](/error-reporting/platform-integrations/unity/setup/)

### HelpShift SDK

- iOS
  - [HelpShift for iOS](https://developers.helpshift.com/unity/getting-started-ios/)
- Android
  - [HelpShift for Android](https://developers.helpshift.com/unity/getting-started-android/)
- WebGL (web chat)
  - [Helpshift WebChat](https://developers.helpshift.com/web-chat/getting-started/)
  - Refer to the [Unity documentation](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html) on how to embed a JavaScript library.
  - Find the source code in our [example game](https://github.com/backtrace-labs/unity-asterax/blob/Helpshift-Webinar/Assets/Plugins/AsteraX.jslib)

## 2. Linking HelpShift And Backtrace

### iOS And Android

For details on controlling the display of the HelpShift UI, refer to the [HelpShift SDK for Android documentation](https://developers.helpshift.com/sdkx-unity/support-tools-android/#conversation-view).

Linking Backtrace and HelpShift is not tricky. Add the `backtraceClient["guid"]` to a customer issue field with the ID `device_id`, as shown in the code example below:

```csharp
var configMap = new Dictionary<string, object>();
// Add Backtrace GUID to link HelpShift and Backtrace
Dictionary<string, string> backtraceid = new Dictionary<string, string>();
backtraceid.Add("type", "singleline");
backtraceid.Add("value", backtraceClient["guid"]);

// Add to CIF (custom issue fields) key
Dictionary<string, object> cifDictionary = new Dictionary<string, object>();
cifDictionary.Add("device_id", backtraceid);

configMap.Add("customIssueFields", cifDictionary);

// Show in-app conversation UI
HelpshiftSdk.ShowConversation(configMap);
```

### WebGL (Web Chat)

Make sure to add the Backtrace GUID to the `jslib` file in your Plugins folder ([Unity documentation](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)).

```javascript
mergeInto(LibraryManager.library, {

  EnableHelpshift: function (guid) {
    var PLATFORM_ID = <your platform id>,
        DOMAIN = <your domain>,
        LANGUAGE = "en";

    window.helpshiftConfig = {
        platformId: PLATFORM_ID,
        domain: DOMAIN,
        language: LANGUAGE,
        userId: Pointer_stringify(guid),
        userEmail: "Backtrace@Backtrace.io",
        userName: "John Doe"
    };

    !function(t,e){if("function"!=typeof window.Helpshift){var n=function(){n.q.push(arguments)};n.q=[],window.Helpshift=n;var i,a=t.getElementsByTagName("script")[0];if(t.getElementById(e))return;i=t.createElement("script"),i.async=!0,i.id=e,i.src="https://webchat.helpshift.com/webChat.js";var o=function(){window.Helpshift("init")};window.attachEvent?i.attachEvent("onload",o):i.addEventListener("load",o,!1),a.parentNode.insertBefore(i,a)}else window.Helpshift("update")}(document,"hs-chat");

    Helpshift("setCustomIssueFields", {
        // Key of the Backtrace GUID Custom Issue Field
        "device_id": {
            // Type of Custom Issue Field
            type: "singleline",
            // Value to set for Custom Issue Field
            value: Pointer_stringify(guid)
        }
    });
  }

});
```

Import it in C# in your game class:

```csharp
#if (UNITY_WEBGL)
    [DllImport("__Internal")]
    private static extern void EnableHelpshift(string guid);
#endif
```

Call it where appropriate (you need a reference to the Backtrace client):

```csharp
<YourGameClass>.EnableHelpshift(backtraceClient["guid"]);
```

Also, refer to the source in our [example game for JavaScript](https://github.com/backtrace-labs/unity-asterax/blob/Helpshift-Webinar/Assets/Plugins/AsteraX.jslib) and for [C# bridge](https://github.com/backtrace-labs/unity-asterax/blob/62746bf2aba85176ace268eabc547dc5ef64e79c/Assets/__Scripts/PlayerShip.cs#L141) (take note of the DLL Import).
