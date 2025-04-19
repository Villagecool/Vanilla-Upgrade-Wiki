import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vanilla Upgrade Wiki",
  description: "Everything you need to know about Vanilla Upgrade!",
  head: [
    [
      "link",
      { rel: "icon", href: "https://github.com/Villagecool/Vanilla-Upgrade-Wiki/raw/refs/heads/main/docs/ass-sets/favicon.ico"}
    ]
  ],
  base: "/Vanilla-Upgrade-Wiki/",
  markdown: { math: true },
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/pack_icon.png?raw=true",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏠 Home", link: "/" },
      { text: "🧱 Blocks", link: "/blocks" },
      { text: "⛏️ Items", link: "/items" },
      { text: "🐷 Mobs", link: "/mobs" },
      { text: "🌴 Features", link: "/features" },
      { text: "🎲 Other", link: "/misc" },
    ],

    sidebar: [
      {
        text: "Vanilla Upgrade",
        link: "/",
        items: [
          {
            text: "🧱 Blocks",
            link: "/blocks/",
            collapsed: true,
            items: [
              { text: "Functional", link: "/blocks/functional" },
              { text: "Decoration", link: "/blocks/deco" },
              { text: "Families", link: "/blocks/families" },
              { text: "Misc", link: "/blocks/misc" },
            ],
          },
          {
            text: "⛏️ Items",
            link: "/items/",
            collapsed: true,
            items: [
              { text: "Tools", link: "/items/tools" },
              { text: "Food", link: "/items/food" },
              { text: "Crops", link: "/items/crops" },
              { text: "Misc", link: "/items/misc" },
            ],
          },
          { text: "🐷 Mobs", link: "/mobs" },
          { text: "🌴 Features", link: "/features" },
          {
            text: "🎲 Other",
            link: "/misc",
            collapsed: true,
            items: [
              { text: '"Advanced" System', link: "/advanced_system" },
              { text: "Base Game Changes/Features" },
              { text: "Downloads", link: "/downloads" },
              //{ text: 'Known Issues' },
              { text: "Changelog", link: "/changelog" },
              { text: "Contributions", link: "/contributions" },
            ],
          },
        ],
      },
      {
        text: "🐛 Report a Bug",
        link: "https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/issues/new/choose",
      },
      {
        text: "🖐️ Contribute",
        link: "https://github.com/Villagecool/Vanilla-Upgrade-Wiki/pulls",
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Villagecool/Vanilla-Upgrade-Public-Source",
      },
      { icon: "discord", link: "https://discord.gg/NKqcUJR6er" },
      {
        icon: "curseforge",
        link: "https://www.curseforge.com/minecraft-bedrock/addons/vanilla-upgrade-addon",
      },
      {
        icon: {
          svg: '<img src = "https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/dlboxsvg.png?raw=true" alt="MCPEDL" width = 24 height = 24/>',
        },
        link: "https://mcpedl.com/vanilla-upgrade-addon/",
        ariaLabel: "MCPEDL",
      },
    ],
  },
});
