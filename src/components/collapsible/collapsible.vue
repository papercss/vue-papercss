<template>
  <div class="collapsible">
    <span class="collapsible-title" @click="toggle()">{{title}}</span>

    <div class="collapsible-body" :class="{ 'hide': !display }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: this.show,
    };
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggle() {
      this.display = !this.display;
    },
  },
}
</script>

<style scoped>
.collapsible .collapsible-title {
  border-bottom: 1px solid #e6e7e9;
  color: #41403e;
  display: inline-block;
  font-weight: 600;
  margin: 0 0 -1px;
  padding: .75rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.collapsible .collapsible-body {
  opacity: 1;
  max-height: 960px;
}

.collapsible .collapsible-body.hide {
  max-height: 0;
  opacity: 0;
}
</style>
