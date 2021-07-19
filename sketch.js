var database;
var form
var gamestate = 0 
var playercount = 0
var gameObj
var playerObj
var holdPlayers
var car1img
var car2img
var car3img
var trackimg
var car1s
var car2s
var car3s
var carsattheend = 0
var carArr=[]

function preload(){
    car1img = loadImage("car1.png")
    car2img = loadImage("car2.png")
    car3img = loadImage("car3.png")
    trackimg = loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    car1s = createSprite(200,200,20,20)
    car2s = createSprite(200,250,20,20)
    car3s = createSprite(200,300,20,20)
    car1s.addImage(car1img)
    car2s.addImage(car2img)
    car3s.addImage(car3img)
    carArr.push(car1s)
    carArr.push(car2s)
    carArr.push(car3s)
    database = firebase.database()
    gameObj = new Game ()
    gameObj.readGameState()
    if(gamestate == 0){
        playerObj = new Player()
        playerObj.readPlayerCount()
        form = new Form()
        form.display()
    }
}

function draw(){
    background("white");
    if(playercount == 3){
        gameObj.writeGameState(1)
    }
    if(gamestate == 1){
        gameObj.startGame()
    }
     if(gamestate == "end"){
         gameObj.endgame()
     }
}
