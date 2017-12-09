<template lang="html">
  <div :class="['row', right ? 'flex-right': '', center ? 'flex-center' : '', edges ? 'flex-edges' : '', spaces ? 'flex-spaces' : '', top ? 'flex-top' : '', middle ? 'flex-middle' : '', bottom ? 'flex-bottom' : '']">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },

    center: {
      type: Boolean,
      default: false,
    },

    edges: {
      type: Boolean,
      default: false,
    },

    spaces: {
      type: Boolean,
      default: false,
    },

    top: {
      type: Boolean,
      default: false,
    },

    middle: {
      type: Boolean,
      default: false,
    },

    bottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/flexbox.css');
</style>
