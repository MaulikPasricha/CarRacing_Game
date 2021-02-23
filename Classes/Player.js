class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0
        this.rank = 0
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({name : this.name, distance : this.distance, rank : this.rank })

    }

    updatePlayerRank(pr){
    database.ref('/').update({playerRank : pr})
    }

    getPlayerRank(){
        var pr = database.ref('playerRank')
        pr.on("value",function(data){
        playerRank = data.val();
        this.rank = data.val();
    })
    }

    updateCount(count){
        database.ref('/').update({playerCount:count})
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount = data.val();
    })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
        allPlayers = data.val();
    })
    }
}