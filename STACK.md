# Stack details

This is a reference outline of the ULOSINO stack.

## Project structure

The file structure of the ULOSINO project separates content and code.

Distribution pages are stored in 'distribution store (`dstore`)' which is currently located in the `/public/content/browse` folder. Other text-heavy files including the privacy policy are here too (these are at the top level `/public/content` folder). Collectively, this 'Database Content' is imported/processed by `DBProvider` to create pages that present the content to the user.

The actual code, including pages, components, and providers, is stored in `/src`. Inside `/src` is:

- `/src/pages`, which stores React components mapped to a URL (Next.js pages);
- `src/components`, which stores React components shared across multiple pages, and;
- Providers, which are at the top level of `/src`.

## Page types

The ULOSINO stack has two page types.

The first are standard Next.js pages. These are used when the full capacity of Next.js and/or React is needed.

For all other pages, a Next.js dynamic page is used. These pages, called `[slug].tsx`, are (practically) template pages that are created multiple times based on text and metadata imported from Database Content. This enables consistent presentation and the required scalability for distribution pages and miscellaneous text-based pages.

## Providers

Providers are library/utility files. Per the dictionary definition, a provider supplies (backend processes) or presents (the user with) functionality.

These are the primary providers:

### DBProvider

`DBProvider.ts` ('Database Provider') provides functions for working with Database Content. It collects files in `/public/content/browse/`, parses their metadata, and then sorts the files by name or date. This powers Search and the Browse page, but not dynamic pages.

### MDXProvider

`MDXProvider.js` provides Chakra UI components to Markdown elements.

### UIProvider

`UIProvider.tsx` ('User Interface Provider') wraps around pages and provides the ULOSINO user interface (navigation bar, etc). It isn't applied to `app.tsx` so that pages without the layout (e.g. authentication page) can be built if needed in the future. Furthermore, the core elements of the user interface are futher encapsulated into their own components (e.g. `StartNavigation`).

### UIThemeProvider

`UIThemeProvider.ts` ('User Interface Theme Provider') is the global theming file. It's imported on `app.tsx` and `document.tsx`.

## Other details

### Testing

ULOSINO uses Cypress for integration testing. It forms a part of our CI approach, with our tests running automatically through GitHub Actions. Currently only Database Content, search, and display conformity is tested. Components with ID attributes starting with 'testing-' means that the component is a test subject.

### Code quality

The team at ULOSINO aims to use good code.

- The Prettier formatter is applied to all pages, without configuration;
- React Strict Mode is enabled universally;
- TypeScript is used wherever possible, and;
- TypeScript compiles to ES2021.

We would encourage you to apply these options to your projects.

ULOSINO uses the MIT license. This allows you to copy or study the ULOSINO stack, even for commercial purposes.

---

Last revised 18th December, 2021.
