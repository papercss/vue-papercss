<template>
  <span :class="{ 'badge': true, [color]: color }">
    <slot />
  </span>
</template>

<script>
export default {
	props: {
    color: {
      type: String,
      default: ''
    }
	}
}
</script>

<style scoped lang="css">
@import url('~papercss/dist/components/badges.css');
</style>
