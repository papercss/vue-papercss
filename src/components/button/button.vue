<template>
  <div :class="{
    'paper-btn': true,
    'btn-block': block,
    'btn-small': small,
    'btn-large': large,
    'disabled': disabled,
    'btn-primary': !color,
    ['btn-' + color]: color,
  }" :disabled="disabled">
    <a v-if="href" :href="href">
      <slot />
    </a>

    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
	props: {
		block: {
			type: Boolean,
      default: false,
      required: false,
		},

		small: {
			type: Boolean,
      default: false,
      required: false,
		},

    large: {
      type: Boolean,
      default: false,
      required: false,
    },

		disabled: {
			type: Boolean,
      default: false,
      required: false,
		},

    color: {
		  type: String,
      default: '',
      required: false,
    },

		href: {
			type: String,
      default: '',
      required: false,
		}
	}
}
</script>

<style scoped>
.paper-btn a {
  background-image: none;
}
</style>
