const router = require("express").Router();
const productCtrl = require("../controllers/productController");

router.post("/add", productCtrl.addProduct);
router.get("/", productCtrl.getProducts);
router.get("/search", productCtrl.searchProducts);

module.exports = router;