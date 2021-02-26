---
id: accounts
title: Account Management API Methods
sidebar_label: Accounts
description: Manage all aspects of your Sauce Labs organization, team, and member accounts.
---

The Sauce Labs REST API exposes the following methods related to individual and team account configuration and monitoring.

## Individual Account Methods

`GET /rest/v1.1/users/<USERNAME>/siblings`

`GET	 /rest/v1.2/users/<USERNAME>/concurrency`

`GET	 /rest/v1/activity/organization`

`GET	 /rest/v1/activity/teams`

`GET	 /rest/v1/users/<USERNAME>/`

`POST	 /rest/v1/users/<USERNAME>/`

`POST	 /rest/v1/users/<USERNAME>/accesskey/change`

`GET	 /rest/v1/users/<USERNAME>/activity`

`GET	 /rest/v1/users/<USERNAME>/activity?level=user`

`GET	 /rest/v1/users/<USERNAME>/list-subaccounts`

`GET	 /rest/v1/users/<USERNAME>/subaccounts`

`GET	 /rest/v1/users/<USERNAME>/usage`


## Organization and Team Account Methods

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

`POST	 /team-management/v1/users/`

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
