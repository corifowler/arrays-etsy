// Get array of all item prices

function getPrices(items) {
  var prices = items.filter(function(price){
    return items.price;
  });
  return prices;
};


// Find Average Price

function findAvg(prices) {
  var sum = prices.reduce(function(preVal, currVal) {
    return (preVal + currVal);
  });
  var average = (sum / prices.length);
  return 'The average price is ' + average + '.';
};


