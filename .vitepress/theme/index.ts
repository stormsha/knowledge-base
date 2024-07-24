
import DefaultTheme from 'vitepress/theme'
import {EnhanceAppContext} from "vitepress";
import {watch} from "vue";
import {useMediumZoomProvider} from "./composables/medium";

import './styles/index.css'

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
    enhanceApp({app, router}: EnhanceAppContext){
        useMediumZoomProvider(app, router)
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomeStyle(location.pathname === '/'),
                { immediate: true },
            )
        }
    }
}
