<template>
  <div class="progress">
    <div class="bar" :class="{
      'success': color === 'success',
      'warning': color === 'warning',
      'danger': color === 'danger',
      'muted': color === 'muted',
      'striped': striped,
    }" :style="{ 'width': width + '%' }">
      <span v-if="label">{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      value: 0,
    },

    color: {
      type: String,
      value: '',
    },

    label: {
      type: (String | undefined),
      value: undefined,
    },

    striped: {
      type: Boolean,
      value: false,
    },
  },
}
</script>
