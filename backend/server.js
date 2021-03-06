import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middlewares/Error.middleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/Product.routes.js";
import usersRoutes from "./routes/User.routes.js";
import orderRoutes from "./routes/Order.routes.js";

// env config
dotenv.config();
// database connection
connectDB();

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
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
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
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
