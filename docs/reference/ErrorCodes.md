# Error Reference

## Integrated Application Errors (IAEs)

ULOSINO handles common errors using Integrated Application Errors. Some of these are only shown in the browser console.

| IAE                      | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ErrorRegionCaught`      | A defined region of the page returned a React Error Boundary (`<ErrorFallback>`)                             |
| `ErrorInUndefinedRegion` | A React Error Boundary was returned in a DOM region not wrapped in a fallback (`<ErrorFallbackApplication>`) |
| `BrowserNotPermitted`    | The browser being used to access ULOSINO isn't supported                                                     |
| `FeatureIsDisabled`      | The feature has been manually disabled by the user (non-default behaviour)                                   |

## Other Errors

We've built custom fallbacks for these HTTP error codes:

| HTTP Status | Description  |
| ----------- | ------------ |
| `HTTP 404`  | Not found    |
| `HTTP 500`  | Server error |

We've also built a custom fallback when the browser is offline.
