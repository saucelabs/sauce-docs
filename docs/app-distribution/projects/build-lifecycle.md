---
id: build-lifecycle
title: Build Lifecycle
sidebar_label: Build Lifecycle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A build moves through different states from the time it is uploaded until it is deleted. Understanding these states helps you know whether a build is available for testers and what action is required when it is no longer installable.

## Build States

The following states describe the availability of a build:

| State | Visible to Testers | Description |
| --- | --- | --- |
| **Enabled** | Yes | The default state after a successful upload. Testers can view and install the build.|
| **Disabled** | No | Distribution is paused by an admin. The build is hidden from testers and cannot be installed until it is enabled again. |
| **Certificate expired** | No | The build's iOS provisioning profile has expired, so testers can no longer install it. Re-sign with a current profile and re-upload. Read from the profile at upload — not a manual toggle. |
| **Deleted** | No | The build and its file are permanently removed as soon as an admin deletes it, and the removal is immediate and cannot be undone. |

## State Diagram

A build can move between states depending on its configuration and expiration:

- A newly uploaded build starts in **Enabled** if it has a valid configuration.
- An admin can change an **Enabled** build to **Disabled** to pause distribution.
- A disabled build can be changed back to **Enabled** when distribution should resume.
- An iOS build can automatically move to **Certificate expired** when its provisioning profile expires.
- An **Enabled**, **Disabled**, or **Certificate expired** build can be moved to **Deleted** when an admin deletes it.

<div style={{overflowX: 'auto'}}>
<svg viewBox="0 0 880 520" width="100%" style={{maxWidth: '880px', height: 'auto'}} role="img" aria-label="Build state diagram: upload leads to Enabled; Enabled and Disabled toggle via disable and enable and together form the live stage; Enabled and Disabled move to Certificate expired when the profile date passes; Enabled, Disabled and Certificate expired all move to Deleted via delete.">
  <defs>
    <marker id="bl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#5a6577" />
    </marker>
  </defs>

  {/* Live (enabled / paused) grouping */}
  <rect x="105" y="128" width="252" height="330" rx="18" fill="none" stroke="#b6bcc6" strokeWidth="2" strokeDasharray="8 7" />
  <text x="117" y="118" fontSize="19" fill="#6b7280">Live (enabled / paused)</text>

  {/* start dot */}
  <circle cx="48" cy="190" r="12" fill="#2d3748" />
  <path d="M 62 190 L 124 190" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="93" y="172" fontSize="19" fill="#6b7280" textAnchor="middle">upload</text>

  {/* Enabled */}
  <rect x="130" y="150" width="208" height="80" rx="12" fill="#e8f5e9" stroke="#2e9e4f" strokeWidth="2.5" />
  <text x="234" y="198" fontSize="23" fontWeight="700" fill="#2e9e4f" textAnchor="middle">Enabled</text>

  {/* Disabled */}
  <rect x="130" y="352" width="208" height="80" rx="12" fill="#eceef0" stroke="#4a5568" strokeWidth="2.5" />
  <text x="234" y="400" fontSize="23" fontWeight="700" fill="#4a5568" textAnchor="middle">Disabled</text>

  {/* Certificate expired */}
  <rect x="520" y="150" width="308" height="80" rx="12" fill="#fdecea" stroke="#d93025" strokeWidth="2.5" />
  <text x="674" y="198" fontSize="23" fontWeight="700" fill="#d93025" textAnchor="middle">Certificate expired</text>

  {/* Deleted */}
  <rect x="515" y="395" width="227" height="80" rx="12" fill="#eceef0" stroke="#2d3748" strokeWidth="3" />
  <text x="628" y="443" fontSize="23" fontWeight="700" fill="#2d3748" textAnchor="middle">Deleted</text>

  {/* Enabled -> Certificate expired */}
  <path d="M 338 190 L 514 190" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="428" y="172" fontSize="19" fill="#6b7280" textAnchor="middle">profile date passes</text>

  {/* Enabled -> Disabled (disable) */}
  <path d="M 214 230 L 214 346" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="202" y="305" fontSize="19" fill="#6b7280" textAnchor="end">disable</text>

  {/* Disabled -> Enabled (enable) */}
  <path d="M 252 352 L 252 236" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="264" y="305" fontSize="19" fill="#6b7280" textAnchor="start">enable</text>

  {/* Disabled -> Certificate expired */}
  <path d="M 338 392 L 598 240" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />

  {/* Certificate expired -> Deleted */}
  <path d="M 668 232 L 640 388" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="712" y="322" fontSize="19" fill="#6b7280" textAnchor="middle">delete</text>

  {/* Disabled / live stage -> Deleted */}
  <path d="M 234 466 L 508 437" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#bl-arrow)" />
  <text x="332" y="497" fontSize="19" fill="#6b7280" textAnchor="middle">delete</text>
</svg>
</div>

:::note
An iOS build uploaded with an *already-expired* profile starts in **Certificate expired**. That state clears only by re-signing and uploading a *new* build. An app-level **Disable distribution** toggle overrides everything above - while it is on, no build in the app is installable regardless of its state.
:::

## Deleting and Disabling Builds

Account Owners and Organization Admins can manage individual builds from the project's build list.

**Step 1:** Open the project, locate the build you want to manage, and open its **Actions** menu.

<img src={useBaseUrl('/img/app-distribution/build-lifecycle/build-lifecycle-1.png')} alt="Build Lifecycle" width="100%"/>

**Step 2:** Select one of the following options:

- **Delete:** permanently removes the build. Its file and database record are deleted immediately; the build disappears from all views and this cannot be undone.
- **Disable:**  pauses distribution for a single build. Testers can no longer install it until it is enabled again. Toggle **Enable** to resume distribution.

<img src={useBaseUrl('/img/app-distribution/build-lifecycle/build-lifecycle-2.png')} alt="Build Lifecycle" width="100%"/>

To pause distribution for **all** builds of an app at once, use the **Disable distribution** toggle on the app's Settings page.

<img src={useBaseUrl('/img/app-distribution/build-lifecycle/build-lifecycle-3.png')} alt="Build Lifecycle" width="100%"/>

:::caution
Deleting a build is **immediate and permanent** - the file and its record are removed right away and **cannot be recovered**. To pause distribution temporarily instead, use **Disable**.
:::

## Certificate Expiration (iOS)

iOS ad-hoc and enterprise builds embed a provisioning profile with a fixed expiration date. MAD reads that date when the build is uploaded:

- After the profile's date passes, the build is automatically blocked from installation - no admin action is needed.
- A warning is shown on the build for the 14 days leading up to expiration.
- To restore distribution, re-sign the app with a current profile and upload it as a new build.
