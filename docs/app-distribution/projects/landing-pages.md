---
id: landing-pages
title: Landing Pages
sidebar_label: Landing Pages
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Each project has a customizable landing page where testers can install your app.

## Configuration

Go to your project's **Edit** page and scroll to the **Landing Page Settings** section. You can configure:

| Setting | Description |
| --- | --- |
| **URL Alias** | Custom slug for the install URL (e.g., `/install/my-app` instead of a random token). |
| **Build Version** | Pin the landing page to a specific build, or leave as "Latest" to always show the newest. |
| **Visibility** | Open (anyone with the link) or Closed (requires login). iOS apps are always closed. |
| **Description** | Displayed on the right side of the landing page alongside release notes. |
| **Include Release Notes** | Toggle whether the build's release notes appear on the landing page. |
| **Background Color** | Pick from presets or set a custom color for the landing page gradient. |
| **Custom CSS** | Advanced: inject custom CSS for full visual control. |

## Custom CSS Examples

Use the **Custom CSS** field to style the landing page. The CSS is injected into a `<style>` tag on the page. Some examples:

**Change the background color:**

```css
.landing-bg-cover { background: #1a1a2e !important; }
```

**Style the install card:**

```css
.card { border-radius: 16px; border: 2px solid #e94560; }
```

**Change the button color:**

```css
.btn-primary { background-color: #e94560 !important; border-color: #e94560 !important; }
```

## Preview

Use the **Preview** button on the edit page to see how your landing page looks before sharing it with testers.
