---
id: testfairy
title: Using Sauce Mobile App Distribution (TestFairy)
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Welcome to Sauce Mobile App Distribution (TestFairy), the App Center distribution alternative! Use our enterprise-grade app distribution capabilities to migrate from [App Center before March 31, 2025](https://saucelabs.com/testfairy-sauce-labs)! 

## Store and Manage Apps

Sauce Mobile App Distribution offers robust, enterprise-grade app storage capabilities, enabling companies to securely upload, download, and manage their apps with ease.
With Sauce Mobile App Distribution, you can efficiently organize and deliver the right apps to the right users while maintaining high security standards.
Our default data retention policy is 180 days. Our Enterprise customers can set custom data retention policies, anything between 15-365 days.

For more information, see [Managing Apps through API](/testfairy/api-reference/rest-api/).

## Distribute App to Testers

Sauce Mobile App Distribution offers enterprise-grade app distribution capabilities, allowing companies to easily and securely distribute the right apps to users like internal or external beta testers. The platform allows admins to enforce corporate security policies during testing, and has the capability to automatically update apps to new versions or revoke access to installed apps or users.

For more information, see [Managing Testers](/testfairy/testers/managing-testers/).

## Manage everything through API and Integrations

Sauce Mobile App Distribution provides comprehensive API and integration capabilities, allowing companies to automate app management, user management, beta testers and seamlessly integrate with existing workflows. Use our APIs to manage app/user distribution or enforce security policies programmatically. 
Integrate Sauce Mobile App Distribution with your CI/CD pipelines, project management tools, and other enterprise systems to streamline your app development and distribution process.
For more information, see [API Reference guide](/testfairy/api-reference/rest-api/)

## Security

Sauce Mobile App Distribution is available as a private cloud or an on-premise installation and can integrate with any SAML single sign-on service. Sauce Mobile App Distribution is the only platform that provides end-to-end data encryption using your private/public keys, so your data remains private.
Sauce Mobile App Distribution Public Cloud is available in the EU-Central-1 and US-East-1 data centers. The Private Cloud is available in various regions, customizable based on specific preferences. 

For more information, see [SSO](/testfairy/security/sso/sso-intro/), or [Private Cloud](/testfairy/security/private-cloud/).

## SAML Authentication Integration with Custom Group Attributes

In modern enterprise environments, Single Sign-On (SSO) via SAML is a crucial component for secure, centralized access control. SAML Authentication with Custom Group Attributes, allows granular user role and site-level access management via your identity provider.

With this feature, authentication is managed through a SAML 2.0 identity provider, and user access is defined using custom group attributes passed in the SAML response. These attributes can be used to:

* Assign roles (e.g., admin, tester)
* Define access per site
* Apply global roles

This design provides flexibility for organizations managing access across multiple teams or sites, while keeping configuration centralized.

### Structuring Group Attributes
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

### Reserved Role Keywords
To avoid ambiguity, we use a set of predefined, case-sensitive keywords to identify roles:

* admin
* account_manager
* member
* Tester

Any other string will be treated as a group, not a role, so double-check your attribute values to avoid unexpected access behavior.

### Example: What a SAML Attribute Looks Like
Below you can find a real-world SAML XML snippet to see how these roles and groups are passed:

### Multi-site
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
### Single-site
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
## How We Apply Roles and Permissions

Once we receive and process these group attributes, they directly affect what the user can do within the system. Here's how roles translate into access:

* A global admin becomes a Site Manager, able to create sites, add admins, and assign account managers.
* Account Managers can invite site-specific admins.
* Admins can add testers.
* Testers have the most limited access, usually read-only or QA-specific functionality.

There’s also an approval system in place:

* If a Site Manager tries to promote someone to global admin, the Account Owner must approve.
* Only the Account Owner can remove a Site Manager.

This layered model ensures that powerful roles don’t get assigned lightly.

## Important Rules to Follow
To ensure your SAML attributes work as expected, keep these rules in mind:
* Case sensitivity is enforced. Site1 and Site1 are treated as different entities.
* Roles must be declared. Don’t assume a user will get default access just by belonging to a group.
* Testers must be explicitly assigned. If a user should only test, use site:tester.
* If multiple roles are defined for one site, they will be evaluated in combination, but only one global role will be honored.

