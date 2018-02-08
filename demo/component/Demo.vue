<template>
  <div class="demo">
    <h3>{{ title }}</h3>
    <div ref="sourcecode" :id="'demo-' + title">
      <slot></slot>
    </div>
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
