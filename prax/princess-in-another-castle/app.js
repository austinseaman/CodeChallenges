class Player {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePick) {
        
    }
    gotHit() {

    }
    gotPowerup() {

    }
    addCoin() {

    }
    print() {
        console.log(`Name: ${name}
                     Status: ${status}
                     Total Coins: ${totalCoins}`)
    }
}