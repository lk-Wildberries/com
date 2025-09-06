import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// тестовая страница
app.get("/", (req, res) => {
  res.send("✅ Сервер работает!");
});

// обработка данных
app.post("/submit", (req, res) => {
  console.log("Пришли данные:", req.body);
  res.json({ ok: true, message: "Данные получены!" });
});

app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
