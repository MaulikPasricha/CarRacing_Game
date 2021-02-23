class Game {
    constructor(){}
// .on() to read value of gamestate from database

getState(){
    var GSRef = database.ref('gameState');
    GSRef.on("value", function(data){
        gameState = data.val();
    })
}

updateGameState(state){
    database.ref('/').update({gameState:state})
}


async waiting(){
    if (gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();      
    }
    car1 = createSprite(50, 300)
    car2 = createSprite(150, 300)
    car3 = createSprite(250, 300)
    car4 = createSprite(350, 300)
    car1.addImage("car1",vehicle1)
    car2.addImage("car2",vehicle2)
    car3.addImage("car3",vehicle3)
    car4.addImage("car4",vehicle4)
    cars = [car1, car2, car3, car4]
}



play(){
// game window should appear
// 4 cars should be there
// up arrow to move the car
    form.hide();

    //text("game begin", 120, 100);

    Player.getPlayerInfo();
    if (allPlayers !== undefined){
        background(198,130,100);
        image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);

        var y;
        var x = 200;
        var index = 0;
        var pos = 130;
        for (var plr in allPlayers ) {
            index = index + 1;
            x = x+200;
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if (index === player.index){
                fill("yellow");
                ellipse( x, y, 60,80);
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;

            }

            if (plr === "player"+player.index)
            fill("blue")
            else
            fill("black")

            pos+=20;
            text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, pos);
        
        }

    }

    if(player.distance>4100){
        gameState=2
        player.rank = player.rank + 1
        player.updatePlayerRank(player.rank)
        player.update()
    }

    if (keyIsDown(UP_ARROW) && player.index!==null){
        player.distance += 20;
        player.update();
    }
    drawSprites();

    }
    end(){
        console.log("Game Ended")
        console.log(player.rank)
    }
}