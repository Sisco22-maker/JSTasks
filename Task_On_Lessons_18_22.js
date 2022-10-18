//The first task in the list 

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

//-----------------------------------------//


//The second Task in the list 

//بص دول إلي جم في ماغي حاليا لإن الساعة 8 الصبح وعاوز أنام والله بس أنت أبدع بقى متفقين!:)

let num = 3;

// Solution One
console.log(num+ +true + +true + +true); // 6

// Solution Two
console.log(++num + +true + +true); // 6

// Soultion Three
console.log(--num*(+true + +true)); // 6

// Soultion Four
console.log(num*num-num); // 6

// Solution Five
//مش عارف سبحان الله حوار اني أجمعه على نفسة دي مجاتش في بالي غير في الاخر :)
console.log(num+num); // 6

// Solution Six
console.log(num**(num-true)-num); // 6

//---------------------------------------//


//The third task in the list
//الزيرو تقريبا بيعلمني الأدب لكن بجافا سكربت :)

let sNum = "10";

// Solution One
//نبدأ بالسهل بالصلاة على النبي ("صلى الله عليه وسلم")
console.log(+sNum + +sNum); // 20

// Solution Two
console.log(Number(sNum)+Number(sNum)); // 20

// Solution Three

/*
بص لو مش فاهم ربنا هداني إني أعمل إيه فركز!
كل الي عملته إني حاولت أكون من الرقم ده الرقم -> 110
وحاولت أستخرج الرقم  -> 990 
إلي هم ناتج طرحهم ->20 أصلاً
*/
console.log((+(sNum+sNum) - `${sNum-1}${sNum - 1}${sNum%sNum}`)); // 20

// Solution Four
console.log(sNum*(true+true)); // 20


//--------------------------------------//

//The 4th task in the list 
let points = 10;

// Write Your Code Here
let helper = points;
++points;
points++;
points+=true;

console.log(points); // 13

// Write Your Code Here
points = helper;
--points;
points--;
console.log(points); // 8;

//--------------------------------------//
