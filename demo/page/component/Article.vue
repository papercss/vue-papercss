<template lang="html">
  <Demo title="Article">
    <p-article
      title="Article Title"
      titleLink="article-demo"
      meta="Article meta text"
      author="Super User"
      authorLink="http://example.com"
      date="24 November 2017"
      category="Blog"
      categoryLink="http://example.com/"
      lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis aliquid impedit, et
        quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa tempore, veritatis officia delectus
        dolore dignissimos reprehenderit vero, sunt odit placeat est non molestiae ipsa nam velit in iusto hic quasi
        similique facere. Maxime?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis aliquid impedit, et
        quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa tempore, veritatis officia delectus
        dolore dignissimos reprehenderit vero, sunt odit placeat est non molestiae ipsa nam velit in iusto hic quasi
        similique facere. Maxime?
      </p>

      <p-row>
        <p-button small>Read more</p-button>
        <p-button small>5 comments</p-button>
      </p-row>
    </p-article>
  </Demo>
</template>

<script>
  import Demo from '../../component/Demo'
  import { row, button, article } from '../../../src'

  export default {
    name: "article",
    components: {
      pRow: row,
      pButton: button,
      pArticle: article,
      Demo
    }
  }
</script>

<style scoped>

</style>
