---
id: map-locations
title: Using Map Locations
sidebar_label: Using Map Locations
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The App Distribution SDK does not require location permissions and does track location out of the box.

To send location information to App Distribution, add location permissions to your app and use the code below to call `TestFairy.updateLocation`. The location will then be presented on a map as part of the session page.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'ios'},
]}>

<TabItem value="android">

To record locations, you must first add the correct permissions to your application. Depending on your application's needs, you may want to add one or both of the following permissions to your `AndroidManifest.xml`.

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

```js
TestFairy.updateLocation(android.location.Location location)
```

Example

```java
import android.content.Context;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.testfairy.TestFairy;

public class MainActivity extends AppCompatActivity implements LocationListener {

    private LocationManager locationManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Get the location manager
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

        Criteria criteria = new Criteria();
        String provider = locationManager.getBestProvider(criteria, false);
        Location location = locationManager.getLastKnownLocation(provider);

        // Initialize the location fields
        if (location != null) {
            onLocationChanged(location);
        }
    }

    @Override
    public void onLocationChanged(Location location) {
        TestFairy.updateLocation(location);
    }
}
```

</TabItem>

<TabItem value="ios">

To record locations, call the static instance method `updateLocation` in the `TestFairy` class, passing in a collection of `CLLocations`.

```js
NSArray<CLLocation *> *locations = ...
[TestFairy updateLocation:locations];
```

Example

```js
#import "TestFairy.h"

@interface NewRunViewController: UIViewController <CLLocationManagerDelegate>
- (void)viewDidLoad
{
    [super viewDidLoad];

    self.locationManager = [[CLLocationManager alloc] init];
    self.locationManager.delegate = self;
    self.locationManager.distanceFilter = kCLDistanceFilterNone;
    self.locationManager.desiredAccuracy = kCLLocationAccuracyBest;
    [self.locationManager startUpdatingLocation];
}

...

-(void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations {
    [TestFairy updateLocation:locations];
}

@end
```

</TabItem>

</Tabs>
