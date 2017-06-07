'use strict';

console.log('loaded app.js'); //have we actually loaded app.js?

function nInput(uInput){  //this function should scrub uInput and turn into 'Y' or 'N' i wanted case when, but switch is close enough.
  uInput = uInput.toUpperCase(); // first make whatever you're putting in here uppercase
  switch(uInput){
  case 'Y':
  case 'YES':
    return 'YES';
    break;
  case 'N':
  case 'NO':
    return 'NO';
    break;
  default: // if  it isn't one of these options sent 'ERROR' -- Can you tell it to return NULL?
    return 'ERROR';
    break;
  }
}

var numCorrect = 0; //variable to hold correct responses

do{
  var userName = prompt('Please tell me your name.' , 'Your name goes here'); //get userName default to 'Your name goes here'
  console.log('user input ' + userName + ' for "userName"');
  var correctName = confirm('You name is ' + userName + ' Is that correct?'); //confirm userName before continuing
  console.log('user input ' + correctName + ' for "correctName"');
}while (!correctName);

var wantsToPlay = confirm('Nice to meet you ' + userName + '! Would you like to take a quick quiz about me? (click OK to continue.)');//confirm user wants to play game

if(!wantsToPlay){ // end game if user doesn't want to play
  alert('OK, goodbye!');
  console.log('"wantsToPlay" = ' + wantsToPlay + '. Ending quiz');
}
else{ //continue to quiz questions
  console.log('"wantsToPlay" = ' + wantsToPlay + '. continuing quiz');
  do{ //question one
    var favBand = prompt('Is my favorite band the beatles?', 'Please answer YES or NO') || '';
    console.log('user input ' + favBand + '. Normalized input ' + nInput(favBand));

    if(nInput(favBand) === 'YES'){
      alert('You said ' + nInput(favBand) + '. Acutally my favorite band is Meatloaf.  I love that higschool angst!');
    }
    else if(nInput(favBand) === 'NO'){
      alert('You said ' + nInput(favBand) + '. That\'s right! My favorite band is Meatloaf.');
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(favBand) === 'ERROR');

  do{ //question two
    var skydive = prompt('Have I ever been skydiving?' , 'Please answer YES or NO') || '';
    console.log('user input ' + skydive + '. Normalized input ' + nInput(skydive));

    if(nInput(skydive) === 'YES'){
      alert('You said ' + nInput(skydive) + '. Nope, I\'ve never been skydiving.  Why jump out of a perfectly good plane!');
    }
    else if(nInput(skydive) === 'NO'){
      alert('You said ' + nInput(skydive) + '. That\'s right! I\'m not a huge fan of falling.');
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(skydive) === 'ERROR');

  do{ //question three
    var jaguar = prompt('Have I ever owned a Jaguar?', 'Please answer YES or NO') || '';
    console.log('user input ' + jaguar + '. Normalized input ' + nInput(jaguar));

    if(nInput(jaguar) === 'YES'){
      alert('You said ' + nInput(jaguar) + '. That\'s right! I restored a 89 Jaguar XJ-6 Vanden Plas, but  sadly I no longer own  it.');
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
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
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
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
      numCorrect++;
      console.log('numCorrect set to ' + numCorrect);
    }
    else if(nInput(dog) === 'NO'){
      alert('You said ' + nInput(dog) + '. Wrong! I love dogs!');
    }
    else{
      alert('You must answer YES or NO.');
    }
  }while(nInput(dog) === 'ERROR');

  if(numCorrect === 0){
    alert('You got ' + numCorrect + ' out of 5...  I\'m an interesting person ' + userName + ', you should learn about me!');
  }
  else if(numCorrect < 3){
    alert('You got ' + numCorrect + ' out of 5...  Myabe you should get to know me better' + userName + '!');
  }
  else if(numCorrect < 5){
    alert('You got ' + numCorrect + ' out of 5...  Have we met before ' + userName + '?');
  }
  else{
    alert('You got ' + numCorrect + ' out of 5...  Well done ' + userName + '! You crushed it!');
  }
} //end of quiz questions
