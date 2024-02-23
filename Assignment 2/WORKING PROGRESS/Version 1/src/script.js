// General welcome message
console.log("Hello 😊");
console.log("I would be very happy to create an 8 character random password for you using a word familiar to you");

// Const of word to use
const promptWord = prompt("What word would you like to include in your password? Please enter a word between 3 and 5 letters?");

// Apply if...else Conditional Statements
if (promptWord.length <=3) {
const promptWord = prompt("I'm sorry your word is too short. You need to use a word that is between 3 and 5 letters. Please re-enter a word between 3 and 5 letters");
}else if (promptWord.length >=5) {
const promptWord = prompt("I'm sorry your word is too long. You need to use a word that is between 3 and 5 letters. Please re-enter a word between 3 and 5 letters?");
}else{ 
console.log("We confirm the word you would like to use is = " + promptWord);}

//(promptWord.length >=4 && <=8) {
  //HAVING PROBLEMS WITH THIS PART = ERROR: Uncaught SyntaxError: Unexpected token '<='
// Confirm the input word 

