import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

// env config
dotenv.config();
// database connection
connectDB();

const app = express();
// // enables cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.filter((p) => p._id === req.params.id);
  res.json(product);
});

// server connection
const PORT = process.env.PORT || 5002;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `Server is running in ${process.env.NODE_ENV} at ${PORT} no.`.yellow.bold
    );
  }
});
