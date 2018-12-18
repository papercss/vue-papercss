# Contributing

This project is open source and contributions are welcomed.

## Development environment

* [Git][git]
* [Node.js][nodejs]
* [Yarn][yarn]

## Setting up the project

### Installing dependencies

Before you begin, make sure that you have all of the projects (dev-)dependencies installed.

1. From terminal, navigate to the project folder.
2. Install dependencies with `yarn` in both the root project folder and in `/demo/` folder.

## Adding a new component

1. Start the demo environment with `yarn demo:dev`. The demo environment is made for testing purposes and is not showcased on the repo, it's like a sandbox for creating/experimenting with `vue-papercss`.
2. Add the new component inside `/src/components/`. Make sure to export it correctly as it will automatically installs itself as a global Vue component.
3. Add the docs for the new component, see below on how to contribute on the docs.

## Working on the documentation

The documentation is powered by (`vuepress`)[vuepress], make sure to understand how it works before starting to work on the docs:

- All components related documentation is under `/docs/components/`.
- Other pages such as `quick-start` and `utilities` are in their own folders.
- `/docs/.vuepress/` contains vuepress configuration and global components for the Vue instance of the docs.

You can start the docs dev-server with `docs:dev`.

## Editing vue-papercss build scripts

`vue-papercss` build the content of `/src` with [rollup](rollup), rollup configuration is splitted into 4 files under `/build`:

- `rollup.config.base.js`: shared rollup config.
- `rollup.config.browser.js`: creates a `.min.js` ready for browser usage without module-bundler.
- `rollup.config.es.js`: creates a `.esm.js` for module-bundlers that support ECMAScript Modules.
- `rollup.config.umd.js`: creates a `.umd.js` for module-bundlers that doesn't support ECMAScript Modules.

When working with the build scripts, you can use 2 commands:

- `yarn dev` which will watch `/src` and compile it using `rollup.config.es.js` config.
- `yarn build` which will build all variants based on `/src`.

[git]: https://git-scm.com
[nodejs]: https://nodejs.org
[yarn]: https://yarnpkg.com
[vuepress]: https://vuepress.vuejs.org
[rollup]: https://rollupjs.org/guide/en
