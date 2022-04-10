# Markdown Metadata Definitions

All ULOSINO markdown files include frontmatter. In a .mdx file, that looks like this:

```
---
field: "value"

# Other fields...
---

Hello world...

```

The metadata fields that ULOSINO recognises are described below:

> `name`, `summary`, `date`, `platform` and `version` are required for sorting. All other metadata fields will be hidden if they have no value.

> `donate`, `donateGithub`, `donateLiberapay`, and `donateOpenCollective` must be included in the file. If donation features aren't used for that page, the field needs to be commented out, not just left out.

| Metadata               | Meaning                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `name`                 | Name of the OS                                                                                                          |
| `summary`              | Short description of the OS (2-7 words)                                                                                 |
| `date`                 | Date of writing. Year-Month-Date format                                                                                 |
| `version`              | Version of the OS when written (or written on)                                                                          |
| `category`             | Category of the OS. See below for more information                                                                      |
| `platform`             | Popular available platforms, separated by commas                                                                        |
| `descends`             | The OS that the OS of writing is based on (e.g. Xubuntu/Ubuntu)                                                         |
| `desktop`              | Name of the preinstalled GUI. To be left blank if none is present, or if the OS boots its CLI by default                |
| `shell`                | Name of the default shell (e.g. `bash`)                                                                                 |
| `packagemgr`           | Name of the default package manager. Excludes cross-OS application delivery platforms (e.g. `flatpak`, `snap`)          |
| `startup`              | Name of the default startup manager (e.g. `systemd`)                                                                    |
| `size`                 | Approximated size of the OS                                                                                             |
| `browser`              | Name of the preinstalled web browser (e.g. Firefox)                                                                     |
| `license`              | Name of the licence used by the OS (e.g. MIT)                                                                           |
| `origin`               | Name of the region of origin (e.g. France, Australia, Hong Kong). Excludes states within a federation (e.g. California) |
| `website`              | Full URL to the OS's website                                                                                            |
| `repository`           | Full URL to the OS's public source repository                                                                           |
| `donate`               | Full URL to a funding section of the OS's website. Introduced with Tempo                                                |
| `donateGithub`         | Full URL to the OS's GitHub Sponsor page. Introduced with Tempo                                                         |
| `donateLiberapay`      | Full URL to the OS's LiberaPay page. Introduced with Tempo                                                              |
| `donateOpenCollective` | Full URL to the OS's Open Collective page. Introduced with Tempo                                                        |

---

Last revised 14th March, 2022 (ULOSINO `3.0.0`).
