import { spawn } from "node:child_process";
import { realpathSync } from "node:fs";
import path from "node:path";
import process from "node:process";

// Windows 用户目录迁移后可能形成目录联接，Next.js 需要 C: 与真实盘符一致。
const projectDir = realpathSync(process.cwd());
const nextBin = path.join(
  projectDir,
  "node_modules",
  "next",
  "dist",
  "bin",
  "next",
);

const child = spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd: projectDir,
  env: {
    ...process.env,
    // 避免 Next 遥测在迁移后的 Windows 用户目录中触发跨盘原子写入错误。
    NEXT_TELEMETRY_DISABLED: "1",
  },
  stdio: "inherit",
  windowsHide: false,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});