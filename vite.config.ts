import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { create } from "@openreplyde/web-docker-vite-plugin";

const elements = ["page-module-share-vue"];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const base = env.VITE_APP_BASE_PATH || "/";

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => elements.includes(tag),
          },
        },
      }),
      create({
        basePath: base,
        fileName: "page-module-share-vue.json",
        module: "page-module-share-vue",
        type: "page",
        pages: [".*"],
        scope: "webdocker",
        use: { vue: "vue-module" },
      }),
    ],
    build: {
      rollupOptions: {
        external: ["vue"],
      },
    },
  };
});
