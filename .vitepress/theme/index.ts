
import DefaultTheme from 'vitepress/theme'
import {EnhanceAppContext, useData} from "vitepress";
import {h, watch} from "vue";
import {useMediumZoomProvider} from "./composables/medium";

import './styles/index.css'
import MLayout from "./components/MLayout.vue";
import MNavLinks from "./components/MNavLinks.vue";

let homeStyle: HTMLStyleElement | undefined
function updateHomeStyle(value: boolean) {

    if (value) {
        if (homeStyle) return
        homeStyle = document.createElement('style')
        homeStyle.innerHTML = `
            :root {
              animation: rainbow 12s linear infinite;
            }`
        document.body.appendChild(homeStyle)
    } else {
        if (!homeStyle) return

        homeStyle.remove()
        homeStyle = undefined
    }
}

export default {
    extends: DefaultTheme,
    Layout:()=>{
        const props: Record<string, any> = {}
        //noinspection all
        const { frontmatter } =  useData();
        /* 添加自定义class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass;
        }
        return h(MLayout, props)
    },
    enhanceApp({app, router}: EnhanceAppContext){
        useMediumZoomProvider(app, router)
        app.component('MNavLinks', MNavLinks)
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomeStyle(location.pathname === '/'),
                { immediate: true },
            )
        }
    }
}