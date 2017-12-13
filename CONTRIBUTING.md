# Contributing

This project is open source and contributions are welcomed. It is also fairly beginner friendly, so don't be afraid to jump in if you've never contributed to a Git project before! Feel free to open an issue or contact us on [slack][slack] if you are new and need help with the process.

## Development Environment

 * [Git][git]
 * [NodeJS][nodejs]
 * NPM package manager ([NPM][nodejs] or [Yarn][yarn])
 
## Setting up the project

### Downloading the Source Code

 1. Fork the project to your github account.
 1. From terminal, navigate to where you want to store the project.
 2. Clone the forked project.

### Installing Dependencies

Before you begin to code, make sure that you have all of the projects decencies installed.

 1. From terminal, navigate to the project folder.
 2. Install NPM dependencies with your NPM package manager.
 
 * *Node*: `npm install`
 * *Yarn*: `yarn`
 
### Setting Upstream

 To keep your forked version of the project up to date with the main project, set the main project as the upstream.
 
 1. From terminal, navigate to the project folder.
 2. Add the main project as the upstream.
 
 * *SSH*: `git remote add upstream git@github.com:papercss/vuejs-papercss.git`
 * *HTTPS*: `git remote add upstream https://github.com/papercss/vuejs-papercss.git`

## Workflow

 1. From terminal, navigate to the project folder.
 2. Create a new branch, for example `git checkout -b feature-card`
 3. Make sure that the new branch is up to date with the `develop` branch of the main project. To update the branch first fetch the upstream with `git fetch upstream` and then merge `upstream/develop` into your new branch with `git merge upstream/develop`.
 4. Start the dev server (`yarn dev` or `npm run dev`)
 5. Implement your changes. If you add a new component or add a new feature to an existing component, it would help to add a demo for it.
 6. Make sure that your changes work and display as intended.
 7. Commit your changes, for example `git commit -m "Added cards component"`.
 8. Push changes to your forked project on GitHub, for example `git push origin feature-card`.
 9. Create a pull request from your `feature-card` branch into the `develop` branch of the main project on GitHub.
 10. Resolve any detected conflicts.
 11. Fix/discuss any requested changes from peers.
 12. SUCCESS!
 
[slack]: https://papercss.slack.com/messages/C8C6J8YTD
[git]: https://git-scm.com
[nodejs]: https://nodejs.org
[yarn]: https://yarnpkg.com
