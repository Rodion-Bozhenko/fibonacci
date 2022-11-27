const express = require("express");
const router = express.Router();
const math = require("../math");
router.get("/", async function (req, res, next) {
  const { numToCalculate } = req.query;
  const isNumToCalculateProvided = Boolean(numToCalculate);
  const calculatedValue = await math.fibonacciLoop(numToCalculate);
  if (isNumToCalculateProvided) {
    res.render("fibonacci", {
      title: "Calculate Fibonacci numbers",
      numToCalculate,
      calculatedValue,
    });
  } else {
    res.render("fibonacci", {
      title: "Calculate Fibonacci numbers",
      calculatedValue: undefined,
    });
  }
});

module.exports = router;
