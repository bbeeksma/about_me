'use strict';

console.log('loaded app.js');


do{
  var userName = prompt('Please tell me your name.' , 'Harold Bluetooth'); //get userName default to 'Harold Bluetooth'
  console.log('user input '+userName+ ' for "userName"');
  var correctName = confirm('You name is '+userName+ ' Is that correct?'); //confirm userName before continuing
  console.log('user input ' +correctName+ ' for "correctName"');
}while (!correctName);

var wantsToPlay = confirm('Nice to meet you '+userName+'! Would you like to take a quick quiz about me? (click OK to continue.)');//confirm user want to play game

if(!wantsToPlay){ // end game if user doesn't want to play
  alert('OK, goodbye!');
  console.log('"wantsToPlay" = '+wantsToPlay+ ' Ending game');
}
else{
  console.log('"wantsToPlay" = '+wantsToPlay+ ' Continuing game');
}
