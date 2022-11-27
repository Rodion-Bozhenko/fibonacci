exports.fibonacci = function (n) {
  if (n === 0) return 0;
  else if (n === 1 || n === 2) return 1;
  else return exports.fibonacci(n - 1) + exports.fibonacci(n - 2);
};

exports.fibonacciLoop = function (num) {
  const n = +num;
  const fibonacciNums = [];
  fibonacciNums[0] = 0;
  fibonacciNums[1] = 1;
  fibonacciNums[2] = 1;
  for (let i = 3; i <= n; i++) {
    fibonacciNums[i] = fibonacciNums[i - 2] + fibonacciNums[i - 1];
  }
  return fibonacciNums[n];
};
