class Form {
    constructor(){
        this.heading = createElement('h1')
        this.inputbox = createInput("Enter name here:")
        this.button = createButton("Register now!")
        this.greeting = createElement('h1')
        this.name = createElement('h1')
        this.reset = createButton("reset")
    }
display(){
this.heading.html("Welcome to car racing game or whatever")
this.heading.position(displayWidth-1200,displayHeight-1000)
this.inputbox.position(displayWidth-1000,displayHeight-800)
this.button.position(displayWidth-1000,displayHeight-600)
this.button.mousePressed(()=>{

    playercount = playercount +1
    playerObj.writePlayerCount(playercount)
    this.heading.hide()
    this.inputbox.hide()
    this.button.hide()
    playerObj.playerName = this.inputbox.value()
    playerObj.position = playercount
    this.greeting.html("greetings new player...")
    this.greeting.position(displayWidth-1200,displayHeight-1000)
    this.name.html(playerObj.playerName)
    this.name.position(displayWidth-1100,displayHeight-950)
    console.log("hello\n"+playerObj.playerName)
    playerObj.createPlayerField()
})
this.reset.position(displayWidth - 200, displayHeight-200)
this.reset.mousePressed(()=>{

    playerObj.writePlayerCount(0)
    gameObj.writeGameState(0)
    var ap = database.ref("allplayer")
    ap.remove()
})
}
}