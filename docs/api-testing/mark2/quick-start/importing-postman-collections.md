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

<img src={useBaseUrl('img/api-fortress/2018/12/import_collection.gif')} alt="Import Collection Gif"/>

API Fortress has made it very easy to import Postman Collections with the click of a button.

- First, open the _HTTP Client_ via the _Tools_ menu.
- Click the gray _Import_ button at the top of the client.
- Select your Collection file in the popup window.
- Click _Open._
- The routes from your collection are now available in the list of saved requests.

<iframe src="//player.vimeo.com/video/361169979?title=0&amp;byline=0&amp;portrait=0&amp;color=8dc7dc" width="425" height="350" allowfullscreen="allowfullscreen"></iframe>

## Importing Postman Environments

<img src={useBaseUrl('img/api-fortress/2018/12/import_env.gif')} alt="Import Environment Gif"/>

Importing a Postman environment is just as simple as importing a Postman collection.

- First, inside of a test, click on the _Data Sets_ button on the left pane.
- Click the orange Postman button.
- Select your environments file from the popup.
- Your environmental variables will now be available in the _Data Sets_ pane.

## Importing Postman Global Variables

<img src={useBaseUrl('img/api-fortress/2018/12/import_globals.gif')} alt="Import Globals Gif"/>

The process for importing global variables from Postman is nearly identical to the process for importing environmental variables. The primary difference is where the import is executed.

- First, access the _Vault_ via the _Tools_ menu at the top of any view.
- Select the project that you want to access the variables through, or select the _Global Vault_ if you want all of your projects to have access to the variable definitions.
- Click the _Variables_ button in the specific _Vault_ that was chosen.
- Click the _Import Variables from Postman_ button.
- Select your global variables file and click the _Open_ button.
- Your global variable definitions can now be accessed from the connected project(s).