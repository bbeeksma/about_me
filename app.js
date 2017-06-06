'use strict';

console.log('loaded app.js'); //have we actually loaded app.js?

function nInput(uInput){  //this function should scrub uInput and turn into 'Y' or 'N'
  uInput = uInput.toUpperCase();
  switch(uInput){
  case 'Y':
  case 'YES':
    return 'YES';
    break;
  case 'N':
  case 'NO':
    return 'NO';
    break;
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
  do{ //question one
    var favBand = prompt('Is my favorite band the beatles? Please answer YES or NO') || '';
    console.log('user input ' + favBand + '. Normalized input ' + nInput(favBand));

    if(nInput(favBand) === 'YES'){
      alert('You said ' + nInput(favBand) + '. Acutally my favorite band is Meatloaf.  I love that higschool angst!');
    }
    else if(nInput(favBand) === 'NO'){
      alert('You said ' + nInput(favBand) + '. That\'s right! My favorite bad is Meatloaf');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(favBand) === 'ERROR');

  do{ //question two
    var skydive = prompt('Have I ever been skydiving? Please answer YES or NO') || '';
    console.log('user input ' + skydive + '. Normalized input ' + nInput(skydive));

    if(nInput(skydive) === 'YES'){
      alert('You said ' + nInput(skydive) + '. Nope, I\'ve never been skydiving.  Why jump out of a perfectly good plane!');
    }
    else if(nInput(skydive) === 'NO'){
      alert('You said ' + nInput(skydive) + '. That\'s right! I\'m not a huge fan of falling.');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(skydive) === 'ERROR');

  do{ //question three
    var jaguar = prompt('Have I ever owned a Jaguar? Please answer YES or NO') || '';
    console.log('user input ' + jaguar + '. Normalized input ' + nInput(jaguar));

    if(nInput(jaguar) === 'YES'){
      alert('You said ' + nInput(jaguar) + '. That\'s right! I restored a 89 Jaguar XJ-6 Vanden Plas, but I no longer own  it sadly :(');
    }
    else if(nInput(jaguar) === 'NO'){
      alert('You said ' + nInput(jaguar) + '. Actually I did! My dad gave me a 89 Jaguar XJ-6 Vanden Plas to fix up (wasn\'t running when he gave it to me) in exchange for my 01 Ford Focus');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(jaguar) === 'ERROR');

  do{ //question four
    var trumpet = prompt('Do I play the trumpet? Please answer YES or NO') || '';
    console.log('user input ' + trumpet + '. Normalized input ' + nInput(trumpet));

    if(nInput(trumpet) === 'YES'){
      alert('You said ' + nInput(trumpet) + '. Nope, I did play the trombone and the flute in highschool and college though.');
    }
    else if(nInput(trumpet) === 'NO'){
      alert('You said ' + nInput(trumpet) + '. That\'s right! I don\'t play the trumpet! I used to play the trombone though!');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(trumpet) === 'ERROR');

  do{ //question five
    var dog = prompt('Am I a dog person? Please answer YES or NO') || '';
    console.log('user input ' + dog + '. Normalized input ' + nInput(dog));

    if(nInput(dog) === 'YES'){
      alert('You said ' + nInput(dog) + '. That\'s right! I love dogs!');
    }
    else if(nInput(dog) === 'NO'){
      alert('You said ' + nInput(dog) + '. Wrong! I love dogs!');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(dog) === 'ERROR');
  alert('That\'s all! Thank you for taking my quiz ' + userName + '!');
} //end of quiz questions
