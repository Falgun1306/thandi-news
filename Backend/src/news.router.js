import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/news", async (req, res) => {
  try {
    const category = req.query.category || "india";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch news"
    });
  }
});

export default router;