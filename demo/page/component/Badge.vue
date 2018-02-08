<template lang="html">
  <div>
    <Demo title="Simple Badge">
      <h4>Header <p-badge>5</p-badge></h4>
    </Demo>

    <Demo title="Colored Badges">
      <h4>Primary <p-badge color="primary">5</p-badge></h4>
      <h4>Secondary <p-badge color="secondary">5</p-badge></h4>
      <h4>Success <p-badge color="success">5</p-badge></h4>
      <h4>Warning <p-badge color="warning">5</p-badge></h4>
      <h4>Danger <p-badge color="danger">5</p-badge></h4>
    </Demo>
  </div>
</template>

<script>
  import Demo from '../../component/Demo'
  import { badge } from '../../../src'

  export default {
    name: "badge",
    components: {
      Demo,
      pBadge: badge
    }
  }
</script>

<style scoped>

</style>
