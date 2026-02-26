import express from "express";
import { AppDataSource } from "./datasource";
import cors from "cors";
import { List } from "./entities/list.entity";

const app = express();
const PORT = 8887;
app.use(express.json());
app.use(cors());

const listRepository = AppDataSource.getRepository(List);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/lists", async (req, res) => {
  try {
    const { title } = req.body;

    const list = await listRepository.save({
      title,
    });

    res.status(201).json(list);
  } catch (error) {
    console.error("リスト作成エラー:", error);
    res.status(500).json({ message: "サーバーエラーが発生しました" });
  }
});

AppDataSource.initialize().then(() => {
  console.log("データベースと接続しました");
  app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`);
  });
});
