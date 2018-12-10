<template>
  <article class="article">
    <h1 class="article-title">
      <a :href="titleLink" target="_blank">{{title}}</a>
    </h1>

    <p v-if="meta" class="article-meta">{{meta}}</p>

    <p v-if="author && authorLink" class="article-meta">
      <span v-if="author && authorLink && !date && !category">
        Posted by <a :href="authorLink">{{author}}</a>.
      </span>

      <span v-else-if="author && authorLink && date && !category">
        Posted by <a :href="authorLink">{{author}}</a> on {{date}}.
      </span>

      <span v-else-if="author && authorLink && date && category && categoryLink">
        Posted by <a :href="authorLink">{{author}}</a> on {{date}} in category <a :href="categoryLink">{{category}}</a>
      </span>
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

<style scoped>
.article .article-meta span {
  margin-right: 6px;
}
</style>
