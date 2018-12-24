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
      required: false,
    },
  },
}
</script>
