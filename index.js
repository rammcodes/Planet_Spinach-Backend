const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/User");
const product = require("./routes/Product");
const basket = require("./routes/Basket");
const admin = require("./routes/Admin");

//-----------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//-----------------
app.get("/", (req, res) => res.send("Spinaccch"));
app.use("/user", user);
app.use("/product", product);
app.use("/basket", basket);
app.use("/admin", admin);

//-----------------
app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening on PORT ${process.env.PORT || 5000}`);
});
