const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../db");
const Products = require("../tempData/Product");

//--------------------------------
router.get("/", async (req, res) => {
  const userData = await jwt.decode(req.query.token, "saiyan");
  const userId = userData.id;

  //----------------
  const basketitems = await getUserBasket(userId);
  return res.status(200).send(basketitems);
});

//--------------------------------
router.post("/add/product", async (req, res) => {
  const { token, productid, categoryid, price, id } = req.body;

  if (productid === undefined && id === undefined)
    return res.status(400).send("Provide Valid Data");

  //----------------
  const userData = await jwt.decode(token, "saiyan");
  const userid = userData.id;

  if (id) {
    try {
      //----------------
      let basketitems = await db
        .select("*")
        .from("basketitems")
        .where({ id })
        .returning("*");

      let basketitem = basketitems[0];

      //----------------
      if (!(basketitem.userid.toString() === userid.toString()))
        return res.status(401).send("Access denied");

      let productDetail = Products.filter(
        p => p.id === basketitem.productid
      )[0];

      //----------------
      await db("basketitems")
        .where({ id })
        .update({
          quantity: basketitem.quantity + 1,
          total: basketitem.total + productDetail.price.amount
        });
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    //----------------
    try {
      let products = await db
        .select("*")
        .from("basketitems")
        .where({ productid, userid })
        .returning("*");

      //----------------
      if (!products.length) {
        await db("basketitems")
          .insert({
            productid,
            categoryid,
            userid,
            quantity: 1,
            total: price
          })
          .returning("*");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }

  //----------------
  basketitems = await getUserBasket(userid);
  return res.status(200).send(basketitems);
});

//--------------------------------
router.post("/decrement/product", async (req, res) => {
  const { token, id } = req.body;

  //----------------
  const userData = await jwt.decode(token, "saiyan");
  const userid = userData.id;

  //----------------
  let basketitems = await db
    .select("*")
    .from("basketitems")
    .where({ id })
    .returning("*");
  let basketitem = basketitems[0];

  //----------------
  if (!(basketitem.userid.toString() === userid.toString()))
    return res.status(401).send("Access denied");

  if (basketitem.quantity <= 1) {
    await db
      .delete("*")
      .from("basketitems")
      .where({ id });
  } else {
    //----------------
    await db("basketitems")
      .where({ id, userid })
      .update({
        quantity: basketitem.quantity - 1,
        total: basketitem.total - 10
      });
  }

  //----------------
  basketitems = await getUserBasket(userid);
  return res.status(200).send(basketitems);
});

//--------------------------------
const getUserBasket = async userid => {
  const userbasket = await db
    .select("*")
    .from("basketitems")
    .where({ userid })
    .returning("*");

  //----------------
  let basketCollection = [];

  //----------------
  for (i = 0; i < userbasket.length; i++) {
    let data = {};

    //----------------
    let product = Products.filter(
      prd => prd.id.toString() === userbasket[i].productid.toString()
    )[0];

    //----------------

    data.productid = product.id;
    data.id = userbasket[i].id;
    data.productName = product.name;
    data.productImg = product.images[0];
    data.quantity = userbasket[i].quantity;
    data.total = userbasket[i].total;

    //----------------
    basketCollection.push(data);
  }

  //----------------
  return basketCollection;
};

module.exports = router;
