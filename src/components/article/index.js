import { registerComponent, vueUse } from '../../utils';
import article from './article.vue';

const ArticlePlugin = {
  install(Vue) {
    registerComponent(Vue, 'PArticle', article);
  }
};

vueUse(ArticlePlugin);

export default ArticlePlugin;
