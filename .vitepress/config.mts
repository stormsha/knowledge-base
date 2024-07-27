import {defineConfig} from 'vitepress'
// import { head, nav } from './configs'
import {head, nav} from "./configs";

// https://vitepress.dev/reference/site-config
//noinspection all
export default defineConfig({
    title: "stormsha",
    description: "知识库",
    head: head,
    srcDir: 'docs',
    outDir: '../dist',
    lang: 'zh-CN',
    themeConfig: {
        i18nRouting: false,
        markdown: {
            lineNumbers: true,
        },
        nav: nav,
        logo: '/logo.svg',
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
