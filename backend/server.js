import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middlewares/Error.middleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/Product.routes.js";
import usersRoutes from "./routes/User.routes.js";

// env config
dotenv.config();
// database connection
connectDB();

const app = express();
app.use(express.json());
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

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);

// for invaild url
app.use(notFound);

// for server error
app.use(errorHandler);

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
