
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
var A =[]  //empty array to push the correct items to
var priceRange = items.forEach(function(a){      //forEach that finds items with prices between 14 and 18
  if(a.price > 14 && a.price < 18){
    A.push(a.title);                            //pushed titles to new array A
    }
})
var item1= A[0];                              //setting variables for the items
var item2= A[1];
var item3 =A[2];
var answer2a = document.querySelector('#answer2a');
var answer2b = document.querySelector('#answer2b');
var answer2c = document.querySelector('#answer2c');
var textNode2 = document.createTextNode(item1);  
var textNode3= document.createTextNode(item2);
var textNode4= document.createTextNode(item3);
answer2a.appendChild(textNode2);
answer2b.appendChild(textNode3);
answer2c.appendChild(textNode4);


// var newPrices = items.map( function(item, title){    //map the price of each object in the array to a new array
//   return item.price, item.title;
// });
// var priceRange = prices.filter(function(a){
//   return a > 14 && a < 18;

// })
// console.log(priceRange);
// var title= priceRange.forEach(function(a){
//   return items.title;
// })

// console.log(title);





















}()); //GLOBAL NAMESPACE FOOL