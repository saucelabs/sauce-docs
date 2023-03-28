---
id: use-drive
title: Using a File in your Tests
sidebar_label: Using Vault Drive
description: 'How to use the files from the Drive in your tests'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are plenty of possibilities for how to use the Vault drive in your tests. This guide shows you some practical scenarios you can face that might require a file inside your tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Using a File as Datasource

A very common scenario where you need an external file to be used in your test is when you have to generate a lot of different inputs inside your tests. In this case, it quite impossible to add all your data inside the Input Sets because it would take a lot of time and often you might need to replace your data with a new set, therefore
In this case, the best solution is using an external file as Datasource for your tests.

Let's see, step by step, how you can accomplish this using Sauce Labs API Testing:

### Step 1: Uploading the file in the Vault Drive

In our example, we consider a scenario where an endpoint requires a city as parameter and returns the wheater of that city. In order to make sure the response is always the expected one, a good practice is testing with as much cities as possible. In a scenario like this, it is not feasible to enter manually a list of cities as input sets, therefore an external file is required.

The very first step is uploading your file inside the Vault Drive:

1. Open the project you want to create the test in.
1. In the left panel, click **Vault**, then click **Drive**.
1. Click **Upload file**.
1. Upload the file using drag and drop or **Choose file**, or enter the URL, then click **Upload**.

For this example, we are using _cities.csv_ file that contains a list of US Cities as shown in the screenshot:

<img src={useBaseUrl('/img/api-testing/vault-use-cases/csv-cities.png')} alt="Example csv file" width="200"/>

### Step 2: Creating the test

Once the file is on the **Drive**, you can create your test.

1. In the left panel, click **Tests**.
1. Click **Create Test**, then **From Scratch**.
1. Enter the **Test Name**.
1. Optionally, you can add a **Description** and/or **Tags**.
1. Click **Create Test**

### Step 3: Writing the test

#### Retrieve the file from the Drive

1. Add the [**File DataSource**](/api-testing/composer/io-components/#file-datasource).
1. **Select** the file you uploaded in the **Drive**.
1. Enter the **Variable**, then **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/fileDataSource.png')} alt="File data source component"/>

#### Parse the file

The subsequent step is parsing the file in order to let the system know the type of file you are working with.

1. Add the **Parse** component:

   - The **Variable** must match the name you entered as Variable in the previous step.
   - The **Adapter** must match the type of the file you have uploaded. In our example, it's a csv file.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/parseFile.png')} alt="Parse the file"/>

#### Cycling the array

The file produces an array of items therefore you need to cycling into the items and keep one at time. The iterator would turn out to be huge, so it is preferred to cherry-pick a few items. To do so, you can use the `pick(n)` functionality to create a random subset of the array.

1. Add the **Each** component.
1. In the Expression field, enter `<variable_name>.pick(10)`.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/each-csv.png')} alt="Add the each component"/>

#### Save the value in a variable

Looping in to the array will return one item at time, you need to save that value in a variable so you can use that value everytime you need it inside your test.

1. As a child component, add the **Set(variable)** component.
1. Enter the **Variable**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/set-city.png')} alt="Save the value in a variable"/>

#### Add the request

Next, you can add the request to the weather endpoint, adding the variable as query param.

1. Add the **GET** component:
   - URL - for example `https://eope670ouz611xy.m.pipedream.net/weather`
   - Variable - for example `payload`
1. **Save changes**.
1. Add a **Query Param** as child component:
   - Name - for example `city`
   - Value - for example `${currentCity}`
1. **Save changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/get-request.png')} alt="Save the value in a variable"/>

Now you can proceed testing the response payload from that call.

In Code view, it looks like this:

```yaml
- id: set
  var: myDataSource
  mode: object
  object: DS.loadTextFile('cities.csv')
- id: parse
  var: myDataSource
  adapter: csv
- id: each
  children:
    - id: set
      var: currentCity
      mode: string
      value: ${_1}
    - id: get
      children:
        - id: queryParam
          name: city
          value: ${currentCity}
      url: https://eope670ouz611xy.m.pipedream.net/weather
      var: payload
      mode: json
  expression: myDataSource.pick(10)
```

The above example is simple because the csv file contains only one column.
Now, consider a scenario where the csv file contains more columns and you have to use only some values of the row or you have to use all the values but not in bulk.

<!--
### Step 1: Uploading the file in the Vault Drive

For this new example, we consider a scenario where an endpoint requires a city as parameter and returns the wheater of that city. In order to make sure the response is always the expected one, a good practice is testing with as much cities as possible. In a scenario like this, it is not feasible to enter manually a list of cities as input sets, therefore an external file is required.

The very first step is uploading your file inside the Vault Drive:

1. Open the project you want to create the test in.
1. In the left panel, click **Vault**, then click **Drive**.
1. Click **Upload file**.
1. Upload the file using drag and drop or **Choose file**, or enter the URL, then click **Upload**.

For this example, we are using _cities.csv_ file that contains a list of US Cities as shown in the screenshot:

<img src={useBaseUrl('/img/api-testing/vault-use-cases/csv-cities.png')} alt="Example csv file" width="200"/>

### Step 2: Creating the test

Once the file is on the **Drive**, you can create your test.

1. In the left panel, click **Tests**.
1. Click **Create Test**, then **From Scratch**.
1. Enter the **Test Name**.
1. Optionally, you can add a **Description** and/or **Tags**.
1. Click **Create Test**

### Step 3: Writing the test

#### Retrieve the file from the Drive

1. Add the [**File DataSource**](/api-testing/composer/io-components/#file-datasource).
1. **Select** the file you uploaded in the **Drive**.
1. Enter the **Variable**, then **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/fileDataSource.png')} alt="File data source component"/>

#### Parse the file

The subsequent step is parsing the file in order to let the system know the type of file you are working with.

1. Add the **Parse** component:

   - The **Variable** must match the name you entered as Variable in the previous step.
   - The **Adapter** must match the type of the file you have uploaded. In our example, it's a csv file.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/parseFile.png')} alt="Parse the file"/>

#### Cycling the array

The file produces an array of items therefore you need to cycling into the items and keep one at time. The iterator would turn out to be huge, so it is preferred to cherry-pick a few items. To do so, you can use the `pick(n)` functionality to create a random subset of the array.

1. Add the **Each** component.
1. In the Expression field, enter `<variable_name>.pick(10)`.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/each-csv.png')} alt="Add the each component"/>

#### Save the value in a variable

Looping in to the array will return one item at time, you need to save that value in a variable so you can use that value everytime you need it inside your test.

1. As a child component, add the **Set(variable)** component.
1. Enter the **Variable**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/set-city.png')} alt="Save the value in a variable"/>

#### Add the request

Next, you can add the request to the weather endpoint, adding the variable as query param.

1. Add the **GET** component:
   - URL - for example `https://eope670ouz611xy.m.pipedream.net/weather`
   - Variable - for example `payload`
1. **Save changes**.
1. Add a **Query Param** as child component:
   - Name - for example `city`
   - Value - for example `${currentCity}`
1. **Save changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/get-request.png')} alt="Save the value in a variable"/>

Now you can proceed testing the response payload from that call.

In Code view, it looks like this:
```yaml
- id: set
  var: myDataSource
  mode: object
  object: DS.loadTextFile('cities.csv')
- id: parse
  var: myDataSource
  adapter: csv
- id: each
  children:
    - id: set
      var: currentCity
      mode: string
      value: ${_1}
    - id: get
      children:
        - id: queryParam
          name: city
          value: ${currentCity}
      url: https://eope670ouz611xy.m.pipedream.net/weather
      var: payload
      mode: json
  expression: myDataSource.pick(10)
``` -->

## Using a File to Verify the Response Payload

## Using a File as a Request Body
