---
id: importing-postman-collections
title: Importing Postman Collections
sidebar_label: Importing Postman Collections
description: "Note: The import Postman collection only supports exports in V2 and beyond. V1 has been deprecated by Postman and is not supported by API Fortress."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you possess [Postman API Collections](https://www.postman.com/collection/), you can import them directly into API Fortress.

:::warning V1 Import Feature Deprecated 
The import Postman collection only supports exports in V2 and beyond. V1 has been deprecated by Postman and is not supported by API Fortress.
:::

## Importing a Collection

In order to import Postman Collections:

- First, open the _HTTP Client_ via the _Tools_ menu.
- Click the arrow icon <img src={useBaseUrl('img/api-fortress/2021/04/arrow.png')} alt="arrow icon"/>next to _Snapshots_ on the left-hand side
  <img src={useBaseUrl('img/api-fortress/2021/02/snapshotAdd.png')} alt="Add collection file"/>

- Select your Collection file in the popup window.
  <img src={useBaseUrl('img/api-fortress/2021/04/chooseCollection.png')} alt="Choose collection"/>

- Click _Open._
- The routes from your collection are now available in the list of saved requests.
  <img src={useBaseUrl('img/api-fortress/2021/04/routesRendered.png')} alt="Routes Rendered"/>

## Importing Postman Environments

<img src={useBaseUrl('img/api-fortress/2021/04/projectVault.png')} alt="Project Vault"/>

Importing a Postman environment is the same process as importing a variable file.

- Navigate to the _Vault_ tab in your project
- Select Variables
- Select Import
- Select your `.postman_environment.json` file
- Select _Open_
- Your environmental variables are now available in the _Variables_ section of your project

## Importing Postman Variables

<img src={useBaseUrl('img/api-fortress/2021/04/companyVault.png')} alt="Company Vault"/>

The process for importing global variables from Postman is the same process as [importing an environment](#importing-postman-environments), except from _where_ the import is executed.

- Navigate to the _Company Vault_ tab in your project
- Select Variables
- Select Import
- Select your `.postman_environment.json` file
- Select _Open_
- Your environmental variables are now available across all your projects.