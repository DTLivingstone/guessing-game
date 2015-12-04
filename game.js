var score = 0;
//introductions
var user = prompt('What is your name?');
console.log('user goes by: ' + user);
alert('Nice to meet you ' + user + ', here\'s a short quiz about me.');
//question 1
var ans1 = prompt('Was I born in New Mexico?');
console.log('user answered: ' + ans1)
if (ans1.toLowerCase() == 'yes' || ans1.toLowerCase() == 'y') {
  score++ ;
  alert('That\'s right ' + user + '. I was born and raised in New Mexico.');
} else {
  alert('You said that I was not born in New Mexico. Sorry ' + user + ' but that\'s incorrect. I was born in Albuquerque, NM.');
}
//question 2
var ans2 = prompt('Do I like Starbucks?');
console.log('user answered: ' + ans1)
if (ans2.toLowerCase() == 'no' || ans2.toLowerCase() == 'n') {
  score++ ;
  alert('That\'s right ' + user + '. You can find better coffee, especially in Seattle.');
} else {
  alert('You said that I like Starbucks. Sorry ' + user + ' but that\'s incorrect. Herkimer is way better.');
}
//question 3
var ans3 = prompt('Do I have any pets?');
console.log('user answered: ' + ans3)
if (ans3.toLowerCase() == 'no' || ans3.toLowerCase() == 'n') {
  score++ ;
  alert('That\'s right ' + user + '. I would by my lease forbids it.');
} else {
  alert('You said that I have pets. Sorry ' + user + ' but that\'s incorrect, but I wish I had a cat.');
}
//question 4
genericQuestion('What is my favorite color?', 'blue');
//generic y/n question evaluation
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

//question 5
var secretNumber = 36;
var ans5 = prompt('I\'m thinking of a whole number between 0 and 100. What is it?');
console.log('user answered: ' + ans5);
while (ans5 != secretNumber) {
  //too low
  if (ans5 < 26) {
    var ans5 = prompt('You\'re too low. Guess again.');
    console.log('user answered: ' + ans5);
  }
  //too high
  else if (ans5 > 46) {
    var ans5 = prompt('You\'re too high. Guess again.');
    console.log('user answered: ' + ans5);
  }
  //close
  else if (ans5 >= 26 || ans5 >= 46) {
    var ans5 = prompt('You\'re getting closer. Guess again.');
    console.log('user answered: ' + ans5);
  }
  //bad input
  else {
    var ans5 = prompt('Are you sure that\'s a number? Try again.');
    console.log('user answered: ' + ans5);
  }
}
score++ ;
alert('You got it! The answer is ' + secretNumber + '.');
//question 6
var homes = ['carlsbad', 'socorro', 'ely', 'leadville', 'las cruces', 'renton', 'seattle'];
var ans6 = prompt('Name one city in which I\'ve lived');
console.log('user answered: ' + ans6)
for (var i = 0; i < 7; i++) {
  if (ans6.toLowerCase() == homes[i]) {
    score++ ;
    alert('That\'s right. I have lived in ' + homes [i] + '.');
  }
}
//scoring
alert('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");
