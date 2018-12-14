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
      { text: 'Quick-start', link: '/quick-start/' },
      { text: 'Components', link: '/components/' },
      { text: 'PaperCSS', link: 'https://getpapercss.com' },
    ],

    sidebar: [
      '',
      '/quick-start/',
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/alert/',
          '/components/article/',
          '/components/badge/',
          '/components/button/',
          '/components/card/',
          '/components/col/',
          '/components/collapsible/',
          '/components/container/',
          '/components/form-group/',
          '/components/progress/',
          '/components/row/',
          '/components/table/',
          '/components/tabs/',
        ],
      }
    ],

    repo: 'papercss/vue-papercss',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Is something wrong or missing? Edit this page on GitHub.',
    displayAllHeaders: true,
  },
};
