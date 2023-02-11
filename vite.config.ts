import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: env.VITE_BASEURL,
    // 配置路径 https://www.cnblogs.com/chen-cheng/p/16184652.html
    resolve: {
      alias: {
        "@": path.join(__dirname, "libs"),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "libs/index.tsx"),
        name: "reac-components",
        fileName: "react-components",
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["react"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            react: "React",
          },
        },
      },
    },
  };
});
