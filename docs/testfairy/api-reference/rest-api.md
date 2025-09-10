---
id: rest-api
title: REST API
sidebar_label: REST API
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this document you can find the reference for the Sauce Mobile App Distribution REST API. This API allows the developer to access and interact with Sauce Mobile App Distribution data remotely.

## Getting Started

Getting started with the REST API can be done via the command line with any programming language. Let's begin with an example: by listing all our projects.

Supported Public Cloud endpoints:

### US-East-1

```bash
curl -u "john@example.com:00001234cafecafe" "https://mobile.saucelabs.com/api/1/projects/"
```

### EU-Central-1 (Access keys are different in each Data Center)

```bash
curl -u "john@example.com:coffee00001234" "https://mobile.eu-central-1.saucelabs.com/api/1/projects/"
```

## Previous Sauce Mobile App Distribution US-East endpoint:

```bash
curl -u "john@example.com:00001234cafecafe" "https://api.testfairy.com/api/1/projects/"
```

A project is either an iOS app or an Android app (two apps with the same package name but on different platforms are considered two projects.)

In the example above, you can see that our user is `john@example.com` and the API key is `0001234cafecafe`. This user authentication token is required for all requests to the REST server.

**Your API key is private**, do not share it or post it on public code repositories or forums. To find your API key, refer to [your preferences page](https://app.testfairy.com/settings).

## Projects

### Get All Projects

<details>
<summary><span className="api get">GET</span><code>/api/1/projects/</code></summary>
<p></p>

Returns a list of all projects (iOS and Android apps) in this account.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "projects": [
        {
            "id": "6905338",
            "self": "/projects/19-groupshot",
            "name":"GroupShot",
            "packageName":"com.groupshot",
            "platform":"Android",
            "icon":"[URL TO APP ICON]",
            "landingPageMode": "open"
        }
    ]
}
```

</details>

## Builds

### Get All Builds in a Project

<details>
<summary><span className="api get">GET</span><code>/api/1/projects/&#123;project-id&#125;/builds/</code></summary>
<p></p>

Get all builds in a specific project. Each build is a distinct version that is either uploaded or created by the Sauce Mobile App Distribution SDK.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "builds": [
        {
            "id":"8830728",
            "self":"/projects/6806100-myapplication/builds/8830728",
            "projectId":"6806100",
            "appName":"My Application",
            "appVersion":"DemoApp",
            "appVersionCode":"20",
            "appDisplayName":"My Application - DemoApp (20)",
            "iconUrl":"[APP ICON URL]",
            "appUrl":"[URL TO APK OR IPA FILE]",
            "landingPageMode": "closed",
            "sessions":6,
            "crashes":0,
            "testers":0,
            "feedbacks":0,
            "downloads":1,
            "uploadedAt":"2019-04-04 16:03:15",
            "uploadedVia":"[UPLOAD DETAILS]",
            "hasTestFairySdk":true,
            "insightsEnabled":true,
            "videoEnabled":true
        }
    ]
}
```

</details>

---

### Get Metadata for a Specific Build

<details>
<summary><span className="api get">GET</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;</code></summary>
<p></p>

Get a specific build of a specific project. Query the /api/1/projects/&#123;project-id&#125; API for a list of available builds.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "build": {
        "id":"8830728",
        "self":"/projects/6806100-myapplication/builds/8830728",
        "projectId":"6806100",
        "appName":"My Application",
        "appVersion":"DemoApp",
        "appVersionCode":"20",
        "appDisplayName":"My Application - DemoApp (20)",
        "iconUrl":"[APP ICON URL]",
        "appUrl":"[URL TO APK OR IPA FILE]",
        "landingPageMode": "closed",
        "sessions":6,
        "crashes":0,
        "testers":0,
        "feedbacks":0,
        "downloads":1,
        "uploadedAt":"2019-04-04 16:03:15",
        "uploadedVia":"[UPLOAD DETAILS]",
        "hasTestFairySdk":true,
        "insightsEnabled":true,
        "videoEnabled":true
    }
}
```

</details>

---

### Delete a Specific Build

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;</code></summary>
<p></p>

Delete a specific build. When all builds of a project are deleted, the project itself is removed from /api/1/projects API. When deleting a build, all of its artifacts (IPA/APK files), recorded sessions, and crashes are also deleted.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Copy a Specific Build to a Folder

<details>
<summary><span className="api post">POST</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;/copy</code></summary>
<p></p>

Use this endpoint to copy a specific build to a specified folder. You can either create a new folder or copy the build to an existing one.

#### Parameters

<table id="table-api">
	<tbody>
		<tr>
			<td><code>folder_name</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The name or path of the target folder. Examples: Folder1 or /Project1/Folder1.</p></td>
		</tr>
        <tr>
			<td><code>app_name</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Defines a new name for the application when copying the build to the target folder.<br /> If specified, the build is renamed to the given <code>app_name</code>.
                <br />If not specified, the original application name is preserved.</p></td>
		</tr>
        <tr>
			<td><code>groups</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>A comma-separated list of tester group names or IDs for the build. <br />If not specified, the original assigned groups will be copied over to the build.</p></td>
		</tr>
        <tr>
			<td><code>projectGroups</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>A comma-separated list of tester group names or IDs for the project. <br />If not specified, the original assigned groups will be copied over to the project.</p></td>
		</tr>
        <tr>
			<td><code>allowAllTesters</code></td>
			<td><p><small>| OPTIONAL | BOOLEAN |</small></p><p>Value `1` allows all other user to access the copied build, `0` to not allow.<br />If not specified, the original assigned value will be copied over to the project.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "build_id": "1000",
    "folder_path": "/Project1/Folder1",
    "app_name": "My Application",
    "assigned_groups": [
      "13",
      "group14",
      "12"
    ],
    "invalid_groups": [
      "abcd",
      "efgd"
    ],
    "assigned_project_groups": [
      "group13", 
      "14",
      "12"
    ],
    "invalid_project_groups": [
      "abcd",
      "efgd"
    ]
}
```

</details>

---

### Download the Uploaded Artifact

<details>
    <summary><span className="api get">GET</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;/download/</code></summary>
<p></p>

Downloads the binary file uploaded to Sauce Mobile App Distribution.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

</details>

---

### Invite Additional Testers to Build

<details>
    <summary><span className="api post">POST</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;/invites/</code></summary>
<p></p>

Invite one or more tester groups to this specific build. You can optionally send out an email.

#### Parameters

<table id="table-api">
	<tbody>
		<tr>
			<td><code>groups</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>A comma-separated list of tester group names or IDs.</p></td>
		</tr>
		<tr>
			<td><code>comment</code></td>
            <td><p><small>| OPTIONAL | STRING |</small></p><p>Additional text that will be added to the email, such as release notes.</p></td>
		</tr>
		<tr>
			<td><code>notify</code></td>
			<td><p><small>| OPTIONAL | STRING | INTEGER </small></p><p>Pass <code>notify=on</code> or <code>notify=1</code> to send out an email to each tester.
            <br />By default, email sending is disabled.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

</details>

---

### List All Recorded Sessions in Build

<details>
    <summary><span className="api get">GET</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;/sessions/</code></summary>
<p></p>

Get metadata for all sessions recorded for a specific build.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "sessions": [
        {
            "id": 1,
            "self": "/projects/2197059-demoapp/builds/4867553/sessions/1",
            "startTime": "2017-01-22 16:42:40",
            "duration": "15:01",
            "testerEmail": "john@testfairy.com",
            "device": "Samsung - Samsung Galaxy S8",
            "ipAddress": "23.100.122.175",
            "crashed": false,
            "countryName": "United States",
            "countryCode": "us"
        }
    ]
}
```

</details>

---

### Get Session Data, Events and Logs

<details>
    <summary><span className="api get">GET</span><code>/api/1/projects/&#123;project-id&#125;/builds/&#123;build-id&#125;/sessions/&#123;session-id&#125;</code></summary>
<p></p>

Get metadata (and optionally data) for a specific session.

#### Parameters

<table id="table-api">
  <tbody>
   <tr>
    <td><code>fields</code></td>
    <td><p><small>| OPTIONAL | STRING |</small></p><p>Possible values: <code>meta</code>, <code>logs</code>, <code>events</code>. The default value is <code>meta</code>. Use <code>events</code> to load all events, screenshots, touches, and other metrics. Use <code>logs</code> to fetch only logs. When loading logs, the response is application/text.</p></td>
  </tr>
</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "session": {
        "id":4426273741,
        "sessionStartTime":"2019-05-20 09:05:30",
        "duration":"00:27",
        "testerEmail":"blabla@ex.com",
        "device":"Xiaomi - Redmi S2",
        "ipAddress":"84.94.200.136",
        "crashed":false,
        "identity":{
            "correlationId":"blabla@ex.com",
            "attr3":"three",
            "attr4":"four",
            "attr1":"High",
            "attr2":"1.0",
            "attr5":"Version 1.0"
    }
}
```

</details>

## Testers

### List All Testers

<details>
<summary><span className="api get">GET</span><code>/api/1/testers</code></summary>
<p></p>

List all testers in this account.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "testers": [
        {
            "email":"james@example.com",
            "groups":[{
                id: 100,
                name: "friends"
            }]
        },
        {
            "email":"alice@testfairy.com",
            "groups":[{
                id: 100,
                name: "friends"
            }, {
                id: 200,
                name: "family"
            }]
        }
    ]
}
```

</details>

---

### Add a New Tester

<details>
<summary><span className="api post">POST</span><code>/api/1/testers/</code></summary>
<p></p>

Add a new tester to account. Optionally can add them to a group.

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>email</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>One or more emails, separated by commas, to add to your account.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>group</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Assign tester or testers to this tester-group. It creates one if no such group exists. Default value: none.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>notify</code></td>
			<td><p><small>| OPTIONAL | STRING | INTEGER </small></p><p>Pass <code>notify=on</code> or <code>notify=1</code> to send a welcome email when inviting this tester.
                <br /> The email will use the "Tester Welcome Email" template, which can be customized.<br /> By default, email sending is disabled.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Block a Tester

<details>
<summary><span className="api post">POST</span><code>/api/1/testers/&#123;tester-id&#125;/block/</code></summary>
<p></p>

Blocks a single tester. They cannot download the apps they are invited to. However, the data stays. You can later unblock this tester or delete them completely.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Unblock a Tester

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/testers/&#123;tester-id&#125;/block/</code></summary>
<p></p>

Unblock a single tester. Their invitations are restored. If the user is already unblocked, then nothing happens.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Delete a Tester

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/testers/&#123;tester-id&#125;</code></summary>
<p></p>

Delete a single tester, remove them from any tester-groups they might be in, and invalidate all invitations that are sent.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Add a Tester to a Group

<details>
<summary><span className="api post">POST</span><code>/api/1/testers/groups/&#123;group-id&#125;</code></summary>
<p></p>

Add a single or multiple testers to a specific group.

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>email</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>One or more email addresses, separated by commas, to be added to a group.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
  "status": "ok",
  "testers": [
    {
      "email": "tester1@saucelabs.com"
    },
    {
      "email": "tester2@saucelabs.com"
    }
  ]
}
```

</details>

---

### Remove a Tester from a Group

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/testers/groups/&#123;group-id&#125;</code></summary>
<p></p>

Remove a single or multiple testers from a specific group.

<p></p>
**Note:** Groups without any members will be discarded.

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>email</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>One or more email addresses, separated by commas, to be removed from a group.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
  "status": "ok",
  "testers": [
    {
      "email": "tester1@saucelabs.com"
    },
    {
      "email": "tester2@saucelabs.com"
    }
  ]
}
```

</details>

---

### List All Tester groups

<details>
<summary><span className="api get">GET</span><code>/api/1/testers/groups</code></summary>
<p></p>

List all tester groups in this account.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
  "status": "ok",
  "groups": [
    {
      "id": 14,
      "name": "group1",
      "testers": [
        [
          {
            "email": "tester1@saucelabs.com"
          },
          {
            "email": "tester2@saucelabs.com"
          },
          {
            "email": "tester3@saucelabs.com"
          }
        ]
      ]
    },
    {
      "id": 39,
      "name": "group2",
      "testers": [
        [
          {
            "email": "tester1@saucelabs.com"
          }
        ]
      ]
    }
  ]
}
```

</details>

---

### Create a Tester Group

<details>
<summary><span className="api post">POST</span><code>/api/1/testers/groups</code></summary>
<p></p>

Create a new tester group

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>groupName</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>Specify a group name.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "id": "40",
    "name": "group3"
}
```

</details>

---

## Feedbacks

### Get Latest Recorded Feedbacks

<details>
<summary><span className="api get">GET</span><code>/api/1/feedbacks/</code></summary>
<p></p>

Get metadata for 100 of the latest feedbacks recorded.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "feedbacks": [
        {
            "recorded_at": "2018-08-01 04:14:46",
            "text": "Feedback working",
            "feedbackId": "54321",
            "screenshotUrl": "https://s3.amazonaws.com/feedback.jpg",
            "buildId": "1234",
            "projectId": "23456",
            "recordedAt":"2018-08-01 14:14:46",
            "source": "shake",
            "reported_by": "john@testfairy.com",
            "session_id": "8765432"
        }
    ]
}
```

</details>

## Audits

### Get Recent Audit Trail Items

<details>
<summary><span className="api get">GET</span><code>/api/1/audits</code></summary>
<p></p>

Get recent audit trail items.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "audits": [
        {
            "id": 23534603,
            "timestamp": "2020-04-21 02:31:54",
            "ipAddress": "54.235.41.91",
            "eventType": "download_app",
            "eventData": {
                "projectId": 6833287,
                "buildId": 9087976,
                "appName": "MyApp",
                "appVersion": "1.0 (10)",
                "testerEmail": "john@example.com",
                "filesize": 31348
            }
        }
    ]
}
```

</details>

## Permissions

### Get the List of Admins and Their Permissions

<details>
<summary><span className="api get">GET</span><code>/api/1/cpanel/permissions/</code></summary>
<p></p>

Get the list of admins in the account and their permissions.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    admins:
    [
        {
            email: "joe@example.com",
            role: "account-owner",
            permissions: [
                "*:rw"
            ]
        },
        {
            email: "bob@example.com",
            role: "account-manager",
            permissions: [
                "*:rw"
            ]
        },
        {
            email: "alice@example.com",
            role: "admin",
            permissions: [
                "*:rw"
            ]
        },
        {
            email: "michael@example.com",
            role: "admin",
            permissions: [
                "16527:rw",
                "16517:rw",
                "69237:r"
            ]
        },
    ]
}
```

</details>

## Webhooks

### List All Webhooks

<details>
<summary><span className="api get">GET</span><code>/api/1/webhooks/</code></summary>
<p></p>

List all webhooks in this account.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status":"ok",
    "webhooks":[
        {
            "id":12,
            "status":"0",
            "name":"Slack Webhook @vijay",
            "url":"https://hooks.slack.com/services/",
            "actions":"crash,feedback,upload,new-udid",
            "projectIds":"12345,45643"
        }
    ]
}
```

</details>

---

### Add a New Webhook

<details>
<summary><span className="api post">POST</span><code>/api/1/webhook/</code></summary>
<p></p>

Add a new webhook to the account.

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>webhook-name</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The name of the webhook.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-url</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The URL for the webhook.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-status</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Enables or disables the webhook. The values are: <code>true</code>, <code>false</code>. Default value is <code>false</code>.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>actions</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Comma separated list of actions. Options include: <code>crash</code>, <code>feedback</code>, <code>upload</code>, <code>new-udid</code>.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-project-ids</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Comma separated list of project IDs.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Get a Single Webhook

<details>
<summary><span className="api get">GET</span><code>/api/1/webhook/&#123;webhook-id&#125;/</code></summary>
<p></p>

Returns a single webhook.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok",
    "webhook": {
        "id":12,
        "status":"0",
        "name":"Slack Webhook @vijay",
        "url":"https://hooks.slack.com/services/",
        "actions":"crash,feedback,upload,new-udid",
        "projectIds":"12345,45643"
    }
}
```

</details>

---

### Modify a Webhook

<details>
<summary><span className="api post">POST</span><code>/api/1/webhook/&#123;webhook-id&#125;/</code></summary>
<p></p>

Modifies a single webhook.

#### Parameters

<table id="table-api">
  	<tbody>
		<tr>
			<td><code>webhook-name</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The name of the webhook.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-url</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The URL for the webhook.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-status</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Enables or disables the webhook. The values are: <code>true</code>, <code>false</code>. Default value is <code>false</code>.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>actions</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Comma separated list of actions. Options include: <code>crash</code>, <code>feedback</code>, <code>upload</code>, <code>new-udid</code>.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>webhook-project-ids</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Comma separated list of project IDs.</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Delete a Webhook

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/webhook/&#123;webhook-id&#125;/</code></summary>
<p></p>

Deletes a single webhook.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

## Sites

### List All Sites

<details>
<summary><span className="api get">GET</span><code>/api/1/site/</code></summary>
<p></p>

List all sites in this account.

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
  "status": "ok",
  "site": {
    "accounts": [
      {
        "id": "1",
        "name": "Site 1",
        "buildsCount": 0,
        "users": [
          {
            "email": "[site-subaccount-682ae46476f9f]",
            "role": "Account Owner"
          },
          {
            "email": "sitemanager@saucelabs.com",
            "role": "Account Manager"
          }
        ]
      }
    ],
    "managers": [
      {
        "email": "accountmanager@saucelabs.com"
      }
    ]
  }
}
```

</details>

---

### Create a New Site

<details>
<summary><span className="api post">POST</span><code>/api/1/site/</code></summary>
<p></p>

Add a new site to the organization.

#### Parameters

<table id="table-api">
	<tbody>
		<tr>
			<td><code>name</code></td>
			<td><p><small>| REQUIRED | STRING |</small></p><p>The name of the account. The string accepts numbers, letters, <code>-</code>, and <code>_</code>. The length has to be more than 3 characters.</p></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td><code>loginMethod</code></td>
			<td><p><small>| OPTIONAL | STRING |</small></p><p>Specify how users can log in to account. Pass <code>0</code> for SSO or <code>1</code> for credentials</p></td>
		</tr>
	</tbody>
</table>

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>

---

### Delete a Site

<details>
<summary><span className="api delete">DELETE</span><code>/api/1/site/&#123;site-id&#125;/</code></summary>
<p></p>

Deletes an account .

#### Responses

<table id="table-api">
	<tbody>
		<tr>
			<td><code>200</code></td>
			<td colSpan='2'>Success.</td>
		</tr>
	</tbody>
</table>

```json title="Sample Response"
{
    "status": "ok"
}
```

</details>
