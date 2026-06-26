// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

// some palindromes:
// A car, a man, a maraca.
// Rats live on no evil star.
// Lid off a daffodil.
// Animal loots foliated detail of stool lamina.
// A nut for a jar of tuna.
// palindromes('racecar') // true
// palindromes('tacos') // false

const palindrome = function(word){
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const sortedWord = word.toLowerCase().split("")
                       .filter((character)=>alphanumerical.includes(character)).join("")

    const reversedWord = sortedWord.split("").reverse().join("");

    if(sortedWord === reversedWord){
        return "its palindrome"
    }
    else{
        return "not a palindrome"
    }
}
console.log(palindrome("racecaror"))
console.log(palindrome("A car, A man, a maraca"))