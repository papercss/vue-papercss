<template>
  <span :class="{ 'badge': true, [color]: color }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'PBadge',

	props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
	},
}
</script>
