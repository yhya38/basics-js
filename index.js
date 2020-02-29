// Data types

var str = "yahiya";
console.log(typeof str);

var num = 50;
console.log(typeof num);

var yes = true;
console.log(typeof yes);

var obj = null;
console.log(typeof obj);

var ntdef;
console.log(typeof ntdef);

// conditional statements
var a = 10;
b = 20;
if (a > b) console.log("a is greater");
else console.log("b is greater");

c = 1;

switch (c) {
  case 0:
    console.log("c is zero");
    break;
  case 1:
    console.log("c is positive");
    break;
  default:
    console.log("c is negative");
    break;
}

// looping statements
console.log("iam while");

var j = 0;
while (j < 10) {
  console.log("the number is ", j);
  j++;
}

console.log("iam do while");

var k = 0;
do {
    console.log("the number is " +k);
    k++;
    
} while (k < 6)

console.log("iam for");

for (var i = 0; i < 3; i++){
    console.log("the number is " +i);
    
}

// Function

console.log("iam function");

var num1 = 5;
var num2 = 10;
function mul(num1, num2) {
    var num = num1 * num2;
    return num;
}
console.log(mul(num1,num2));



