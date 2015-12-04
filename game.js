//  global variables
var score = 0;
var user = '';
var response = '';

// function declarations
function qMultiAnswer(question, answer, correctResponse) {
  var response = prompt(question);
  console.log('user answered:' + response);
  for (var i = 0; i < answer.length; i += 1) {
    if (response.toLowerCase() === answer[i]) {
      score += 1 ;
      alert(correctResponse + response + '.'); /* this is a bit messy, but I ran into scope issues here */
    } else {
      // need to tell user they're wrong if the last comparison in the array fails
    }
  }

function qYesNo(question, answer, correctResponse, wrongResponse) {
  var response = prompt(question).toLowerCase().charAt(0);
  response = response.toLowerCase();
  console.log('user response changed to: ' + response);
  if (response === answer) {
    score += 1 ;
    alert(correctResponse);
  } else {
    alert(wrongResponse);
  }
}

function qGuessNumber(secretNumber) {
  var response = prompt('I\'m thinking of a whole number between 0 and 100. What is it?');
  console.log('user answered: ' + response);
  while (response != secretNumber) {
    // too low
    if (response < (secretNumber - 10)) {
      var response = prompt('You\'re too low. Guess again.');
      console.log('user answered: ' + response);
    }
    // too high
    else if (response > (secretNumber + 10)) {
      var response = prompt('You\'re too high. Guess again.');
      console.log('user answered: ' + response);
    }
    // close
    else if (response >= (secretNumber - 10) || response >= (secretNumber + 10)) {
      var response = prompt('You\'re getting close. Guess again.');
      console.log('user answered: ' + response);
    }
    // bad input
    else {
      var response = prompt('Are you sure that\'s a number? Try again.');
      consoe.log('user answered: ' + response);
    }
  }
  score += 1 ;
  alert('You got it! The answer is ' + secretNumber + '.');
}

// introductions
var user = prompt('What is your name?');
console.log('user goes by: ' + user);
alert('Nice to meet you ' + user + ', here\'s a short quiz about me.');

// questions
qYesNo('Was I born in New Mexico?', 'y', 'That\'s right ' + user + ', I was born and raised in New Mexico', 'You said that I was not born in New Mexico. Sorry ' + user + ' but that\'s incorrect. I was born in Albuquerque, NM.');
qYesNo('Do I like Starbucks?', 'n', 'That\'s right ' + user + '. You can find better coffee, especially in Seattle.', 'You said that I like Starbucks. Sorry ' + user + ' but that\'s incorrect. Herkimer is way better.');
qYesNo('Do I have any pets?', 'n', 'That\'s right ' + user + '. I would by my lease forbids it.', 'You said that I have pets. Sorry ' + user + ' but that\'s incorrect, but I wish I had a cat.');
qGuessNumber(36);
qMultiAnswer('Name one city in which I\'ve lived', ['carlsbad', 'socorro', 'ely', 'leadville', 'las cruces', 'renton', 'seattle'], 'That\'s right. I have lived in ');

// scoring
alert('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");
