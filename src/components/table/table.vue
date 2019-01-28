<template>
  <table :class="{ 'table-alternating': alternating, 'table-hover': hover }">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'table',

  props: {
    alternating: {
      type: Boolean,
      default: false,
      required: false,
    },

    hover: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>
