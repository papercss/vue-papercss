<template lang="html">
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
article .article-title {
  font-size: 3rem
}

article .article-meta {
  font-size: 15px;
  color: #868e96
}

article .article-meta a {
  color: #41403e;
  background-image: none
}

article .article-meta a:hover {
  color: rgba(0,0,0,.7)
}

article .text-lead {
  font-size: 30px;
  line-height: 1.3;
  margin: 35px 0
}
</style>
