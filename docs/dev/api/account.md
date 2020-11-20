---
id: account
title: Account API
sidebar_label: Account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

These REST API endpoints provide user account information and management.

## User

### <Highlight color="#25c2a0">GET</Highlight>

This method retrieves basic account information.

```bash
GET /rest/v1/users/<SAUCE_USERNAME>
```

__Examples__

<Tabs
  defaultValue="curl"
  values={[
    {label: 'cURL', value: 'curl'},
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'csharp'},
    {label: 'node.js', value: 'node'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
  ]}>

<TabItem value="curl">

```bash
curl -u <YOUR_SAUCE_USERNAME>:<YOUR_SAUCE_ACCESS_KEY> https://saucelabs.com/rest/v1/users/<YOUR_SAUCE_USERNAME>

```

</TabItem>
<TabItem value="java">

```java

```

</TabItem>
<TabItem value="csharp">

```csharp

```

</TabItem>
<TabItem value="node">

```javascript
let username = process.env.SAUCE_USERNAME;
let accessKey = process.env.SAUCE_ACCESS_KEY;
let url = 'https://saucelabs.com/rest/v1/users/' + username;

const axios = require("axios");
const getAccounts = async () => {
    try {
        response = await axios.get(url);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
};
```

</TabItem>
<TabItem value="python">

```python

```

</TabItem>
<TabItem value="ruby">

```ruby

```

</TabItem>
</Tabs>

__Responses__
