<template lang="html">
  <div :class="['alert', primary ? 'alert-primary' : '', secondary ? 'alert-secondary' : '', success ? 'alert-success' : '', warning ? 'alert-warning' : '', danger ? 'alert-danger' : '']">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },

    secondary: {
      type: Boolean,
      default: false,
    },

    success: {
      type: Boolean,
      default: false,
    },

    warning: {
      type: Boolean,
      default: false,
    },

    danger: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/alerts.css');
</style>
