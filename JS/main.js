
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
//********************************NUMBER 2*******************************//

var A =[]  //empty array to push the correct items to
var priceRange = items.forEach(function(a){      //forEach that finds items with prices between 14 and 18
  if(a.price > 14 && a.price < 18){
    A.push(a.title);                            //pushed titles to new array A
    }
})

A.forEach(function(a){
  var answer2 =document.querySelector('#answer2');
  var linebreak= document.createElement('br')
  var textNodeYeah = document.createTextNode(a);
  answer2.appendChild(textNodeYeah);
  answer2.appendChild(linebreak);
});

// var item1= A[0];                              //setting variables for the items
// var item2= A[1];
// var item3 =A[2];
// var answer2a = document.querySelector('#answer2a');
// var answer2b = document.querySelector('#answer2b');
// var answer2c = document.querySelector('#answer2c');
// var textNode2 = document.createTextNode(item1);  
// var textNode3= document.createTextNode(item2);
// var textNode4= document.createTextNode(item3);
// answer2a.appendChild(textNode2);
// answer2b.appendChild(textNode3);
// answer2c.appendChild(textNode4);

//*********************************Number 3**************************************//


var B =[]  
var currency = items.forEach(function(a){
    if(a.currency_code==='GBP')      
    B.push(a.title + ' costs ' + '£'+ a.price);                            
    })
// })
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
    }
})


var answer4 = document.querySelector('#answer4'); 
C.forEach(function(a){
  var textNode6 = document.createTextNode(a);
  var linebreak =document.createElement('br');
  answer4.appendChild(textNode6);
  answer4.appendChild(linebreak);
});

//************************************Number5******************************************//

var D=[]
var E=[]
var materials = items.forEach(function(a){
  var numMat = a.materials;
  var numMatLength= numMat.length;
  if (numMatLength>7){
  D.push(a);
  // console.log(D) d.
 }
});

var answer5= D.forEach(function(a){
  var ans5= document.querySelector('#answer5');
  var textNode7 = document.createTextNode(a.title);
  var linebreak =document.createElement('br');
  ans5.appendChild(textNode7);
  ans5.appendChild(linebreak);
  // var materials = D.materials;
  a.materials.forEach(function(b){
    var ans5B = document.querySelector('#answer5');
    var textNode10 = document.createTextNode(b);
    var linebreak = document.createElement('br');
    ans5B.appendChild(textNode10);
    ans5B.appendChild(linebreak);
  })
  })







//****************************************Number 6***************************************//

var H=[]
var madeBy = items.filter(function(a){
  if (a.who_made === 'i_did'){
    H.push('1');
      }
});

var hNum = H.length;
var final = hNum+" were made by their sellers."
var answer6= document.querySelector('#answer6');
var textNode8 = document.createTextNode(final);
answer6.appendChild(textNode8);

















})(); //GLOBAL NAMESPACE FOOL