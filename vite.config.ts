import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";

const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root,".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve("src/assets/icons/svgs")],
      symbolId: "icon-[dir]-[name]",
      svgoOptions: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src"),
      },
    ],
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
