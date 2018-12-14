---
title: Quick-start
sidebarDepth: 2
---

# Quick-start

## With a module bundler

To get started, use `yarn` or `npm` to install the latest version of `vue-papercss`:

```bash
# with npm
npm i --save vue-papercss

# or with yarn
yarn add vue-papercss
```

The register the `VuePaperCSS` plugin in your app entry point (such as `src/main.js` for a basic `vue-cli` app):

```js
import Vue from 'vue';
import VuePaperCSS from 'vue-papercss';

// This will install VuePaperCSS plugin and make its component globally available
Vue.use(VuePaperCSS);
```

Then you need to import the CSS file into your app (as it is not automatically included with the plugin):

```js
// In your src/main.js or App.vue script tag
import 'papercss/dist/paper.css';

// Or importing in your App.vue style tag
@import url('~papercss/dist/paper.css')
```

## In the browser

If you don't use a module bundler, you can directly import `vue-papercss` in your HTML (make sure to import the script __after__ vue.js), thanks to `unpkg`:

```html
<!-- Add the styling to the <head> tag -->
<link type="text/css" rel="stylesheet" src="https://unpkg.com/papercss/dist/paper.min.css"/>

<!-- Add the vue-plugin script after your vue.js -->
<script src="https://unpkg.com/vue-papercss/dist/vue-papercss.min.js"></script>
```
