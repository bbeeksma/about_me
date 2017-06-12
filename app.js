'use strict';

console.log('loaded app.js'); //have we actually loaded app.js?

function main(){
  promptUserName();
  var wtp = wantsToPlay();
  if (wtp) {
    questions();
    score();
  }
}

var uInput;
function nInput(uInput){  //this function should scrub uInput and turn into 'YES' or 'NO'
  if(uInput){
    uInput = uInput.toUpperCase(); // first make whatever you're putting in here uppercase
  }
  switch(uInput){
  case 'Y':
  case 'YES':
    return 'YES';
    break;
  case 'N':
  case 'NO':
    return 'NO';
    break;
  case null:
    return null;
    break;
  default:
    return;
    break;
  }
}

var yesNoQuestions = [
  'Is my favorite band the beatles?'
  ,'Have I ever been skydiving?'
  ,'Have I ever owned a Jaguar?'
  ,'Do I play the trumpet?'
  ,'Am I a dog person?'
];
var yesNoCorrectAnswers = [
  'NO'
  ,'NO'
  ,'YES'
  ,'NO'
  ,'YES'
];
var yesNoCorrectResponses = [
  '. That\'s right! My favorite band is Meatloaf.'
  ,'. That\'s right! I\'m not a huge fan of falling.'
  ,'. That\'s right! I restored a 89 Jaguar XJ-6 Vanden Plas, but  sadly I no longer own  it.'
  ,'. That\'s right! I don\'t play the trumpet! I used to play the trombone though!'
  ,'. That\'s right! I love dogs!'
];
var yesNoIncorrectResponses = [
  '. Acutally my favorite band is Meatloaf.  I love that higschool angst!'
  ,'. Nope, I\'ve never been skydiving.  Why jump out of a perfectly good plane!'
  ,'. Actually I did! My dad gave me a 89 Jaguar XJ-6 Vanden Plas to fix up (wasn\'t running when he gave it to me) in exchange for my 01 Ford Focus'
  ,'. Nope, I did play the trombone and the flute in highschool and college though.'
  ,'. Wrong! I love dogs!'
];
var numCorrect = 0; //variable to hold correct responses
var userName;
function promptUserName(){
  do{
    userName = prompt('Please tell me your name.' , 'Your name goes here'); //get userName default to 'Your name goes here'
    console.log('user input ' + userName + ' for "userName"');
    var correctName = confirm('You name is ' + userName + ' Is that correct?'); //confirm userName before continuing
    console.log('user input ' + correctName + ' for "correctName"');
  }while (!correctName);
}

function wantsToPlay(){
  var wantToPlay = confirm('Nice to meet you ' + userName + '! Would you like to take a quick quiz about me? (click OK to continue.)');//confirm user wants to play game

  if(!wantToPlay){ // end game if user doesn't want to play
    alert('OK, goodbye!');
    console.log('"wantsToPlay" = ' + wantToPlay + '. Ending quiz');
    return false;
  }
  else{ //continue to quiz questions
    console.log('"wantsToPlay" = ' + wantToPlay + '. continuing quiz');
    return true;
  }
}
//start of questions
function questions(){
  for (var i = 0; i < yesNoQuestions.length; i++){
    uInput = prompt(yesNoQuestions[i], 'Please answer YES or NO');
    console.log('user input ' + uInput + '. Normalized input ' + nInput(uInput));

    if(nInput(uInput) === yesNoCorrectAnswers[i]){
      alert('You said ' + nInput(uInput) + yesNoCorrectResponses[i]);
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else if(nInput(uInput)){
      alert('You said ' + nInput(uInput) + yesNoIncorrectResponses[i]);

    }
    else{
      alert('You must answer YES or NO.');
    }
  }

  var correctAnswerSix = false; //this is ONLY to keep "I was actually thinking" prompt from running if correct answer is chosen
  var randInt = Math.floor(Math.random() * 10) + 1; // setting this variable here so it doesn't get reset in the loop
  for(var trySix = 0 ; trySix < 4; trySix++){ //question six
    correctAnswerSix = false;
    var numGuess = prompt('What number am I thinking?' , 'pick a whole between 1 and 10');
    console.log('random Int = ' + randInt + ' user input = ' + numGuess + ' is an integer ' + Number.isInteger(parseInt(numGuess)));

    if(isNaN(parseInt(numGuess)) || !Number.isInteger(parseInt(numGuess)) || numGuess > 10){ //catch entries that won't evaluate
      alert('You need to guess a number between 1 and 10');
    }
    else if(numGuess == randInt){
      correctAnswerSix = true;
      alert('WOW, great guess ' + userName + '! My number was' + randInt);
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
      break;
    }
    else{
      alert('Nope, not ' + numGuess + '.');
    }
  }
  if (correctAnswerSix === false){
    alert('I was actually thinking ' + randInt + '!');
  }

  var correctAnswerSevens = ['Iowa','Wisconsin','Louisiana'];
  var validAnswerSevens = ['IOWA','IA','WISCONSIN','WI','LOUISIANA','LA'];
  var correctAnswerSeven = false;
  var trySeven = 0;
  do{
    var state = prompt('Name a state that I\'ve resided in.' , 'Full state name or postal abbreviation') || '';
    console.log('user input ' + state + '. Try attempt ' + trySeven);
    for(var i = 0; i < validAnswerSevens.length; i++){
      if(state.toUpperCase() === validAnswerSevens[i]){
        correctAnswerSeven = true;
      }
    }
    if(correctAnswerSeven && (state.toUpperCase() === 'IOWA' || state.toUpperCase() === 'IA')){
      alert('That\'s right! I have lived in Iowa.  In fact I\'ve lived in ' + correctAnswerSevens[1] + ', ' + correctAnswerSevens[2] + ', and ' + correctAnswerSevens[0]);
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else if(correctAnswerSeven && (state.toUpperCase() === 'LOUISIANA' || state.toUpperCase() === 'LA')){
      alert('That\'s right! I have lived in Louisiana.  In fact I\'ve lived in ' + correctAnswerSevens[0] + ', ' + correctAnswerSevens[1] + ', and ' + correctAnswerSevens[2]);
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else if(correctAnswerSeven && (state.toUpperCase() === 'WISCONSIN' || state.toUpperCase() === 'WI')){
      alert('That\'s right! I have lived in Wisconsin.  In fact I\'ve lived in ' + correctAnswerSevens[0] + ', ' + correctAnswerSevens[2] + ', and ' + correctAnswerSevens[1]);
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else{
      alert('Sorry, that isn\'t a state I\'ve lived in.  Try again!');
      trySeven++;
      console.log('trySeven set to ' + trySeven);
    }
  }while(!correctAnswerSeven && trySeven < 6);
}//end of quiz questions

function score (){
  if(numCorrect === 0){
    alert('You got ' + numCorrect + ' out of 7...  I\'m an interesting person ' + userName + ', you should learn about me!');
  }
  else if(numCorrect < 4){
    alert('You got ' + numCorrect + ' out of 7...  Myabe you should get to know me better ' + userName + '!');
  }
  else if(numCorrect < 7){
    alert('You got ' + numCorrect + ' out of 7...  Have we met before ' + userName + '?');
  }
  else{
    alert('You got ' + numCorrect + ' out of 7...  Well done ' + userName + '! You crushed it!');
  }
}
