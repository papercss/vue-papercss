<template lang="html">
  <div :class="{'alert': true, ['alert-' + color]: color }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/alerts.css');
</style>
