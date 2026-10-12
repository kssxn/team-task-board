import { boardColumns } from "@/features/board/constants";

const summaryItems = [
  { label: "全部任务", value: "0" },
  { label: "正在推进", value: "0" },
  { label: "本周完成", value: "0" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-bold tracking-wide text-white shadow-lg shadow-slate-900/15">
              TT
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">团队任务看板</p>
              <p className="hidden text-xs text-slate-500 sm:block">
                让每一项工作都清晰可见
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              单机演示版
            </span>
            <div className="hidden -space-x-2 sm:flex" aria-label="当前团队成员">
              {["AL", "MK", "YZ"].map((member, index) => (
                <span
                  key={member}
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[10px] font-bold text-white ${
                    ["bg-slate-700", "bg-blue-600", "bg-emerald-600"][index]
                  }`}
                  title={`演示成员 ${member}`}
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Sprint 01
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              产品迭代看板
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              第一版先建立可靠的项目骨架和三列视图。下一步会加入任务数据、
              拖拽排序和多人协作能力。
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
            当前阶段：Day 1
          </div>
        </section>

        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm shadow-slate-200/70 backdrop-blur"
            >
              <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <section
        aria-label="任务看板"
        className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8"
      >
        {boardColumns.map((column, columnIndex) => (
          <article
            key={column.id}
            className={`flex min-h-[28rem] flex-col rounded-3xl border p-4 shadow-sm shadow-slate-200/70 ${column.surfaceClassName}`}
          >
            <header className="flex items-start justify-between gap-4 px-1 py-1">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${column.dotClassName}`}
                    aria-hidden="true"
                  />
                  <h2 className="text-base font-semibold text-slate-900">{column.title}</h2>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{column.description}</p>
              </div>
              <span className="grid h-7 min-w-7 place-items-center rounded-full bg-white px-2 text-xs font-semibold text-slate-600 shadow-sm">
                0
              </span>
            </header>

            <div className="mt-4 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300/90 bg-white/55 px-5 py-10 text-center">
              <div>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-400 shadow-sm">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h8M8 12h5m-5 5h8M5 3.75h14A1.25 1.25 0 0 1 20.25 5v14A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19V5A1.25 1.25 0 0 1 5 3.75Z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-700">还没有任务</h3>
                <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                  Day 2 会在这里加入按未来数据库结构设计的假任务。
                </p>
                <span className="mt-4 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-400 shadow-sm">
                  第 {columnIndex + 1} 列
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Next.js + TypeScript + Tailwind CSS</p>
        <p>第 1 周第 1 天：建立可部署的独立项目骨架</p>
      </footer>
    </main>
  );
}