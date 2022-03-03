# ULOSINO Error Handling

## Integrated Application Errors (IAEs)

To improve the reliability of the ULOSINO web app, we've bundled in some common errors in the form of Integrated Application Errors. Some errors are only shown in the browser console.

| IAE                      | Description                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `PageIsError`            | Page is /error                                                                              |
| `PageNotInCache`         | The page is not available locally and downloading it from a remote server failed            |
| `ErrorRegionCaught`      | A defined region of the page returned a React Error Boundary                                |
| `ErrorInUndefinedRegion` | A React Error Boundary was returned in a DOM region not wrapped in a page-specific fallback |
| `BrowserNotPermitted`    | An unsupported browser is being used to access ULOSINO                                      |

## Other errors

We've built custom fallbacks for these common HTTP error codes:

| HTTP Status | Description  |
| ----------- | ------------ |
| `HTTP 404`  | Not found    |
| `HTTP 500`  | Server error |

## Export deployment details

Sometimes you'll get the commit hash or branch of the deployment you're using. This can be done by pressing Control+Shift+Backtick or Alt+Shift+Backtick. Go to the Keyboard Shortcut Reference for more information.
