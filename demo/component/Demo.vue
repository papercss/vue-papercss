<template>
  <div class="demo">
    <h3>{{ title }}</h3>
    <div ref="sourcecode" :id="'demo-' + title">
      <slot></slot>
    </div>
    <p data-height="298" data-theme-id="0" data-slug-hash="aVePdm" data-default-tab="css,result" data-user="cbass1205" data-embed-version="2" data-pen-title="aVePdm" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/cbass1205/pen/aVePdm/">aVePdm</a> by Caleb Bassham (<a href="https://codepen.io/cbass1205">@cbass1205</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  </div>
</template>

<script>
  import { container } from '../../src'

  export default {
    name: "demo",
    components: {
      pContainer: container
    },
    props: {
      title: {
        type: String,
        default: '',
      }
    },
    data: function () {
      return {
        code: ''
      }
    }
  }
</script>

<style scoped lang="css">

</style>
