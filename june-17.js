// Print numbers from 1 to 10

/** function print(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
print(); **/


// Sum of first 5 natural numbers

/** function sum(){
    let sum = 0;
    for(let i = 1; i<=5; i++){
        sum=sum+i;
    }
    console.log(sum);
}
sum(); **/


// Print even numbers up to a given number

/** function num(limit){
    for(let i=0;i<=limit;i+=2){
        console.log(i);
    }
}
num(10); **/


// Print array elements

/** function array(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
array(["a","b","c"]); **/


// Reverse a string

/** function reversed(str){
    let res = "";
    for(let i=str.length-1; i>=0; i--){
        res+=str[i];
    }
    console.log(res);
}
reversed("Abc"); **/


// Countdown from 5 using while

/** function count(){
    let num = 4;
    while(num > 0){
        console.log(num);
        num--;
    }
}
count(4); **/


// Print 1 to 5 using do...while

/** function sum(){
    let i = 0;
    do{
        console.log(i);
        i++;
    }while(i<=5)
}
sum(); **/


// Add two numbers

/** function add(a,b){
    return a+b;
}
console.log(add(8,8)); **/


// Check even or odd

/** function isEven(i){
    return i % 2 == 0;
}
console.log(isEven(11)); **/


// Find maximum of two numbers

/** function max(a,b){
    return a > b ? a : b;
}
console.log(max(11,20));

OR **/

/** function max(a,b){
    if(a>b){
        console.log("a is greater");
    }else{
        console.log("b is greater");
    }
}
max(20,45); **/


// Reverse a string

/** function reversed(str){
    let res = "";
    for(let i=str.length-1;i>=0;i--){
        res+=str[i];
    }
    console.log(res);
}
reversed("hello"); **/


// Factorial of number

/** function fact(n){
    if(n === 0 || n === 1)return 1;
    return n * fact(n-1);
}
console.log(fact(5)); **/


// Check if a string is a palindrome

/** function pali(str){
    return str == str.split('').reverse().join('');
}
console.log(pali("gadag")); **/


// Count vowels in string

/** function countV(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char))
            count++;
    }
    return count;
}
console.log(countV("hello")); **/


// Sum of elements in an array

/** function sumA(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumA([1,2,3])); **/


// Fibonacci sequence up to n terms

/** function fib(n){
    let a = 0, b = 1;
    for(let i=0; i<n; i++){
        console.log(a);
        [a,b] = [b, a+b];
    }
}
console.log(fib(5)); **/


// Check prime numbers

/** function prime(n){
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return false;
    }
    return true;
}
console.log(prime(17)); **/










