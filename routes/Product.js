const express = require("express");
const router = express.Router();
const Products = require("../tempData/Product");

router.get("/category/all", (req, res) => {
  const data = [];
  for (i = 0; i < Products.length; i++) {
    data.push({
      catId: Products[i].catId,
      catName: Products[i].catName
    });
  }
  res.status(200).send(data);
});

router.post("/limitedItems", (req, res) => {
  const { categories, limit } = req.body;
  const data = [];
  for (i = 0; i < Products.length; i++) {
    if (categories.includes(Products[i].catName)) {
      data.push(Products[i]);
    }
  }
  res.status(200).send(data);
});

router.post("/category/:catId", (req, res) => {
  const { catId } = req.params;
  const data = Products.filter(
    cat => cat.catId.toString() === catId.toString()
  )[0];
  res.status(200).send(data);
});

router.post("/category/:catId/:productId", (req, res) => {
  const { catId, productId } = req.params;
  const category = Products.filter(
    cat => cat.catId.toString() === catId.toString()
  )[0];
  const data = category.products.filter(
    p => p.id.toString() === productId.toString()
  )[0];

  res.status(200).send(data);
});

module.exports = router;
