import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(async () => {
  return {
    assetsInclude: ['**/*.mov'],
    optimizeDeps: {
      exclude: [
        'vitepress',
      ],
    },
    plugins: [
      Components({
        include: [/\.vue$/, /\.md$/],
        dirs: '.vitepress/theme/components',
        dts: '.vitepress/components.d.ts',
      }),
    ],
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities'
      ],
    },
  }
})