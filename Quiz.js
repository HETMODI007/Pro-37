class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();    

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      background("yellow");
       fill("Blue");
       textSize(20);
       text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
       textSize(30);
       text("Result of the Quiz",200,50);
       for(var plr in allContestants){
       var correctAns = "2";
       if(correctAns ===allContestants[plr].answer)
       fill("Green");
       else
       fill("red");
       }
      }
    }
    //write code to change the background color here
    //write code to show a heading for showing the result of Quiz
    //call getContestantInfo( ) here
    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
    //write code to highlight contest who answered correctly    
  }
