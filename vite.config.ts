import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import basicSsl from "@vitejs/plugin-basic-ssl";
import * as path from "path";

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        basicSsl()
    ],
    server: { https: true },
    resolve: {
        alias: [
            {find: '@shared', replacement: path.resolve(__dirname, 'src/shared')},
            {find: '@features', replacement: path.resolve(__dirname, 'src/features')},
            {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
        ],
    },
    base: '/react-boilerplate',
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            enabled: true,
            provider: 'v8',
            all: true,
            include: ['src/'],
            exclude: ['**/*.types.ts', '**/*.d.ts', '**/**/index.ts', 'src/main.tsx', '**/*.stories.tsx'],
            reporter: ['text', 'html', 'clover', 'json'],
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
})
