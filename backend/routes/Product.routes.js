import express from "express";
import { protect, admin } from "../middlewares/Auth.milddleware.js";
import {
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/Product.controllers.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
