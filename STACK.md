# Stack details

This is a reference outline of the ULOSINO stack.

## Project structure

The file structure of the ULOSINO project separates content and code.

Distribution pages and Guides is stored in the `/public/content/browse` folder. It also holds text-heavy files that don't need access to the full React model, like the privacy policy (these are at the top level `/public/content` folder). Collectively, this 'Database Content' is imported/processed by `DBProvider` and pages to present the content to the user.

The actual code, including pages, components, and providers, is stored in `/src`. Inside `/src` is:

- `/src/pages`, which stores Next.js pages;
- `/src/data`, which stores React components shared across multiple pages but need to be composed (e.g. version strings);
- `src/components`, which stores general React components shared across multiple pages, and;
- Providers, which are at the top level of `/src`.

## Page types

The ULOSINO stack has two page types.

The first are standard Next.js pages. These are used when the full capacity of Next.js and/or React is needed.

For all other pages, a Next.js dynamic page is used. These pages, called `[slug].tsx`, are (practically) template pages that are created multiple times based on text and metadata imported from Database Content. This enables consistent presentation and the required scalability for distribution pages, Guides, and miscellaneous text-based pages.

## Providers

Providers are library/utility files. Per the dictionary definition, a provider supplies (backend processes) or presents (the user with) functionality.

These are the primary providers:

### DBProvider

`DBProvider.ts` ('Database Provider') provides functions for working with Database Content. It collects files in `/public/content/browse/`, parses their metadata, and then sorts the files by name or date. This powers Search and the Browse page, but not dynamic pages.

### MDXProvider

`MDXProvider.js` provides Chakra UI components to Markdown elements.

### UIProvider

`UIProvider.tsx` ('User Interface Provider') wraps around pages and provides the ULOSINO user interface (navigation bar, etc). It isn't applied to `app.tsx` so that pages without the layout (e.g. sign-in page) can be built if needed in the future.

### UIThemeProvider

`UIThemeProvider.ts` ('User Interface Theme Provider') is the global theming file. It's imported on `app.tsx` and `document.tsx`.

## Other details

### Testing

ULOSINO uses Cypress for integration testing. Currently only Database Content and display conformity is tested. Components with ID attributes starting with 'testing-' means that the component is a test subject.

### Code quality

The team at ULOSINO aims to build using good code.

- The Prettier formatter is applied to all pages, without configuration;
- React Strict Mode is enabled universally;
- TypeScript is used wherever possible, and;
- TypeScript compiles to ES2021.

We encourage you to apply these options to your projects.

ULOSINO uses the MIT license. This allows you to copy or study the ULOSINO stack, even for commercial purposes.

---

Last revised 7th November, 2021.
