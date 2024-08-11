import {createContentLoader} from 'vitepress'

interface Post {
    title: string
    url: string
    html: string | undefined
}

export default createContentLoader('学习路线图/Go/*.md', {
    render: true,
    includeSrc: true,
    transform(data) {
        const result: Record<string, Post> = {}
        for (const md of data) {
            result[md.url] = {
                title: md.frontmatter.title,
                html: md.html,
                url: md.url
            }
        }
        return result
    }
})

export declare const data: Record<string, Post>