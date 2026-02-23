import express from "express";

const app = express();
const PORT = 8887;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました`);
});
