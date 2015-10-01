
(function () { //DON'T POLLUTE THE GLOBAL NAMESPACE

//**************************FIND AVERAGE PRICE*******************************//

var prices = items.map( function(item){ //map the price of each object in the array to a new array
  return item.price;
});
var sum= prices.reduce( function(a,b){ //reduce new array down to the sum of its contents
    return a+b;
})
var avg = sum/prices.length; //divide that sum by the number of its contents to get average
// console.log('The average price is '+ avg);

var converted = avg.toFixed(2); //shorten avg to 2 decimal places

var str = 'The average price is $'+ converted; //create the string that tells you the price

var answer1 = document.querySelector('#answer1'); //link the paragraph element #answer1 from index.html

var textNode = document.createTextNode(str); //create a text node of that string (str)

answer1.appendChild(textNode); //append that node to answer1 (the paragraph)
//***************************************************************//
/*Show me how to get an array of items that cost between $14.00 and $18.00 USD

1970s Coors Banquet Glass Beer Pitcher

The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

Hand Painted Colorful Feather Glass
*/

var prices = items.map( function(item){    //map the price of each object in the array to a new array
  return item.price;
});


























}()); //GLOBAL NAMESPACE FOOL