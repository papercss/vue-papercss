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
      required: false,
    },

    lg: {
      type: String,
      default: null,
      required: false,
    },

    md: {
      type: String,
      default: null,
      required: false,
    },

    sm: {
      type: String,
      default: null,
      required: false,
    },

    fill: {
      type: Boolean,
      default: false,
      required: false,
    },

    bottom: {
      type: Boolean,
      default: false,
      required: false,
    },

    middle: {
      type: Boolean,
      default: false,
      required: false,
    },

    top: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  computed: {},
}
</script>
