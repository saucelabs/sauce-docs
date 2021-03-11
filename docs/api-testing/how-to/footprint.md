---
id: footprint
title: Footprint
sidebar_label: Footprint
keywords:
    - api-testing
    - how-to
    - footprint
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Consider a scenario where a route has a parameter in it. Let's take a look at an example:

```http request
http://www.whereever.com/[id]/details
```
 
Each individual rest run for this route will produce a new line in the metrics view:  

```http request
http://www.whereever.com/1/details  
http://www.whereever.com/2/details  
http://www.whereever.com/3/details  
http://www.whereever.com/4/details 
...  
```

This sort of reporting will quickly turn our dashboard into a disorganized mess.  
  
To produce a single endpoint for reporting from each one of these calls, you can use what we call a 'footprint.'

How is this accomplished? In the test, you need to add a Config component to the I/O component as seen below:  
  
<img src={useBaseUrl('img/api-fortress/2018/04/configFootprint.jpg')} alt="configFootprint.jpg" />

The Config component has two fields:  
* **Name**: The name you want to assign. In this case, you **MUST** to enter _'footprint'_ 
* **Value**: The value for the configuration component.  
  
Example: 
 
To set up a _footprint_, you must enter the same URL that's in the I/O Component. Any parameterized portion of the URL must be wrapped in square brackets.

Based upon our example, the value in this case would be:

```http request
http://www.wherever.com/whatever/[id]/details  
```

In the project dashboard, after every run of the test instead of 

```http request
http://www.whereever.com/whatever/1/details 
http://www.whereever.com/whatever/2/details 
http://www.whereever.com/whatever/3/details 
http://www.whereever.com/whatever/4/details 
...
```  
  
you will find only one endpoint, displayed as:

```http request 
http://www.whereever.com/whatever/[id]/details  
``` 

For each endpoint you can use more square brackets, one for each variable that could assume multiple values.  
  
For example:

```http request 
http://www.whereever.com/[whatever]/[id]/details/[colors]/whatever
```

When you write the value of the config, for the 'static' part of the endpoint you can also call a variable as in any I/O operation.  

Example: 

```js
${protocol}/${domain}/[whatever]/[id]/details/[colors]/whatever
```

is valid syntax.
