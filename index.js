var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your name: "); //defining global variable to access userName in total score message


var score = 0;

var questions = [{
  question: "Where do i live? :",
  answer: "Lucknow"
}, {
  question: "What is my favorite food? :",
  answer: "Pizza"
}, {
  question: "Am i cat or a dog person? :",
  answer: "Cat"
}, {
  question: "Which phone do i use? :",
  answer: "Google pixel"
}, {
  question: "If not a web developer, what do you think i wanted to become?(hint: i did this as part-time during past years :",
  answer: "Teacher"
}
];

function welcome() {
  console.log("welcome " + userName + " to the game, do you know Amaan! ");
}


function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
  }
  console.log("current score: ", + score);
  console.log("---------------");
}




function game() {
  for (var i = 0; i < questions.length; i++) {
    var gameQuestion = questions[i];
    play(gameQuestion.question, gameQuestion.answer)
  }
}

function totalscore() {
  if (score >= 3) {
    console.log("Well played " + userName + " your score is " + score);
  }
  else {
    console.log("better luck next time " + userName + " your score is " + score);
  }
}

welcome();
game();
totalscore();
