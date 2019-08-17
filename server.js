const express = require("express");
const app = express();
let router = require("./router.js");

app.use("/", router);
app.listen(8000);
