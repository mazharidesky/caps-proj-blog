import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Our first express app");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
