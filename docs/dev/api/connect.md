---
id: connect
title: Sauce Connect API Methods
sidebar_label: Sauce Connect
description: Retrieve information about or close your Sauce Connect tunnels.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Sauce Connect API methods to monitor and clean up your active proxy tunnels.

To download Sauce Connect, see [Sauce Connect Installation](secure-connections/sauce-connect/installation.md).

Refer to [Getting Started](/dev/api) for Authentication and Server information.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).

### Get Tunnels for a User

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/tunnels</code></summary>
<p/>

Returns a list of IDs for any currently running tunnels launched by the specified user.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' \
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' \
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
[
    "28e7c8133ede4588a891666dd35af1f8"
]
```
</details>

---

### Get Tunnel Information

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/tunnels/&#123;tunnel_id&#125;</code></summary>
<p/>

Returns information about the specified tunnel.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The authentication username of the owner of the requested tunnel.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The unique identifier of the requested tunnel.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' \
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' \
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
    "team_ids": [...],
    "ssh_port": 443,
    "creation_time": 1618345938,
    "domain_names": null,
    "owner": "jim.smith",
    "use_kgp": true,
    "id": "28e7c8133ede4588a891666dd35af1f8",
    "extra_info": "{\"metrics_host\": \"localhost\", \"metrics_port\": 8888, \"tunnel_cert\": \"public\", \"inject_job_id\": true, \"backend\": \"kgp\"}",
    "direct_domains": null,
    "vm_version": "",
    "no_ssl_bump_domains": null,
    "shared_tunnel": false,
    "metadata": {...},
    "status": "running",
    "shutdown_time": null,
    "host": "maki3429.miso.saucelabs.com",
    "ip_address": null,
    "last_connected": 1618346660,
    "user_shutdown": null,
    "use_caching_proxy": null,
    "launch_time": 1618345940,
    "no_proxy_caching": false,
    "tunnel_identifier": "jim.smith_tunnel_id"
}
```
</details>

---

### Get Current Jobs for a Tunnel

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/tunnels/&#123;tunnel_id&#125;/num_jobs</code></summary>
<p/>

Returns the number of currently running jobs for the specified tunnel.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The unique identifier of the requested tunnel.</p></td>
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
--request GET 'https://apip.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' \
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://apip.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' \
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
    "id": "28e7c8133ede4588a891666dd35af1f8",
    "jobs_running": 1
}
```
</details>

---

### Stop a Tunnel

<details><summary><span className="api delete">DELETE</span> <code>/rest/v1/&#123;username&#125;/tunnels/&#123;tunnel_id&#125;</code></summary>
<p/>

Shuts down the specified tunnel.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The unique identifier of the tunnel to stop.</p></td>
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
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' \
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' \
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
    "result": true,
    "id": "28e7c8133ede4588a891666dd35af1f8",
    "jobs_running": 0
}
```
</details>

---
