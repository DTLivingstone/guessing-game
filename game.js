// global variables
var score = 0;
var response = 'x';

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

// question 4

// question 5 functionalized
guessMyNumber(36);

// question 6 functionalized
genericQuestion('Name one city in which I\'ve lived', ['carlsbad', 'socorro', 'ely', 'leadville', 'las cruces', 'renton', 'seattle'], 'That\'s right. I have lived in ');

// scoring
alert('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");

// evaluation for questions with 1 or more right answer
function genericQuestion(question, answer, correctResponse) {
  var response = prompt(question);
  console.log('user answered:' + response);
  for (var i = 0; i < answer.length; i++) {
    if (response.toLowerCase() == answer[i]) {
      score++ ;
      alert(correctResponse + response + '.');
    }
  }
}

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

// evaluation for secret number
function guessMyNumber(secretNumber) {
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
      console.log('user answered: ' + response);
    }
  }
  score++ ;
  alert('You got it! The answer is ' + secretNumber + '.');
}
