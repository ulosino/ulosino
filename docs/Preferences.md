# Preferences

ULOSINO implements an assortment of preferences that allow you to customise your ULOSINO experience!

Beginning with version 3.2, your preferences are safely stored so that they remain the same every time you use ULOSINO on that web browser.

## Preference Guide

### Apperance

These preferences change how ULOSINO looks.

| Preference                         | Behaviour                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Advanced Search Link           | Changes the Browse link on the navigation bar to go to Advanced Search instead                                                               |
| Show Back Button for Large Windows | Shows a back button on the navigation bar for large windows                                                                                  |
| Invert Colours for this Tab        | Sets the current tab to use the colour mode that is the opposite of the OS setting. This doesn't persist between different tabs or sessions. |

### Integrations

Integration preferences connect ULOSINO with other web services and other applications on your computer.

| Preference                 | Required Field                   | Behaviour                                                                           |
| -------------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| Contributor Username       | GitHub username (without an `@`) | Adds a watermark with your username to pages made with the Create OS Page Assistant |
| Custom Editing Application | A supported app URL scheme       | Sets a custom app to be used instead of the GitHub Web Editor for file editing      |

### Application

Application preferences are advanced options that change the functionality of ULOSINO.

| Preference                    | Behaviour                                        |
| ----------------------------- | ------------------------------------------------ |
| Minimise In-App Notifications | Hides all non-critical notifications and banners |
| Disable Tempo Features        | Disables all donation features                   |

## Technical Information for Developers

Preferences are stored in `LocalStorage` to enable state persistence. The preference store can be accessed using the browser's developer tools, usually under "Storage" and then "LocalStorage". This area can also be used to change preference values manually.

Preferences are stored according to the table below:

| Preference                         | `LocalStorage` Key              | Expected Value    |
| ---------------------------------- | ------------------------------- | ----------------- |
| Use Advanced Search Link           | `P3PrefAdvancedSearchLink`      | Boolean           |
| Show Back Button for Large Windows | `P3PrefBackButtonLargeWindows`  | Boolean           |
| Invert Colours for this Tab        | `chakra-ui-color-mode`          | "light" or "dark" |
| Contributor Username               | `P3PrefContributor`             | Text              |
| Custom Editing Application         | `P3PrefFileEditorURL`           | Text (URL)        |
| Minimise In-App Notifications      | `P3PrefMinimiseNotifications`   | Boolean           |
| Disable Tempo Features             | `P3PrefDisableDonationFeatures` | Boolean           |

> **Note:** For boolean keys, any value other than `true` is equal to the key not being present.
