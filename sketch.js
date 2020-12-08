var database;
var GameState = 0;
var PlayerCount;
var Form1;
var players;
var PlayersInfo;
var game;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new gameObject();
    game.getState();
    game.start();
  
}

function draw(){

}