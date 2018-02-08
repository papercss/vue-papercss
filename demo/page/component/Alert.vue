<template>
  <div>
    <h2>Alerts</h2>

    <Demo title="Simple Alert">
      <p-alert>A simple alert.</p-alert>
    </Demo>

    <Demo title="Colored Alerts">
      <p-alert color="primary">Primary</p-alert>
      <p-alert color="secondary">secondary</p-alert>
      <p-alert color="success">Success</p-alert>
      <p-alert color="warning">Warning</p-alert>
      <p-alert color="danger">Danger</p-alert>
    </Demo>
  </div>
</template>

<script>
  import Demo from '../../component/Demo'
  import { alert } from '../../../src'

  export default {
    name: "alert",
    components: {
      Demo,
      pAlert: alert
    }
  }
</script>

<style scoped>

</style>
