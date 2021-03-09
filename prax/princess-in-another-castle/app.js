class Player {
    constructor(){
        this.name = ""
        this.totalCoins = 0
        this.status = 'Small'
        this.hasStar = false
        this.gameActive = true
    }

    setName() {
        Math.random() < .5 ? this.name = 'Mario' : this.name = 'Luigi'
    }

    gotHit() {
        if(this.hasStar) {
            console.log(`Your star protected you!`)
            this.hasStar = false
        } else {
            switch(this.status) {
                case "Powered Up":
                    this.status = "Big"
                    break
                case "Big":
                    this.status = "Small"
                    break
                case "Small":
                    this.status = "Dead"
                    this.gameActive = false
                    console.log(`You lost!`)
                    break
                default:
                    break
            }
        }
    }

    gotPowerup() {
        switch(this.status) {
            case "Small":
                this.status = "Big"
                break
            case "Big":
                this.status = "Powered Up"
                break
            case "Powered Up":
                this.hasStar = true
                console.log(`You got a star!`)
                break
            default:
                break
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`)
        if(this.hasStar) console.log(`You have a star`)
        if(!this.gameActive) console.log(`Your final score was ${this.totalCoins}`)
        console.log('\n')
    }
}

const protag = new Player()

const id = setInterval(randomRun, 1000)

function randomRun() {
    protag.name === '' ? protag.setName() : null
    const random = Math.floor(Math.random() * 3)
    switch(random) {
        case 0:
            protag.gotHit()
            break
        case 1:
            protag.gotPowerup()
            break
        case 2:
            protag.addCoin()
            break
        default:
            break
    }
    protag.print()
    if(!protag.gameActive) {
        clearInterval(id)
    }
}


// gameActive should be part of your constructor. almost everything will be part of your constructor, including your
// setName, gotHit, getPowerUp, addCoin, and print methods. i see what you're trying to do with your setName method,
// but after you move it to your player constructor, i would just use Math.random. Math.random just returns a random digit
// between 0 and 1, so you could say if the digit is less than .5, set the name to Mario, otherwise, set the name to Luigi. if 
// you're familiar with ternary statements, you can do this all on 1 line of code, or you can just use a simple if statement.
//
// for your gotHit method, you won't be doing anything with arrays, you can just create an if/else statement for what happens
// when you get hit, based on whether or not you have a star. if the player has a star, make it say something like "the star protected you!",
// otherwise, depending on the player's status property, you set up a switch statement to determine what happens to the status next.
// something like this

// else {
//     switch(this.status) {
//         case "current status":
//             this.status = "new status"
//             break
//         case "current status":
//             this.status = "new status"
//             break
//         case "curent status":
//             this.status = "this will be the one where player dies"
//             change the 'gameActive' boolean
//             console.log(`You lost!`)
//             break
//         default:
//             break
//     }
// }

// have the this.status property start off as 'Small' in the constructor.
//
// use another switch statement for your gotPowerUp func. it will look nearly identical to the gotHit func's switch statement, except in the last case, 
// you'll change the hasStar boolean and console.log() something to denote that you got a power up.

// for your addCoin method, you can just increment the totalCoins by 1.
// the print method should just be printing the player name, status, and totalCoins, as well as check for whether or not you have a star (and say so),
// and what your final score was if the game is not active. (ps. final score should be totalCoins).

// remember all of the above logic is part of your constructor.

// let's build out the constructor in total, and the we can move on to the interval and random run function.
