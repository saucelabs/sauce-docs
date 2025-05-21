---
id: video-recording
title: Video Recording
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs captures a recording of the device screen during your tests. For most test frameworks, this video becomes available upon test completion or as a live stream while the test is in progress.

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

Once your test job is complete, the recorded video is encoded, downloaded from the device, and uploaded to our long-term storage. Please note that videos are automatically deleted after 30 days.

A test job will only be marked as finished once the video has been successfully uploaded from the device to long-term storage. As a result, lengthy test sessions may face a longer post-processing phase, which can prolong the time the device remains busy.

## Live Stream

<p><small><span className="sauceGreen">Real Devices Documentation</span></small></p>

While your test job is active, you can access a live video stream of the device if you have the job's device_session_id. This live stream is accessible via WebSocket at the following URL:

`wss://api.<sauce_region>.saucelabs.com/v1/rdc/socket/alternativeIo/<device_session_id>`

Access to this stream requires Basic Auth.

Be aware that this is a raw data stream and requires parsing to be viewable. Each message received on this stream represents a screenshot taken on the device in `jpeg` format.


## Limitations

### Missing or Corrupted Videos

We maintain approximately 99% reliability for video recordings across our real device test jobs. In rare cases, recordings might be missing or corrupted due to unexpected hardware or software failures. Should you experience reproducible, systematic issues with missing videos or notice a pattern of video failures, please contact our support team.
