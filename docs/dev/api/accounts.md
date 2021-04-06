---
id: accounts
title: Account Management API Methods
sidebar_label: Accounts
description: Manage all aspects of your Sauce Labs organization, team, and member accounts.
---

The Sauce Labs REST API exposes the following methods related to individual and team account configuration and monitoring.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## Extended Team Management API Methods

The set of methods defined in this section are applicable to customers who are utilizing the Sauce Labs Extended Team Management tool for grouping users into teams and allocating total concurrency. If your company has not updated to Extended Team Management, refer to the [Classic Account API](#classic-accounts-api-methods) section of this guide.

### Get Teams

<details><summary><span className="apiGet">GET</span> <code>/team-management/v1/teams/</code></summary>
<p/>

Returns a team count and an array of all teams in the organization of the requesting account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns the set of teams that begin with the specified name value. For example, <code>name=sauce</code> would return all teams in the organization with names beginning with "sauce".</p></td>
    </tr>
  </tbody>
</table>


```jsx title="Sample Request"
curl --location --request GET 'https://api.staging.saucelabs.net/team-management/v1/teams?name=sauce' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw ''
```

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

<details><summary><span className="apiGet">GET</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Returns the full profile of the specified team.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the [Get Teams](#get-teams) endpoint.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl --location --request GET 'https://api.staging.saucelabs.net/team-management/v1/teams/80d69d16ebdb4c018cc9d81ea911761a' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
```

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

<details><summary><span className="apiPost">POST</span> <code>/team-management/v1/teams/</code></summary>
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
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The unique ID of the organization under which the team is created. You can look up your organization ID using the [Get Teams(#get-teams)] endpoint.</p></td>
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


```jsx title="Sample Request"
curl --location --request POST 'https://api.staging.saucelabs.net/team-management/v1/teams/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw '{
    "name": "A-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "organization": "*********",
    "description": "Docs QA Team"
}
```

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

<details><summary><span className="apiDelete">DELETE</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Deletes the specified team from the organization of the requesting account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the [Get Teams](#get-teams) endpoint.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl --location --request DELETE 'https://api.staging.saucelabs.net/team-management/v1/teams/06a3981af2a643208847dfd8b7f32bce/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw ''
```

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

<details><summary><span className="apiPut">PUT</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Replaces all values of the specified team with the new set of parameters passed in the request. To update only certain parameters, see [Partially Update Team](#partially-update-a-team).

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the IDs of teams in your organization using the [Get Teams](#get-teams) endpoint.</p></td>
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


```jsx title="Sample Request"
curl --location --request PUT 'https://api.staging.saucelabs.net/team-management/v1/teams/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw '{
    "name": "Doc-Team",
    "settings": {
        "virtual_machines": "10"
    },
    "description": "Docs Team"
}
```

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

<details><summary><span className="apiPatch">PATCH</span> <code>/team-management/v1/teams/&#123;team_id&#125;/</code></summary>
<p/>

Updates one or more individual editable parameters (such as the concurrency allocation) of the specified team without requiring a full profile update.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up the ID of teams in your organization using the [Get Teams](#get-teams) endpoint.</p></td>
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


```jsx title="Sample Request"
curl --location --request PATCH 'https://api.staging.saucelabs.net/team-management/v1/teams/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw '{
    "settings": {
        "virtual_machines": "25"
    }
}
```

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

<details><summary><span className="apiGet">GET</span> <code>/team-management/v1/teams/&#123;team_id&#125;/members/</code></summary>
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


```jsx title="Sample Request"
curl --location --request GET 'https://api.staging.saucelabs.net/team-management/v1/teams/b3de7078b79841b59d2e54127269afe3/members' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw ''
```

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

<details><summary><span className="apiPost">POST</span> <code>/team-management/v1/teams/&#123;team_id&#125;/reset-access-key/</code></summary>
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


```jsx title="Sample Request"
curl --location --request POST 'https://api.staging.saucelabs.net/team-management/v1/teams/b3de7078b79841b59d2e54127269afe3/reset-access-key' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw ''
```

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

### Get Users

<details><summary><span className="apiGet">GET</span> <code>/team-management/v1/teams/</code></summary>
<p/>

Returns a count total and array of of all users in the organization of the requesting account.

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

```jsx title="Sample Request"
curl --location --request GET 'https://api.staging.saucelabs.net/team-management/v1/users?roles=3&limit=30' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic *******************' \
--data-raw ''
```

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

<details><summary><span className="apiGet">GET</span> <code>/team-management/v1/users/&#123;user_id&#125;/</code></summary>
<p/>

Returns the full profile of the specified user.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The user's unique identifier. You can look up the IDs of users in your organization using the [Get Users](#get-users) endpoint.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl --location --request GET 'https://api.staging.saucelabs.net/team-management/v1/users/e5be7513ba224f6f9463c209cb4c5d83' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
```

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

<details><summary><span className="apiPost">POST</span> <code>/team-management/v1/users/</code></summary>
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
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The identifier of the team of which the new user is a member. You can look up team IDs using the [Get Teams](#get-teams)endpoint.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl --location --request POST 'https://api.staging.saucelabs.net/team-management/v1/users/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw '{
    "first_name": "Jim",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "username": "jsmith",
    "password": "$m1th*RULES",
    "role": 4,
    "team": "b3de7078b79841b59d2e54127269afe3"
}'
```

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

<details><summary><span className="apiPut">PUT</span> <code>/team-management/v1/users/&#123;user_id&#125;</code></summary>
<p/>

Replaces all values of the specified user profile with the new set of parameters passed in the request. To update only certain parameters, see [Partially Update a User](#partially-update-a-user).

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the team. You can look up a user's ID using the [Get Users](#get-users) endpoint.</p></td>
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

```jsx title="Sample Request"
curl --location --request PUT 'https://api.staging.saucelabs.net/team-management/v1/users/e5be7513ba224f6f9463c209cb4c5d83/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY=' \
--data-raw '{
    "first_name": "James",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "password": "$m1th*RULEStheworld",
    "verify_password": "$m1th*RULEStheworld"
}'
```

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

`PATCH	 /team-management/v1/users/<USERNAME>/`

### Get a User's Team

`GET	 /team-management/v1/users/<USERNAME>/teams/`

### Subscribe a User to a Team

<details><summary><span className="apiPost">POST</span> <code>/team-management/v1/membership/</code></summary>
<p/>

Add a user as a member of a specific team. Users can only belong to one team, so if the user is a member of another team, this call will remove them from that team. Also, By default, the user will not have team-admin privileges, even if they did on a prior team.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the Sauce Labs user to be added to the team.You can look up the ID of a user in your organization using the [Get Users](#get-teams) endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The identifier of the team to which the user will be added. You can look up the ID of a team in your organization using the [Get Teams](#get-teams) endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>organization</code></td>
     <td><p><small>| PATH | OPTIONAL | STRING |</small></p><p>The identifier of the organization of the team, if it is a different organization than the requesting account.</p></td>
    </tr>
  </tbody>
</table>


```jsx title="Sample Request"
curl --location --request POST 'https://api.staging.saucelabs.net/team-management/v1/membership/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic $$*(())***' \
--data-raw '{
    "user": "58225e095748438b95dfc5daa8f5d762",
    "team": "725d4b8d4aa046e7b9b81305cfd2e03f"
  }'
```

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Team membership set.</td>
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
    "id": 31321,
    "user": {
        "id": "58225e095748438b95dfc5daa8f5d762",
        "username": "jsmith",
        "email": "jsmith@saucelabs.com",
        "first_name": "Jonah",
        "last_name": "Smith",
        "is_active": true,
        "created_at": "2020-11-05T16:47:30.077314Z",
        "updated_at": "2020-11-05T16:47:35.243781Z",
        "teams": [
            {
                "id": "725d4b8d4aa046e7b9b81305cfd2e03f",
                "name": "qa-docs",
                "settings": {...},
                "group": {...},
                "is_default": false,
                "org_uuid": ""
            }
        ],
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
    },
    "team": {
        "id": "725d4b8d4aa046e7b9b81305cfd2e03f",
        "name": "qa-docs",
        "organization": {...},
        "group": {...},
        "created_at": "2021-04-02T15:13:38.126016Z",
        "updated_at": "2021-04-02T15:13:38.126042Z",
        "settings": {...},
        "description": "Docs QA Team",
        "is_default": false,
        "links": {...}
    },
    "created_at": "2021-04-05T19:28:18.271147Z",
    "updated_at": "2021-04-05T19:28:18.271203Z"
}
```
</details>

---



### Retrieve a User's Access Key

`GET	 /team-management/v1/users/<USERNAME>/access-key/`

### Reset a User's Access Key

`GET	 /team-management/v1/users/<USERNAME>/reset-access-key/`


### Activate a User

`POST	 /team-management/v1/users/<USERNAME>/activate/`

### Deactivate a User

`POST	 /team-management/v1/users/<USERNAME>/deactivate/`

### Assign a User Org Admin Rights

`POST	 /team-management/v1/users/<USERNAME>/set-admin/`

### Assign a User Team Admin Rights

`POST	 /team-management/v1/users/<USERNAME>/set-team-admin/`


### Remove Admin Rights from User

`POST	 /team-management/v1/users/<USERNAME>/set-member/`




## Classic Accounts API Methods

The set of methods defined in this section are applicable to customers who have not yet migrated to the Sauce Labs Extended Team Management tool for grouping users into teams and allocating total concurrency.

### Get User

Retrieve the profile of the specified user account.

<details><summary><span className="apiGet">GET</span> <code>/rest/v1/users/&#123;username&#125;</code></summary>

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs account to retrieve.</p></td>
    </tr>
  </tbody>
</table>


```jsx title="Sample Request"
curl -u USERNAME:ACCESS_KEY https://saucelabs.com/rest/v1/users/jsmith
```

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. User profile returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>
</details>

---

### Create a Subaccount

This method creates a subaccount.

<details><summary><span className="apiPost">POST</span> <code>/rest/v1/users/&#123;username&#125;</code></summary>

:::note Use Team Management
If your organization uses Team Management, this method is deprecated. See [Create User](#xtm-create-user).
:::

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
      <td><code>username</code></td>
      <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs account under which you will create the sub-account.</p></td>  
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>username</code></td>
      <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>The username for the new sub-account.</p></td>
    </tr>
  </tbody>
  <tbody>
     <tr>
      <td><code>password</code></td>
      <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>A login password for the new sub-account.</p></td>
     </tr>
  </tbody>
  <tbody>
     <tr>
      <td><code>email</code></td>
      <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>The email address of the new user.</p></td>
     </tr>
  </tbody>
  <tbody>
     <tr>
      <td><code>name</code></td>
      <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>The full name of the owner of the new sub-account, provided in the format &#60;first&#62;-&#60;last&#62;</p></td>
     </tr>
  </tbody>
  <tbody>
     <tr>
      <td><code>concurrency</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The number of tests the account can run at the same time.</p></td>
     </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl -X POST -u API_USERNAME:API_ACCESS_KEY \
-H 'Content-Type: application/json' \
-d '{
 "username": "jsmith",
 "password": "J$mithp@ss10",
 "name": "James-Smith",
 "email": "jsmith@home.com"
}
```

#### Responses

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success. Subaccount created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>400</td>
    <td colSpan='2'>Invalid input.</td>
  </tr>
</tbody>
</table>

</details>

---

### Get List of Subaccounts

This method returns a list of subaccounts associated with the account specified in the request.

<details><summary><span className="apiGet">GET</span> <code>/rest/v1/users/&#123;username&#125;/list-subaccounts</code></summary>

#### Parameters

<table>
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs account to which the list of subaccounts belong.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>from</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Sets the starting record number for the results.Ex: <code>from=100</code></p></td>  
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>limit</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER; MAX: 100 |</small></p><p>Sets the maximum number of results to return.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl -u USERNAME:ACCESS_KEY https://saucelabs.com/rest/v1/users/jsmith/list-subaccounts
```

#### Responses

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>

</details>

---

### Get Subaccount Information

This method returns the profile of the subaccount user specified in the request, as well as a list of sibling subaccounts.

<details><summary><span className="apiGet">GET</span> <code>/rest/v1/users/&#123;username&#125;/subaccounts</code></summary>

#### Parameters

<table>
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs subaccount to retrieve.</p></td>
    </tr>
  </tbody>
</table>


```jsx title="Sample Request"
curl -u USERNAME:ACCESS_KEY https://saucelabs.com/rest/v1/users/jsmith/subaccounts
```

#### Responses

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>

</details>

---


### Get List of Sibling Accounts

This method gets a list of accounts that belong to the same parent account as the one specified in the request.

<details><summary><span className="apiGet">GET</span> <code>/rest/v1/users/&#123;username&#125;/list-subaccounts</code></summary>

#### Parameters

<table>
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs subaccount to which the returned list are siblings.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Limits the number of pages to return.Ex: <code>page=1</code></p></td>  
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><code>per_page</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER; MAX: 50 |</small></p><p>Sets the maximum number of results to return on each page.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl -u USERNAME:ACCESS_KEY https://saucelabs.com/rest/v1/users/jsmith/siblings
```

#### Responses

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success. Returns an array of sibling accounts showing username and user ID.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>

</details>

---


### Update Access Key

This method creates a new auto-generated access key for the specified user.

<details><summary><span className="apiPost">POST</span> <code>/rest/v1/users/&#123;username&#125;/accesskey/change</code></summary>

:::warning
Regenerating an access key invalidates the previous value and any tests containing the prior value will fail, so make sure you edit any tests and credential environment variables with the new value.
:::

#### Parameters

<table>
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs account for which a new access key is requested.</p></td>
    </tr>
  </tbody>
</table>

```jsx title="Sample Request"
curl -u USERNAME:ACCESS_KEY https://saucelabs.com/rest/v1/users/jsmith/accesskey/change
```

#### Responses

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success. Returns the new access key value.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>

</details>

---
