import { createContentLoader } from 'vitepress';
export interface Card {
    html: string | undefined;
    url: string | undefined;
    src: string | undefined;
}

declare const data: Record<string, Card>;
export { data };

// 使用 createContentLoader 创建内容加载器
export default createContentLoader('roadmap/**/*.md', {
    render: true,
    includeSrc: true,
    transform: function (raw): Record<string, Card> {
        // 过滤符合条件的项并转换成以 URL 为键的 Map 对象
        const map: Record<string, Card> = {};
        //noinspection all
        raw.filter((item) => item.frontmatter.layout === 'roadmap')
            .forEach(({url, frontmatter, html, src}) => {
                map[frontmatter.path] = {
                    url: url,
                    html: html,
                    src: src,
                };
            });
        return map;
    },
});
