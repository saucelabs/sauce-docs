---
id: accounts
title: Account Management API Methods
sidebar_label: Accounts
description: Manage all aspects of your Sauce Labs organization, team, and member accounts.
---

The Sauce Labs REST API exposes the following methods related to individual and team account configuration and monitoring.

Refer to [Getting Started](/dev/api) for Authentication and Server information. 

## Classic Accounts API Methods

Methods in this section perform actions related to a specific user account within Sauce Labs.

### Get User

This method accesses basic account information.

<span className="sauceGreen">GET</span> <code>/rest/v1/users/&#123;username&#125;</code>

#### Parameters

<table>
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

<table>
<tbody>
  <tr>
    <td>200</td>
    <td colSpan='2'>Success. User profile returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>404</td>
    <td colSpan='2'>User not found.</td>
  </tr>
</tbody>
</table>

### Create a Subaccount

This method creates a subaccount.

:::note Use Extended Team Management
If your organization uses Extended Team Managment, this method is deprecated. See [Create User](#xtm-create-user).
:::

<span className="sauceLBlue">POST</span> <code>/rest/v1/users/&#123;username&#125;</code>

#### Parameters

<table>
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

### Get List of Subaccounts

This method returns a list of subaccounts associated with the account specified in the request.

<span className="sauceGreen">GET</span> <code>/rest/v1/users/&#123;username&#125;/list-subaccounts</code>

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

### Get Subaccount Information

This method returns the profile of the subaccount user specified in the request, as well as a list of sibling subaccounts.

<span className="sauceGreen">GET</span> <code>/rest/v1/users/&#123;username&#125;/subaccounts</code>

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


### Get List of Sibling Accounts

This method gets a list of accounts that belong to the same parent account as the one specified in the request.

<span className="sauceGreen">GET</span> <code>/rest/v1/users/&#123;username&#125;/list-subaccounts</code>

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


### Update Access Key

This method creates a new auto-generated access key for the specified user.

:::warning
Regenerating an access key invalidates the previous value and any tests containing the prior value will fail, so make sure you edit any tests and credential environment variables with the new value.
:::

<span className="sauceLBlue">POST</span> <code>/rest/v1/users/&#123;username&#125;/accesskey/change</code>

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


## Extended Team Managment API Methods

`POST	 /team-management/v1/membership/`

`GET	 /team-management/v1/teams`

`POST	 /team-management/v1/teams`

`DELETE	 /team-management/v1/teams/<TEAM_ID>`

`GET	 /team-management/v1/teams/<TEAM_ID>`

`PATCH	 /team-management/v1/teams/<TEAM_ID>`

`PUT	 /team-management/v1/teams/<TEAM_ID>`

`GET	 /team-management/v1/teams/<TEAM_ID>/members`

`POST	 /team-management/v1/teams/<TEAM_ID>/reset-access-key`

`GET	 /team-management/v1/users/`

### XTM Create User

<span className="sauceLBlue">POST</span>	 `/team-management/v1/users/`


`GET	 /team-management/v1/users/<USERNAME>/`

`PATCH	 /team-management/v1/users/<USERNAME>/`

`PUT	 /team-management/v1/users/<USERNAME>/`

`GET	 /team-management/v1/users/<USERNAME>/access-key/`

`POST	 /team-management/v1/users/<USERNAME>/activate/`

`POST	 /team-management/v1/users/<USERNAME>/deactivate/`

`GET	 /team-management/v1/users/<USERNAME>/permissions/`

`GET	 /team-management/v1/users/<USERNAME>/reset-access-key/`

`POST	 /team-management/v1/users/<USERNAME>/set-admin/`

`POST	 /team-management/v1/users/<USERNAME>/set-member/`

`POST	 /team-management/v1/users/<USERNAME>/set-team-admin/`

`GET	 /team-management/v1/users/<USERNAME>/teams/`
