const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  console.log(req.body, "pip");
  res.status(200).send();
});

app.listen(5000, () => {
  console.log("App listening on PORT 5000 ");
});
