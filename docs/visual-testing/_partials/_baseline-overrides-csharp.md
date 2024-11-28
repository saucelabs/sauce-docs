At the global / client level

```csharp
VisualClient = await VisualClient.Create(Driver, Region.UsWest1);
VisualClient.BaselineOverride = new BaselineOverride()
{
    Browser = Browser.Chrome,
    Device = "Desktop (1024x627)",
    OperatingSystem = OperatingSystem.Windows,
    OperatingSystemVersion = "10",
};
```

Or at the snapshot level

```csharp
await VisualClient.VisualCheck("Login Page", new VisualCheckOptions()
{
    BaselineOverride = new BaselineOverride()
    {
        Browser = Browser.Chrome,
        Device = "Desktop (1024x627)",
        OperatingSystem = OperatingSystem.Windows,
        OperatingSystemVersion = "10",
    }
});
```
