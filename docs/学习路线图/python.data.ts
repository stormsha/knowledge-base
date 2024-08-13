import {createContentLoader} from 'vitepress'

interface Post {
    url: string
    html: string | undefined
}

export default createContentLoader('学习手册/Python/*.md', {
    render: true,
    includeSrc: true,
    transform(data) {
        const result: Record<string, Post> = {}
        for (const md of data) {
            result[md.frontmatter.slug] = {
                html: md.html,
                url: md.url
            }
        }
        return result
    }
})

export declare const data: Record<string, Post>