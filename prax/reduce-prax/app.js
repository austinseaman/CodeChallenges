function total(arr) {
    return arr.reduce(function(final, num){
        final += num
        return final
    }, 0)
}
 
console.log(total([1,2,3])); // 6

function stringConcat(arr) {
    // return arr.reduce((total, num) => total + ''+num, '')
    return arr.reduce(function(final, num){
        return final + num 
    }, "")
}

console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
    return arr.reduce(function(final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0) 
}
 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    return arr.reduce((final, item) => final + item.price, 0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    return arr.reduce(function(final, each){
        return final.concat(each)
    }, [])  
}
 
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
 
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

function voterResults(arr) {
    return arr.reduce(function(final, voter) {
        if(voter.age >= 18 && voter.age <= 25) {
            final.youngPpl++
            if(voter.voted) {
                final.youngVotes++
            }
        } else if(voter.age >= 26 && voter.age <= 35) {
            final.midPpl++
            if(voter.voted) {
                final.midVotes++
            }
        } else {
            final.oldPpl++
            if(voter.voted) {
                final.oldVotes++
            }
        }
        return final
    }, { youngVotes: 0, youngPpl: 0, midVotes: 0, midPpl: 0, oldVotes: 0, oldPpl: 0})
}
 
console.log(voterResults(voters)); // Returned value shown below:
/*
{   
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4 
}
*/