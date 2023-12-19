import { fileURLToPath } from 'node:url';
import {configDefaults, defineConfig} from 'vitest/config'
import vue from "@vitejs/plugin-vue";
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        vuetify({
            autoImport: true,
        }),
        ViteFonts({
            google: {
                families: [{
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        }),
    ],
    resolve: {
        // https://vitest.dev/config/#alias
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~': fileURLToPath(new URL('./node_modules', import.meta.url))
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
    },
    test: {
        globals: true,
        environment: 'jsdom',
        root: fileURLToPath(new URL('./', import.meta.url)),
        // https://vuetifyjs.com/en/getting-started/unit-testing/
        server: {
            deps: {
                inline: ['vuetify']
            }
        },
        useAtomics: true,
        clearMocks: true,
        testTimeout: 10000
    }
})
