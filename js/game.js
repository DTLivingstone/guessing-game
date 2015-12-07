//  global variables
var score = 0;
var user = '';
var response = '';
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

// function declarations
function qMultiAnswer(qNumber, question, answer, correctResponse, wrongResponse) {
  response = prompt(question);
  console.log('user answered: ' + response);
  for (var i = 0; i <= answer.length; i++) {
    console.log('i is: ' + i);
    if (response.toLowerCase() === answer[i]) {
      score += 1;
      qNumber.textContent = correctResponse + response + '.';
      qNumber.className = 'right';
      break;
    } else if (i === answer.length) {
      qNumber.textContent = wrongResponse + response + '.';
      qNumber.className = 'wrong';
    }
  }
}

function qYesNo(qNumber, question, answer, correctResponse, wrongResponse) {
  response = prompt(question).toLowerCase().charAt(0);
  response = response.toLowerCase();
  console.log('user response changed to: ' + response);
  if (response === answer) {
    score += 1 ;
    qNumber.textContent = correctResponse;
    qNumber.className = 'right';
  } else {
    qNumber.textContent = wrongResponse;
    qNumber.className = 'wrong';
  }
}

function qGuessNumber(qNumber, secretNumber) {
  response = prompt('I\'m thinking of a whole number between 0 and 100. What is it?');
  console.log('user answered: ' + response);
  while (response != secretNumber) {
    // too low
    if (response < (secretNumber - 10)) {
      response = prompt('You\'re too low. Guess again.');
      console.log('user answered: ' + response);
    }
    // too high
    else if (response > (secretNumber + 10)) {
      response = prompt('You\'re too high. Guess again.');
      console.log('user answered: ' + response);
    }
    // close
    else if (response >= (secretNumber - 10) || response >= (secretNumber + 10)) {
      response = prompt('You\'re getting close. Guess again.');
      console.log('user answered: ' + response);
    }
    // bad input
    else {
      response = prompt('Are you sure that\'s a number? Try again.');
      console.log('user answered: ' + response);
    }
  }
  score += 1 ;
  qNumber.textContent = 'You got it! The answer is ' + secretNumber + '.';
  qNumber.className = 'right';
}

// introductions
user = prompt('What is your name?');
console.log('user goes by: ' + user);
alert('Nice to meet you ' + user + ', here\'s a short quiz about me.');

// questions
qYesNo(one, 'Was I born in New Mexico?', 'y', 'That\'s right ' + user + ', I was born and raised in New Mexico', 'You said that I was not born in New Mexico. Sorry ' + user + ' but that\'s incorrect. I was born in Albuquerque, NM.');
qYesNo(two, 'Do I like Starbucks?', 'n', 'That\'s right ' + user + '. You can find better coffee, especially in Seattle.', 'You said that I like Starbucks. Sorry ' + user + ' but that\'s incorrect. Herkimer is way better.');
qYesNo(three, 'Do I have any pets?', 'n', 'That\'s right ' + user + '. I would by my lease forbids it.', 'You said that I have pets. Sorry ' + user + ' but that\'s incorrect, but I wish I had a cat.');
qGuessNumber(four, 36);
qMultiAnswer(five, 'Name one city in which I\'ve lived', ['carlsbad', 'socorro', 'ely', 'leadville', 'las cruces', 'renton', 'seattle'], 'That\'s right. I have lived in ', 'Sorry, but I\'ve never lived in ');

// scoring
('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");
