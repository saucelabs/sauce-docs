---
id: saml
title: SAML
sidebar_label: SAML custom roles
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SAML Authentication Integration with Custom Group Attributes

In modern enterprise environments, Single Sign-On (SSO) using SAML is a crucial component for secure, centralized access control. SAML Authentication with Custom Group Attributes allows granular user role and site-level access management via your identity provider.

With this feature, authentication is managed through a SAML 2.0 identity provider, and user access is defined using custom group attributes passed in the SAML response. These attributes can be used to:

* Assign roles (e.g., admin, tester)
* Define access per site
* Apply global roles

This design provides flexibility for organizations managing access across multiple teams or sites, while keeping configuration centralized.

## Structuring Group Attributes
Each group value in the SAML response is a string, but the format of that string determines how it's interpreted.

There are two formats:

**Site-Specific Format: site-name:role-or-group**

This format assigns roles or groups tied to a particular site. For example:

* site-a:admin means the user is an admin for Site A.
* site-b:marketing assigns the user to the “marketing” group for Site B.

If the second part of the string matches one of our reserved role keywords, it’s treated as a role. Otherwise, it’s interpreted as a group name.

**Global Format: role-or-group**

This format is used for roles or groups that apply across all sites. For example:

* admin means the user is a global admin
* group-b assigns the user to a global group named “group-b”

It’s worth noting that only one global role can be defined per user, and it must be explicitly stated.

## Reserved Role Keywords
To avoid ambiguity, we use a set of predefined, case-sensitive keywords to identify roles:

* admin
* account_manager
* tester

Any other string will be treated as a group, not a role, so double-check your attribute values to avoid unexpected access behavior.

## Example: What a SAML Attribute Looks Like
Below you can find a real-world SAML XML snippet to see how these roles and groups are passed:

## Multi-site
In the following example, the user is an admin on site-a, an account_manager on site-b, and a global admin. They also belong to group1 on site-a. The system links the admin account to the tester group, so if the user views the account in tester mode, they will have the same permissions as a tester in that group.
Sample SAML XML Example 1:

```
<saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
    <saml2:AttributeValue xsi:type="xs:string">site-a:admin</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">site-a:group1</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">site-b:account_manager</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">admin</saml2:AttributeValue>
</saml2:Attribute>

```

Sample SAML XML Example 2:
```
 <saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
    <saml2:AttributeValue xsi:type="xs:string">site-a:admin</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">site-a:group-b</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">site-b:tester</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">site-b:group-c</saml2:AttributeValue>
    </saml2:Attribute>

```
## Single-site
Sample SAML XML Example 3:

```
<saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
    <saml2:AttributeValue xsi:type="xs:string">admin</saml2:AttributeValue>
</saml2:Attribute>
```
Sample SAML XML Example 4:

```
<saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
    <saml2:AttributeValue xsi:type="xs:string">admin</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">group-b</saml2:AttributeValue>
    <saml2:AttributeValue xsi:type="xs:string">group-c</saml2:AttributeValue>
</saml2:Attribute>

```
# How We Apply Roles and Permissions

Once we receive and process these group attributes, they directly affect what the user can do within the system. Here's how roles translate into access:

* A global admin becomes a Site Manager, able to create sites, add admins, and assign account managers.
* Account Managers can invite site-specific admins.
* Admins can add testers.
* Testers have the most limited access, usually read-only or QA-specific functionality.

There’s also an approval system in place:

* If a Site Manager tries to promote someone to global admin, the Account Owner must approve it.
* Only the Account Owner can remove a Site Manager.

This layered model ensures that powerful roles don’t get assigned lightly.

# Important Rules to Follow
To ensure your SAML attributes work as expected, keep these rules in mind:
* Case sensitivity is enforced. `site1` and `Site1` are treated as different entities.
* Roles must be declared. Don’t assume a user will get default access just by belonging to a group.
* Testers must be explicitly assigned. If a user should only test, use site:tester.
* If multiple roles are defined for one site, they will be evaluated in combination, but only one global role will be honored.