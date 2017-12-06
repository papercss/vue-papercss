<template lang="html">
  <div :class="['alert', primary ? 'alert-primary' : '', secondary ? 'alert-secondary' : '', success ? 'alert-success' : '', warning ? 'alert-warning' : '', danger ? 'alert-danger' : '']">
    <slot />
  </div>
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
.alert {
  border: 2px solid #41403e;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%
}

.alert-primary {
  border-color: #41403e;
  color: #41403e;
  background-color: #c1c0bd
}

.alert-secondary {
  border-color: #0071de;
  color: #0071de;
  background-color: #deefff
}

.alert-success {
  border-color: #86a361;
  color: #86a361;
  background-color: #d0dbc2
}

.alert-warning {
  border-color: #ddcd45;
  color: #ddcd45;
  background-color: #f5f0c6
}

.alert-danger {
  border-color: #a7342d;
  color: #a7342d;
  background-color: #f0cbc9
}

.alert-muted {
  border-color: #868e96;
  color: #868e96;
  background-color: #e6e7e9
}
</style>
