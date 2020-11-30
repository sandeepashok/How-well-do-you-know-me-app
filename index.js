// ex13, ex14 and ex15
var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your name? \n");
var score = 0;
console.clear();
console.log("\nwelcome "+ userName +" Do you know sandeep? ");

console.log("\n"+userName+", Do not miss to learn Javascript basics in the end :D \n")

function play(question, answer){
  var userAnswer= readlineSync.question(question)

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!")
    score++;
  }else{
    console.log("Wrong!")
  }
console.log("your score is: ",score)
}
// array
var questions =[
  {
    question:"which city do I live in? ",
    answer: "bangalore"
  },
   {
    question:"my favourite food? ",
    answer: "roti curry"
  }
]


// loop

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
  console.log("......................................")
}

console.log("yay you scored: ",score+" points!")
console.log("......................................")

var highScore = [{
  name: "sandy",
  score: 2
},
{
  name: userName,
  score: score
}
]
 
console.log("YOUR SCORES:")
console.log("......................................")


for(let i=0; i<highScore.length; i++){
  var hScores = highScore[i]
  console.log(hScores.name, hScores.score)
  console.log("......................................")
}

// basics of javascript
// ex1 print name
console.log("Hi I am sandeep ")
console.log("************\n")

// ex2,ex3,ex4 welcome
var readLinesync = require('readline-sync');

var userName = readLinesync.question('may I Have Your Name?\n')

var welcomeMessage = "Welcome "+userName + "!" ;

console.log(welcomeMessage);
console.log("************")

//ex5 and ex6 print right or wrong, inc/dec
var readLineSync = require('readline-sync');
var score = 0;
// Input
var userAnswerAge = readLineSync.question("Am I older than 25\n");

console.log("you entered "+userAnswerAge);
answerOne = "no"

if (userAnswerAge === answerOne){
  console.log("you are right!")
  score+=1;
  console.log("score is: ", score);
}else{
  console.log("you are wrong")
  score-=1
  console.log("score is: ", score);
}
console.log("************")

//function 
//ex7 addition and multiplication
function add(numOne, numTwo){
  var sum = numOne+numTwo;
  return sum;
}

var result = add(5,2);
console.log("The sum is: "+result);
console.log("************\n")

// product
function prod(a,b){
 var product = a*b;
 return product;
}

var res = prod(3,3);
console.log("The product is: "+res);
console.log("************\n")

// ex8 check answer
var readlineSync = require("readline-sync");

var score1=0;

function play(question, answer){
  var userAnswer1 = readlineSync.question(question);

 if(userAnswer1 === answer){
  console.log("Iam happy for you!");
  score1++
  }else{
    console.log("That's sad :(");
    score1--
  }
}
  
play("how are you? \n", "good");
  console.log("your score is: ",score1);
  console.log("************")

// ex9 loop
for(i=0; i<5; i++){
  console.log("Sandeep")
}
console.log("************\n")

// Homework
// Forward
for(var i=0; i<=5; i++){
    console.log("*".repeat(i))
}
console.log("-----------")
// reverse
for(var j=5; j>=0; j--){
  console.log("*".repeat(j))
}
console.log("\n************")

// ex10 and ex11 array
var grocery = ["dhaal", "rice", "parleG", "milk","vadapav","samosa","boondhi"];
for(i=0; i<grocery.length; i++){
  console.log(grocery[i])
}
console.log("************\n")


// objects ex 12 superheros
var superman ={
  name: "clark kent",
  superpower: "superhuman",
  costume: "crazy armour",
  power:10000,
  stealth:500
}

var ironman ={
  name: "Tony Stark",
  superpower: "playboy",
  costume: "Reactor Suit",
  power:1000,
  stealth:10000
}

var superheros = [superman,ironman];

for(i=0;i<superheros.length; i++){
  var hero = superheros[i]
  console.log(hero.name)
  console.log(hero.costume)
  console.log("************")
}





