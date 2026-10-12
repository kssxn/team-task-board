export type BoardColumnId = "todo" | "in-progress" | "done";

export type BoardColumn = {
  id: BoardColumnId;
  title: string;
  description: string;
  surfaceClassName: string;
  dotClassName: string;
};

// 第一版固定三列，后续接入数据库时可以直接复用这些稳定标识。
export const boardColumns: BoardColumn[] = [
  {
    id: "todo",
    title: "待办",
    description: "已经确认、等待开始的工作",
    surfaceClassName: "border-slate-200 bg-white/90",
    dotClassName: "bg-slate-400",
  },
  {
    id: "in-progress",
    title: "进行中",
    description: "当前正在推进的工作",
    surfaceClassName: "border-blue-200 bg-blue-50/70",
    dotClassName: "bg-blue-500",
  },
  {
    id: "done",
    title: "已完成",
    description: "已经完成并验收的工作",
    surfaceClassName: "border-emerald-200 bg-emerald-50/70",
    dotClassName: "bg-emerald-500",
  },
];