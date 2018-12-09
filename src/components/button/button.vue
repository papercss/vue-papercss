<template>
  <div :class="{ 'paper-btn': true, 'btn-block': block, 'btn-small': small, 'btn-large': large, 'disabled': disabled, ['btn-' + color]: color }" :disabled="disabled">
		<a :href="href"><slot /></a>
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

    color: {
		  type: String,
      default: ''
    },

		href:{
			type:String,
			default:''
		}
	}
}
</script>

<style scoped lang="css">
@import url('~papercss/dist/components/buttons.css');
</style>
