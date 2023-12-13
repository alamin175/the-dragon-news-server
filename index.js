const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const categories = require("./Data/categories.json");
const news = require("./Data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("dragon are coming");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const selectedCategories = news.filter(
      (n) => parseInt(n.category_id) === id
    );
    res.send(selectedCategories);
  }
});

app.listen(port, () => {
  console.log(port);
});
