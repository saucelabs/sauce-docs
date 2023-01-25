---
id: running-tests
title: Hosted Orchestration Running Tests
sidebar_label: Running Tests
---

## Starting an Execution

<Tabs
     defaultValue="REST API"
     values={[
       {label: 'REST API', value: 'REST API'},
       {label: 'SauceCTL', value: 'SauceCTL'},
     ]}>

   <TabItem value="REST API">

   ```bash
   curl -X POST https://api.us-west-1.saucelabs.com
   -H "Content-Type: application/json" 
   --user "${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}"
   -d '{
    "container": {
      "name": "mikedonovan1987/hosted-execution:pr-1",
      "auth": { 
        "user": "",
        "token": ""
      }
    },
    "entrypoint": "mvn test -pl best-practice -Dtest=DesktopTests",
    "env": [
      {
        "name": "SAUCE_ENDPOINT",
        "value": "https://ondemand.us-west-4-i3er.saucelabs.com:443/wd/hub"
      },
      {
        "name": "SAUCE_BUILD",
        "value": "hosted-execution"
      }
    ],
    "files": [
    {
      "path": "/tmp/sauce/the-hello.json",
      "data": "dGhpcyBpcyBhIHNhbXBsZSBvdXRwdXQ6CiogSSdtIGRvbmUKKiBJJ20gZG9uZSB0b28KKiBwcmV0dHkgYXdlc29tZQ=="
    }
    ],
    "artifacts": [
      "/path/inside/container/file1.log",
      "/path/inside/container/file2.log"
    ]
    }'
   ```

   </TabItem>
   <TabItem value="SauceCTL">

   ```bash
   saucectl hosted-execution --image=""
   ```

   </TabItem>
   </Tabs>

   ## Checking Status

   ## Getting Results