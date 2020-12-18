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