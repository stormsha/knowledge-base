import {defineConfig} from 'vitepress'
import nav from "./nav.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "stormsha",
    description: "知识库",
    srcDir: 'docs',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav,

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
