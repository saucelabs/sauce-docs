---
id: oidc-authentication
title: OIDC Authentication Setup
sidebar_label: OIDC Authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to configure OpenID Connect (OIDC) authentication for Sauce Labs Mobile App Distribution API access.

:::note Feature Availability
OIDC authentication is not enabled by default. To use this feature, please [contact Sauce Labs Support](https://support.saucelabs.com/s/submit-a-request?language=en_US) to request activation for your account.
:::

## Overview

OIDC authentication allows organizations to authenticate API requests using JWT tokens from their identity provider instead of traditional API keys. This is designed for **machine-to-machine (M2M)** authentication using the OAuth 2.0 Client Credentials flow.

### Benefits

- **Centralized credential management**: Manage API access through your identity provider
- **Short-lived tokens**: Tokens expire automatically, reducing risk of credential leakage
- **No shared secrets**: API keys don't need to be distributed to CI/CD systems
- **Audit trail**: Authentication events are logged in your identity provider

### Supported Identity Providers

Any OIDC-compliant identity provider that supports the Client Credentials flow:

- Auth0
- Okta
- Azure AD (Microsoft Entra ID)
- Google Cloud Identity
- Keycloak
- PingIdentity
- And others...

---

## Configuration

### Step 1: Configure Your Identity Provider

Before configuring Sauce Labs Mobile App Distribution, set up a machine-to-machine application in your identity provider.

<Tabs
groupId="idp"
defaultValue="auth0"
values={[
{label: 'Auth0', value: 'auth0'},
{label: 'Okta', value: 'okta'},
{label: 'Azure AD', value: 'azure'},
]}>

<TabItem value="auth0">

1. Go to **Applications > Create Application**
2. Select **Machine to Machine Applications**
3. Name it (e.g., "MAD CI/CD")
4. Select or create an API with an audience identifier (e.g., `https://api.testfairy.com` or your custom API identifier)
5. Grant the required scopes (if using scope validation)
6. Note down:
   - **Domain** (Issuer URL): `https://your-tenant.auth0.com/`
   - **Client ID**
   - **Client Secret**
   - **Audience**: The API identifier you configured

</TabItem>

<TabItem value="okta">

1. Go to **Applications > Create App Integration**
2. Select **API Services** (for M2M)
3. Configure the app and note the **Client ID** and **Client Secret**
4. Go to **Security > API > Authorization Servers**
5. Create or use an authorization server with a unique audience
6. Note down:
   - **Issuer URL**: `https://your-org.okta.com/oauth2/<server-id>`
   - **Audience**: The authorization server's audience

</TabItem>

<TabItem value="azure">

1. Go to **App registrations > New registration**
2. Register the application
3. Go to **Certificates & secrets** and create a client secret
4. Go to **Expose an API** and set a unique Application ID URI (this is your audience)
5. Note down:
   - **Issuer URL**: `https://login.microsoftonline.com/<tenant-id>/v2.0`
   - **Client ID** (Application ID)
   - **Client Secret**
   - **Audience**: The Application ID URI

</TabItem>
</Tabs>

---

### Step 2: Configure OIDC Settings in Sauce Labs Mobile App Distribution

1. Log in to Sauce Labs Mobile App Distribution as an account owner or manager
2. Go to **Settings > OIDC Authentication**
3. Configure the following fields:

| Setting | Description |
| :------ | :---------- |
| **Enable OIDC** | Toggle to enable OIDC authentication |
| **Authentication Mode** | How to handle API key vs OIDC auth (see below) |
| **Issuer URL** | Your identity provider's issuer URL (e.g., `https://your-tenant.auth0.com/`) |
| **Audience** | The expected audience claim in tokens (e.g., `https://api.testfairy.com`) |
| **Signing Algorithms** | Allowed JWT signing algorithms (default: `RS256`) |
| **Required Scopes** | *(Optional)* Comma-separated list of scopes to validate |
| **JWKS Cache TTL** | How long to cache public keys (default: 24 hours) |
| **Clock Skew Tolerance** | Allowed time difference (default: 60 seconds) |

#### Authentication Modes

| Mode | Description |
| :--- | :---------- |
| **OIDC or API Key** | Accept both OIDC tokens and API keys. Recommended during migration. |
| **OIDC Only** | Require OIDC tokens, reject API keys. Use for full OIDC enforcement. |

### Step 3: Test the Configuration

1. Click **Test Connection** to verify:
   - The issuer URL is reachable
   - The OIDC discovery endpoint responds correctly
   - The JWKS (public keys) can be fetched
2. If successful, you'll see details about the discovered configuration
3. Enable the setting and hit Save configuration

---

## Security Best Practices

### Config Key Security

Each OIDC configuration is assigned a unique, unguessable config key (e.g., `oidc_a1b2c3d4e5f6...`). This key:

- Is automatically generated when you save your OIDC configuration
- Must be included in every API request via the `X-OIDC-Config-Key` header
- Should be treated as a secret and stored securely (e.g., in CI/CD secrets)
- Can be regenerated from the OIDC settings page if compromised

The config key ensures that even if multiple organizations use the same OIDC provider with identical settings, they cannot accidentally access each other's data.

### Token Lifetime

Configure short-lived tokens in your identity provider:

- Recommended: 1 hour or less
- Maximum recommended: 24 hours

### Scope Validation (Optional)

Scope validation is **optional**. If you leave the "Required Scopes" field empty, scope validation is skipped entirely.

For additional security, you can configure required scopes:

1. Define scopes in your identity provider (e.g., `uploads:write`, `sessions:read`)
2. Add them to the "Required Scopes" field in the settings
3. Tokens must contain at least one of the required scopes

:::note
If no scopes are configured, any valid token from your OIDC provider will be accepted regardless of its scope claims.
:::

### Migration Strategy

When migrating from API keys to OIDC:

1. **Phase 1**: Enable OIDC in "OIDC or API Key" mode
2. **Phase 2**: Update all clients to use OIDC tokens
3. **Phase 3**: Monitor for any remaining API key usage
4. **Phase 4**: Switch to "OIDC Only" mode

---

## API Usage

### Obtaining a Token

Request an access token from your identity provider using the Client Credentials flow:

```bash
curl -X POST https://your-identity-provider.example.com/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET",
    "audience": "https://api.testfairy.com",
    "grant_type": "client_credentials"
  }'
```

```json title="Sample Response"
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Making API Requests

Include the token in the `Authorization` header along with your OIDC config key. See [REST API](/testfairy/api-reference/rest-api) for available endpoints.

```bash
curl -X GET "https://mobile.saucelabs.com/api/1/projects/" \
  -H "Authorization: Bearer <your-access-token>" \
  -H "X-OIDC-Config-Key: <your-config-key>"
```

For file uploads, see [Upload API](/testfairy/api-reference/upload-api) for all parameters:

```bash
curl -X POST "https://mobile.saucelabs.com/api/upload/" \
  -H "Authorization: Bearer <your-access-token>" \
  -H "X-OIDC-Config-Key: <your-config-key>" \
  -F "file=@app.apk"
```

---

## CI/CD Integration Examples

<Tabs
groupId="cicd"
defaultValue="github"
values={[
{label: 'GitHub Actions', value: 'github'},
{label: 'Jenkins', value: 'jenkins'},
{label: 'GitLab CI', value: 'gitlab'},
]}>

<TabItem value="github">

```yaml
name: Upload to Sauce Labs Mobile App Distribution

on:
  push:
    branches: [main]

jobs:
  upload:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build App
        run: ./gradlew assembleRelease

      - name: Get OIDC Token
        id: token
        run: |
          TOKEN=$(curl -s -X POST ${{ secrets.OIDC_TOKEN_URL }} \
            -H "Content-Type: application/json" \
            -d '{
              "client_id": "${{ secrets.OIDC_CLIENT_ID }}",
              "client_secret": "${{ secrets.OIDC_CLIENT_SECRET }}",
              "audience": "${{ secrets.TESTFAIRY_AUDIENCE }}",
              "grant_type": "client_credentials"
            }' | jq -r '.access_token')
          echo "::add-mask::$TOKEN"
          echo "token=$TOKEN" >> $GITHUB_OUTPUT

      - name: Upload to MAD
        run: |
          curl -X POST https://mobile.saucelabs.com/api/upload/ \
            -H "Authorization: Bearer ${{ steps.token.outputs.token }}" \
            -H "X-OIDC-Config-Key: ${{ secrets.OIDC_CONFIG_KEY }}" \
            -F "file=@app/build/outputs/apk/release/app-release.apk"
```

</TabItem>

<TabItem value="jenkins">

```groovy
pipeline {
    agent any

    environment {
        OIDC_CLIENT_ID = credentials('oidc-client-id')
        OIDC_CLIENT_SECRET = credentials('oidc-client-secret')
        OIDC_CONFIG_KEY = credentials('oidc-config-key')
    }

    stages {
        stage('Build') {
            steps {
                sh './gradlew assembleRelease'
            }
        }

        stage('Upload to MAD') {
            steps {
                script {
                    def tokenResponse = httpRequest(
                        url: 'https://your-identity-provider.example.com/oauth/token',
                        httpMode: 'POST',
                        contentType: 'APPLICATION_JSON',
                        requestBody: """{
                            "client_id": "${OIDC_CLIENT_ID}",
                            "client_secret": "${OIDC_CLIENT_SECRET}",
                            "audience": "${TESTFAIRY_AUDIENCE}",
                            "grant_type": "client_credentials"
                        }"""
                    )
                    def token = readJSON(text: tokenResponse.content).access_token

                    sh """
                        curl -X POST https://mobile.saucelabs.com/api/upload/ \
                            -H "Authorization: Bearer ${token}" \
                            -H "X-OIDC-Config-Key: ${OIDC_CONFIG_KEY}" \
                            -F "file=@app/build/outputs/apk/release/app-release.apk"
                    """
                }
            }
        }
    }
}
```

</TabItem>

<TabItem value="gitlab">

```yaml
upload-to-testfairy:
  stage: deploy
  script:
    - |
      TOKEN=$(curl -s -X POST $OIDC_TOKEN_URL \
        -H "Content-Type: application/json" \
        -d "{
          \"client_id\": \"$OIDC_CLIENT_ID\",
          \"client_secret\": \"$OIDC_CLIENT_SECRET\",
          \"audience\": \"$TESTFAIRY_AUDIENCE\",
          \"grant_type\": \"client_credentials\"
        }" | jq -r '.access_token')
    - |
      curl -X POST https://mobile.saucelabs.com/api/upload/ \
        -H "Authorization: Bearer $TOKEN" \
        -H "X-OIDC-Config-Key: $OIDC_CONFIG_KEY" \
        -F "file=@app-release.apk"
  only:
    - main
```

</TabItem>
</Tabs>

---

## Troubleshooting

### Debugging Tips

1. **Decode your JWT token** at [jwt.io](https://jwt.io) to inspect claims
2. **Verify the issuer URL** ends with `/` if your provider includes it
3. **Check the audience** matches exactly (case-sensitive)
4. **Test the OIDC discovery endpoint** manually:
   ```bash
   curl https://your-issuer/.well-known/openid-configuration
   ```
5. **Test the JWKS endpoint** manually:
   ```bash
   curl https://your-issuer/.well-known/jwks.json
   ```

### Token Validation Checklist

When a token is validated, the following checks are performed:

1. Token format is valid JWT (three base64-encoded parts)
2. Token header specifies an allowed algorithm (default: RS256)
3. Token signature is valid (verified using JWKS public keys)
4. Token is not expired (`exp` claim)
5. Token is not used before valid time (`nbf` claim, if present)
6. Issuer (`iss` claim) matches configured issuer URL
7. Audience (`aud` claim) matches configured audience
8. Required scopes are present (only if scope validation is configured)

### Common Error Messages

| Error | Solution |
| :---- | :------- |
| `X-OIDC-Config-Key header required` | Add the `X-OIDC-Config-Key` header to your request. |
| `Invalid config key` | The config key is incorrect. Verify it from your OIDC settings page. |
| `OIDC not enabled for this organization` | Enable OIDC in Settings > OIDC Authentication. |
| `Invalid issuer` | Token's `iss` claim doesn't match. Verify the issuer URL matches exactly (including trailing slash). |
| `Invalid audience` | Token's `aud` claim doesn't match. Verify the audience matches exactly (case-sensitive). |
| `Token has expired` | Request a new token from your identity provider. |
| `Invalid token signature` | Ensure the token is from the correct provider and hasn't been tampered with. |
| `Missing required scope` | Request a token with the required scopes or update your OIDC configuration. |
| `Failed to fetch JWKS` | Check network connectivity and verify the issuer URL. |
| `Unsupported algorithm` | Only RS256, RS384, and RS512 are supported. |

---

## FAQ

**Q: Can I use OIDC and API keys at the same time?**

A: Yes, use the "OIDC or API Key" authentication mode during migration.

**Q: What happens if my identity provider is down?**

A: JWKS (public keys) are cached for the configured TTL (default 24 hours). If cached keys are available, authentication will continue to work. If cache expires and the provider is unreachable, authentication will fail.

**Q: Can multiple organizations share the same OIDC provider?**

A: Yes, each organization has a unique config key to prevent cross-tenant access.

**Q: Do I need to store the client secret in Sauce Labs Mobile App Distribution?**

A: No. The client ID and secret are only used client-side to obtain tokens. Sauce Labs Mobile App Distribution only validates the tokens using public keys from the JWKS endpoint.

**Q: Which JWT algorithms are supported?**

A: RS256, RS384, and RS512 are supported. RS256 is recommended and is the default.

**Q: Can I use HS256 (symmetric) algorithms?**

A: No. Only asymmetric algorithms (RS\*) are supported for security reasons. Symmetric algorithms would require sharing the secret key.

## See Also

- [REST API](/testfairy/api-reference/rest-api) - Full API reference
- [Upload API](/testfairy/api-reference/upload-api) - Build upload API
- [Service Accounts](/testfairy/security/service-accounts) - Alternative authentication using API keys
