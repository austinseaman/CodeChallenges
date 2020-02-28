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
// -----------------------------------------------------------------------------------