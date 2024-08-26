At the global / client level

```robot
*** Keywords ***
# Typically you'd set this up in your __init__.robot file at the top-level, right after creating your visual build.
Setup
    ${override} =    Visual BaselineOverride    browser=CHROME    device=Desktop (1024x627)    operating_system=WINDOWS    operating_system_version=10
    Visual Set Global BaselineOverride    ${override}
```

Or at the snapshot level

```robot
*** Test Cases ***
Valid Login
    ${override} =    Visual BaselineOverride    browser=CHROME    device=Desktop (1024x627)    operating_system=WINDOWS    operating_system_version=10
    Visual Snapshot    Login Page    baseline_override=${override}
```
