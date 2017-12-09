<template>
  <p-container id="download">
    <h2>Download</h2>
    <h4>NPM</h4>
    <p>PaperCSS For VueJS is not yet available on NPM.
      <!--Install with <code>npm install vuejs-pappercss --save</code>--></p>
    <h4>Yarn</h4>
    <p>PaperCSS For VueJs is not yet available on NPM so it cannot be installed yet with Yarn.
      <!--Install with <code>yarn add vuejs-pappercss</code>--></p>
  </p-container>
</template>

<script>
  import {container} from '../../src'

  export default {
    name: "download",
    components: {
      pContainer: container
    }
  }
</script>

<style scoped>

</style>
