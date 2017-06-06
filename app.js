'use strict';

console.log('loaded app.js');


do{
  var userName = prompt('Please tell me your name.' , 'Harold Bluetooth'); //get userName default to 'Harold Bluetooth'
  console.log('user input '+userName+ ' for "userName"');
  var correctName = confirm('You name is '+userName+ ' Is that correct?'); //confirm userName before continuing
  console.log('user input ' +correctName+ ' for "correctName"');
}while (!correctName);
