<template>
  <div style="display: inline-block">
    <div v-if="position == 'top'" :popover-top="text" style="margin: 0; padding: 0">
      <slot></slot>
    </div>

    <div v-if="position == 'left'" :popover-left="text" style="margin: 0; padding: 0">
      <slot></slot>
    </div>

    <div v-if="position == 'right'" :popover-right="text" style="margin: 0; padding: 0">
      <slot></slot>
    </div>

    <div v-if="position == 'bottom'" :popover-bottom="text" style="margin: 0; padding: 0">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popover",
    props: {
      position: {
        type: String,
        default: 'top'
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>
