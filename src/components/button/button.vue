<template lang="html">
  <div :class="{ 'paper-btn': true, 'btn-block': block, 'btn-small': small, 'btn-large': large, 'disabled': disabled }" :disabled="disabled">
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
	},
}
</script>

<style scoped lang="css">
.paper-btn, button, input[type=button] {
  align-self: center;
  background: 0 0;
  color: #41403e;
  outline: 0;
  border: solid 2px #41403e;
  border: 2px solid #41403e;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  font-size: 1rem;
  padding: .75rem .75rem;
  cursor: pointer;
  -webkit-box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  -moz-box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  transition: all .5s ease
}

.paper-btn.shadow-large, button.shadow-large, input[type=button].shadow-large {
  -webkit-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  -moz-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2)
}

.paper-btn.shadow-small, button.shadow-small, input[type=button].shadow-small {
  -webkit-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  -moz-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2)
}

.paper-btn.shadow-hover:hover, button.shadow-hover:hover, input[type=button].shadow-hover:hover {
  -webkit-box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3);
  -moz-box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3);
  box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3)
}

.paper-btn.btn-large, button.btn-large, input[type=button].btn-large {
  -webkit-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  -moz-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  font-size: 2rem;
  padding: 1rem 1rem
}

.paper-btn.btn-small, button.btn-small, input[type=button].btn-small {
  -webkit-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  -moz-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  font-size: .75rem;
  padding: .5rem
}

.paper-btn.btn-block, button.btn-block, input[type=button].btn-block {
  display: block;
  width: 100%
}

.paper-btn:hover:hover, button:hover:hover, input[type=button]:hover:hover {
  -webkit-box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3);
  -moz-box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3);
  box-shadow: 2px 8px 4px -6px rgba(0,0,0,.3)
}

.paper-btn.disabled, .paper-btn[disabled], button.disabled, button[disabled], input[type=button].disabled, input[type=button][disabled] {
  cursor: not-allowed;
  opacity: .5
}

a {
  text-decoration: none;
  background-image: linear-gradient(5deg,transparent 65%,#0071de 80%,transparent 90%),linear-gradient(165deg,transparent 5%,#0071de 15%,transparent 25%),linear-gradient(165deg,transparent 45%,#0071de 55%,transparent 65%),linear-gradient(15deg,transparent 25%,#0071de 35%,transparent 50%);
  background-repeat: repeat-x;
  background-size: 4px 3px;
  background-position: 0 90%
}

a:visited {
  text-decoration: none;
  color: #41403e
}
</style>
