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
      required: true,
    },

    color: {
      type: String,
      value: '',
      required: false,
    },

    label: {
      type: (String | undefined),
      value: undefined,
      required: false,
    },

    striped: {
      type: Boolean,
      value: false,
      required: false,
    },
  },
}
</script>
