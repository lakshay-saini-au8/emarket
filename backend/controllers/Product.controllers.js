import asyncHandler from "express-async-handler";
import Product from "../models/Product.model.js";

// @desc Fetch all the products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
export const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    throw new Error("Product not found");
  }
});
