---
id: sharing-tunnel
title: Sauce Connect Proxy Sharing Tunnel
sidebar_label: Sharing Tunnel
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy supports tunnel sharing within an organization, enabling multiple users or service accounts to access the same tunnel.

To enable sharing, start Sauce Connect Proxy with the [`--shared all`](/dev/cli/sauce-connect-5/run/#shared) flag.

### Access Based on User Roles

The ability to use a Sauce Connect Proxy tunnel depends on the role of the user who starts the tunnel.

| **Role**           | **Can Share Tunnels With**       | **Can Use Tunnels Created By**                | **Can Stop Tunnels Created By**   |
|--------------------|----------------------------------|-----------------------------------------------|-----------------------------------|
| Organization Admin | Any user                         | Any user                                      | Any user                          |
| Team Admin         | All members of their team        | Organization admins, team members, themselves | Themselves and other team members |
| Team Member        | All members of their team        | Organization admins, team members, themselves | Only themselves                   |
| Service Account    | ❌ Cannot create or share tunnels | Organization admins, team members             | ❌ Cannot stop any tunnels         |

For details about user roles and permissions, see [User Roles](/basics/acct-team-mgmt/managing-user-info/#user-roles).

### Using a Shared Tunnel

To use a shared tunnel in your test, set the [`tunnelOwner`](/dev/test-configuration-options/#tunnelowner) capability in your test configuration to the **username** of the tunnel owner.
