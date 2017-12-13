<template lang="html">
  <div>
    <Demo title="Simple badge">
      <h4>Header <p-badge>5</p-badge></h4>
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
