import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { serverPort } from '../shared/src';

export default defineConfig({
  server: {
    port: serverPort,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index.js',
    }),
  ],
});
