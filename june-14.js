/** let age=18;
if (age<=18) {
    console.log("You are minor")

} **/


// Check age for voting

/** let age=16;
if (age>=18) {
    console.log("Major")
}else{
    console.log("Minor")
} **/


/** let score = 75;

if(score>=90){
    console.log("Grade A")
}else if(score>=70){
    console.log("Grade B")
}else{
    console.log("Grade C")
} **/



// Even or Odd

/** let num=28;
if(num % 2==0){
    console.log("Even")
}else{
    console.log("Odd")
} **/


// Check for sign

/** let num = 21;
if(num>0){
    console.log("number is positive")
}else if(num<0){
    console.log("number is negative")
}else{
    console.log("number is zero")
} **/


// Grade Checker

/** let score=85;
if(score>=90){
    console.log("Grade A");
}else if(score>=80){
    console.log("Grade B");
}else if(score>=70){
    console.log("Grade C");
}else if(score>=60){
    console.log("Grade D");
}else{
    console.log("Grade E");

} **/


// Leap year checker

/** let year = 2024;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Its a leap year");
}else {
    console.log("Its not a leap year");
} **/


//Login system

/** let username = "admin"
let password = "1234"

if(username == "admint" && password == "1234"){
    console.log("Login auccessful");
}else{
    console.log("Failed");
} **/


// Day of the week

/** let day = 9;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("no scuh a day");
    

} **/


// Largest of 3 numbers

/** let a = 10, b = 50, c = 50;
if(a>=b && a>=c) {
    console.log("a is largest")
}else if (b>=a && b>=c){
    console.log("b is largest")
}else{
    console.log("c is largest")
} **/


// Check year is century or not

/** let year = 1000;
if( year % 100 == 0){
    console.log("is century");
}else{
    console.log("not a century");
} **/


// Check if number is divisible by 3,5 and 9

/** let num=15;
if(num % 3 == 0 && num % 5 == 0 && num & 9 == 0){
    console.log("is divisible by 3,5 and 9");
}else{
    console.log("not divisible by 3,5 and 9");
} **/


// Simple calculator

/** let a=2;
let b=4;
let operator="%";

switch (operator){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Invalid")
        break;
} **/


// Check if number is multiple of 2,3 or both

/** let num = 15;

if(num % 2 == 0 && num % 3 == 0){
    console.log("num is multiple of 2 and 3");
}else if(num % 2 == 0){
    console.log("num is multiple of 2");
}else{
    console.log("num is multiple of 3");
} **/


// Traffic light simulator

/** let signal = "blue"

if(signal == "red"){
    console.log("stop");
}else if(signal == "yellow"){
    console.log("get ready");
}else if(signal == "green"){
    console.log("go");
}else{
    console.log("wrong route");
} **/


// Check if a number is vowel or constant

/** let char = "+";

if("aeiouAEIOU".includes(char)){
    console.log("is vowel");
}else if(/[a-zA-Z]/.test(char)){
    console.log("is constant");
}else{
    console.log("not a letter");
} **/


// To check number is equals to 10 or not

/** let num = 10;

if(num==10){
    console.log("num is equals to 10");
}else if(num>10){
    console.log("num is greater than 10");
}else if(num<10){
    console.log("num is less than 10");
}else{
    console.log("Invalid number");
} **/


//Check if a number is within specific range

/** let temp = 19;

if(temp>=20 && temp<=30){
    console.log("temp is in specific range");
}else{
    console.log("temp is not in specific range");
} **/


// Check if a number is a multiple of another

/** let a = 2, b = 3;

if( a % b == 0){
    console.log('${a} is a multiple of ${b}');
}else{
    console.log('${a} is not a multiple of ${b}');
} **/


// Check if string is empty or not

let input = "";

if( input == ""){
    console.log("string is empty");
}else{
    console.log("you entered:",input);
}










