const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/news", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 9;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching from NewsAPI:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch news",
      articles: [],
      totalResults: 0,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});