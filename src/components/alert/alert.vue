<template>
  <div :class="{'alert': true, ['alert-' + color]: color }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    }
  }
}
</script>
