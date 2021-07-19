class Game {
    constructor(){
    
    }
    readGameState(){
        var gameStateRef = database.ref("gamestate")
        gameStateRef.on("value", function(data){
            gamestate = data.val()
        })
    }
    writeGameState(g){
        database.ref("/").update({
            gamestate:g
        })
    }

    startGame(){
        form.greeting.hide()
        form.name.hide()
        playerObj.readAllPlayers()
        playerObj.readCarsAtTheEnd()
        var i = 0,h = 600
        image(trackimg,0,-displayHeight*5,displayWidth,displayHeight*6)
        for(var plr in holdPlayers)
        {
            carArr[i].x = h
            carArr[i].y = displayHeight - holdPlayers[plr].distance
            if(i + 1 == playerObj.position){
                camera.position.x = displayWidth/2
                camera.position.y = carArr[i].y
            }
            i = i + 1
            h = h + 200
            console.log(plr)
            console.log(holdPlayers[plr].distance,holdPlayers[plr].name)
        }
        if(keyCode == UP_ARROW){
            playerObj.distance = playerObj.distance + 20
            playerObj.createPlayerField()
        }
        if(playerObj.distance>6300){
            gamestate = "end"
            carsattheend = carsattheend +1
            playerObj.rank = carsattheend
            playerObj.writeCarsAtTheEnd(carsattheend)
        }
        drawSprites()
    }
    endgame(){
        alert("nice job! you placed " +playerObj.rank)
    }
}