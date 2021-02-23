/*
1. FINISH the game
2. mark the finish line
3. restart the game when game ends
4. game ends when a player crosses finish line


*/
var gameState = 0
var playerCount = 0
var game, form, player,allPlayers;
var car1, car2, car3 , car4, background, cars;
var vehicle1, vehicle2, vehicle3, vehicle4, trackImg
var playerRank

function preload(){
vehicle1 = loadImage("car1.png") 
vehicle2 = loadImage("car2.png") 
vehicle3 = loadImage("car3.png") 
vehicle4 = loadImage("car4.png") 
trackImg = loadImage("track.jpg")
}


function setup(){
canvas = createCanvas(displayWidth-20, displayHeight-30)
database = firebase.database()
game = new Game();
game.getState();
game.waiting();



}
function draw(){


    if(playerCount === 4){
        game.updateGameState(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }

if (gameState==2){
    game.end();
}

}





























































































































































































































































































































































/*var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var pos = database.ref('ball/position')
    pos.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
   'x':position.x + x,
   'y':position.y + y
    })
    
}

function readPosition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
*/