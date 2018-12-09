<template>
  <div class="card">
    <div v-if="header" class="card-header">{{header}}</div>

    <img v-if="imgSrc && !imgBottom" :src="imgSrc" :alt="imgAlt">

    <div class="card-body">
      <h4 v-if="title" class="card-title">{{title}}</h4>
      <h5 v-if="subtitle" class="card-subtitle">{{subtitle}}</h5>
      <p v-if="text" class="card-text">{{text}}</p>
      <slot />
    </div>

    <img v-if="imgSrc && imgBottom" :src="imgSrc" :alt="imgAlt">

    <div v-if="footer" class="card-footer">{{footer}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    },

    imgSrc: {
      type: String,
      default: '',
    },

    imgAlt: {
      type: String,
      default: '',
    },

    imgBottom: {
      type: Boolean,
      default: false,
    },

    header: {
      type: String,
      default: '',
    },

    footer: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/cards.css');
</style>
