var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  contestantObj = new Contestant();
}

function draw(){
  background("pink");

  contestantRef = database.ref('contestantCount');
  contestantRef.on("value",readContestant);

  if(contestantCount === 2){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
  drawSprites();
}

function readContestant(data){
  contestantS=data.val();
  contestantObj.updateCount(contestantS);
}