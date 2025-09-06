import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Приём данных
app.post("/submit", (req, res) => {
  console.log("Пришли данные:", req.body);

  // Сохраним в файл (каждую запись на новой строке)
  fs.appendFileSync("data.jsonl", JSON.stringify(req.body) + "\n");

  res.json({ ok: true, message: "Данные получены и сохранены!" });
});

// Тестовый эндпоинт
app.get("/", (req, res) => {
  res.send("✅ Сервер работает!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
