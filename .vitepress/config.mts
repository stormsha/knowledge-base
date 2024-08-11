import {defineConfig} from 'vitepress'
import {head, nav, sidebar, algolia} from "./configs";
import {RouteMap} from "./configs/routes";

// https://vitepress.dev/reference/site-config
// https://vercel.com/stormshas-projects
//noinspection all
export default defineConfig({
    vite: {
        optimizeDeps: {
            exclude: [
                '@nolebase/vitepress-plugin-enhanced-readabilities/client',
            ],
        },
        ssr: {
            noExternal: [
                '@nolebase/vitepress-plugin-enhanced-readabilities',
                '@nolebase/ui',
            ],
        },
    },
    title: "stormsha",
    description: "知识库",
    head: head,
    srcDir: 'docs',
    outDir: './dist',
    lang: 'zh-CN',
    sitemap: {
        hostname: 'https://www.devsroad.com/'
    },
    ignoreDeadLinks: true,
    rewrites: RouteMap,
    themeConfig: {
        i18nRouting: false,
        markdown: {
            lineNumbers: true,
        },
        nav: nav,
        sidebar: sidebar,
        algolia: algolia,
        logo: '/logo.svg',
        /* 右侧大纲配置 */
        outline: {
            level: 'deep',
            label: '目录',
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium',
            },
        },

        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        footer: {
            message: '<a href="https://github.com/stormsha/knowledge-base/" target="_blank">源码地址</a> | <a href="https://www.devsroad.com/sitemap.xml" target="_blank">站点地图</a>',
            copyright: 'Copyright © 2024-present stormsha'
        },
        socialLinks: [
            {
                icon: {
                    svg: '<svg t="1722175001027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22228" width="256" height="256"><path d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m215.21 736.768c-18.687 28.843-45.311 51.2-80.127 67.157-34.902 15.958-74.155 23.894-117.76 23.894-55.296 0-101.547-8.107-138.923-24.15s-66.645-40.362-87.893-72.789a205.995 205.995 0 0 1-33.536-109.739l76.288-6.656c3.498 30.635 11.861 55.638 25.088 75.264 13.226 19.542 33.621 35.328 61.44 47.531 27.818 11.947 59.05 18.09 93.781 18.09 30.805 0 58.027-4.607 81.664-13.738s41.13-21.76 52.65-37.632c11.606-16.043 17.323-33.45 17.323-52.31a78.848 78.848 0 0 0-16.64-50.175c-11.178-14.422-29.525-26.454-55.04-36.182-16.298-6.4-52.65-16.298-108.714-29.781-56.15-13.483-95.403-26.197-117.931-38.144-29.184-15.275-50.944-34.219-65.195-56.832a139.35 139.35 0 0 1-21.504-76.117c0-30.806 8.79-59.648 26.283-86.443 17.493-26.795 43.008-47.104 76.63-61.013s70.997-20.822 112.042-20.822c45.312 0 85.163 7.254 119.808 21.931 34.475 14.507 61.184 36.01 79.787 64.341s28.586 60.416 30.037 96.256l-77.483 5.803c-4.181-38.57-18.261-67.755-42.24-87.552-24.064-19.712-59.477-29.525-106.496-29.525-48.896 0-84.48 8.96-106.837 26.794-22.357 18.006-33.536 39.595-33.536 64.854 0 21.93 7.936 40.021 23.723 54.186 15.53 14.166 56.149 28.672 121.856 43.52 65.706 14.848 110.762 27.904 135.168 38.998 35.584 16.384 61.781 37.205 78.762 62.293 16.982 25.088 25.43 54.101 25.43 86.87 0 32.426-9.216 63.146-27.904 91.818z" p-id="22229" fill="#30584a" data-spm-anchor-id="a313x.search_index.0.i11.68503a81KpD03o" class="selected"></path></svg>'
                },
                link: 'https://stormsha.com/', ariaLabel: 'cool link'
            },
            {icon: 'github', link: 'https://github.com/stormsha/', ariaLabel: 'cool link'},
            {
                icon: {
                    svg: '<svg t="1722175338136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24449" width="256" height="256"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#fc5531" p-id="24450"></path></svg>'
                },
                link: 'https://stormsha.blog.csdn.net/'
            },
            {
                icon: {
                    svg: '<svg t="1722175138562" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23425" width="256" height="256"><path d="M234.908525 9.656195a80.468288 80.468288 0 0 1 68.398044 0 167.374038 167.374038 0 0 1 41.84351 30.577949l160.936576 140.819503H621.156306L782.092881 40.234144a168.983404 168.983404 0 0 1 41.84351-30.577949 80.468288 80.468288 0 0 1 107.022823 66.788678 80.468288 80.468288 0 0 1-17.703024 53.913753 449.817728 449.817728 0 0 1-35.406046 32.187315 232.553351 232.553351 0 0 1-22.531121 18.507706h100.58536a170.59277 170.59277 0 0 1 118.288383 53.10907A171.397453 171.397453 0 0 1 1128.106519 352.4511v462.692655a325.896565 325.896565 0 0 1-4.023415 70.00741 178.639599 178.639599 0 0 1-80.468288 112.655603 173.006819 173.006819 0 0 1-92.53853 25.749852H212.377404a341.18554 341.18554 0 0 1-72.421459-4.023415 177.834916 177.834916 0 0 1-111.046237-80.468287A172.202136 172.202136 0 0 1 1.550491 846.526387V388.66183A360.497929 360.497929 0 0 1 1.550491 321.873151a177.030233 177.030233 0 0 1 160.936575-143.233552h105.413457c-16.89834-12.070243-31.382632-26.554535-46.671607-39.429461a80.468288 80.468288 0 0 1-25.749852-65.983996A80.468288 80.468288 0 0 1 234.908525 9.656195M216.400819 321.873151a80.468288 80.468288 0 0 0-63.569948 57.937167 108.632188 108.632188 0 0 0 0 30.577949v380.615001a80.468288 80.468288 0 0 0 55.523119 80.468288 106.21814 106.21814 0 0 0 34.601364 5.63278h654.207179a80.468288 80.468288 0 0 0 76.444873-47.47629 112.655603 112.655603 0 0 0 8.046829-53.10907v-354.060465a135.186723 135.186723 0 0 0 0-38.624779 80.468288 80.468288 0 0 0-52.304387-54.718435 129.553943 129.553943 0 0 0-49.890338-7.242146H254.220914a268.764081 268.764081 0 0 0-37.820095 0z m0 0" fill="#20B0E3" p-id="23426"></path><path d="M348.368811 447.40368a80.468288 80.468288 0 0 1 55.523118 18.507706 80.468288 80.468288 0 0 1 28.163901 59.546533v80.468287a80.468288 80.468288 0 0 1-16.093658 51.499705 80.468288 80.468288 0 0 1-131.967992-9.656195 104.608774 104.608774 0 0 1-10.460877-54.718436v-80.468287a80.468288 80.468288 0 0 1 70.00741-67.593362z m416.021047 0a80.468288 80.468288 0 0 1 86.101068 75.64019v80.468288a94.147897 94.147897 0 0 1-12.070243 53.10907 80.468288 80.468288 0 0 1-132.772675 0 95.757262 95.757262 0 0 1-12.874926-57.132485v-80.468287a80.468288 80.468288 0 0 1 70.00741-70.812093z m0 0" fill="#20B0E3" p-id="23427"></path></svg>'
                },
                link: 'https://space.bilibili.com/97235284'
            }
        ]
    },
})
