
var prices = items.price;

var findAvg= function(prices){
  var avg= prices.reduce(function(finalValue, currentValue){
    return finalValue + currentValue;
}); 
  var avgFinal= avg/prices.length;
  return avgFinal;
  console.log(avgFinal);
  console.log('meow')
}