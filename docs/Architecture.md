# The ULOSINO Architecture

At ULOSINO, we value the speed, appearance, safety, and architectural integrity of our web app. At it's very core, ULOSINO is a Next.js application with a Progressive Web App implementation. The Next.js framework uses React under the hood and has been developed by the web's frontiers, including Vercel, Google, and Facebook. ULOSINO is powered by Vercel and their premium CDN and Edge solutions. The combination of Next.js and Vercel leads to great experiences for our international customer base.

This document is a low-level overview of the ULOSINO architecture.

## File Types

- The `.tsx` file extension is always used for files that return a React component and are written in TypeScript.
- The `.ts` file extension is always used for files written in TypeScript.
- The `.js` file extension is used for JavaScript files. This includes files that don"t go well with types (Cypress tests) or require legacy syntax (`MDXProvider`).
- The `.mdx` file extension is used for MDX files. MDX is a file format that is written in Markdown but includes the ability for React components to be included. All Database Content is written in MDX.
- The `.md` file extension is used for traditional Markdown files. This includes ULOSINO documentation and our README file.

> There are no `.jsx` files. All React component files use TypeScript.

## Page Types

ULOSINO has two page types.

The first are standard Next.js pages. These are used when the full capacity of Next.js and/or React is needed.

For all other pages, a Next.js dynamic page is used. These pages, named `[slug].tsx`, are (practically) template pages that are created multiple times based on text and metadata imported from Database Content. Metadata fields and MDX content populate the page and the metadata also appear in SEO tags. This enables consistent presentation and the required scalability for OS pages and miscellaneous text-based pages (controlled on different folders).

## Project Structure and Content Flow

The file structure of the ULOSINO project separates content and code.

Operating system pages are stored in "operating system page store (`OSPageStore`)" which is currently located in the `/public/markdown/browse` folder. The OS Pages are imported and processed by `OSPageProvider` to sort the pages, and handles metadata (frontmatter) fields - this includes the name - to enable search and the OS "cards". Other text-heavy files, like the Privacy Notice, are stored in `/public/markdown` too (`/public/markdown/about`). Collectively, we refer to this as "Database Content".

Let's follow the journey of the Alpine Linux page:

1. Next.js checks if something can be found at the `/browse` folder using the path defined in our dynamic page (`/browse/[slug].tsx`). The demo is stored at `/public/content/browse/alpine`, so the MDX stored in `/public/markdown/browse` is found and collected by the dynamic page.
2. The `<MDXRemote>` component fetches the contents of the MDX stored at `/public/markdown/browse/alpine`. It becomes children of the `<MDXRemote>` component.
3. The MDXRemote package additionally collects the frontmatter also at `/public/markdown/browse/alpine` and inserts wherever the `{source.metadata.[METADATA-FIELD]}` object is found.
4. Next.js builds this page. At this stage it transcompiles from TypeScript into JavaScript (specifically to the EsmaScript 2021 standard), and then HTML and JSON.
5. This is repeated for all MDX pages in `/public/markdown/browse`.

> When working in development mode, step 5 isn't applicable, as pages aren"t being prerendered and we are using just-in-time compilation.

## Folder Structure

- `/pages` stores Next.js pages (React components mapped to a URL)
- `/components` store React components shared across multiple pages
- `/providers` is a mix of the traditional `/lib` or `/util` folders, and important components (like `ApplicationProvider`)
- `/public` stores static assets cached by Next.js. This includes Database Content, brand assets and iconography, and miscellaneous SEO files. These are imported by pages or components
- `/cypress` stores Cypress integration tests
- `/.github` stores CI workflows and configuration files for GitHub

> The automatically generated `node_modules` and `.next` folders are excluded by our `.gitignore`.

## State Persistence

Beginning with `3.x.x`, we take advantage of the React "reconciliation" capability. This allows us to persist preferences between pages, allowing us to build application-wide banners, layout configuration, among other things, and achieve better performance.

Take a look:

```js
// A page, where Home is the default export
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ApplicationProvider>
      <Layout
        useBasicLayout={false}
        useAltBackground={false}
        showPreferences={false}
      >
        {page}
      </Layout>
    </ApplicationProvider>
  );
};
```

```js
// The _app.tsx
// page is inherited from the method as the {page} above
const getLayout = Component.getLayout ?? ((page) => page);
return getLayout(<Component {...pageProps} />);
```

We've already built some discreet but useful configuration using keyboard shortcuts. In the future, we could implement an application-wide "Preferences"-style menu in a modal inside `<Layout>`. This is a step towards building a truly "app-like" experience.

## Performance Optimisation with Dynamic Imports and Suspense

We use the Next.js dynamic import feature to cut down on the amount of code we ship to the user at once. Next.js' custom implementation of dynamic loading will be superseded by React Suspense upon the general availability of React 18.

On Suspense, we want to adopt Suspense in a lot of places. Suspense is built on SSR Streaming (using HTTP) and therefore the performance benefits would be significant. We've also made choices over component design so that we can wrap components in `<Suspense>`, and even upgrade these components to React Server Components upon the general availability of that feature.

## Error Fallbacks

Being able to handle errors and exceptions is critical for the reliability and integrity of the app.

> ULOSINO includes a few custom error codes. Read the ErrorCodes document for a list.

### React Error Boundaries

React Error Boundaries render when exceptions or other unhandled errors occur.

Error Boundaries can be used differently; they can generate generic errors or wrap around each component to allow other components to work correctly. We want to get the best of both approaches.

Wherever possible, we wrap "regions" of components in `<ErrorFallback>`. This displays a "Something went wrong" message and can therefore be reused across multiple pages. The best thing about wrapping "regions" is that errors can be "trapped" to that "region" only and the rest of the application will continue to work correctly.

However, defining "regions" is not always possible or practical. Therefore we include `<ErrorFallbackApplication>` on `<ApplicationProvider>`. If an error occurs outside a defined "region", React will render `<ErrorFallbackApplication>` as a last resort.

### Workbox Offline Fallback

The `next-pwa` Next.js plug-in, which ULOSINO uses for PWA features, automatically picks up the `_offline.tsx` file as a fallback for the Workbox service worker. This means that `_offline.tsx` will rewrite the requested page if the device is offline and the page isn't in the `LocalStorage` cache. This feature only works on production builds.

## Providers

Providers are library/utility files. Per the dictionary definition, a provider supplies (backend processes) or presents (the user with) functionality.

These are the primary providers:

### ApplicationProvider

This is the grand provider. It wraps around every page. `ApplicationProvider` provides `ChakraProvider`, keyboard shortcut handling, error handling, troubleshooting, and other functions (this is because multiple technical limitations attempting to use these functions in `.app_tsx`).

### OSPageProvider

`OSPageProvider.ts` provides functions for working with OS Pages. It collects files in `/public/content/browse/`, parses their metadata, and then sorts the files by name and date. This powers the OS List and Search, but not dynamic pages.

### MDXProvider

`MDXProvider.js` changes the generated Markdown elements to use Chakra UI components. This enables consistent styling and more predictable results.

### KeybindingProvider

`KeybindingProvider.ts` exports functions and hooks needed for managing keybindings and assigning them to the user"s keyboard.

### UIThemeProvider

`UIThemeProvider.ts` ("User Interface Theme Provider") is the global theming file. It's imported on `app.tsx` and `document.tsx`. It themes Chakra UI components and manages automatic color mode detection and switching.
