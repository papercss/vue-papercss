<template lang="html">
  <div :class="{ 'paper-btn': true, 'btn-block': block, 'btn-small': small, 'btn-large': large, 'disabled': disabled, 'btn-primary': primary, 'btn-secondary': secondary, 'btn-success': success, 'btn-warning': warning, 'btn-danger': danger }" :disabled="disabled">
    <slot />
  </div>
</template>

<script>
export default {
	props: {
		block: {
			type: Boolean,
			default: false,
		},

		small: {
			type: Boolean,
			default: false,
		},

    large: {
      type: Boolean,
      default: false,
    },

		disabled: {
			type: Boolean,
			default: false,
		},

    primary: {
		  type: Boolean,
      default: false
    },

    secondary: {
		  type: Boolean,
      default: false
    },

    success: {
		  type: Boolean,
      default: false
    },

    warning: {
		  type: Boolean,
      default: false
    },

    danger: {
		  type: Boolean,
      default: false
    }
	},
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/buttons.css');
</style>
