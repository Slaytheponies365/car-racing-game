class Player {
    constructor(){
this.playerName = null
this.distance = 0
this.position = null
this.rank = null
    }
    readPlayerCount(){
        var playerCountRef = database.ref("playercount")
        playerCountRef.on("value", function(data){
            playercount = data.val()
        })
    }
    writePlayerCount(p){
        database.ref("/").update({
            playercount:p
        })
    }

    createPlayerField(){
        var playerName = "allplayer/player"+ this.position
        database.ref(playerName).set({
            name: this.playerName,
            distance: this.distance
        })
    }

    readAllPlayers(){
        var playerCountRef = database.ref("allplayer")
        playerCountRef.on("value", function(data){
            holdPlayers = data.val()
        })
    }
    readCarsAtTheEnd(){
        var playerCountRef = database.ref("carsattheend")
        playerCountRef.on("value",function(data){
            carsattheend = data.val()
        })
    }
    writeCarsAtTheEnd(p){
        database.ref("/").update({
            carsattheend :p
        })
    }
}