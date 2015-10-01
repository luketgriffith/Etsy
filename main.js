
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

//*********************************Number 3**************************************//
//Which item has a "GBP" currency code? Display it's name and price.

//1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
var B =[]  //empty array to push the correct items to
var priceRange = items.forEach(function(a){      //forEach that finds items with GBP
  if(a.currency_code === 'GBP'){
    B.push(a.title + ' costs ' + '£'+ a.price);                            //pushed title and price to new array B
    }
})
var gbp= B[0];
// console.log(gbp);
var answer3=document.querySelector('#answer3');
var textNode5 = document.createTextNode(gbp);
answer3.appendChild(textNode5);


//************************************Number 4***************************************//
var C =[];

var materials = items.filter(function(a){
  var materials2= a.materials;
  if (materials2.indexOf('wood') !== -1){
    C.push(a.title);
    // console.log(C);
  }
})

// element.appendChild(br);

var answer4 = document.querySelector('#answer4'); //Figure out how to make line breaks come over with answers
C.forEach(function(a){
  var textNode6 = document.createTextNode(a);
  answer4.appendChild(textNode6);
});

//************************************Number5******************************************//









}()); //GLOBAL NAMESPACE FOOL