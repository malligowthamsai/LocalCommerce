const Product = require("../models/Product");

// Add product
exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Search
exports.searchProducts = async (req, res) => {
  const q = req.query.q;

  const products = await Product.find({
    name: { $regex: q, $options: "i" }
  });

  res.json(products);
};