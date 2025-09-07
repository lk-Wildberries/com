import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Приём данных из формы
app.post("/submit", (req, res) => {
  console.log("Пришли данные:", req.body);
  res.json({ success: true, message: "Данные получены!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
