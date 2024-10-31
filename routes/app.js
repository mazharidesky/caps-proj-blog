import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", { title: req.body.title, content: req.body.content });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
