const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./routes/User");
const product = require("./routes/Product");

//-----------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//-----------------
app.use("/user", user);
app.use("/product", product);

//-----------------
app.listen(5000, () => {
  console.log("App listening on PORT 5000 ");
});