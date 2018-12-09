<template>
  <div :class="{ 'container': true, 'fluid': fluid }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/container.css');

/* .container.fluid is not a core PaperCSS class */
.container.fluid {
  width: 100% !important;
  max-width: none !important;
}
</style>
