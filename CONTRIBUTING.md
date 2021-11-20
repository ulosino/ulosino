# Contribute to the ULOSINO project

Firstly, a big thanks to you for setting aside your time to contribute! Your contributions will be warmly welcomed.

As a community project, the ULOSINO project thrives and pulses with the work of the community. Read on for comprehensive details on how to contribute to both Database Content and the Source Code.

With ULOSINO, getting a Unix-like OS onto the global stage is very easy. To contribute, you will need a GitHub account.

Remember that all contributions are bound by the Contribution Code of Conduct, available at CODE_OF_CONDUCT.md.

## Editing a single file

Often you'll want to update a single distribution page or Guide. Luckily this is easy - you don't even have to leave GitHub!

First, go into the distribution file store, available in `/public/content/browse/distributions`. Then find the file you want and open it.

When you open a file, it'll show something like this:

```
---
# Required metadata
title: "Blueberry"
summary: ""
date: ""
version: ""
status: ""

# Other metadata
platform: ""
descends: ""
desktop: ""
shell: ""
packagemgr: ""
startup: ""
size: ""
browser: ""
licence: ""
origin: ""
website: ""
repository: ""
---

Blueberry is a ...
```

We want to edit this file.

- Select the pencil button to open the edit view;
- Make your edits, and;
- Then go to the bottom of the page and select the green 'Commit Changes' button. That's it.

> **Note:** Empty metadata categories in the 'other' section will be hidden. View the demo page (code above) to see this in action.

## Larger contributions

If you want to contribute to the Source Code of ULOSINO, or make mutiple changes to Database Content, you'll need to make a repository fork so that you can work with the stack on your computer.

> **Tip:** If you're creating a new distribution page, it is recommended to duplicate `demo.mdx`. This ensures you have the latest metadata available.

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local system.

2. Open the terminal and create your new branch:

   ```
   git checkout -b BRANCH_NAME
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start developing and watch for code changes:

   ```
   npm run dev
   ```

5. Finalise by compiling a production build:
   ```
   npm run build
   npm run start
   npx cypress run    # Separate terminal window
   ```
6. If the build passes, you can proceed to make create a pull request for your fork!

Note these guidelines when making pull requests:

- Make your commit comment as descriptive as possible. Include as much information as you can. Explain anything that the file differentials won’t make apparent.
- Use your comment to document your pull request. Explain your contribution and link to the relevant issue (if applicable).
- Make sure the relevant labels are used. In most cases this means applying a contribution 'area' (with 'Source', 'Database Content', or 'Backend') and a 'type' (like 'Bug').
- Make sure the target of your pull request is the relevant branch. Most PRs should pull to the `main` branch.

## Issues and bugs

We recommend using GitHub issues to report bugs and discuss features.

> **Tip:** Before creating an issue, be sure to search and check if it already exists. If there is already an issue, give it a like!

If you do need to create your own issue to report a bug, be sure to include the following:

- Your environment (operating system, system details)
- Steps to reproduce
- Message(s) or error(s) you get in the console, if you do. Include a screenshot or full copy of this output.

For all issues, remember to use labels and try to be as descriptive as possible (even what you might dismiss).

---

Last revised 18th November, 2021.
