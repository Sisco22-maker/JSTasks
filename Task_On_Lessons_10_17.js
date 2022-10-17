
//The first task in the list
// Add Variables Here

let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
console.log(typeof(numberOne+""+numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`));// Template Literals Way => String

console.log(numberOne+"\n"+numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log( `${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/
//----------------------------------------//

//The second task in the list

//this task you have to modify in the HTML page and create a element in the page with id = elzero
//console.log(elzero.innerHTML); // object
//console.log(typeof elzero); // object
//-----------------------------------------//

//The third task in the list

//Escape Characters is a nightmare for me at any programming lanuage
console.log("\`I am In \n \\ Love \\ \"\"\" ''' \n\+\+ With \+\+ \n \\ \"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`");

//-----------------------------------------//

//The 4th task in the list
let a = 21;
let b = 20;
console.log("_"+a+"_"+(b+""+a+"_").repeat(3)+b+"_")
//----------------------------------------------//