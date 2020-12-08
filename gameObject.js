class gameObject{
    constructor()
    {
        //constructor//
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            GameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
}
    play(){
        Form1.hide();
        textSize(30);
        stroke("black");
        text("Game is about to start, Get Ready!!!"
        ,400,250);
        Player.getPlayerInfo();
        if(playerInfo !== undefined){
            var displayPositions = 270;
            displayPositions = displayPositions+30;
            text(playerInfo[plr].name +":" +playerInfo[plr].distance,400,displayPositions);
        }
    }
   
    //if(keyDown()&& players.index !== null){
   
    //}

    if(keyDown(UP_ARROW)&& players.index!==null){
        players.distance = players.distance + 10;
        players.update();
    }

    start(){
        if(GameState === 0){
            players = new Player();
            players.getCount();
            Form1  = new form();
            Form1.display();
        }
    }
}