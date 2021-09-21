---
id: accounts
title: Account Management API Methods
sidebar_label: Accounts
description: Manage all aspects of your Sauce Labs organization, team, and member accounts.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Accounts API exposes the following methods related to individual and team account configuration and monitoring.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## Team Methods

### Lookup Teams

<details><summary><span className="api get">GET</span> <code>/team-management/v1/teams/</code></summary>
<p/>

Queries the organization of the requesting account and returns the number of teams matching the query and a summary of each team, including the `ID` value, which may be a required parameter of other API calls related to a specific team.

You can filter the results of your query using the `name` parameter below.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns the set of teams that begin with the specified name value. For example, <code>name=sauce</code> would return all teams in the organization with names beginning with "sauce".</p></td>
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

```jsx title="cURL with jq Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams?name=sauce' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="cURL with jq Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams?name=sauce' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team info returned.</td>
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
    "links": {...},
    "count": 1,
    "results": [
        {
            "id": "**************",
            "name": "Sauce-Docs",
            "settings": {
                "virtual_machines": 25,
                "real_devices": 0,
                "live_only": false
            },
            "group": {...},
            "is_default": false,
            "org_uuid": "**************",
            "user_count": 1
        }
    ]
}
```
</details>

---

### Get a Specific Team

<details><summary><span className="api get">GET</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Returns the full profile of the specified team. The `ID` of the team is the only valid unique identifier.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
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

```jsx title="cURL with jq Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="cURL with jq Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team info returned.</td>
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
    "id": "80d69d16ebdb4c018cc9d81ea911761a",
    "name": "Sauce-Docs",
    "organization": {
        "id": "**********",
        "name": "SLTC",
        "created_at": "2020-10-05T16:21:01.513495Z",
        "updated_at": "2020-11-09T23:46:47.752572Z",
        "total_vm_concurrency": 46,
        "settings": {...}
    },
    "group": {...},
    "created_at": "2020-12-30T17:09:12.473388Z",
    "updated_at": "2020-12-30T17:09:12.473415Z",
    "settings": {
        "virtual_machines": 25,
        "real_devices": 0,
        "live_only": false
    },
    "description": "Tech Content API Testing",
    "is_default": false,
    "links": {...}
}
```
</details>

---

### Create a Team

<details><summary><span className="api post">POST</span> <code>/team-management/v1/teams/</code></summary>
<p/>

Creates a new team under the organization of the requesting account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A name for the new team.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>organization</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The unique ID of the organization under which the team is created. You can look up your organization ID using the [Lookup Teams(#lookup-teams)] endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>settings</code></td>
     <td><p><small>| BODY | REQUIRED | OBJECT |</small></p><p>The settings object specifies the concurrency allocations for the team within the organization. The available attributes are:
     <ul>
      <li><code>virtual_machines</code> - <small>INTEGER</small></li>
      <li><code>real_devices</code> - <small>INTEGER</small></li>
      <li><code>live_only</code> - <small>BOOLEAN</small> Defaults to <code>false</code>.</li>
    </ul>
    </p><p>The <code>settings</code> parameter is required, but you only need to include the applicable concurrency attribute(s) for the team.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>description</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A description to distinguish the team within the organization.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "A-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "organization": "<org-id>",
    "description": "Docs QA Team"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "A-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "organization": "<org-id>",
    "description": "Docs QA Team"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success. Team created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "id": "9d3460738c28491a81d7ea16704a9edd",
    "name": "A-Team",
    "organization": {...}
    },
    "group": {...},
    "created_at": "2021-04-02T17:52:42.578095Z",
    "updated_at": "2021-04-02T17:52:42.578126Z",
    "settings": {
        "virtual_machines": 10,
        "real_devices": 0,
        "live_only": false
    },
    "description": "Docs QA Team",
    "is_default": false,
    "links": {...}
}
```
</details>

---

### Delete a Team

<details><summary><span className="api delete">DELETE</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Deletes the specified team from the organization of the requesting account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
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
--request DELETE 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>/' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>/' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>Success. No content returned.</td>
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

### Update a Team

<details><summary><span className="api put">PUT</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Replaces all values of the specified team with the new set of parameters passed in the request. To update only certain parameters, see [Partially Update Team](#partially-update-a-team).

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The name of the team as it will be after the update. Pass the current value to keep the name unchanged.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>settings</code></td>
     <td><p><small>| BODY | REQUIRED | OBJECT |</small></p><p>The updated concurrency allocations for the team. The available attributes are:
      <ul>
        <li><code>virtual_machines</code> - <small>INTEGER</small></li>
        <li><code>real_devices</code> - <small>INTEGER</small></li>
        <li><code>live_only</code> - <small>BOOLEAN</small> Defaults to <code>false</code>.</li>
      </ul>
      </p><p>The <code>settings</code> parameter is required, but you only need to include the applicable concurrency attribute(s) for the team.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>description</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A description to distinguish the team within the organization. If the previous team definition included a description, omitting the parameter in the update will delete it from the team record.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Doc-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "description": "Docs Team"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Doc-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "description": "Docs Team"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success. Team updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {3,10,14}
{
    "id": "b3de7078b79841b59d2e54127269afe3",
    "name": "Doc-Team",
    "organization": {...}
    },
    "group": {...},
    "created_at": "2020-10-05T17:13:56.580592Z",
    "updated_at": "2021-04-05T13:49:22.107825Z",
    "settings": {
        "virtual_machines": 10,
        "real_devices": 0,
        "live_only": true
    },
    "description": "Docs Team",
    "is_default": false,
    "links": {...}
}
```
</details>

---

### Partially Update a Team

<details><summary><span className="api patch">PATCH</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Updates one or more individual editable parameters (such as the concurrency allocation) of the specified team without requiring a full profile update.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the ID of teams in your organization using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>An updated name for the team.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>settings</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>The updated concurrency allocations for the team. The available attributes are:
        <ul>
          <li><code>virtual_machines</code> - <small>INTEGER</small></li>
          <li><code>real_devices</code> - <small>INTEGER</small></li>
          <li><code>live_only</code> - <small>BOOLEAN</small> Defaults to <code>false</code>.</li>
        </ul></p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>description</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>An updated description.</p></td>
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
--request PATCH 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "settings": {
        "virtual_machines": "25"
    }
}' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PATCH 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "settings": {
        "virtual_machines": "25"
    }
}' | json_pp
```

</TabItem>
</Tabs>


#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx {9} title="Sample Response"
{
    "id": "b3de7078b79841b59d2e54127269afe3",
    "name": "Doc-Team",
    "organization": {...},
    "group": {...},
    "created_at": "2020-10-05T17:13:56.580592Z",
    "updated_at": "2021-04-05T13:49:22.107825Z",
    "settings": {
        "virtual_machines": 25,
        "real_devices": 0,
        "live_only": true
    },
    "description": "Docs Team",
    "is_default": false,
    "links": {...}
}
```
</details>

---

### List Team Members

<details><summary><span className="api get">GET</span> <code>/team-management/v1/teams/&#123;team_id&#125;/members/</code></summary>
<p/>

Returns the number of members in the specified team and lists each member.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Identifies the team for which you are requesting the list of members.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>/members' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>/members' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team info returned.</td>
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
    "links": {...},
    "count": 0,
    "results": []
}
```
</details>

---

### Reset Access Keys for Entire Team

<details><summary><span className="api post">POST</span> <code>/team-management/v1/teams/&#123;team_id&#125;/reset-access-key/</code></summary>
<p/>

Globally regenerates new access key values for every member of the specified team.

:::warning
Regenerating an access key invalidates the previous value and any tests containing the prior value will fail, so make sure you edit any tests and credential environment variables with the new value.
:::

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Identifies the team for which you are resetting member access keys.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/teams/<team-id>/reset-access-key' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/teams/<team-id>/reset-access-key' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. All access keys reset.</td>
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
[]
```
</details>

---

## User Methods

### Lookup Users

<details><summary><span className="api get">GET</span> <code>/team-management/v1/users/</code></summary>
<p/>

Queries the organization of the requesting account and returns the number of users matching the query and a basic profile of each user, including the `ID` value, which may be a required parameter of other API calls related to a specific user.

You can narrow the results of your query using any of the following filtering parameters.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limits the results to usernames that begin with the specified value. For example, <code>username=an</code> would return all users in the organization with usernames beginning with "an".</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>teams</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to users who belong to the specified team_ids. Specify multiple teams as comma-separated values.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team-name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to users who belong to the specified team names. Specify multiple teams as comma-separated values.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>roles</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Limit results to users who are assigned certain roles. Valid values are:
       <ul>
         <li><code>1</code> - Organaization Admin</li>
         <li><code>4</code> - Team Admin</li>
         <li><code>3</code> - Member</li>
       </ul></p><p>Specify multiple roles as comma-separated values.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>phrase</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to users whose first name, last name, or email address begins with the specified value.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to users of the specifid status. Valid values are:
       <ul>
         <li><code>active</code></li>
         <li><code>pending</code></li>
         <li><code>inactive</code></li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER MAX=100 |</small></p><p>Limit results to a maximum number per page. Default value is <code>20</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The starting record number from which to return results.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users?roles=3&limit=30' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/users?roles=3&limit=30' \
--header 'Content-Type: application/json' \
--data-raw '' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team info returned.</td>
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
    "links": {...},
    "count": 1,
    "results": [
        {
            "id": "80d69d16ebdb4c018cc9d81ea911761a",
            "name": "Sauce-Docs",
            "settings": {...},
            "group": {...},
            "is_default": false,
            "org_uuid": "******************",
            "user_count": 1
        }
    ]
}
```
</details>

---

### Get a Specific User

<details><summary><span className="api get">GET</span> <code>/team-management/v1/users/&#123;user_id&#125;/</code></summary>
<p/>

Returns the full profile of the specified user. The `ID` of the user is the only valid unique identifier.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The user's unique identifier. You can look up the IDs of users in your organization using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team info returned.</td>
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
    "id": "e5be7513ba224f6f9463c209cb4c5d83",
    "username": "jim.smith",
    "email": "jsmith@saucelabs.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2020-10-05T16:21:06.021260Z",
    "updated_at": "2020-12-30T17:28:35.969274Z",
    "teams": [...],
    "roles": [...],
    "is_staff": true,
    "is_superuser": false,
    "user_type": "admin",
    "groups": [],
    "organization": {...},
    "is_organization_admin": true,
    "is_team_admin": false
}
```
</details>

---

### Create a New User

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/</code></summary>
<p/>

Creates a new user in the Sauce Labs platform.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>first_name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The new user's first name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>last_name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The new user's last name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>email</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The user's contact email address.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A login username for the new user.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>password</code></td>
      <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A login password for the new user. The password requirements are: </p><p>
      <ul>
        <li>1 lowercase letter</li>
        <li>1 uppercase letter</li>
        <li>1 digit</li>
        <li>1 special character</li>
        <li>8 characters minimum</li>
        <li>No blank spaces</li>
      </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>organization</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The identifier of the organization to create the user's account. You can look up organization IDs by calling <code>GET https://api.saucelabs.com/v1/organizations</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>role</code></td>
     <td><p><small>| BODY | REQUIRED | INTEGER |</small></p><p>Tnew user's permission role. Valid values are:
       <ul>
         <li><code>1</code> - Organaization Admin</li>
         <li><code>4</code> - Team Admin</li>
         <li><code>3</code> - Member</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The identifier of the team of which the new user is a member. You can look up team IDs using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "John",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "username": "jsmith",
    "password": "$m1th*RULES",
    "role": 4,
    "team": "<team-id>"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "John",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "username": "jsmith",
    "password": "$m1th*RULES",
    "role": 4,
    "team": "<team-id>"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success. User created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Unauthorized.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad input.</td>
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
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-06T16:35:02.713149Z",
    "teams": [
        {
            "id": "b3de7078b79841b59d2e54127269afe3",
            "name": "Doc-Team",
            "settings": {
                "virtual_machines": 100,
                "real_devices": 0,
                "live_only": true
            },
            "group": {...},
            "is_default": false,
            "org_uuid": "bed0a8a559404117b3d10d3bfff4c8ab"
        }
    ],
    "roles": [
        {
            "name": "team admin",
            "role": 4
        }
    ],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...},
    "is_organization_admin": false,
    "is_team_admin": true
}
```
</details>

---

### Update a User

<details><summary><span className="api put">PUT</span> <code>/team-management/v1/users/&#123;user_id&#125;</code></summary>
<p/>

Replaces all values of the specified user profile with the new set of parameters passed in the request. To update only certain parameters, see [Partially Update a User](#partially-update-a-user).

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>first_name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The user's first name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>last_name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The user's last name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>email</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The user's contact email address.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>password</code></td>
      <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A login password for the new user. The password requirements are: </p><p>
      <ul>
        <li>1 lowercase letter</li>
        <li>1 uppercase letter</li>
        <li>1 digit</li>
        <li>1 special character</li>
        <li>8 characters minimum</li>
        <li>No blank spaces</li>
      </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>verify_password</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>A confirmation of the password. This value must match the <code>password</code> value in the request.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Hannibal",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "password": "$m1th*RULEStheworld",
    "verify_password": "$m1th*RULEStheworld"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Hannibal",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "password": "$m1th*RULEStheworld",
    "verify_password": "$m1th*RULEStheworld"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. User updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Unauthorized.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Failed Response"
{
  "status_code": 400,
  "non_field_errors": [
        "Passwords need to match"
    ]
}
```
</details>

---

### Partially Update a User

<details><summary><span className="api patch">PATCH</span> <code>/team-management/v1/users/&#123;user_id&#125;</code></summary>
<p/>

Allows you to update individual user values without replacing the entire profile.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user to update. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>first_name</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The user's first name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>last_name</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The user's last name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>email</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The user's contact email address.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>password</code></td>
      <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A login password for the new user. The password requirements are: </p><p>
      <ul>
        <li>1 lowercase letter</li>
        <li>1 uppercase letter</li>
        <li>1 digit</li>
        <li>1 special character</li>
        <li>8 characters minimum</li>
        <li>No blank spaces</li>
      </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>verify_password</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A confirmation of the password. If the <code>password</code> parameter is included in the call, this parameter is required and the values for both must match.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Jimmy"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Jimmy"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. User updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Unauthorized.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
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
    "id": "e5be7513ba224f6f9463c209cb4c5d83",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jimmy",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2020-10-05T16:21:06.021260Z",
    "updated_at": "2021-04-09T14:22:43.884794Z",
    "teams": [...],
    "roles": [...],
    "organization": {...}
    },
    "is_organization_admin": true,
    "is_team_admin": false
}
```
</details>

---

### Get User Concurrency

<details><summary><span className="get">GET</span> <code>/rest/v1.2/users/&#123;username&#125;/concurrency</code></summary>
<p/>

Allows you to update individual user values without replacing the entire profile.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the user whose concurrency you are looking up. You can look up a user's name using a variety of filtering paramters with the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' \ | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' \ | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. User updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Unauthorized.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad request.</td>
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
   "concurrency" : {
      "organization" : {
         "allowed" : {
            "mac_vms" : 1000,
            "rds" : 20,
            "vms" : 1000
         },
         "current" : {
            "mac_vms" : 0,
            "rds" : 0,
            "vms" : 0
         },
         "id" : "7fb25570b4064716b9b6daae1a846790"
      },
      "team" : {
         "allowed" : {
            "mac_vms" : 1000,
            "rds" : 20,
            "vms" : 100
         },
         "current" : {
            "mac_vms" : 0,
            "rds" : 0,
            "vms" : 0
         },
         "id" : "98b9f34e596047d99abba56f517846a9"
      }
   },
   "timestamp" : 1631125800.61984
}

```
</details>

---


### Get a User's Team

<details><summary><span className="api get">GET</span> <code>/team-management/v1/users/&#123;user_id&#125;/teams/</code></summary>
<p/>

Returns the number of teams a user belongs to and provides information about each team, including whether it is the default and its concurrency settings.

:::note
At this time, users may only belong to a maximum of one team.
:::

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/teams/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/teams/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
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
    "links": {...},
    "count": 1,
    "results": [
        {
            "id": "************",
            "name": "Sauce-Docs",
            "settings": {
                "virtual_machines": 25,
                "real_devices": 0,
                "live_only": false
            },
            "group": {},
            "is_default": false,
            "org_uuid": "************"
        }
    ]
}
```
</details>

---

### Subscribe a User to a Team

<details><summary><span className="api post">POST</span> <code>/team-management/v1/membership/</code></summary>
<p/>

Set a user's team affiliation. Users are limited to one team affiliation, so if the user is already a member of a different team, this call will remove them from that team. Also, By default, the user will not have team-admin privileges, even if they did on a prior team.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the Sauce Labs user to be added to the team.You can look up the ID of a user in your organization using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The identifier of the team to which the user will be added. You can look up the ID of a team in your organization using the <a href="#lookup-teams">Lookup Teams</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/membership/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "<user-id>",
    "team": "<team-id>"
}' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/membership/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "<user-id>",
    "team": "<team-id>"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. User assigned Org Admin role.</td>
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
    "id": 28099,
    "user": {
        "id": "e5be7513ba224f6f9463c209cb4c5d83",
        "username": "nancy.sweeney",
        "email": "nancy.sweeney@saucelabs.com",
        "first_name": "Casey",
        "last_name": "Sweeney",
        "is_active": true,
        "created_at": "2020-10-05T16:21:06.021260Z",
        "updated_at": "2021-04-09T14:22:43.884794Z",
        "teams": [
            {
                "id": "80d69d16ebdb4c018cc9d81ea911761a",
                "name": "Sauce-Docs",
                "settings": {
                    "virtual_machines": 25,
                    "real_devices": 0,
                    "live_only": false
                },
                "group": {},
                "is_default": false,
                "org_uuid": "***********"
            }
        ],
        "roles": [...],
        "is_staff": true,
        "is_superuser": false,
        "user_type": "admin",
        "groups": [],
        "organization": {...},
    "team": {
        "id": "80d69d16ebdb4c018cc9d81ea911761a",
        "name": "Sauce-Docs",
        "organization": {...},
        "group": {...},
        "created_at": "2020-12-30T17:09:12.473388Z",
        "updated_at": "2020-12-30T17:09:12.473415Z",
        "settings": {...},
        "description": "Tech Content API Testing",
        "is_default": false,
        "links": {}
    },
    "created_at": "2020-12-30T17:21:52.344918Z",
    "updated_at": "2020-12-30T17:21:52.344961Z"
}
```
</details>

---

### Assign a User Org Admin Rights

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/set-admin/</code></summary>
<p/>

Assigns administrator rights to the user within their organization. Organization Admins automatically have Team Admin rights in all the teams in the Organization.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/set-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/set-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {11-16,22}
{
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-09T15:37:20.278491Z",
    "teams": [...],
    "roles": [
        {
            "name": "organization admin",
            "role": 1
        }
    ],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...},
    "is_organization_admin": true,
    "is_team_admin": false
}
```
</details>

---

### Assign a User Team Admin Rights

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/set-team-admin/</code></summary>
<p/>

Assigns administrator rights to the user within their current team. If the user is currently assigned an Org Admin role, this call would reduce the rights to only those of a Team Admin.


#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/set-team-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/set-team-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {11-16,23}
{
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-09T15:37:20.278491Z",
    "teams": [...],
    "roles": [
        {
            "name": "team admin",
            "role": 4
        }
    ],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...},
    "is_organization_admin": false,
    "is_team_admin": true
}
```
</details>

---


### Remove Admin Rights from User

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/set-member/</code></summary>
<p/>

Assigns the `member` role to the user. If the user is currently assigned any Admin rights, this call removes those rights.


#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/set-team-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/set-team-admin/' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {11-16,22-23}
{
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-09T15:37:20.278491Z",
    "teams": [...],
    "roles": [
        {
            "name": "member",
            "role": 3
        }
    ],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...},
    "is_organization_admin": false,
    "is_team_admin": false
}
```
</details>

---


### Get a User's Access Key

<details><summary><span className="api get">GET</span> <code>/team-management/v1/users/&#123;user_id&#125;/access-key/</code></summary>
<p/>

Retrieves the Sauce Labs access key for the specified user.


#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/access-key' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/access-key' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
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
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "access_key": "********-****-****-****-************"
}
```
</details>

---

### Reset a User's Access Key

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/reset-access-key/</code></summary>
<p/>

Creates a new auto-generated access key for the specified user.

:::warning
Regenerating an access key invalidates the previous value and any tests containing the prior value will fail, so make sure you update any tests and credential environment variables with the new value.
:::


#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/reset-access-key' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/reset-access-key' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
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
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "access_key": "********-****-****-****-************"
}
```
</details>

---

### Deactivate a User

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/deactivate/</code></summary>
<p/>

Suspends the specified user's account, preventing all access to Sauce Labs while deactivated.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/deactivate' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/deactivate' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>403</code></td>
    <td colSpan='2'>Forbidden.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {7}
{
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": false,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-12T16:37:31.370711Z",
    "teams": [...],
    "roles": [...],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...}
    },
    "is_organization_admin": false,
    "is_team_admin": false
}
```
</details>

---


### Activate a User

<details><summary><span className="api post">POST</span> <code>/team-management/v1/users/&#123;user_id&#125;/activate/</code></summary>
<p/>

Re-activates the specified user's account, if it had been previously deactivated.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the user. You can look up a user's ID using the <a href="#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/team-management/v1/users/<user-id>/activate' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/team-management/v1/users/<user-id>/activate' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>403</code></td>
    <td colSpan='2'>Forbidden.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response" {7}
{
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-12T16:37:31.370711Z",
    "teams": [...],
    "roles": [...],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...}
    },
    "is_organization_admin": false,
    "is_team_admin": false
}
```
</details>

---
