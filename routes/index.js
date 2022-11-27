const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to the Fibonacci Calculator" });
});

router.get("/error", function (req, res, next) {
  next({
    status: 404,
    message: "Fake error",
  });
});

module.exports = router;
