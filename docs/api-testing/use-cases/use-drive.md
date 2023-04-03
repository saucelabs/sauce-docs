---
id: use-drive
title: Using a File in your Tests
sidebar_label: Using File from Vault Drive
description: 'How to use the files from the Drive in your tests'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use files stored in the Vault drive in your test in several ways. This guide explains how you can use files stored in the Vault drive as a data source in your tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Using a File as Datasource

A very common scenario where you need an external file to be used in your test is when you have to generate a lot of different inputs inside your tests. In this case, it is difficult to add all your data inside the Input Sets because it would take a lot of time and often you might need to replace your data with a new set.
In this case, the best solution is using an external file as Datasource for your tests.


### Step 1: Uploading the file in the Vault Drive

Consider a scenario where an endpoint requires a city as parameter and returns the weather of that city. To make sure the response is always the expected one, a good practice is testing with as many cities as possible. In a scenario like this, it is not feasible to enter a list of cities as input sets.

First upload your file in the Vault drive:

1. Open the project you want to create the test in.
1. In the left panel, click **Vault**, then click **Drive**.
1. Click **Upload file**.
1. Upload the file using drag and drop or **Choose file**, or enter the URL, then click **Upload**.

This example uses the  _cities.csv_ file that contains a list of US cities as shown:

<img src={useBaseUrl('/img/api-testing/vault-use-cases/csv-cities.png')} alt="Example csv file" width="200"/>

### Step 2: Creating the Test

Once the file is in the Vault drive, you can create your test.

1. In the left panel, click **Tests**.
1. Click **Create Test**, then **From Scratch**.
1. Enter the **Test Name**.
1. Optionally, you can add a **Description** and/or **Tags**.
1. Click **Create Test**.

### Step 3: Writing the Test

#### Retrieving the File From the Drive

1. Add the [**File DataSource**](/api-testing/composer/io-components/#file-datasource) component.
1. **Select** the file you uploaded in the **Drive**.
1. Enter the **Variable**, then **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/fileDataSource.png')} alt="File data source component"/>

#### Parsing the File

The next step is parsing the file to let the system know the type of file you are working with.

Add the **Parse** component:

   - The **Variable** must match the name you entered as Variable in the previous step.
   - The **Adapter** must match the type of the file you have uploaded. In our example, it's a csv file.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/parseFile.png')} alt="Parse the file"/>

#### Cycling the Array

The file produces an array of items therefore you need to cycling into the items and take one at time. The iterator would turn out to be huge, so it is preferred to cherry-pick a few items. To do so, you can use the `pick(n)` functionality to create a random subset of the array.

1. Add the **Each** component.
1. In the Expression field, enter `<variable_name>.pick(10)`.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/each-csv.png')} alt="Add the each component"/>

#### Saving the Value in a Variable

Looping in to the array will return one item at time. Now, you have two routes: the first one is saving that value in a variable so you can use that value everytime you need it inside your test calling the Variable Name, the second one is using the value directly where you need it. For this example, we will save the value in a variable.

As a child component, add the **Set(variable)** component:

- Variable - for example `currentCity`
- Mode - `String`
- Value - `${_1}`

<img src={useBaseUrl('/img/api-testing/vault-use-cases/set-city.png')} alt="Save the value in a variable"/>

#### Adding the Request

Next, you can add the request to the weather endpoint, adding the variable as query param.

1. Add the **GET** component:
   - URL - for example `https://eope670ouz611xy.m.pipedream.net/weather`
   - Variable - for example `payload`
1. **Save Changes**.
1. Add a **Query Param** as child component:
   - Name - for example `city`
   - Value - for example `${currentCity}`
1. **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/get-request.png')} alt="Add the GET request"/>

You can now proceed testing the response payload from that call.

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

## Using a File as a Request Body

In the above example the .csv file contains only one column.
Next, consider a scenario where the .csv file contains more columns and you have to use only some values from a row or you have to use all the values but not in bulk. A common scenario is when you use the file to generate the Body in your request.

### Step 1: Uploading the File in the Vault Drive

For this new example, we consider a scenario where you have to create an account and you need to provide personal data as request body. In a scenario like this, especially in development phase, it is common to have a file with some data allowed by the system.

As with the previous example, the first step is [uploading your file in the Vault Drive](/api-testing/use-cases/use-drive/#step-1-uploading-the-file-in-the-vault-drive).

This time, we are using _users.csv_ file that contains a list of user details as shown:

<img src={useBaseUrl('/img/api-testing/vault-use-cases/csv-users.png')} alt="Example csv file"/>

### Step 2: Creating the Test

You can follow the same steps as in the [previous example](/api-testing/use-cases/use-drive/#step-2-creating-the-test)

### Step 3: Writing the Test

#### Retrieving the File From the Drive

1. Add the [**File DataSource**](/api-testing/composer/io-components/#file-datasource).
1. **Select** the file you uploaded in the **Drive**.
1. Enter the **Variable**, then **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/users-datasource.png')} alt="File data source component"/>

#### Parsing the File

Next is parsing the file to let the system know the type of file you are working with.

1. Add the **Parse** component:

   - The **Variable** must match the name you entered as Variable in the previous step.
   - The **Adapter** must match the type of the file you have uploaded. In our example, it's a csv file.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/parseUsersFile.png')} alt="Parse the file"/>

#### Removing the Header

The example file contains a header that you need to remove, so that the test will contain only valid data. To remove the header:

Add the **Set(variable)** component:

   - Variable - for example `myUserDetails`
   - Mode - Data
   - Data -

   ```js
   userDetails.slice(1)
   ```

   `userDetails` is the Variable name you assign in the first Set(variable)

<img src={useBaseUrl('/img/api-testing/vault-use-cases/removeHeader.png')} alt="Remove the header"/>

#### Cycling the Array

The file produces an array of items therefore you need to cycling into the items and take one at time. Our file contains just a few items so we can use all of them, but if the file is huge it is recommended to use `pick(n)` to cherry-pick just a few of them.

1. Add the **Each** component.
1. In the Expression field, enter `<variable_name>`.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/users-each-csv.png')} alt="Add the each component"/>

#### (Optional) Saving the Value in a Variable

Optionally, you can save each value in a variable, in this way you can assign the variable name you prefer. For this step, you need to separate every key/value pair in the row, to be able later to add them in the right position. To do so, you need to identify each column in the row using their index. The first column is index 0, the second one is index 1,...

1. As a child component, add the **Set(variable)** component:

   - Variable - for example `userId`
   - Mode - `String`
   - Value - `${_1[0]}`

<img src={useBaseUrl('/img/api-testing/vault-use-cases/set-userid.png')} alt="Save the value in a variable"/>

This example saves the `userId`. If you want to save every value in a variable, you need to repeat the step for all the columns.

#### Adding the Request

You can add the request to the account endpoint, by adding all the values in the request body.

1. Add the **POST** component:
   - URL - for example `https://eovt6kylqex64iz.m.pipedream.net/account`
   - Variable - for example `userDetailsPayload`
1. **Save Changes**.
1. Add a **Request Body** as child component:
   - Content-Type - `application/json`
   - Body -
   ```json
    {
      "userID": "${_1[0]}",
      "lastName": "${_1[1]}",
      "DOB": "${_1[2]}",
      "address": "${_1[3]}",
      "city": "${_1[4]}",
      "state": "${_1[5]}",
      "country": "${_1[6]}",
      "profession": "${_1[7]}",
      "email": "${_1[8]}",
      "phone": "${_1[9]}"
    }
   ```
The above Body is valid if you do not save the values as variables. If you have saved the values as variables you need to replace all the values with the corresponding Variable name you used (such as the `userId` in this example).
1. **Save Changes**.

<img src={useBaseUrl('/img/api-testing/vault-use-cases/post-request.png')} alt="Add the POST request"/>

Now you can proceed testing the response payload from that call.

The following example illustrates the response payload in Code view:

```yaml
- id: set
  var: userDetails
  mode: object
  object: DS.loadTextFile('users.csv')
- id: parse
  var: userDetails
  adapter: csv
- id: set
  var: myUserDetails
  mode: object
  object: userDetails.slice(1)
- id: each
  children:
    - id: post
      children:
        - id: body
          contentType: application/json
          content: |-
            {
                "userID": "${_1[0]}",
                "lastName": "${_1[1]}",
                "DOB": "${_1[2]}",
                "address": "${_1[3]}",
                "city": "${_1[4]}",
                "state": "${_1[5]}",
                "country": "${_1[6]}",
                "profession": "${_1[7]}",
                "email": "${_1[8]}",
                "phone": "${_1[9]}"
            }
      url: https://eovt6kylqex64iz.m.pipedream.net/account
      var: userDetailsPayload
      mode: json
  expression: myUserDetails
```

The following example saves the values in variables:

```yaml
- id: set
  var: userDetails
  mode: object
  object: DS.loadTextFile('users.csv')
- id: parse
  var: userDetails
  adapter: csv
- id: set
  var: myUserDetails
  mode: object
  object: userDetails.slice(1)
- id: each
  children:
    - id: set
      var: userId
      mode: string
      value: ${_1[0]}
    - id: set
      var: firstName
      mode: string
      value: ${_1[1]}
    - id: set
      var: lastName
      mode: string
      value: ${_1[2]}
    - id: set
      var: DOB
      mode: string
      value: ${_1[3]}
    - id: set
      var: address
      mode: string
      value: ${_1[4]}
    - id: set
      var: city
      mode: string
      value: ${_1[5]}
    - id: set
      var: state
      mode: string
      value: ${_1[6]}
    - id: set
      var: profession
      mode: string
      value: ${_1[7]}
    - id: set
      var: email
      mode: string
      value: ${_1[8]}
    - id: set
      var: phone
      mode: string
      value: ${_1[9]}
    - id: post
      children:
        - id: body
          contentType: application/json
          content: |-
            {
                "userID": "${userId}",
                "lastName": "${firstName}",
                "DOB": "${lastName}",
                "address": "${address}",
                "city": "${city}",
                "state": "${state}",
                "country": "${country}",
                "profession": "${profession}",
                "email": "${email}
                "phone": "${phone}"
            }
      url: https://eovt6kylqex64iz.m.pipedream.net/account
      var: userDetailsPayload
      mode: json
  expression: myUserDetails
```
