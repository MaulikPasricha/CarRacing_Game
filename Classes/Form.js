class Form{
    //HTML DOM (DOM Document Object Model)
constructor(){
    this.input = createInput("Enter Name");
    this.button = createButton("Join Game");
    this.welcomeMessage = createElement('h3');
    this.reset = createButton("reset Game");
    this.title = createElement('h2');

}
hide(){
this.input.hide();
this.button.hide();
this.welcomeMessage.hide();
this.title.hide();
}

display(){
    
    this.title.html("Car Racing Game");
    this.title.position(500,10);

    
    this.input.position(500,150);

    this.button.position(550,200)
    this.reset.position(200,200)

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount += 1
        player.index = playerCount;

        player.updateCount(playerCount);
        player.update();

        
        this.welcomeMessage.html( player.name + " Welcome to car race game");
        this.welcomeMessage.position(450, 200);
    })

    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.updateGameState(0);
    })
}
}