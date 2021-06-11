const express = require("express");
const handlebars = require("express-handlebars")
const routes = require("./routes");
const app = express();
app.engine("handlebars", handlebars());
app.set ("view engine", "handlebars")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", routes);

app.listen(3000);

