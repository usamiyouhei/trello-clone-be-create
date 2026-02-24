import express from "express";
import { AppDataSource } from "./datasource";

const app = express();
const PORT = 8887;

app.get("/", (req, res) => {
  res.send("Hello World");
});

AppDataSource.initialize().then(() => {
  console.log("データベースと接続しました");
  app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`);
  });
});
