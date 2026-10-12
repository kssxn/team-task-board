import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  ...(process.platform === "win32"
    ? {
        // Windows 迁移目录下可能禁止 Turbopack 启动子进程，改用工作线程。
        experimental: {
          turbopackPluginRuntimeStrategy: "forceWorkerThreads" as const,
        },
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;