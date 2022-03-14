# ULOSINO Error Handling

## Integrated Application Errors (IAEs)

To improve the reliability of the ULOSINO web app, we've bundled in some common errors in the form of Integrated Application Errors. Some of these are only shown in the browser console.

| IAE                      | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `PageIsError`            | Page is `/error `                                                                                            |
| `PageNotInCache`         | The page is not available locally and downloading it from a remote server failed                             |
| `ErrorRegionCaught`      | A defined region of the page returned a React Error Boundary (`<ErrorFallback>`)                             |
| `ErrorInUndefinedRegion` | A React Error Boundary was returned in a DOM region not wrapped in a fallback (`<ErrorFallbackApplication>`) |
| `BrowserNotPermitted`    | The browser being used to access ULOSINO isn't supported                                                     |

## Other Errors

We've built custom fallbacks for these HTTP error codes:

| HTTP Status | Description  |
| ----------- | ------------ |
| `HTTP 404`  | Not found    |
| `HTTP 500`  | Server error |

## For Developers

We have included details how our error fallbacks work in the Architecture document of our documentation.
