const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validator = require("validator");
const db = require("../db");

//--------------------------------
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  //----------------
  if (!validator.isLength(name, { min: 3 }))
    return res.status(400).send("Name should be atleast 3 charecters");
  if (!validator.isEmail(email))
    return res.status(400).send("Not a valid email");
  if (!validator.isLength(password, { min: 6 }))
    return res.status(400).send("Password should be atleast 6 characters");

  //----------------
  let users = await db
    .select("*")
    .from("users")
    .where({ email })
    .returning("*");

  //----------------
  let user = users[0];

  //----------------
  if (user)
    return res.status(400).json("User already exist! Try Logging In :)");

  //----------------
  try {
    users = await db("users").insert({ name, email, secret: password }, [
      "id",
      "name",
      "email"
    ]);
    user = users[0];
    const token = await jwt.sign({ id: user.id }, "saiyan");
    return res
      .status(200)
      .send({ name: user.name, email: user.email, token: token });
  } catch (err) {
    return res.status(400).send(err);
  }
});

//--------------------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //----------------
  if (!validator.isEmail(email))
    return res.status(400).send("Not a valid email");
  if (!validator.isLength(password, { min: 6 }))
    return res.status(400).send("Password should be atleast 6 characters");

  //----------------
  const users = await db
    .select("*")
    .from("users")
    .where({ email })
    .returning("*");

  //----------------
  const user = users[0];

  //----------------
  if (!user) return res.status(404).send("Invalid email or password");

  //----------------
  if (!(user.secret.toString() === password.toString())) {
    return res.status(404).send("Invalid email or password");
  }

  //----------------
  const token = await jwt.sign({ id: user.id }, "saiyan");
  return res.status(200).send({ name: user.name, email: user.email, token });
});

module.exports = router;
