const express = require("express");
const router = express.Router();
const math = require("../math");
router.get("/", function (req, res, next) {
  const { numToCalculate } = req.query;
  const isNumToCalculateProvided = Boolean(numToCalculate);
  if (isNumToCalculateProvided) {
    res.render("fibonacci", {
      title: "Calculate Fibonacci numbers",
      numToCalculate,
      calculatedValue: math.fibonacci(numToCalculate),
    });
  } else {
    res.render("fibonacci", {
      title: "Calculate Fibonacci numbers",
      calculatedValue: undefined,
    });
  }
});

module.exports = router;
