var score = 0;
// introductions
var user = prompt('What is your name?');
console.log('user goes by: ' + user);
alert('Nice to meet you ' + user + ', here\'s a short quiz about me.');

// question 1 functionalized
yesNoQuestion('Was I born in New Mexico?', 'y', 'That\'s right ' + user + ', I was born and raised in New Mexico', 'You said that I was not born in New Mexico. Sorry ' + user + ' but that\'s incorrect. I was born in Albuquerque, NM.');

// question 2 functionalized
yesNoQuestion('Do I like Starbucks?', 'n', 'That\'s right ' + user + '. You can find better coffee, especially in Seattle.', 'You said that I like Starbucks. Sorry ' + user + ' but that\'s incorrect. Herkimer is way better.');

// question 3 functionalized
yesNoQuestion('Do I have any pets?', 'n', 'That\'s right ' + user + '. I would by my lease forbids it.', 'You said that I have pets. Sorry ' + user + ' but that\'s incorrect, but I wish I had a cat.');

// evaluation for yes/no question
function yesNoQuestion(question, answer, correctResponse, wrongResponse) {
    var response = prompt(question);
    console.log('user answered:' + response);
    response = response.toLowerCase();
    console.log('user response changed to: ' + response);
    response = response.charAt(0);
    console.log('user response changed to: ' + response);
    if (response == answer) {
      score++ ;
      alert(correctResponse);
    } else {
      alert(wrongResponse);
    }
}

// question 5
var secretNumber = 36;
var response = prompt('I\'m thinking of a whole number between 0 and 100. What is it?');
console.log('user answered: ' + response);
while (response != secretNumber) {
  // too low
  if (response < 26) {
    var response = prompt('You\'re too low. Guess again.');
    console.log('user answered: ' + response);
  }
  // too high
  else if (response > 46) {
    var response = prompt('You\'re too high. Guess again.');
    console.log('user answered: ' + response);
  }
  // close
  else if (response >= 26 || response >= 46) {
    var response = prompt('You\'re getting closer. Guess again.');
    console.log('user answered: ' + response);
  }
  // bad input
  else {
    var response = prompt('Are you sure that\'s a number? Try again.');
    console.log('user answered: ' + response);
  }
}
score++ ;
alert('You got it! The answer is ' + secretNumber + '.');

// evaluation for secret number
function guessMyNumber(secretNumber, answer) {
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
      var response = prompt('You\'re getting closer. Guess again.');
      console.log('user answered: ' + response);
    }
    // bad input
    else {
      var response = prompt('Are you sure that\'s a number? Try again.');
      console.log('user answered: ' + response);
    }
  }
  score++ ;
  alert('You got it! The answer is ' + secretNumber + '.');
}

// question 6
var homes = ['carlsbad', 'socorro', 'ely', 'leadville', 'las cruces', 'renton', 'seattle'];
var ans6 = prompt('Name one city in which I\'ve lived');
console.log('user answered: ' + ans6)
for (var i = 0; i < 7; i++) {
  if (ans6.toLowerCase() == homes[i]) {
    score++ ;
    alert('That\'s right. I have lived in ' + homes [i] + '.');
  }
}

// evaluation for questions with 1 or more right answer
// this isn't working because I need to get it to take an array for the answers
function genericQuestion(question, answer) {
  var response = prompt(question);
  console.log('user answered:' + response);
  if (response.toLowerCase() == answer.toLowerCase()) {
    score++ ;
    alert('That\'s right ' + user + '. The answer is ' + answer + '.');
  } else {
    alert('Sorry ' + user + ', but the correct answer is ' + answer + '.');
  }
}

// scoring
alert('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");
