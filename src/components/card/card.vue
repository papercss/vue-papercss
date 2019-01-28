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
      required: false,
    },

    subtitle: {
      type: String,
      default: '',
      required: false,
    },

    text: {
      type: String,
      default: '',
      required: false,
    },

    imgSrc: {
      type: String,
      default: '',
      required: false,
    },

    imgAlt: {
      type: String,
      default: '',
      required: false,
    },

    imgBottom: {
      type: Boolean,
      default: false,
      required: false,
    },

    header: {
      type: String,
      default: '',
      required: false,
    },

    footer: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>
