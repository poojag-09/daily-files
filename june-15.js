// push() - add to end

/** let num = ["1","2","3"];
num.push("4");
console.log(num); **/

/** let fruits = ["apple","mango"];
fruits.push("orange");
console.log(fruits); **/

/** let x = ["a","b"];
x.push("c");
console.log(x); **/


// pop() - remove from end

/** let fruits = ["apple","mango","orange"];
fruits.pop();
console.log(fruits); **/

/** let letters = ["a","b","c","d"];
letters.pop();
console.log(letters); **/

/** let numbers = ["1","2","3","4"];
numbers.pop();
console.log(numbers); **/


// unshift() - add to a beginning

/** let fruits = ["apple","mango"];
fruits.unshift("orange");
console.log(fruits); **/

/** let num = ["1","2","3"];
num.unshift("0");
console.log(num); **/

/** let x = ["b","c","d"];
x.unshift("a");
console.log(x); **/


// Shift() - remove from beginning

/** let fruits = ["apple","mango","orange"];
fruits.shift();
console.log(fruits); **/

/** let num = ["1","2","3"];
num.shift();
console.log(num); **/

/** let x = ["a","b","c","d"];
x.shift();
console.log(x); **/


// includes() - check if item exists

/** let fruits = ["apple","mango"];
console.log(fruits.includes("apple")); **/

/** let x = [1,2,3,4];
console.log(x.includes(4)); **/

/** let y = ["a","b","c","d"];
console.log(y.includes("e")); **/


// indexOf - find index

/** let fruits = ["apple","mango","orange"];
console.log(fruits.indexOf("banana")); **/

/** let x = ["a","b","c","d"];
console.log(x.indexOf("b")); **/

/** let num = [1,2,3,4];
console.log(num.indexOf(3)); **/


// Array.isArray - checks whether is array or not

/** let fruits = ["apple","mango","orange"];
console.log(Array.isArray(fruits)); **/

/** let x = ("a","b","c");
console.log(Array.isArray(x)); **/

/** let num = ["true", "null", "5", "yes"];
console.log(Array.isArray(num)); **/

/** let a = [1,2,3];
console.log(Array.isArray(a)); **/


// concat() - marge arrays

/** let arr1 = [1,2,3];
let arr2 = [4,5,6];
let x = arr2.concat(arr1);
console.log(x); **/

/** let a = ["apple","mango"];
let b = ["orange","grapes"];
let c = a.concat(b);
console.log(c); **/

/** let x = ["a","b","c"];
let y = ["d","e","f"];
let z = x.concat(x);
console.log(z); **/


// slice() - extract portion

/** let fruits = ["apple","mango","orange","banana"];
let z = fruits.slice(0,2);
console.log(z); **/

/** let x = ["a","b","c","d"];
let t = x.slice(1);
console.log(t); **/

/** let num = [1,2,3,4,5,6];
let z = num.slice(2,4);
console.log(z); **/


// splice() - remove/insert element

/** let fruits = ["apple","mango","orange","banana"];
fruits.splice(1,2);
console.log(fruits); **/

/** let x = [1,2,3,4,5,6];
x.splice(1,3);
console.log(x); **/


// Reverse - reversing array

/** let arr = [1,2,3];
arr.reverse();
console.log(arr); **/

/** let x =["a","b","c","d"];
x.reverse();
console.log(x); **/


// join() - convert to string

/** let x = ["apple","mango","orange"];
let y = x.join("");
console.log(y); **/

/** let x = ["1","2","3"];
let z = x.join(" ");
console.log(x); **/

/** let y = ["a","b","c","d"];
let z = y.join("");
console.log(y); **/


// every() - check if all meet condition

/** let x = [2,4,6];
let y = x.every(z => z % 2 == 0);
console.log(y); **/


// some() - check if at least one match

let x = [3,2,9,4,6];
let t = x.some(y => y % 3 == 0);
console.log(t);










