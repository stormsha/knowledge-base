import { createContentLoader } from 'vitepress';

// export interface Card {
//     title: string;
//     url: string;
//     pageHtml: string;
//     pageSrc: string;
// }

// declare const data: Card[];
// export { data };

export default createContentLoader('Python/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    render: true,     // 包含渲染的整页 HTML?
    excerpt: true,    // 包含摘录?
    transform(rawData) {
        // 根据需要对原始数据进行 map、sort 或 filter
        // 最终的结果是将发送给客户端的内容
        console.log(rawData, "------------xccccccc")
        return rawData.map((page) => {
            page.src     // 原始 markdown 源
            page.html    // 渲染的整页 HTML
            page.excerpt // 渲染的摘录 HTML（第一个 `---` 上面的内容）
            return page
        })
    }
});
