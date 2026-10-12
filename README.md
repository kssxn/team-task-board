# 团队任务看板

一个从零迭代到可上线、可演示、可写进简历的团队任务看板。项目与同级教程站相互独立，使用自己的 Git 仓库。

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## 当前进度

- [x] 第 1 周 Day 1：建立 Next.js + TypeScript + Tailwind 项目
- [x] 第 1 周 Day 1：完成待办、进行中、已完成三列首页
- [ ] 第 1 周 Day 1：创建 GitHub 远程仓库
- [ ] 第 1 周 Day 1：接入 Vercel 并取得公开链接
- [ ] 第 1 周 Day 2：定义数据模型并加入假任务
- [ ] 第 1 周 Day 3：新增、编辑、删除任务与 localStorage 持久化
- [ ] 第 1 周 Day 4：接入 dnd-kit 拖拽与位置持久化
- [ ] 第 1 周 Day 5：响应式、空状态、加载状态、错误状态
- [ ] 第 1 周 Day 6：基础测试、代码清理、可访问性
- [ ] 第 1 周 Day 7：README、截图、部署验收、v0.1.0

## 本地运行

```bash
npm install
npm run dev
```

仓库带有 `scripts/run-next.mjs`，用于兼容 Windows 用户目录迁移后形成的 C:/D: 目录联接。正常安装环境不会产生额外影响。

打开 <http://localhost:3000>。

生产构建检查：

```bash
npm run lint
npm run build
```

## 提交到 GitHub

先在 GitHub 创建空仓库，不要勾选 README、`.gitignore` 或 License，然后执行：

```bash
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 部署到 Vercel

1. 登录 Vercel，选择 `Add New Project`。
2. 导入刚创建的 GitHub 仓库。
3. Framework Preset 保持 `Next.js`。
4. 点击 Deploy。
5. 部署成功后把公开链接补写到本文件。

## 后续架构原则

- 页面只依赖统一的 `TaskRepository` 接口，不直接依赖 localStorage 或 Supabase。
- 第一版固定三列，不急着做无限自定义看板。
- 任务数据结构从 Day 2 开始对齐未来数据库字段。
- 浏览器只能使用 Supabase `anon key`，任何 `service_role key` 都不能进入前端。