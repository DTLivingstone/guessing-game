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
//question 1
//question 2
//question 3
//scoring
alert('You got ' + score + ' answers correct. Thanks for playing ' + user + "!");
