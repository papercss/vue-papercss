<template>
  <div class="demo">
    <h3>{{ title }}</h3>
    <div :id="'demo-' + title">
      <slot></slot>
    </div>
    <p-pre v-if="this.code">{{ code }}</p-pre>
  </div>
</template>

<script>
  import {container, pre} from '../../src'

  export default {
    name: "demo",
    components: {
      pContainer: container,
      pPre: pre
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        code: ''
      }
    },
    mounted: function () {
      this.code = document.getElementById("demo-" + this.title).innerHTML
    }
  }
</script>

<style scoped lang="css">

</style>
