// 1. Re-write the .map() function

Array.prototype.mapV2 = function(callback){
    const newArr = []

    for(let i = 0; i < this.length; i++){
        const result = callback(this[i])
        newArr.push(result)
    }
    return newArr
}

const strs = ["4", "6", "32", "65", "21"]

const nums = strs.mapV2(num => {
    return Number(num)
})
// Returns the original array as numbers.
console.log(nums)

const cyclo = ["fixed", "aero", "skiddy", "chips"]

const braaaps = cyclo.mapV2(brap => {
    return brap.concat("BRAAAP.")
})
// Returns array with BRAAAP. attached to each string.
console.log(braaaps)

const jsx = ["Hello", "world,", "I'm", "Austin"]

const mappedJsx = jsx.mapV2(str => (`<div>${str}</div>`))

// If using React, returns a <div> for each string.
console.log(mappedJsx)
//---------------------------------------------------------------------------------

// 2. Write a function that takes an unsorted array as a parameter, and returns the missing number.

function findMissingNo(arr){
    arr.sort(function(a, b){return a - b})

    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] - arr[i] !== 1){ // 1 2 3 4 5
           return arr[i] + 1
        }
    }
 }
 console.log(findMissingNo([3, 5, 4, 8, 1, 2, 7])) //6
 console.log(findMissingNo([10, 14, 12, 11, 16, 18, 17, 13])) //15
//  Guaranteed Conditions:
//    - The array has at least 3 numbers
//    - There are no repeated numbers
// --------------------------------------------------------------------------------------------

// 3. Write a function called antiCaps, which accepts a string and manipulates it as follows.
// Uppercase characters will become lowercase.
// Lowercase characters will become uppercase.

//Extra credit
// Have the function return double letters if originally uppercase
// Have the function return the letter and a symbol if originally lowercase.

function antiCaps(str){
    const arr = str.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            arr[i] = arr[i].toLowerCase() + arr[i].toLowerCase()
        } else {
            arr[i] = arr[i].toUpperCase() + '*'
        }
    }
    return arr.join('')
}

console.log(antiCaps('heLLO'))
console.log(antiCaps('racEcar'))
console.log(antiCaps('bAnAnA'))

// ---------------------------------------------------------------------------------------------

// 4. Write a function that accepts a string as an argument and returns true if the string is a 
//palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

function isPalindrome(str){
    const arr = str.split('')
    const newArr = arr.reverse()
    const newStr = newArr.join('')

    if(str === newStr){
        return str + " is a palindrome!!"
    } else {
        return "Sorry, buster. " + str + " is not a palindrome. :("
    }
}
console.log(isPalindrome("star rats"));  // true
console.log(isPalindrome("palindrome"));  // false
console.log(isPalindrome("racecar"));  // true

// -----------------------------------------------------------------------------------------------

// 5. Write a function that returns a 10 X 10 multiplication table (2D array).

function multTable(x, y){
    const table = []

    for(let i = 1; i < x + 1; i++){
        const newArr = []
        table.push(newArr)
        for(let j = 1; j < y + 1; j++){
            newArr.push(j * i)
        }
    }
    return table
}
console.log(multTable(10, 10))

// -----------------------------------------------------------------------------------------------

// 6. Given an array of numbers, create a function which returns the same array but with each 
// element's index in the array added to itself. This means you add 0 to the number at index 0, 
// add 1 to the number at index 1, etc...

function addIndexes(arr) {
	for(let i = 0; i + 1 < arr.length + 1; i++){
       arr[i] = arr[i] + i
    } 
    return arr
}


// Or if you wanted a pure function that doesn't alter 'arr'

// function addIndexes(arr){
//     const newArr = []
//     for(let i = 0; i + 1 < arr.length + 1; i++){
//         newArr.push(arr[i] + i)
//     }
//     return newArr
// }

console.log(addIndexes([0, 0, 0, 0, 0]))
console.log(addIndexes([1, 2, 3, 4, 5]))
console.log(addIndexes([5, 4, 3, 2, 1]))

// -----------------------------------------------------------------------------------------------

