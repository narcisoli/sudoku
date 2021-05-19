import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import babel from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
const analyze = require('rollup-plugin-analyzer')

import WindiCSS from 'vite-plugin-windicss'



// https://vitejs.dev/config/
export default defineConfig({
  server: {

    port: 3032
  },

  build: {
    rollupOptions: {

      plugins: [analyze({ summaryOnly: true, limit: 30 })]
    },
  },
  plugins: [svelte(), WindiCSS()],

  define: {
    'process.env': {}
  }
})
