var x=3;
var x=4;
console.log(x);
// it will print 4 because the second declaration of x overwrites the first one.
// thats why we should not use the var
let y = 5;
let a=2; 
let b=y+a;
console.log(b); 
const c=10;
const price1=100;
const price2=200;
const totalPrice=price1+price2;
console.log(totalPrice);

const pi=3.14;
let person = "hasnain";
function hello(){

    document.getElementById("demo").innerHTML = "Hello " + person + "?";
}
function addNumbers(a, b) {
   return a + b;
}