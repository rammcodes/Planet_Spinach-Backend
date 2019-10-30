const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await db("user").insert({ name, email, secret: password }, [
      "email"
    ]);
    res.send(user);
  } catch (err) {
    res.status(400).send(err.detail);
  }
});

module.exports = router;
