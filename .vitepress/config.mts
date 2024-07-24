import {defineConfig} from 'vitepress'
import nav from "./config/nav.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "stormsha",
    description: "知识库",
    srcDir: 'docs',
    outDir: '../dist',
    lang: 'zh-CN',
    themeConfig: {
        i18nRouting: false,
        markdown: {
            lineNumbers: true,
        },
        nav: nav,
        logo: '/logo.png',
        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],
        /* 右侧大纲配置 */
        outline: {
            level: 'deep',
            label: '目录',
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
