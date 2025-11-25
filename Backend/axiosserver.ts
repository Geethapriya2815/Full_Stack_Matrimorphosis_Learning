import express from "express";
import axios from "axios";
const app = express();
const PORT = 3000;
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
