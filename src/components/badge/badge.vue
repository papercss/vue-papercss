<template lang="html">
  <span :class="['badge', secondary ? 'secondary' : '', success ? 'success' : '', warning ? 'warning' : '', danger ? 'danger' : '']">
    <slot />
  </span>
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
@import url('../../../node_modules/papercss/dist/components/badges.css');
</style>
