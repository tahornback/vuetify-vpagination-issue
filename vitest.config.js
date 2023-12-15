import { fileURLToPath } from 'node:url';
import {configDefaults, defineConfig} from 'vitest/config'

export default defineConfig({
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
