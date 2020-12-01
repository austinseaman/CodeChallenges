// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it

// function collectAnimals(...animals) {  
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "warthog")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties using Object Literals

// function combineFruit(fruit, sweets, vegetables) {
//     return { "fruit": fruit, "sweets": sweets, "vegetables": vegetables }
// }
// console.log(combineFruit(["apple", "pear"],
//                          ["cake", "pie"],
//                          ["carrot"]))

//Use destructuring to use the property names as variables. Desructure the object in the parameter

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };
  
// function parseSentence({location, duration} = vacation){
//     return `We're going to have a good time in ${location} for ${duration}`
// }
// console.log(parseSentence())

// Use destructuring to make a function an ES6 function
// const arr = ['thing1', 'thing2', 'chocolate thundaa']
// function returnFirst(items){
//     const [ firstItem ] = items; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst(arr))

// Write destructuring code to assign variable that help return an expected string, using template literals

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [ firstFav, secondFav, thirdFav ] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. 

// function combineAnimals(arr1, arr2, arr3) {  
//     return [ ...arr1, ...arr2, ...arr3 ]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Make more ES6xy functions

// function product(...numbers) {  
//     return numbers.reduce((acc, number) => {
//       return acc * number;
//     }, 1)
// }

// console.log(product(1, 2, 3, 4, 5, 6, 7, 8))

// function unshift(array, a, b, c, d, e) {  
//     return [ ...array, a, b, c, d, e];
// }

// const food = ['pie', 'milk', 'horse meat slider']

// console.log(unshift(food, 3, 1, 4, 1, 5))

// Write some destructuring code to help this function out. Use object literals to simplify it

// function populatePeople(names){
//     return names.map(name => {
//         name = name.split(" ");
//         const [ firstName, lastName ] = name
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]