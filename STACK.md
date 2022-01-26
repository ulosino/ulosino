# Stack reference

This is a reference to ULOSINO features, and an outline of the ULOSINO stack and architecture.

Starting with ULOSINO `2.x.x`, most of this also applies to ULOSINO Guides and ULOSINO Matches.

## Page types

The ULOSINO stack has two page types.

The first are standard Next.js pages. These are used when the full capacity of Next.js and/or React is needed.

For all other pages, a Next.js dynamic page is used. These pages, named `[slug].tsx`, are (practically) template pages that are created multiple times based on text and metadata imported from Database Content. Metadata fields and MDX content populate the page and the metadata also appear in SEO tags. This enables consistent presentation and the required scalability for OS pages and miscellaneous text-based pages (controlled on different folders).

## Project structure and content flow

The file structure of the ULOSINO project separates content and code.

Operating system pages are stored in 'operating system page store (`OSPageStore`)' which is currently located in the `/public/content/browse` folder. The OS Pages are imported and processed by `OSPageProvider` to sort the pages, and handles metadata (frontmatter) fields - this includes the name - to enable search and the OS 'cards'. Other text-heavy files, like the Privacy Notice, are stored here too (these are at the top level `/public/content` folder). Collectively, we refer to this as 'Database Content'.

> For ULOSINO Guides, the above becomes `GuidesStore`, `public/content/guides`, and `GuidesProvider` respectively.

Let's follow the journey of our demo page:

1. Next.js checks if something can be found at the `/browse` folder using the path defined in our dynamic page (`/browse/[slug].tsx`). The demo is stored at `public/content/browse/demo`, so the MDX stored in `public/content/browse` is found and collected by the dynamic page.
2. The `<MDXRemote>` component fetches the contents of the MDX stored at `/public/content/browse/demo`. It becomes children of the `<MDXRemote>` component.
3. The `gray-matter` package collects the frontmatter also at `public/content/browse/demo` and inserts wherever the `{metadata.[METADATA-FIELD]}` object is found.
4. Next.js builds this page. At this stage it transcompiles from TypeScript into JavaScript (specifically the EsmaScript 2021 standard).
5. This is repeated for all MDX pages in `/public/content/browse`.

> When working in development mode, step 5 isn't applicable, as the above happens on-request.

### Folder structure

For the frontend and user presentation:

- `/pages`, which stores Next.js pages (React components mapped to a URL), and
- `/components`, which stores React components shared across multiple pages.

Hybrid:

- `/providers`, which is a mix of the traditional `lib` or `util` folders, and important components (like `UIProvider`).

For the backend:

- `/public` which stores static assets cached by Next.js. This includes Database Content, brand assets and iconography, and miscellaneous SEO files. These are imported by pages or components, and;
- `/cypress`, which stores Cypress integration tests.

Middleware using Next.js is stored at `/pages`. Configuration files are at the root of the project (except GitHub files - they're in `/github`.)

## Providers

Providers are library/utility files. Per the dictionary definition, a provider supplies (backend processes) or presents (the user with) functionality.

These are the primary providers:

### OSPageProvider

`OSPageProvider.ts` provides functions for working with OS Pages. It collects files in `/public/content/browse/`, parses their metadata, and then sorts the files by name and date. This powers Search and the Browse page, but not dynamic pages.

> This becomes `GuidesProvider` on ULOSINO Guides.

### MDXProvider

`MDXProvider.js` changes the generated Markdown elements to use Chakra UI components. This enables consistent styling and more predictable results.

### UIProvider

`UIProvider.tsx` ('User Interface Provider') wraps around pages and provides the ULOSINO user interface (navigation bar, etc). It isn't applied to `app.tsx` so that pages without the layout (e.g. authentication page) can be built if needed in the future. Furthermore, the core elements of the user interface are futher encapsulated into their own components (e.g. `StartNavigation`).

> ULOSINO Guides and ULOSINO Matches don't use `UIProvider`.

### UIThemeProvider

`UIThemeProvider.ts` ('User Interface Theme Provider') is the global theming file. It's imported on `app.tsx` and `document.tsx`. It themes Chakra UI components and manages automatic color mode detection and switching.

### UtterancesProvider

`UtterancesProvider` provides comments to OS Pages, using the Utterances utility and GitHub issues. It's imported on `browse/[slug].tsx`.

> ULOSINO Matches doesn't include `UtterancesProvider` as it doesn't use commenting and discussion features.

## Metadata definitions

> This only applies to ULOSINO.

`title`, `summary`, `date`, `platform` and `version` are required for sorting. All other metadata fields will be hidden if they have no value. Updated with version 1.4.0.

| Metadata           | Meaning                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `title`            | Name of the OS                                                                                                          |
| `summary`          | Short description of the OS (2-7 words)                                                                                 |
| `date`             | Date of writing. Year-Month-Date format                                                                                 |
| `version`          | Version of the OS when written (or written on)                                                                          |
| `category`         | Category of the OS. See below for more information                                                                      |
| `platform`         | Popular available platforms, separated by commas                                                                        |
| `descends`         | The OS that the OS of writing is based on (e.g. Xubuntu/Ubuntu)                                                         |
| `desktop`          | Name of the preinstalled GUI. To be left blank if none is present, or if the OS boots its CLI by default                |
| `shell`            | Name of the default shell (e.g. `bash`)                                                                                 |
| `packagemgr`       | Name of the default package manager. Excludes cross-OS application delivery platforms (e.g. `flatpak`, `snap`)          |
| `startup`          | Name of the default startup manager (e.g. `systemd`)                                                                    |
| `size`             | Approximated size of the OS                                                                                             |
| `browser`          | Name of the preinstalled web browser (e.g. Firefox)                                                                     |
| `productivity`     | Name of the preinstalled office software suite (e.g. LibreOffice)                                                       |
| `licence`          | Name of the licence used by the OS (e.g. MIT)                                                                           |
| `origin`           | Name of the region of origin (e.g. France, Australia, Hong Kong). Excludes states within a federation (e.g. California) |
| `website`          | Full URL to the OS's website                                                                                            |
| `repository`       | Full URL to the OS's public source repository                                                                           |
| `donate`           | Full URL to a funding section of the OS's website. Introduced with Tempo                                                |
| `donateGithub`     | Full URL to the OS's GitHub Sponsor page. Introduced with Tempo                                                         |
| `donateLibera`     | Full URL to the OS's LiberaPay page. Introduced with Tempo                                                              |
| `donateCollective` | Full URL to the OS's Open Collective page. Introduced with Tempo                                                        |

> ULOSINO Guides replaces `summary` with `description`.

## Category definitions

> This only applies to ULOSINO.

| Category   | Meaning                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------- |
| Desktop    | Intended for general computing and uses a GUI by default                                          |
| Mobile     | Intended for general computing on mobile devices                                                  |
| Advanced   | Requires learning to use — intended for power-users and developers                                |
| Utility    | Intended for highly specialised use cases, usually preinstalled with utility software             |
| Enterprise | Intended for large-scale corporate use — often available with paid support                        |
| Research   | Intended to showcase different approaches to computing concepts — may be unstable or discontinued |

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

Last revised 26th January, 2022 (ULOSINO `2.0.0`).
