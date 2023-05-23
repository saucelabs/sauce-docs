---
id: rest-api
title: REST API
sidebar_label: REST API
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#### About

This is the reference document for the TestFairy REST API. This API allows the developer to access and interact with TestFairy data remotely.

#### Getting Started

Getting started with the REST API is easy, and can be done via command line with any programming language. Let's begin with a simple example. We will start by listing all our projects.

A project is either an iOS app or an Android app (two apps with the same package name but on different platforms are considered two projects.)

```bash
curl -u "john@example.com:00001234cafecafe" "https://api.testfairy.com/api/1/projects/"
```

In the example above, you can see that our user is `john@example.com` and the API key is `0001234cafecafe`. This user authentication token is required for all requests to the REST server.

**Your API key is private**, please do not share it or post it on public code repositories or forums. To find your API key, please refer to [your preferences page](https://app.testfairy.com/settings).

<!--
<a name="projects"></a>
#### [api/1/projects](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get all projects
	</span>
	<code>GET /api/1/projects/</code>
</div>
<div class="method-description hidden">
	Returns a list of all projects (iOS and Android apps) in this account.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"projects": [
		{
			"id": "19-groupshot",
			"self": "/projects/19-groupshot",
			"name":"GroupShot",
			"packageName":"com.groupshot",
			"platform":"Android",
			"icon":"[URL TO APP ICON]"
		}
	]
}</pre>
</div>

<hr />

<a name="builds"></a>
#### [api/1/projects/{project-id}/builds/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get all builds in a project
	</span>
	<code>GET /api/1/projects/{project-id}/builds/</code>
</div>
<div class="method-description hidden">
	Get all builds in a specific project. Each build is a distinct version that was either uploaded, or created by the TestFairy SDK.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"builds": [
		{
			"id":8830728,
			"self":"/projects/6806100-myapplication/builds/8830728",
			"projectId":"6806100",
			"appName":"My Application",
			"appVersion":"DemoApp",
			"appVersionCode":"20",
			"appDisplayName":"My Application - DemoApp (20)",
			"iconUrl":"[APP ICON URL]",
			"appUrl":"[URL TO APK OR IPA FILE]",
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
</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get metadata for a specific build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}</code>
</div>
<div class="method-description hidden">
	Get a specific build of a specific project. Query the /api/1/projects/{project-id} API for a list of available builds.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok",
	"build": {
		"id":8830728,
		"self":"/projects/6806100-myapplication/builds/8830728",
		"projectId":"6806100",
		"appName":"My Application",
		"appVersion":"DemoApp",
		"appVersionCode":"20",
		"appDisplayName":"My Application - DemoApp (20)",
		"iconUrl":"[APP ICON URL]",
		"appUrl":"[URL TO APK OR IPA FILE]",
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
</pre>
</div>

<div class="method">
	<span>
		<button class="expand">▶</button> Delete a specific build.
	</span>
	<code>DELETE /api/1/projects/{project-id}/builds/{build-id}</code>
</div>
<div class="method-description hidden">
	Delete a specific build. When all builds of a project have been deleted, the project itself is removed from /api/1/projects API.<br />
	When deleting a build, all of its artifacts (IPA/APK files), recorded sessions and crashes are also deleted. <br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<hr />

<a name="download build"></a>
#### [api/1/projects/{project-id}/builds/{build-id}/download/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Download the uploaded artifact
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/download/</code>
</div>
<div class="method-description hidden">
	Downloads the binary file uploaded to TestFairy
</div>

<hr />

<a name="sessions"></a>
#### [api/1/projects/{project-id}/builds/{build-id}/sessions/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all recorded sessions in build
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/</code>
</div>
<div class="method-description hidden">
	Get metadata for all sessions recorded for a specific build.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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


</pre>
</div>

<hr />

#### [api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get session data, events and logs
	</span>
	<code>GET /api/1/projects/{project-id}/builds/{build-id}/sessions/{session-id}/</code>
</div>
<div class="method-description hidden">
	Get metadata (and optionally data) for a specific session.<br />

	<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>fields</td>
		<td><em>string</em></td>
		<td>
			Possible values: "meta", "logs", "events"<br />
			Default value: "meta" <br/>
			Use "events" to load all events, screenshots, touches and other metrices. Use "logs" to fetch
			only logs. When loading logs, response will be application/text.
		</td>
	</tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
</pre>
</div>

<hr />

<a name="testers"></a>
#### [api/1/testers/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all testers
	</span>
	<code>GET /api/1/testers/</code>
</div>
<div class="method-description hidden">
	List all testers in this account.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
</pre>
</div>

<div class="method">
	<span>
		<button class="expand">▶</button> Add a new tester
	</span>
	<code>POST /api/1/testers/</code>
</div>
<div class="method-description hidden">
	Add a new tester to account. Optionally can add them to a group.<br />

	<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>email</td>
		<td><em>string</em></td>
		<td>
			One or more emails, separated by commas, to add to your account.
		</td>
        </tr>
	<tr>
		<td>group</td>
		<td><em>string</em></td>
		<td>
			Assign tester or testers to this tester-group. Will create one if no such group exists.
			Default value: none<br />
		</td>
	</tr>
	<tr>
		<td>notify</td>
		<td><em>string</em></td>
		<td>
			Pass "notify=on" to send out a welcome email when inviting this tester. The email sent is
			the `Tester Welcome Email` template and can be configured.
			Default value: off<br />
		</td>
	</tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<!---- -->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> Block a tester
	</span>
	<code>POST /api/1/testers/{tester-id}/block/</code>
</div>
<div class="method-description hidden">
	Blocks a single tester. They cannot download the apps they were invited to. However, the data
	stays. You can later unblock this tester, or delete them completely.

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<!--- --->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> Unblock a tester
	</span>
	<code>DELETE /api/1/testers/{tester-id}/block/</code>
</div>
<div class="method-description hidden">
	Unblocks a single tester. Their invitations are restored. If the user is already unblocked, then
	nothing happens.

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div> -->

<!--- -->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> Delete a tester
	</span>
	<code>DELETE /api/1/testers/{tester-id}</code>
</div>
<div class="method-description hidden">
	Delete a single tester, remove them from any tester-groups they might be in, and invalidate
	all invitations that were sent.<br />

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<hr />

<a name="feedbacks"></a>
#### [api/1/feedbacks/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get latest recorded feedbacks
	</span>
	<code>GET /api/1/feedbacks/</code>
</div>
<div class="method-description hidden">
	Get metadata for 100 of the latest feedbacks recorded. <br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
	</pre>
</div>

<hr />

#### [api/1/audits/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get recent audit trail items
	</span>
	<code>GET /api/1/audits/</code>
</div>
<div class="method-description hidden">
	Get recent audit trail items<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
	</pre>
</div>

<hr />

<a name="permissions"></a>
#### [api/1/cpanel/permissions/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> Get the list of admins and their permissions
	</span>
	<code>GET /api/1/cpanel/permissions/</code>
</div>
<div class="method-description hidden">
	Get the list of admins in the account and their permissions. <br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
	</pre>
</div>

<hr />

<a name="webhooks"></a>
#### [api/1/webhooks/](#)

<div class="method">
	<span>
		<button class="expand">▶</button> List all webhooks
	</span>
	<code>GET /api/1/webhooks/</code>
</div>
<div class="method-description hidden">
	List all webhooks in this account.<br />
	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
</pre>
</div>

<div class="method">
	<span>
		<button class="expand">▶</button> Add a new webhook
	</span>
	<code>POST /api/1/webhook/</code>
</div>
<div class="method-description hidden">
	Add a new webhook to account.<br />

	<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>webhook-name</td>
		<td><em>string</em></td>
		<td>
			Required. The name of the webhook.
		</td>
	</tr>
	<tr>
		<td>webhook-url</td>
		<td><em>string</em></td>
		<td>
			Required. The url for the webhook.
		</td>
	</tr>
	<tr>
		<td>webhook-status</td>
		<td><em>string</em></td>
		<td>
			Enables or disables the webhook, true or false.<br>
			Default value: false
		</td>
	</tr>
	<tr>
		<td>actions</td>
		<td><em>string</em></td>
		<td>
			Comma separated list of actions. options include
			<ul>
				<li>crash</li>
				<li>feedback</li>
				<li>upload</li>
				<li>new-udid</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>webhook-project-ids</td>
		<td><em>string</em></td>
		<td>
			Optional. Comma separated list of project IDs.
		</td>
	</tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div> -->

<!---- -->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> GET a single webhook
	</span>
	<code>GET /api/1/webhhook/{webhook-id}/</code>
</div>
<div class="method-description hidden">
	Returns a single webhook.

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
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
</pre>
</div> -->

<!--- --->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> MODIFY a webhook
	</span>
	<code>POST /api/1/webhhook/{webhook-id}/</code>
</div>
<div class="method-description hidden">
	Modifies a single webhook.

<table>
	<tr>
		<th style="width: 160px;"><b>parameter</b></th>
		<th style="width: 100px;"><b>type</b></th>
		<th><b>description</b></th>
	</tr>
	<tr>
		<td>webhook-name</td>
		<td><em>string</em></td>
		<td>
			Required. The name of the webhook.
		</td>
	</tr>
	<tr>
		<td>webhook-url</td>
		<td><em>string</em></td>
		<td>
			Required. The url for the webhook.
		</td>
	</tr>
	<tr>
		<td>webhook-status</td>
		<td><em>string</em></td>
		<td>
			Enables or disables the webhook, true or false.<br>
			Default value: false
		</td>
	</tr>
	<tr>
		<td>actions</td>
		<td><em>string</em></td>
		<td>
			Comma separated list of actions. options include
			<ul>
				<li>crash</li>
				<li>feedback</li>
				<li>upload</li>
				<li>new-udid</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>webhook-project-ids</td>
		<td><em>string</em></td>
		<td>
			Optional. Comma separated list of project IDs.
		</td>
	</tr>
	</table>

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>


<!--- -->

<!-- <div class="method">
	<span>
		<button class="expand">▶</button> Delete a webhook
	</span>
	<code>DELETE /api/1/webhhook/{webhook-id}/</code>
</div>
<div class="method-description hidden">
	Delete a single webhook.<br />

	<span class="responses">Responses</span><br />
	<span class="status-green">STATUS 200</span> OK<br />
	<pre>
{
	"status": "ok"
}
</pre>
</div>

<hr />

<style>h4 {margin-bottom: 30px;}</style> -->
