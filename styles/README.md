# Vale

[Vale](https://github.com/errata-ai/vale) is an open source prose linter that checks the content of docs against style guide rules. The goal of a prose linter is to automate style guide checks in docs-as-code environments, so that style issues are detected before deploy or while authoring docs in the code editor.

To help adhere to the documentation style guidelines, and improve the content added to documentation, install Vale and integrate with your code editor.

You can also use Vale with the [command line](https://vale.sh/docs/vale-cli/structure/#quick-start), though using the linter in your editor is more convenient than having to run the commands from the command line.

## Get Started

1. Use a package manager to install Vale. See [Installation](https://vale.sh/docs/vale-cli/installation/).
1. (Optional) Install the [Vale](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) extension (errata-ai.vale-server) for Visual Studio Code.
1. (Optional) To configure Vale in Visual Studio Code, specify the path to the project directory with the `.vale.ini` file for `vale.valeCLI.config` in the Extension Settings. For example, <span>/Users/yourname/Documents/GitHub/sauce-docs/.vale.ini.</span>.
1. Run `vale [filename.md]` from the root folder of the repo, or save/edit a file using Visual Studio Code.

## Folder Structure

The following file and folder are stored in the root directory of the [sauce-docs](https://github.com/saucelabs/sauce-docs) repo. 

- `.vale.ini` contains the Vale configuration settings. See [Configuration](https://vale.sh/docs/topics/config/).
- `styles/sauce` contains the Sauce Labs style guide rules for Vale. See [Styles](https://vale.sh/docs/topics/styles/).

## Vale Result Types

Vale returns three types of results:

- **Error** - For branding guidelines, trademark guidelines, and anything that causes content on the documentation site to render incorrectly.
- **Warning** - For general style guide rules, tenets, and best practices.
- **Suggestion** - For technical writing style preferences that may require refactoring of documentation or updates to an exceptions list.