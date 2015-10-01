// Find Average Price

function findAvg(prices) {
  var sum = prices.reduce(function(preVal, currVal) {
    return (preVal + currVal);
  });
  var average = (sum / prices.length);
  return average;
};


