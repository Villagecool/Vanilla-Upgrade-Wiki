import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vanilla Upgrade Wiki",
  description: "Everything you need to know about Vanilla Upgrade!",
  head: [['link', { rel: 'icon', href: '/ass-sets/favicon.ico' }]],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🧱 Blocks', link: '/blocks' },
      { text: '⛏️ Items', link: '/items' },
      { text: '🐷 Mobs', link: '/mobs' },
      { text: '🌴 Features', link: '/features' },
      { text: '🎲 Misc', link: '/misc' }
    ],

    sidebar: [
      {
        text: 'Vanilla Upgrade',
        link: '/',
        items: [
          { text: 'Blocks 🧱', link: '/blocks', items: [
            { text: 'Functional', link: '/blocks/functional' },
            { text: 'Decoration', link: '/blocks/deco' },
            { text: 'Misc', link: '/blocks/misc' }
          ]},
          { text: 'Items ⛏️', link: '/items', items: [
            { text: 'Tools', link: '/items/tools' },
            { text: 'Food', link: '/items/food' },
            { text: 'Misc', link: '/items/misc' }
          ]},
          { text: 'Mobs 🐷', link: '/mobs' },
          { text: 'Features 🌴', link: '/features' },
          { text: 'Misc 🎲', link: '/misc' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Villagecool/Vanilla-Upgrade-Public-Source' },
      { icon: 'discord', link: 'https://discord.gg/NKqcUJR6er'},
      { icon: 'curseforge', link: 'https://www.curseforge.com/minecraft-bedrock/addons/vanilla-upgrade-addon'},
      { icon: { svg: '<img src = "/ass-sets/dlboxsvg.svg" alt="MCPEDL" width = 24 height = 24/>' }, link: 'https://mcpedl.com/vanilla-upgrade-addon/', ariaLabel: 'MCPEDL' }
    ]
  }
})