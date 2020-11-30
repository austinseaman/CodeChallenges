// let and const

// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     console.log(petObjects) 
// }

// runForLoop(["cat", "dog"])

// re-write this .map() using an arrow function
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot}) )
// }

// console.log(mapVegetables(carrots))

// re-write this .filter()
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people))

// re-write some functions to be arrow functions
// const doMathSum = ((a, b) => a + b)

// const produceProduct = ((a, b) => a * b)

// write a printString func that takes firstName, lastName, and age as params, and returns a string
// first should default to "Jane", last should default to "Doe", and age should default to 100
// var firstName = "Jane"
// var lastName = "Doe"
// var age = 100

// function printString(firstName, lastName, age) {
//     return `Hi ${firstName} ${lastName}, how's being ${age}?`
// }

// console.log(printString(firstName, lastName, age))
// console.log(printString("PooPoo", "PeePee", 666))

// re-write a .filter to check object type and return indices that match, but on one line
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];

// function filterForDogs(arr) {
//     return arr.filter(animal => animal.type === "dog" ? true : false)
// }
// console.log(filterForDogs(animals))