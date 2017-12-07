<template lang="html">
  <span :class="['badge', secondary ? 'secondary' : '', success ? 'success' : '', warning ? 'warning' : '', danger ? 'danger' : '']">
    <slot />
  </span>
</template>

<script>
export default {
	props: {
    primary: {
      type: Boolean,
      default: false,
    },

    secondary: {
      type: Boolean,
      default: false,
    },

    success: {
      type: Boolean,
      default: false,
    },

    warning: {
      type: Boolean,
      default: false,
    },

    danger: {
      type: Boolean,
      default: false,
    },
	},
}
</script>

<style scoped lang="css">
.badge {
  border: 2px solid #41403e;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #868e96;
  color: #fff;
  border-color: transparent
}

.badge.primary {
  background-color: #41403e
}

.badge.secondary {
  background-color: #0071de
}

.badge.success {
  background-color: #86a361
}

.badge.warning {
  background-color: #ddcd45
}

.badge.danger {
  background-color: #a7342d
}

.badge.muted {
  background-color: #868e96
}
</style>
