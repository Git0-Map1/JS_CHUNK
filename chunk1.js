//The Odin Project >>> Foundations >>> Javascript Basics >>> Object Basics
//Assignment 

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// let names = users.map((user)=>{return user.name}) //requires an explicit return
let names = users.map(user=>user.name) //returns the expression automatically

console.log( names ); 