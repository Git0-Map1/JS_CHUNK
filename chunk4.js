//The Odin Project >>> Foundations >>> Javascript Basics >>> Object Basics
//Assignment 
// Get average age
// Write the function getAverageAge(users) that gets an array of objects with 
// property age and returns the average age.

// explicit way
// function getAverageAge(users){
//     let total = users.reduce((accum,user)=>{return accum+user.age},0)
//     let avg = total/users.length
//     return avg
// }

// shorhand way
function getAverageAge(users){
    return users.reduce((accum,user)=>{return accum + user.age},0)/ users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); 