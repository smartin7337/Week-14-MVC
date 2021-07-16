const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.render("home");
});

router.get("/addpost", (req, res, next) => {
  res.render("addpost");
});

module.exports = router;
