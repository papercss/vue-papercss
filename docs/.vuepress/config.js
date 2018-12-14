module.exports = {
  title: 'Vue-PaperCSS',
  descritpion: 'A Vue-plugin for the less formal CSS framework.',
  base: '/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: {
      '/guide/': ['/'],
    },

    repo: 'papercss/vue-papercss',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Is something wrong or missing? Edit this page on GitHub.',
  },
};
