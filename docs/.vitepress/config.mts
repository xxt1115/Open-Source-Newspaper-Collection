import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Open-Source-Newspaper-Collection/',
  title: "OpenSourceNewspaperCollection",
  description: "一个用于收集本人感兴趣的开源项目的记事本",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目列表', link: '/Everything AI Chat' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Everything AI Chat', link: '/Everything AI Chat' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
