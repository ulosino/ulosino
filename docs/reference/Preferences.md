# Preferences Reference

## All Preferences

### Apperance

These preferences change how ULOSINO looks.

| Preference                         | Behaviour                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Advanced Search Link           | Changes the Browse link on the navigation bar to go to Advanced Search instead.                                                              |
| Show Back Button for Large Windows | Shows a back button on the navigation bar for large windows.                                                                                 |
| Invert Colours for this Session    | Sets the current tab to use the colour mode that is the opposite of the OS setting. This doesn't persist between different tabs or sessions. |

### Notification

Notification preferences change how ULOSINO notifies you and how verbose the app is.

| Preference                    | Behaviour                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| Minimise In-App Notifications | Hides all non-critical notifications and banners.                                       |
| Minimise Confirmations        | Minimise prompts for confirmation of actions. Some important confimations are excluded. |

### Advanced

Advanced preferences change advanced application settings and behaviours.

| Preference                         | Behaviour                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------- |
| Disable Tempo Features             | Disables all donation features.                                                         |
| Disable Background Update Services | Disables automatic checking for background updates and prompts to install them offline. |

## Technical Information for Developers

Preferences are stored in `LocalStorage` to enable state persistence. The preference store can be accessed using the browser's developer tools, usually under "Storage" and then "LocalStorage". This area can also be used to change preference values manually.

Preferences are stored according to the table below:

| Preference                         | `LocalStorage` Key               | Expected Value    |
| ---------------------------------- | -------------------------------- | ----------------- |
| Use Advanced Search Link           | `P3PrefAdvancedSearchLink`       | Boolean           |
| Show Back Button for Large Windows | `P3PrefBackButtonLargeWindows`   | Boolean           |
| Invert Colours for this Session    | `chakra-ui-color-mode`           | `light` or `dark` |
| Minimise In-App Notifications      | `P3PrefMinimiseNotifications`    | Boolean           |
| Minimise Confirmations             | `P3PrefConfirmations`            | Boolean           |
| Disable Tempo Features             | `P3PrefDisableDonationFeatures`  | Boolean           |
| Disable Background Update Services | `P3PrefDisableBackgroundUpdates` | Boolean           |

> **Note:** For boolean keys, any value other than `true` is equal to the key not being present.
