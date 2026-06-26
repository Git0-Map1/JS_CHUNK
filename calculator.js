// The goal for this exercise is to create a calculator that does the following:

// add(): take two numbers and return their sum
// subtract(): take two numbers and return the result after subtracting the second from the first
// sum(): take an array of numbers and add all the numbers together
// multiply(): take an array of numbers and multiply all the numbers together
// power(): take two numbers(base and exponent) and return the result of raising the base to that exponent
// factorial(): given a single number, find its factorial
// Please fill out each function with your solution.Make sure to return the value so you can test it in Jest! To see the expected value, 
// take a look at the.spec.js file that houses the Jest test cases.


const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return b-a;
}

const sum = function (arr){
    return arr.reduce((totalSum, num)=>{
        return totalSum+num;
    })
}

const multiply = function(arr){
    return arr.reduce((totalSum, num)=>{
        return totalSum * num;
    })
}

const power = function(base,exponent){
    return base**exponent;
}

const factorial = function(n){
    let product = 1;
    for(let i=n; i>0; i--){
        product *=i
    }
    return product 
}

let a = [1,2,3,4,5]

console.log(add(1,2));
console.log(subtract(2,3))
console.log(sum(a))
console.log(multiply(a))
console.log(power(5,2))
console.log(factorial(6))