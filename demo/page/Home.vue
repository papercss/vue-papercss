<template>
  <div id="demo-content" class="demo">
    <div class="text-center">
      <h3>the less formal CSS framework, now available for vuejs</h3>
    </div>

    <div class="text-center">
      <p-button href="#/download">Download</p-button>
      <p-button href="#/flexbox">Docs</p-button>
      <p-button href="https://github.com/vuejs/vuejs-papercss" target="_blank">Github</p-button>
    </div>

    <h3>Core principes:</h3>

    <ul>
      <li><a href="#/flexbox">Flexbox/grid system</a></li>
    </ul>

    <h3>Components:</h3>

    <ul>
      <li><a href="#/component/alert">Alerts</a></li>
      <li><a href="#/component/article">Article</a></li>
      <li><a href="#/component/badge">Badge</a></li>
      <li><a href="#/component/button">Buttons</a></li>
      <li><a href="#/component/card">Cards</a></li>
      <li><a href="#/component/popover">Popovers/tooltips</a></li>
      <li><a href="#/component/table">Tables</a></li>
    </ul>
  </div>
</template>

<script>
  import { container, row, col, button, card, badge, alert, article } from '../../src';

  export default {
    name: "home",
    components: {
      pContainer: container,
      pRow: row,
      pCol: col,
      pButton: button,
      pCard: card,
      pBadge: badge,
      pAlert: alert,
      pArticle: article,
    }
  }
</script>

<style scoped>

</style>
