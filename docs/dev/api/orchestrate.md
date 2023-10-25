---
id: orchestrate
title: Orchestrate
sidebar_label: Orchestrate
description: View and manage sauce orchestrate data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Sauce Orchestrate API methods allow you to access orchestrate-related features which might not yet be available
using other methods.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Get short-lived tokens for private registry

<details><summary><span className="api get">POST</span> <code>/v1alpha1/hosted/container-registry/authorization-token</code></summary>
<p/>

Return a short-lived token that can be used to access SauceLabs Container Registry.

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
    <td><code>403</code></td>
    <td colSpan='2'>You're not allowed to generate a short living token for your organization.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>500</code></td>
    <td colSpan='2'>We couldn't generate a short living token for your organization.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "expires_at": "2023-10-23T12:03:55Z", 
    "password": "ya29.c.c0AY_VpZh8lOOO98LjV71rZJx5tPAC8XE42io...",
    "username": "oauth2accesstoken"
}
```

</details>
