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
| Invert Colours for this Session    | Sets the current tab to use the colour mode that is the opposite of the OS setting. This doesn't persist between different tabs or sessions. |

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
| Invert Colours for this Session    | `chakra-ui-color-mode`          | `light` or `dark` |
| Minimise In-App Notifications      | `P3PrefMinimiseNotifications`   | Boolean           |
| Disable Tempo Features             | `P3PrefDisableDonationFeatures` | Boolean           |

> **Note:** For boolean keys, any value other than `true` is equal to the key not being present.
