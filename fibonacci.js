// Create a function that returns a specific member of the Fibonacci sequence:

// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
//  In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. To learn more about Fibonacci 
// sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8

const fibonacci = function(n){
    
    let count;
    if(typeof n !== 'number'){
        count = parseInt(n)
    }
    else{
        count = n
    }
    
    if(count<0) return "oops"
    if(count == 0) return 0;
    
    let firstPrev = 1
    let secondPrev = 0

    //finding the number in the nth position of fibonacci sequence
    //first prev = last number
    //second prev = before last number

    for(i=3; i<=count; i++){
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev
        firstPrev = current
    }
    return firstPrev
}

console.log(fibonacci(6))