const uuid = crypto.randomUUID();

const corolla = Bun.spawn([
  "corolla",
  "-d",
  `tmp/${uuid}.sqlite3`,
  "-r",
  "/api",
  "-p",
  "50001",
]);
const vite = Bun.spawn(["bun", "run", "dev"]);
const caddy = Bun.spawn(["caddy", "run"]);

process.on("SIGINT", () => {
  corolla.kill();
  vite.kill();
  caddy.kill();
});
