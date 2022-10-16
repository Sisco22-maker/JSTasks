
//The second one in the list 


let myString = "EElllzzzzzzzeroo";


let TheNewOne_1 = myString.split("").filter(function(letter,index,array){
return array.indexOf(letter) === index;
}).join("");
//console.log(TheNewOne_1);
// Elzero

//--------------------------------------------------//

//The third one in the list 

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let TheNewOne_2 = myArray.reduce(function(acc,curr,index,array){
if(Array.isArray(curr))
{
let TheTempOne = curr.reduce(function(acc,curr){
return acc+curr;
},acc);
return TheTempOne;
}else
{
   return acc+curr;
}

});
//console.log(TheNewOne_2);

//------------------------------------------------------//


//The 4th one in the list 

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let TheNewOne_3 = numsAndStrings.filter(function(letter){
   return !isNaN(parseInt(letter));
}).map(function(num){
   return -num;
});
//console.log(TheNewOne_3);

//-------------------------------------------------------//


//The 5th one in the list 

let nums = [2, 12, 11, 5, 10, 1, 99];

let TheNewOne_4 = nums.reduce(function(acc,curr){
   return curr%2 === 0 ? acc*curr : acc+curr;
},1);
console.log(TheNewOne_4);

//-----------------------------------------------------//