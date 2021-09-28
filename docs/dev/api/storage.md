---
id: storage
title: File Storage API Methods
sidebar_label: Storage
description: Upload and manage files in Sauce Storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Use the Storage API methods to upload and manage your application and any file dependencies required for testing.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)

### Get App Storage Files

<details><summary><span className="api get">GET</span> <code>/v1/storage/files</code></summary>
<p/>

Returns the set of files that have been uploaded to Sauce Storage by the requestor.

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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The application type associated with the file, such as <code>android</code> or <code>ios</code>.</p></td>
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
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>One or more IDs of teams with which the files are shared.</p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The maximum number of results to show per page.</p></td>
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
            "metadata": {
                "identifier": "com.saucelabs.SwagLabsMobileApp",
                "name": "SwagLabsMobileApp",
                "version": "12",
                "is_test_runner": false,
                "icon": "...",
                "short_version": "2.7.1",
                "is_simulator": false,
                "min_os": "10.0",
                "target_os": "14.2",
                "test_runner_plugin_path": null
            },
            "access": {
                "team_ids": [
                    "80d69d16ebdb4c018cc9d81ea911761a"
                ],
                "org_ids": []
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

### Get App Storage Groups

<details><summary><span className="api get">GET</span> <code>/v1/storage/groups</code></summary>
<p/>

Returns an array of groups (applications containing multiple files) currently in storage for the authenticated requestor.

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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The application type associated with the group, such as <code>android</code> or <code>ios</code>.</p></td>
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
     <td><code>page</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Return results beginning with a specific page. Default is <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>per_page</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The maximum number of results to show per page.</p></td>
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
                "metadata": {
                    "identifier": "com.saucelabs.SwagLabsMobileApp",
                    "name": "SwagLabsMobileApp",
                    "version": "12",
                    "is_test_runner": false,
                    "icon": "...",
                "short_version": "2.7.1",
                "is_simulator": false,
                "min_os": "10.0",
                "target_os": "14.2",
                "test_runner_plugin_path": null
            },
            "access": {
                "team_ids": [
                    "80d69d16ebdb4c018cc9d81ea911761a"
                ],
                "org_ids": []
            }
        }
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

### Upload File to App Storage

<details><summary><span className="api post">POST</span> <code>/v1/storage/upload</code></summary>
<p/>

Uploads an application file to Sauce Storage for the purpose of mobile application testing and returns a unique file ID assigned to the app. Sauce Storage supports app files in \*.apk, \*.aab, \*.ipa, or \*.zip format, up to 4GB.

:::caution Limited Support for *.aab Files
At this time, \*.aab files are only supported for Android real device testing.
:::

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
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
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

<details><summary><span className="api get">GET</span> <code>/v1/storage/download/&#123;file_id&#125;</code></summary>
<p/>

Returns an application file from Sauce Storage as a payload object in the response.

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
     (BwQ              Payload/UX �a�_�a�_� PK
     *BwQ              Payload/SwagLabsMobileApp.app/UX �a�_ b�_� PK
     (BwQ            -  Payload/SwagLabsMobileApp.app/_CodeSignature/UX �a�_�a�_� PK   *BwQ            :  Payload/SwagLabsMobileApp.app/_CodeSignature/CodeResourcesUX �a�_�a�_� �}i��H����_QS�3#ؼ$�Zt��x��(R�$�m�oR"���+�]6%R.WX,��+���$3##"#����,����MT���~���;���߾�5�����/�7J"��LW�Q�~'�ā#��� ��2� �Ҩ���j�=d  }����ö-�' ����֧O}t���@��ҫ����������1̏����n�����k�
...
```
</details>

---

### Edit a Stored File's Description

<details><summary><span className="api put">PUT</span> <code>/v1/storage/files/&#123;file_id&#125;</code></summary>
<p/>

Adds or updates the `description` attribute of the specified file.

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
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A description to more clearly distinguish the stored file within the Sauce Labs system.</p></td>
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
        "description": "Sauce Docs iOS Test App"
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
        "description": "Sauce Docs iOS Test App"
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
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
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

<details><summary><span className="api delete">DELETE</span> <code>/v1/storage/files/&#123;file_id&#125;</code></summary>
<p/>

Deletes the specified file from Sauce Storage.

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
        "metadata": {
            "identifier": "com.saucelabs.SwagLabsMobileApp",
            "name": "SwagLabsMobileApp",
            "version": "12",
            "is_test_runner": false,
            "icon": "...",
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

<details><summary><span className="api delete">DELETE</span> <code>/v1/storage/files/&#123;group_id&#125;</code></summary>
<p/>

Deletes the specified group of files from Sauce Storage.

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
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
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
