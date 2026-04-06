At the global / client level

```java
VisualApi visual =
    new VisualApi.Builder(driver, username, accessKey)
        .withBaselineOverride(
            new BaselineOverride.Builder()
                .withBrowser(Browser.CHROME)
                .withDevice("Desktop (1024x627)")
                .withOperatingSystem(OperatingSystem.WINDOWS)
                .withOperatingSystemVersion("10")
                .build()
        )
        .build();
```

Or at the snapshot level

```java
VisualApi visual =
    new VisualApi.Builder(driver, username, accessKey)
        .build();

visual
    .sauceVisualCheck("Snapshot name",
      new CheckOptions
        .Builder()
        .withBaselineOverride(
            new BaselineOverride.Builder()
                .withBrowser(Browser.CHROME)
                .withDevice("Desktop (1024x627)")
                .withOperatingSystem(OperatingSystem.WINDOWS)
                .withOperatingSystemVersion("10")
                .build()
        )
        .build()
    );
```
