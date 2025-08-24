import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Open-Source-Newspaper-Collection/',
  title: "OSNC",
  description: "一个用于收集本人感兴趣的开源项目的记事本",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目列表', link: '/tool/Everything AI Chat' }
    ],

    sidebar: [
      {
        text: '工具',
        items: [
          { text: 'Everything AI Chat', link: '/tool/Everything AI Chat' },
          { text: 'ungoogled chromium', link: '/tool/ungoogled-chromium' },
          { text: 'VutronMusic', link: '/tool/VutronMusic' },
          { text: 'PairDrop', link: '/PairDrop' },
          { text: 'Squish', link: '/Squish' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxt1115/Open-Source-Newspaper-Collection' }
    ]
  }
})
