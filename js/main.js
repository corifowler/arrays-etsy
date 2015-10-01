// (function () {

// Get array of all item prices

var prices = items.map( function(item){
  return item.price;
});

console.log(prices);


// Find Average Price

function findAvg(prices) {
  var sum = prices.reduce(function(preVal, currVal) {
    return (preVal + currVal);
  });
  var average = (sum / prices.length);
  return 'The average price is $' + average.toFixed(2) + '.';
};



// }());
