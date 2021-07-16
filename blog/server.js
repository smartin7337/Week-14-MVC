const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./routes/routeControls");
// const helpers = require("./utils/helpers");
const sequelize = require("./config/connect");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const hbs = exphbs.create({ helpers });
// const sess = {
//   secret: "a pig fell in a mudpuddle",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
// app.use(session(sess));
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
