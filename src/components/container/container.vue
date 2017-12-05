<template lang="html">
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
@media screen and (max-width:992px) {
  .container {
    width: 85%
  }
}

@media screen and (max-width:480px) {
  .container {
    width: 90%
  }
}

.container {
  width: 100%;
  max-width: 960px;
  position: relative;
  margin: 0 auto
}

/* .container.fluid is not a core PaperCSS class */
.container.fluid {
  width: 100% !important;
  max-width: none !important;
}
</style>
