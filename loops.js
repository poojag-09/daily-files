// Print number from 1 to 10

/** for(i=0;i<=10;i++){
    console.log(i);
} **/


// Print even number from 1 to 20

/** for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
} **/


// Sum of first 5 numbers using while

/** let i = 1;
let sum = 0;
while(i<=20){
    sum=sum+i;
    i++;
}
console.log(sum); **/


// Print element of an array using for...of

/** let x = [1,2,3,4];
for(let y of x){
    console.log(y);
} **/

/** let words = ["apple","mango","orange"];
for(let word of words){
    console.log(word);
} **/

/** let x = ["a","b","c"];
for(let c of x){
    console.log(c);
} **/


// Print multiplication table of 5

/** let num = 5;
for(let i = 1; i<=10; i++){
    console.log('${num} * ${i} = ${num*i}');
} **/


// Print array elements using for loop

/** let arr = ["apple","mango","orange"];
for(let i = 0; i<=arr.length; i++){
    console.log(arr[i]);
} **/

/** let arr = ["apple","mango","ornage"];
for(let x of arr){
    console.log(x);
} **/


// Iterate object properties using for...in

/** let person = {name:"pooja",age:25,city:"lxr"};
for(let key in person){
    console.log(key+ ":" + person[key]);
} **/


// Reverse an array using a loop

/** let arr = [1,2,3,4];
let x = [];
for(let i = arr.length - 1; i>=0; i--){
    x.push(arr[i]);
}
console.log(x); **/ 


/** let arr = [1,2,3];
let result = [];
for(let i = arr.length - 1; i>=0; i--){
    console.log(arr[i]);
} **/


/**let sum = 0;
for(let i = 1; i<=5; i++){
    sum = sum+i;
}
console.log("sum:" ,sum); **/


/** let str = "abc";
let res = "";
for(let i=str.length-1; i>=0; i--){
    res = res+str[i];
    console.log(res);
} **/


/** let str = "xyz";
let res = "";
for(let i=str.length-1; i>=0; i--){
    res += str[i];
}
console.log(res); **/


// Loop using while to count down

/** let count = 5;
while(count>0){
    console.log(count);
    count--;
} **/


// Use do...while to print 1 to 5

/** let num = 1;
do{
    console.log(num);
    num++;
}while(num<=5); **/


// Loop through object using for...in

/** let person = {name:"efg",city:"hbl"};
for(let key in person){
    console.log(key+":"+person[key]);
} **/

/** let fruits = {name:"apple",color:"red"};
for(let key in fruits){
    console.log(key+":"+fruits[key]);
} **/


// Loop through array using for...of

let colors = ["red","black","white"];
for(let color of colors){
    console.log(color);
}
