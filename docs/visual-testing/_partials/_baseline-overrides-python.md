At the global / client level

```python
from saucelabs_visual.client import SauceLabsVisual
from saucelabs_visual.typing import BaselineOverride, Browser, OperatingSystem

visual_client = SauceLabsVisual()
visual_client.baseline_override = BaselineOverride(
    browser=Browser.CHROME,
    device="Desktop (1024x627)",
    operatingSystem=OperatingSystem.WINDOWS,
    operatingSystemVersion="10",
)
```

Or at the snapshot level

```python
from saucelabs_visual.client import SauceLabsVisual
from saucelabs_visual.typing import BaselineOverride, Browser, OperatingSystem
# ...
visual_client = SauceLabsVisual()
visual_client.create_snapshot_from_webdriver(
        "Login Page",
        driver=driver,
        baseline_override=BaselineOverride(
            browser=Browser.CHROME,
            device="Desktop (1024x627)",
            operatingSystem=OperatingSystem.WINDOWS,
            operatingSystemVersion="10",
        )
    )
```
