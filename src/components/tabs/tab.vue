<template>
  <div class="content" :class="{ 'show': displayed }">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayed: false,
    };
  },

  methods: {
    hideTab() {
      this.displayed = false;
    },

    showTab() {
      this.displayed = true;
    },
  },
}
</script>

<style scoped>
.content.show {
  display: block;
}
</style>
