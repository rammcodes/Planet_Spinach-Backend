const express = require("express");
const router = express.Router();
const Products = require("../tempData/Product");
const db = require("../db");

router.get("/category/all", async (req, res) => {
  let categories = await db
    .select("*")
    .from("categories")
    .returning("*");
  res.status(200).send(categories);
});

router.post("/limitedItems", async (req, res) => {
  const { categories, limit } = req.body;

  const limitedCat = [];

  for (i = 0; i < categories.length; i++) {
    const cats = await db
      .select("*")
      .from("categories")
      .where({ name: categories[i] })
      .returning("*");
    const cat = cats[0];
    limitedCat.push(cat);
  }

  const data = [];

  for (i = 0; i < limitedCat.length; i++) {
    let catObj = {
      catId: limitedCat[i].id,
      catName: limitedCat[i].name,
      products: []
    };
    for (j = 0; j < Products.length; j++) {
      if (Products[j].catId.toString() === catObj.catId.toString()) {
        if (catObj.products.length < limit) {
          catObj.products.push(Products[j]);
        } else {
          break;
        }
      }
    }
    data.push(catObj);
  }

  res.status(200).send(data);
});

router.post("/category/:catId", async (req, res) => {
  const { catId } = req.params;
  const category = await db
    .select("*")
    .from("categories")
    .where({ id: catId });
  let data = Products.filter(prd => prd.catId.toString() === catId.toString());
  let newData = {
    catName: category[0].name,
    products: data
  };
  return res.status(200).send(newData);
});

router.post("/single/:productId", (req, res) => {
  const { productId } = req.params;
  const data = Products.filter(
    p => p.id.toString() === productId.toString()
  )[0];
  res.status(200).send(data);
});

module.exports = router;
