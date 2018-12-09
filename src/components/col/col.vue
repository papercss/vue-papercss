<template>
  <div :class="[
    'col',
    col ? 'col-' + col : '',
    lg ? 'lg-' + lg : '',
    md ? 'md-' + md : '',
    sm ? 'sm-' + sm : '',
    fill ? 'col-fill' : '',
    bottom ? 'align-bottom' : '',
    middle ? 'align-middle' : '',
    top ? 'align-top' : '',
  ]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: String,
      default: null,
    },

    lg: {
      type: String,
      default: null,
    },

    md: {
      type: String,
      default: null,
    },

    sm: {
      type: String,
      default: null,
    },

    fill: {
      type: Boolean,
      default: false,
    },

    bottom: {
      type: Boolean,
      default: false,
    },

    middle: {
      type: Boolean,
      default: false,
    },

    top: {
      type: Boolean,
      default: false,
    },
  },

  computed: {},
}
</script>

<style scoped lang="css">
@import url('~papercss/dist/components/flexbox.css');
</style>
