'use strict';

console.log('loaded app.js'); //have we actually loaded app.js?

function nInput(uInput){  //this function should scrub uInput and turn into 'Y' or 'N'
  uInput = uInput.toUpperCase()
  switch(uInput){
  case 'Y':
  case 'YES':
    return 'Y';
    break;
  case 'N':
  case 'NO':
    return 'N';
  default:
    return 'ERROR';
    break;
  }
}

do{
  var userName = prompt('Please tell me your name.' , 'Harold Bluetooth'); //get userName default to 'Harold Bluetooth'
  console.log('user input ' + userName + ' for "userName"');
  var correctName = confirm('You name is ' + userName + ' Is that correct?'); //confirm userName before continuing
  console.log('user input ' + correctName + ' for "correctName"');
}while (!correctName);

var wantsToPlay = confirm('Nice to meet you ' + userName + '! Would you like to take a quick quiz about me? (click OK to continue.)');//confirm user want to play game

if(!wantsToPlay){ // end game if user doesn't want to play
  alert('OK, goodbye!');
  console.log('"wantsToPlay" = ' + wantsToPlay + '. Ending quiz');
}
else{ //continue to quiz questions
  console.log('"wantsToPlay" = ' + wantsToPlay + '. continuing quiz');
  do{
    var favBand = prompt('Is my favorite band the beatles? Please answer YES or NO') || '';
    console.log('user input ' + favBand + '. Normalized input ' + nInput(favBand));

    if(nInput(favBand) === 'Y'){
      alert('You said ' + favBand + '. Acutally my favorite band is Meatloaf.  I love that higschool angst!');
    }
    else if(nInput(favBand) === 'N'){
      alert('You said ' + favBand + '. That\'s right! My favorite bad is Meatloaf');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(favBand) === 'ERROR');
}
