---
id: storage
title: File Storage API Endpoints
sidebar_label: Storage
description: Upload and manage files in Sauce Storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Storage API methods to upload and manage your app and any file dependencies required for testing.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)

### Get App Storage Files

<details>
<summary><span className="api get">GET</span> <code>/v1/storage/files</code></summary>
<p/>

Returns the set of files that have been uploaded to Sauce Storage by the requestor.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>q</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Any search term (such as app name, file name, description, build number or version) by which you want to filter results.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The file name (case-insensitive) by which you want to search files.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>kind</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>The app type associated with the file, such as <code>android</code> or <code>ios</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>file_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more specific IDs of the files to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sha256</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>SHA-256 hexadecimal (64 chars) hash of the file to look for.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>icon_repr</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Available values are: <ul><li><code>base64</code></li><li><code>hash</code></li></ul>. The default value is <code>base64</code>. If set to <code>hash</code>, then only the <code>icon_hash</code> field will be populated in the file metadata, while the <code>icon</code> field will always be <code>null</code>. This helps to reduce the overall size of the JSON response significantly.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more tags to include only files with these tags assigned into the resulting JSON. AND condition is applied if more than one tag is provided</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more IDs of teams with which the files are shared.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more IDs of organizations with which the files are shared.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>page</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Return results beginning with a specific page. Default is <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>per_page</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The number of results (max. 100) to be shown per page.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/files' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/files' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "items": [
        {
            "id": "eac15989-311a-4dde-9e77-b695323de369",
            "owner": {
                "id": "13ef3c9f777549aba58c29d9af4dfcbf",
                "org_id": "d35a179b33394553ba0e35e0f22aabb3"
            },
            "name": "iOS-Simulator-MyRNDemoApp.1.3.0-162.zip",
            "upload_timestamp": 1652180523,
            "etag": "CLTu7Ynk1PcCEAE=",
            "kind": "ios",
            "group_id": 396353,
            "size": 6743553,
            "description": null,
            "tags": [],
            "metadata": {
                "identifier": "com.saucelabs.mydemoapp.rn",
                "name": "My Demo App",
                "version": "162",
                "is_test_runner": false,
                "icon": "...",
                "icon_hash": "...",
                "short_version": "1.3.0",
                "is_simulator": true,
                "min_os": "12.0",
                "target_os": "15.4",
                "test_runner_plugin_path": null,
                "device_family": [
                    "phone"
                ]
            },
            "access": {
                "team_ids": [
                    "a4cd325b896c4b2db5dc7c853fed31c4"
                ],
                "org_ids": []
            },
            "sha256": "a3925c6ece9e85695b3fba001560f8f59e4162cb511058c058bcbc2271429a6e"
        },
        {
            "id": "591d8591-f9eb-42b7-903c-bf1ae189a358",
            "owner": {
                "id": "13ef3c9f777549aba58c29d9af4dfcbf",
                "org_id": "d35a179b33394553ba0e35e0f22aabb3"
            },
            "name": "iOS-Simulator-MyRNDemoApp.1.3.0-162.zip",
            "upload_timestamp": 1652180522,
            "etag": "CLXq+ojk1PcCEAE=",
            "kind": "ios",
            "group_id": 396353,
            "size": 6743553,
            "description": null,
            "tags": [],
            "metadata": {
                "identifier": "com.saucelabs.mydemoapp.rn",
                "name": "My Demo App",
                "version": "162",
                "is_test_runner": false,
                "icon": "...",
                "icon_hash": "...",
                "short_version": "1.3.0",
                "is_simulator": true,
                "min_os": "12.0",
                "target_os": "15.4",
                "test_runner_plugin_path": null,
                "device_family": [
                    "phone"
                ]
            },
            "access": {
                "team_ids": [
                    "a4cd325b896c4b2db5dc7c853fed31c4"
                ],
                "org_ids": []
            },
            "sha256": "a3925c6ece9e85695b3fba001560f8f59e4162cb511058c058bcbc2271429a6e"
        },
        {
            "id": "61c5d1f1-7baa-4e1f-84fd-371da916cd26",
            "owner": {
                "id": "13ef3c9f777549aba58c29d9af4dfcbf",
                "org_id": "d35a179b33394553ba0e35e0f22aabb3"
            },
            "name": "iOS-Simulator-MyRNDemoApp.1.3.0-162.zip",
            "upload_timestamp": 1652180517,
            "etag": "CJ7jyYbk1PcCEAE=",
            "kind": "ios",
            "group_id": 396353,
            "size": 6743553,
            "description": null,
            "tags": [],
            "metadata": {
                "identifier": "com.saucelabs.mydemoapp.rn",
                "name": "My Demo App",
                "version": "162",
                "is_test_runner": false,
                "icon": "...",
                "icon_hash": "...",
                "short_version": "1.3.0",
                "is_simulator": true,
                "min_os": "12.0",
                "target_os": "15.4",
                "test_runner_plugin_path": null,
                "device_family": [
                    "phone"
                ]
            },
            "access": {
                "team_ids": [
                    "a4cd325b896c4b2db5dc7c853fed31c4"
                ],
                "org_ids": []
            },
            "sha256": "a3925c6ece9e85695b3fba001560f8f59e4162cb511058c058bcbc2271429a6e"
        }
    ],
    "links": {
        "prev": null,
        "next": null,
        "self": "?q=162&page=1&per_page=25"
    },
    "page": 1,
    "per_page": 25,
    "total_items": 3
}
```

</details>

---

### Get App Storage Groups

<details>
<summary><span className="api get">GET</span> <code>/v1/storage/groups</code></summary>
<p/>

Returns an array of groups (apps containing multiple files) currently in storage for the authenticated requestor.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>q</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Any search term (such as build  number or file name) by which you want to filter results.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>kind</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The app type associated with the group, such as <code>android</code> or <code>ios</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more specific IDs of the groups to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>project_name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The project name of the groups to return. If no <code>project_name</code> is provided, only groups with no projects assigned are provided. You can look up projects by using the <a href="#list-projects"><code>GET /v1/storage/projects</code></a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>icon_repr</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Available values are: <ul><li><code>base64</code></li><li><code>hash</code></li></ul>. The default value is <code>base64</code>. If set to <code>hash</code>, then only the <code>icon_hash</code> field will be populated in the file metadata, while the <code>icon</code> field will always be <code>null</code>. This helps to reduce the overall size of the JSON response significantly.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>page</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Return results beginning with a specific page. Default is <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>per_page</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The number of results (max. 100) to be shown per page.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/groups' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/groups' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "items": [
        {
            "id": 64612,
            "name": "com.saucelabs.SwagLabsMobileApp",
            "project_path": "My Swag Project",
            "recent": {
                "id": "43732d5b-5275-4a79-a936-197e4b9cd2d4",
                "owner": {
                    "id": "e5be7513ba224f6f9463c209cb4c5d83",
                    "org_id": "bed0a8a559404117b3d10d3bfff4c8ab"
                },
                "name": "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa",
                "upload_timestamp": 1618522437,
                "etag": "184d1c399251e8849edcb0adfc079571",
                "kind": "ios",
                "group_id": 64612,
                "description": null,
                "tags": [],
                "metadata": {
                    "identifier": "com.saucelabs.SwagLabsMobileApp",
                    "name": "SwagLabsMobileApp",
                    "version": "12",
                    "is_test_runner": false,
                    "icon": "...",
                    "icon_hash": "...",
                    "short_version": "2.7.1",
                    "is_simulator": false,
                    "min_os": "10.0",
                    "target_os": "14.2",
                    "test_runner_plugin_path": null
                }
            },
            "access": {
                "team_ids": [
                    "80d69d16ebdb4c018cc9d81ea911761a"
                ],
                "org_ids": []
            },
            "count": 1,
            "access": {...},
            "settings": {
                "proxy": {
                    "host": "",
                    "port": 0
                },
                "proxy_enabled": false,
                "lang": "en_GB",
                "orientation": null,
                "resigning_enabled": true,
                "resigning": {
                    "image_injection": true,
                    "group_directory": false,
                    "biometrics": true,
                    "sys_alerts_delay": false
                }
            }
        }
    ],
    "links": {...},
    "page": 1,
    "per_page": 25,
    "total_items": 1
}
```

</details>

---

### Get App Storage Group Settings

<details>
<summary><span className="api get">GET</span> <code>/v1/storage/groups/&#123;group_id&#125;/settings</code></summary>
<p/>

Returns the settings of an app group with the given ID.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| PATH | REQUIRED | INTEGER |</small></p><p>The unique identifier of the app group. You can look up group IDs using the <a href="#get-app-storage-groups">Get App Storage Groups</a> endpoint.</p></td>
    </tr>
  </tbody>

</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/groups/2175303/settings' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/groups/2175303/settings' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "settings": {
        "proxy": {
            "host": "",
            "port": 0
        },
        "audio_capture": false,
        "proxy_enabled": false,
        "lang": "en_GB",
        "orientation": null,
        "resigning_enabled": true,
        "resigning": {
            "image_injection": true,
            "group_directory": false,
            "biometrics": false,
            "sys_alerts_delay": false,
            "network_capture": false
        }
    },
    "kind": "ios",
    "identifier": "com.saucelabs.mydemoapp.ios"
}
```

</details>

---

### Edit App Storage Group Settings

<details>
<summary><span className="api put">PUT</span> <code>/v1/storage/groups/&#123;group_id&#125;/settings</code></summary>
<p/>

Adds or updates the settings of an app group with the given ID.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| PATH | REQUIRED | INTEGER |</small></p><p>The unique identifier of the app group. You can look up group IDs using the <a href="#get-app-storage-groups">Get App Storage Groups</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>json body</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The app group's settings. See the sample response below for the available settings.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
--request PUT 'https://api.us-west-1.saucelabs.com/v1/storage/groups/2175303/settings' \
--header 'Content-Type: application/json' \
--data-raw '{"settings":{"resigning":{"image_injection":false}}}'\
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/storage/groups/2175303/settings' \
--header 'Content-Type: application/json' \
--data-raw '{"settings":{"resigning":{"image_injection":false}}}'\
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>The provided group identifier is not a valid one or the provided settings object is invalid.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Authorization failed.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>403</code></td>
    <td colSpan='2'>The current user does not have enough permissions to change the group.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>The group does not exist or is not accessible.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>406</code></td>
    <td colSpan='2'>The settings cannot be set for the given group type.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "settings": {
        "proxy": {
            "host": "",
            "port": 0
        },
        "audio_capture": false,
        "proxy_enabled": false,
        "lang": "en_GB",
        "orientation": null,
        "resigning_enabled": true,
        "resigning": {
            "image_injection": true,
            "group_directory": false,
            "biometrics": false,
            "sys_alerts_delay": false,
            "network_capture": false
        }
    },
    "kind": "ios",
    "identifier": "com.saucelabs.mydemoapp.ios"
}
```

</details>

---

### Upload File to App Storage

<details>
<summary><span className="api post">POST</span> <code>/v1/storage/upload</code></summary>
<p/>

Uploads an app file to Sauce Storage for the purpose of mobile app testing or generic files
to be used as [Pre-Run Executables](/web-apps/automated-testing/selenium/pre-run-executables/)
and returns a unique file ID assigned to the uploaded file.
Sauce Storage supports mobile app packages in \*.apk, \*.aab, \*.ipa, or \*.zip
format as well as any other file format.
The maximum size of a single file is limited to 4GB.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>payload</code></td>
     <td><p><small>| FORM-FILE | REQUIRED | STRING |</small></p><p>The path to the file you want to upload.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| FORM-TEXT | REQUIRED | STRING |</small></p><p>The portion of the payload value that is the actual file name (including the type extension).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>description</code></td>
     <td><p><small>| FORM-TEXT | OPTIONAL | STRING |</small></p><p>A description to distinguish your app.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tags</code></td>
     <td><p><small>| FORM-TEXT | OPTIONAL | STRING |</small></p><p>An optional list of comma-separated tag names assigned to the uploaded file. Each tag name length must be between 1 and 16 characters. Tag names must only consist of uppercase (A-Z), lowercase (a-z), digits (0-9), underscore ("_"), hyphen ("-"), and dot (".") characters. Tag names are case-sensitive. It is allowed to assign up to 10 tags to a single file.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>project_name</code></td>
     <td><p><small>| FORM-TEXT | OPTIONAL | STRING |</small></p><p>An optional name for the project you want the file (group) to be assigned to. If the project doesn't exist, it will be created. Project names can only consist of alphanumeric (uppercase and lowercase) characters, along with underscores ("_"), hyphens ("-"), periods ("."), and spaces (" "). Project names are case-sensitive and can be max 64 characters long.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"g16K4P8IX/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'description="iOS Test App v3"'
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"g16K4P8IX/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'description="iOS Test App v3"'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "item": {
        "id": "7a154f05-835f-469a-93cf-880647d3a8ab",
        "owner": {
            "id": "******",
            "org_id": "******"
        },
        "name": "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa",
        "upload_timestamp": 1619035533,
        "etag": "184d1c399251e8849edcb0adfc079571",
        "kind": "ios",
        "group_id": 64612,
        "description": null,
        "tags": [],
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
            "icon_hash": "...",
            "short_version": "2.7.1",
            "is_simulator": false,
            "min_os": "10.0",
            "target_os": "14.2",
            "test_runner_plugin_path": null
        },
        "access": {...}
    }
}
```

</details>

---

### Download a File from App Storage

<details>
<summary><span className="api get">GET</span> <code>/v1/storage/download/&#123;file_id&#125;</code></summary>
<p/>

Returns an app file from Sauce Storage as a payload object in the response.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>file_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the stored file. You can look up file IDs using the <a href="#get-app-storage-files">Get App Storage Files</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/download/43732d5b-5275-4a79-a936-197e4b9cd2d4' --output SwagLabsMobileApp.ipa
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/download/43732d5b-5275-4a79-a936-197e4b9cd2d4' --output SwagLabsMobileApp.ipa
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
PK
�����(BwQ��������������Payload/UX��a�_�a�_��PK
�����*BwQ��������������Payload/SwagLabsMobileApp.app/UX��a�_�b�_��PK
�����(BwQ������������-��Payload/SwagLabsMobileApp.app/_CodeSignature/UX��a�_�a�_��PK���*BwQ������������:��Payload/SwagLabsMobileApp.app/_CodeSignature/CodeResourcesUX��a�_�a�_���}i��H����_QS�3#ؼ$�Zt��x��(R�$�m�oR"���+�]6%R.WX,��+���$3##"#����,����MT���~���;���߾�5�����/�7J"��LW�Q�~'�ā#������2���Ҩ���j�=d��}����ö-�'�����֧O}t���@��ҫ����������1̏����n�����k�
...
```

</details>

---

### Edit a Stored File

<details>
<summary><span className="api put">PUT</span> <code>/v1/storage/files/&#123;file_id&#125;</code></summary>
<p/>

Adds or updates various attributes of the specified file.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>file_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the stored file. You can look up file IDs using the <a href="#get-app-storage-files">Get App Storage Files</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>description</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A description to more clearly distinguish the stored file in the Sauce Labs system.</p></td>
    </tr>
  </tbody>
    <tbody>
    <tr>
     <td><code>tags</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>An optional list of comma-separated tag names assigned to the uploaded file. Each tag name length must be between 1 and 16 characters. Tag names must only consist of uppercase (A-Z), lowercase (a-z), digits (0-9), underscore ("_"), hyphen ("-"), and dot (".") characters. Tag names are case-sensitive. It is allowed to assign up to 10 tags to a single file. The value overrides the previously set tags.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.us-west-1.saucelabs.com/v1/storage/files/43732d5b-5275-4a79-a936-197e4b9cd2d4' \
--header 'Content-Type: text/html' \
--data-raw '{
    "item": {
        "description": "Sauce Docs iOS Test App",
        "tags": "Europe,Asia,US"
    }
}'\
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/storage/files/43732d5b-5275-4a79-a936-197e4b9cd2d4' \
--header 'Content-Type: text/html' \
--data-raw '{
    "item": {
        "description": "Sauce Docs iOS Test App",
        "tags": "Europe,Asia,US"
    }
}'\
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {13}
{
    "item": {
        "id": "43732d5b-5275-4a79-a936-197e4b9cd2d4",
        "owner": {
            "id": "e5be7513ba224f6f9463c209cb4c5d83",
            "org_id": "bed0a8a559404117b3d10d3bfff4c8ab"
        },
        "name": "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa",
        "upload_timestamp": 1618522437,
        "etag": "184d1c399251e8849edcb0adfc079571",
        "kind": "ios",
        "group_id": 64612,
        "description": "Sauce Docs iOS Test App",
        "tags": ["Europe", "Asia", "US"],
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
            "icon_hash": "...",
            "short_version": "2.7.1",
            "is_simulator": false,
            "min_os": "10.0",
            "target_os": "14.2",
            "test_runner_plugin_path": null
        },
        "access": {...}
    },
    "changed": true
}
```

</details>

---

### Delete an App Storage File

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/storage/files/&#123;file_id&#125;</code></summary>
<p/>

Deletes the specified file from Sauce Storage. Only team or organization administrators have permission to delete files. 

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>file_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the stored file. You can look up file IDs using the <a href="#get-app-storage-files">Get App Storage Files</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.us-west-1.saucelabs.com/v1/storage/files/43732d5b-5275-4a79-a936-197e4b9cd2d4' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/v1/storage/files/43732d5b-5275-4a79-a936-197e4b9cd2d4' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "item": {
        "id": "43732d5b-5275-4a79-a936-197e4b9cd2d4",
        "owner": {
            "id": "e5be7513ba224f6f9463c209cb4c5d83",
            "org_id": "bed0a8a559404117b3d10d3bfff4c8ab"
        },
        "name": "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa",
        "upload_timestamp": 1618522437,
        "etag": "184d1c399251e8849edcb0adfc079571",
        "kind": "ios",
        "group_id": 64612,
        "description": "Sauce Docs iOS Test App",
        "tags": [],
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
            "icon_hash": "...",
            "short_version": "2.7.1",
            "is_simulator": false,
            "min_os": "10.0",
            "target_os": "14.2",
            "test_runner_plugin_path": null
        },
        "access": {...}
    }
}
```

</details>

---

### Delete a Group of App Storage Files

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/storage/groups/&#123;group_id&#125;</code></summary>
<p/>

Deletes the specified group of files from Sauce Storage. Only team or organization administrators have permission to delete a group of files.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the group of files. You can look up file IDs using the <a href="#get-app-storage-groups">Get App Storage Groups</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.us-west-1.saucelabs.com/v1/storage/groups/64612' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/v1/storage/groups/64612' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "code": 404,
    "title": "NotFound",
    "detail": "The group identified by \"64612\" does not exist or is not accessible (Request ID: nancy.swee__delete_group__35803e43)"
}
```

</details>

---

### Get File Icon

<details>
<summary><span className="api get">GET</span> <code>/v1/storage/icons/&#123;icon_hash&#125;</code></summary>
<p/>

Returns the actual payload for the given icon hash. All icons are stored in .png format. This endpoint supports caching.

<table id="table-api">
  <tbody>
    <tr>
     <td><code>icon_hash</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Hash string of the particular icon. You can look up icon hashes using the <a href="#get-app-storage-files">Get App Storage Files</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/icons/<icon_hash>' --output icon.png
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/icons/<icon_hash>' --output icon.png
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

</details>

---

### List Tags

<details>
<summary><span className="api get">GET</span><code>/v1/storage/tags</code></summary>
<p/>

Returns the list of tags available for your team sorted alphabetically. Each tag name is only returned if assigned to at least one file.

<table id="table-api">
  <tbody>
    <tr>
     <td><code>page</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Return results beginning with a specific page. Default is <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>per_page</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The number of results (max. 100) to be shown per page.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/tags'
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/tags'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "items": [
      "Asia",
      "Europe",
      "US"
    ]
    "links": {
        "prev": null,
        "next": null,
        "self": "?page=1&per_page=25"
    },
    "page": 1,
    "per_page": 25,
    "total_items": 3
}
```

</details>

---
### List Projects

<details>
<summary><span className="api get">GET</span><code>/v1/storage/projects</code></summary>
<p/>

Returns an alphabetically sorted list of projects available for your team. Each project name is only returned if assigned to at least one file (group).

<table id="table-api">
<tbody>
    <tr>
     <td><code>kind</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The app type associated with the project(s), such as <ul><li><code>android</code></li>, <li><code>ios</code></li> or <li><code>other</code></li></ul>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>page</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Return results beginning with a specific page. Default is <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>per_page</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The number of results (max 100) to be shown per page.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/storage/projects'
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/storage/projects'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "items": [
      "Asia",
      "Buenos Aires",
      "Europe",
      "Los Angeles",
      "US"
    ]
    "links": {
        "prev": null,
        "next": null,
        "self": "?page=1&per_page=25"
    },
    "page": 1,
    "per_page": 25,
    "total_items": 5
}
```

</details>

---
