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

Returns Tunnel IDs or Tunnels Info for any currently running tunnels launched by the specified user.
It also allows to filter tunnels using an optional "filter" parameter that may take the following values:

- <code>filter=v2alpha</code>  - a response will contain only tunnels that were started with `--vm-version v2alpha`.
- <code>filter=one_per_pool</code> - a response will contain only one (arbitrary) tunnel per tunnel pool.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
    </tr>
    <tr>
     <td><code>full</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Set to <code>true</code> to return all the tunnels info and not just IDs. Defaults to <code>false</code>. </p></td>
    </tr>
    <tr>
     <td><code>all</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Set to <code>true</code> to return the tunnels IDs/info for the users in the specified user org. If this option is set, the response type would be a dictionary mapping user name to a list of tunnels. Defaults to <code>false</code>. </p></td>
    </tr>
    <tr>
     <td><code>filter</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Predefined filter name that can be used to filter out the tunnels. Currently the following filters are supported: <code>one_per_pool</code>, <code>v2alpha</code>.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="US-West"
values={[
{label: 'US-West', value: 'US-West'},
{label: 'US-East', value: 'US-East'},
{label: 'EU-Central', value: 'EU-Central'},
{label: 'APAC-Southeast', value: 'APAC-Southeast'},
]}>

<TabItem value="US-West">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="US-East">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://us-east-1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="EU-Central">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="APAC-Southeast">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.apac-southeast1.saucelabs.com/rest/v1/jim.smith/tunnels' \
--header 'Content-Type: application/json' | json_pp
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

```jsx title="Sample Response to the default request"
[
    "28e7c8133ede4588a891666dd35af1f8"
]
```

```jsx title="Sample Response to the request with an optional parameter full=true"
[
    {
        "owner": "jim.smith",
        "team_ids": [...],
        "creation_time": 1618345938,
        "domain_names": null,
        "owner": "jim.smith",
        "id": "28e7c8133ede4588a891666dd35af1f8",
        "extra_info": "{…}",
        …
        "tunnel_identifier": "jim.smith_tunnel_id"
    }
]
```

```jsx title="Sample Response to the request with an optional parameter all=true"
{
    "jim.smith": [
        "28e7c8133ede4588a891666dd35af1f8"
    ]
}
```

```jsx title="Sample Response to the request with all=true&full=true"
{
    "jim.smith": [
      {
          "owner": "jim.smith",
          "team_ids": [...],
          "creation_time": 1618345938,
          "domain_names": null,
          "owner": "jim.smith",
          "id": "28e7c8133ede4588a891666dd35af1f8",
          "extra_info": "{…}",
          …
          "tunnel_identifier": "jim.smith_tunnel_id"
      }
    ]
}
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
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The authentication username of the owner of the requested tunnel.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the requested tunnel.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="US-West"
values={[
{label: 'US-West', value: 'US-West'},
{label: 'US-East', value: 'US-East'},
{label: 'EU-Central', value: 'EU-Central'},
{label: 'APAC-Southeast', value: 'APAC-Southeast'},
]}>

<TabItem value="US-West">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="US-East">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://us-east-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="EU-Central">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="APAC-Southeast">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.apac-southeast1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
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
    "owner": "jim.smith",
    "team_ids": [...],
    "creation_time": 1618345938,
    "domain_names": null,
    "id": "28e7c8133ede4588a891666dd35af1f8",
    "extra_info": "{…}",
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
    "launch_time": 1618345940,
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
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the requested tunnel.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="US-West"
values={[
{label: 'US-West', value: 'US-West'},
{label: 'US-East', value: 'US-East'},
{label: 'EU-Central', value: 'EU-Central'},
{label: 'APAC-Southeast', value: 'APAC-Southeast'},
]}>

<TabItem value="US-West">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="US-East">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://us-east-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="EU-Central">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="APAC-Southeast">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.apac-southeast1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \
--header 'Content-Type: application/json' | json_pp
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
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The authentication username of the user whose tunnels you are requesting.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the tunnel to stop.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="US-West"
values={[
{label: 'US-West', value: 'US-West'},
{label: 'US-East', value: 'US-East'},
{label: 'EU-Central', value: 'EU-Central'},
{label: 'APAC-Southeast', value: 'APAC-Southeast'},
]}>

<TabItem value="US-West">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="US-East">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://us-east-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="EU-Central">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="APAC-Southeast">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.apac-southeast1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \
--header 'Content-Type: application/json' | json_pp
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
