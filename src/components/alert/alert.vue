<template>
  <div :class="{'alert': true, ['alert-' + color]: color }">
    <slot />

    <span v-if="dismissible" class="btn-close" @click="dismiss()">X</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayed: true,
    };
  },

  props: {
    color: {
      type: String,
      default: '',
    },

    dismissible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    dismiss() {
      this.$el.className += ' closed';
      this.displayed = false;
    },

    show() {
      if (this.$el.classList.contains('closed')) {
        this.$el.classList.remove('closed');
        this.displayed = true;
      }
    }
  },
}
</script>

<style scoped>
.alert {
  transition: all .25s ease-out;
}

.alert.closed {
  opacity: 0;
  max-height: 0;
  margin: 0;
  padding-bottom: 0;
  padding-top: 0;
  border-width: 0;
}

.alert .btn-close {
  float: right;
}
</style>
