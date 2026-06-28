// Exercise 16 - Find the Oldest
// Given an array of objects representing people with a birth and death year, return the oldest person.

// Now that you've reached the final exercise, 
// you should be fairly comfortable getting the information you need from test case(s).
// Take a look at how the array of objects is constructed in this exercise's test cases to help you
// write your function.

// Hints
// You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// There are many ways of doing this using built-in array methods like reduce, or even chaining multiple!
// One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age 
// as of today.


people = [{
    name: "Lie",
    yearOfBirth: 1994,
    yearOfDeath: 2024,
    },
    {
    name: "Wang",
    yearOfBirth: 1912,
    yearOfDeath: 2000,
    },
    {
    name: "Kang",
    yearOfBirth: 1900,
    yearOfDeath: 1990,
    }
]


const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function(people){
    return people.reduce((oldest, currentPerson)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        
        return oldestAge < currentAge ? currentPerson : oldest;
    })
}
const person = findTheOldest(people)

console.log(`The oldest person in array of objects is ${person.name}. His year of birth is ${person.yearOfBirth}
and year of death is ${person.yearOfDeath}. So, he live upto ${getAge(person.yearOfBirth, person.yearOfDeath)} years old.` )
