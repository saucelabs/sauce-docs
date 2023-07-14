---
id: pam-ldap
title: Configuring PAM-LDAP Authentication With Backtrace
sidebar_label: PAM-LDAP Authentication
description: Enterprise users can configure their on-premises Backtrace instances to authenticate to their LDAP server via PAM
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you are using LDAP-based account management, you can configure your on-premises Backtrace instances to authenticate with your LDAP server using PAM.

## Creating an LDAP Pseudouser

To bind coronerd to the LDAP service and perform directory searches, you need to create a pseudouser. Consult your LDAP administrator for assistance with this step.

## Installing And Configuring PAM

PAM is used by coronerd to integrate with your LDAP service.

### CentOS / RHEL

Install the following packages:

- `pam`
- `pam_ldap`

### Ubuntu / Debian

Install the following packages:

- `libpam0g`
- `libpam-ldap`

### Configuring PAM to Connect With Your Pseudouser

Edit the `/etc/pam_ldap.conf` file as shown below and replace the values of `uid` and `bindpw` with the credentials of your pseudouser.

```shell
host ldap.mydomain.com
base dc=mydomain,dc=com
binddn uid=app_backtraceio,ou=pseudousers,dc=mydomain,dc=com
bindpw Password1234!
ssl start_tls
```

### Allowing Coronerd to Use PAM

Add the following contents to the `/etc/pam.d/coronerd` file:

```bash
auth        include     system-auth
account     sufficient  pam_ldap.so
account     include     system-auth
password    sufficient  pam_ldap.so
password    include     system-auth
session     sufficient  pam_ldap.so
session     include     system-auth
```

### Allowlisting PAM Users

1. Go to **Configure Organization**.
2. Select **Users** under **Universe Settings**.
3. In **Allowlisted Domains**, specify the domains from which users are allowed to sign up.
4. Select **PAM** as the default authentication method.

For more information, refer to the [User Management](/error-reporting/org-settings/user-mgmnt/) documentation.

### User Invitations

Users can now create an account using the invites page, with their password coming from LDAP. Ensure that SMTP is properly configured so that they can receive invitation emails.

For more information on SMTP configuration, see the [Coronerd Setup](/error-reporting/advanced/coroner/server-setup/) documentation.

## Troubleshooting

If authentication fails (for example, bad password when attempting to log in to the UI), check the following PAM files to verify if the following lines are properly configured. This verification is necessary for CentOS 7.

### /etc/nslcd.conf

```bash
uri ldap://ds.mydomain.com:389/base uid=mydomain,dc=com
binddn cn=app_backtraceio,ou=pseudousers,dc=mydomain,dc=com
bindpw *******
```

### /etc/nsswitch.conf

```bash
passwd:     files ldap
shadow:     files ldap
group:      files ldap
```

### /etc/pam.d/system-auth-ac

```bash
auth        sufficient    pam_ldap.so minimum_uid=1000 use_first_pass
account     required      pam_ldap.so minimum_uid=1000
password    sufficient    pam_ldap.so minimum_uid=1000 try_first_pass
session     required      pam_ldap.so minimum_uid=1000
```
