var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let newbz = [
    {
        firstName: "David",
        lastName: "Bowie",
        age: 99
    },
    {
        firstName: "GG",
        lastName: "Allin",
        age: 36
    },
    {
        firstName: "Purple",
        lastName: "Rebecca",
        age: 24
    }
]

function sortedOfAge(arr1, arr2){
    let arr = arr1.concat(arr2)
    let legal = arr.filter(person => person.age >= 18)
    let ascending = legal.sort((a, b) => a.age > b.age)
    return ascending.map(elem => `<li>${elem.firstName} ${elem.lastName} is ${elem.age}</li>`)
}

function lastLetter(arr1, arr2){
    let arr = arr1.concat(arr2)
    let newArr = arr.filter(person => person.lastName.endsWith("a") || person.lastName.endsWith("y"))
    let result = [...newArr]
    result.splice(1, 1)
    return result.reverse()
}
 
console.log(sortedOfAge(peopleArray, newbz));
console.log(lastLetter(peopleArray, newbz))
 
/*
Output: 
[ 
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>" 
]
*/
/* Extra Credit
Create another array of one or more individuals and 
add it to the original array.
Create a function that filters out all people 
who's last names end with "y" or "a" and save those 
people in another array.
Remove the second individual from the array.
Return the array in reverse order. 
*/

// function lettersWithStrings(arr, char) {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].includes(char)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]