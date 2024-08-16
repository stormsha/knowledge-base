import {DefaultTheme} from "vitepress/theme";

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '📚 自学路线',
        items: [
            {
                text:'🔖 Python 路线图',
                link:'/roadmap/python.md'
            },
            {
                text:'🔖 Go 路线图',
                link:'/roadmap/go.md'
            }
        ]
    },
    {
        text: '🎨 关于我',
        link:'/about.md'
    }
]