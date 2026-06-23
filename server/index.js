const express = require("express");
const cors = require("cors");
const path = require("path");
const itemsRouter = require("./routes/items");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/api/items", itemsRouter);

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

app.use("/admin", express.static(path.join(__dirname, "..", "src", "admin")));

app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 食选 API 服务器启动成功`);
  console.log(`   API:      http://localhost:${PORT}/api/items`);
  console.log(`   前台:     http://localhost:${PORT}`);
  console.log(`   管理后台:  http://localhost:${PORT}/admin`);
});
