import DefaultTheme from 'vitepress/theme'
import {EnhanceAppContext, useData} from "vitepress";
import {h, watch} from "vue";
import {useMediumZoomProvider} from "./composables/medium";
//noinspection all
import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import HeroImage from "./components/HeroImage.vue";
import './styles/index.css'
import RoadMap from "./components/RoadMap.vue";
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

//noinspection all
export default {
    extends: DefaultTheme,
    Layout: () => {
        const props: Record<string, any> = {}
        //noinspection all
        const {frontmatter} = useData();
        /* 添加自定义class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass;
        }

        return h(DefaultTheme.Layout, props, {
            'home-hero-image':() => h(HeroImage),
            // 为较宽的屏幕的导航栏添加阅读增强菜单
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        })
    },

    enhanceApp({app, router}: EnhanceAppContext) {
        useMediumZoomProvider(app, router)
        app.component('MNavLinks', MNavLinks)
        app.component('RoadMap', RoadMap)
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomeStyle(location.pathname === '/'),
                {immediate: true},
            )
        }
    }
}