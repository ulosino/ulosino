# Create an OS Page

Operating system pages on ULOSINO use Markdown technologies, meaning that making changes and making new pages is a real breeze.

Create an OS Page on ULOSINO is an assistant tool which assists with the assembly of a compatible operating system page. This can be helpful if you want to create a new OS Page but you don't have access to an editor, or the time to setup a local development environment.

By the end of completing the guided experience, you'll have a fully-functional OS Page that is ready for commiting to our GitHub repository using the GitHub web-based interface.

## Open the Assistant

- On desktop, select Browse (or Advanced Search), then select Create an OS Page.
- On mobile, select Menu, then select Create.

First you will be presented with an overview of the assistant. Select Get Started to begin.

## Creating an OS Page

### Description

Now, you'll be asked to enter a description of the operating system. This is a paragraph of text that describes the OS at hand. Refer to CONTRIBUTING.md for a comprehensive assortment of guidelines for writing sound descriptions.

### Embedded Metadata

Next, you will be asked to edit the embedded metadata for the OS. This powers information tables, search, sorting, and other features.

It is written using YAML; basically a key-string pair. `#` is used to denote a comment, which in this context, guide you through editing the metadata.

Luckily for you, the embedded metadata keys are automatically generated for you. You just need to supply the values.

Some keys are more specific than others. It is okay to leave most them blank if it isn't applicable or not known.

> **Note:** The name, date, summary, and category keys are required for technical reasons.

At the bottom of the metadata, you'll see ULOSINO Tempo metadata options. If the project has a specific donation page and works with external donation platforms (see Tempo.md in the documentation), you can uncomment the keys and enable ULOSINO Tempo features.

> **Warning:** Do not leave ULOSINO Tempo metadata keys blank, or remove them. If Tempo isn't applicable, these fields need to be commented out.

## Copying the OS Page

Finally, you'll be asked to copy the page to the clipboard. This button will correctly assemble and format the OS Page so that it is compatible with ULOSINO.

If you want to make changes, select Back to Editing. You're changes are maintained as long as you are within the Create an OS Page page.

The next step is to commit the OS Page to our GitHub repository.

- The preferred method is to use the GitHub web-based interface. This is explained below.
- Or, if you prefer, you can also do this by pasting the OS Page into your own editor and then committing it to our GitHub repository.

## Pasting the OS Page into GitHub and Committing Your New Page

Once you have copied the page, select Continue on GitHub. This will take you to the GitHub web-based interface.

> **Note:** You cannot make changes once you open GitHub. To be able to make further edits, you'll need open GitHub in a new tab and switch between ULOSINO and GitHub.

From here:

1. Locate the Name your File... box and enter the full file name at the top of the page (for example, `alpine.mdx`).
2. Paste the OS Page into the editor box.
3. Name your commit.
4. Select Create a New Branch for This Commit.
5. Name your branch (for example, `new-alpine-os-page`).
6. Select Commit.

> **Note**: Ignore GitHub's markdown preview here.
