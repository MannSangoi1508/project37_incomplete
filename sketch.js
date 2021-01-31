var canvas;
var database;
var gameState = 0; 
var contestantCount, quiz, question, contestant;



function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
}

