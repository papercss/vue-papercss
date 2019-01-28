---
title: Article
sidebarDepth: 3
---

# Article (`PArticle`)

Articles are used to mimic a simple article with only text, however you can pass some custom elements such as buttons, links, ...

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/articles)

```html
<p-article
  title="Article title"
  meta="First article of PaperCSS"
  author="PaperCSS"
  authorLink="https://github.com/papercss"
  date="12 december 2018"
  lead="Article lead line"
>
  <p>This is the article content...</p>

  <p-button small>A small button</p-button>
</p-article>
```

<prop-table :component="compRef"></prop-table>

<script>
import PArticle from '../../../src/components/article/article.vue';

export default {
  data() {
    return {
      compRef: PArticle,
    };
  },
}
</script>
