<template>
  <article class="article">
    <h1 class="article-title">
      <a :href="'#' + titleLink">{{title}}</a>
    </h1>

    <p v-if="meta" class="article-meta">{{meta}}</p>
    <p v-if="author || date || category" class="article-meta">
      <span v-if="author && authorLink">Posted by <a :href="authorLink">{{author}}</a></span>.
      <span v-if="date">Published {{date}}</span>.
      <span v-if="category && categoryLink">In category <a :href="categoryLink">{{category}}</a></span>
    </p>
    <p v-if="lead" class="text-lead">{{lead}}</p>

    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    meta: {
      type: String,
      default: '',
    },

    lead: {
      type: String,
      default: '',
    },

    titleLink: {
      type: String,
      default: '',
    },

    author: {
      type: String,
      default: '',
    },

    authorLink: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },

    category: {
      type: String,
      default: '',
    },

    categoryLink: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="css">
@import url('../../../node_modules/papercss/dist/components/article.css');
</style>
