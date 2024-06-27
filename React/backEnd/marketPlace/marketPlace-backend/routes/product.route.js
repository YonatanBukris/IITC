const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductsCount,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/count", getProductsCount);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);

module.exports = router;
