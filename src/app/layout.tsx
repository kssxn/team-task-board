import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "团队任务看板",
  description: "支持任务管理、拖拽排序与多人协作的团队看板。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}