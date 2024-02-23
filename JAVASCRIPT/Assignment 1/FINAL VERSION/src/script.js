// General welcome message
console.log("Hello 😊 CFG Ladies!!");
console.log(
  "I'm very happy to be here and am really surprised there are so many of us from Valencia"
);

// Const of name and place
const questionFirstName = "My name is Paula. What's your name?";
console.log(questionFirstName);

const myFirstName = prompt("What is your name?");
const place = prompt("Where are you from?");

// Confirm name and place in welcome message
const messageWelcome = `${myFirstName} from ${place}`;
// Output welcome message to consol
console.log("It is very nice to meet you " + messageWelcome);

// Const for weekly salary
const weeklySalary = prompt("How much do you earn per week (NET)?");
// Output message to consol
console.log(
  "I understand you would like to calculate your hourly rate. Please enter your average weekly NET salary into the prompt"
);

// Output message to consol confirming weekly salary entered
console.log("We confirm you have entered " + weeklySalary + " per week");

// Const for hours per week
const weeklyHours = prompt("How many hours do you work per week?");
// Output message to consol
console.log("Now enter into the prompt the number of hours you work per week");

// Output message to consol confirming weekly hours entered
console.log("We confirm you have entered " + weeklyHours + " hours per week");

// Const for calculating hourly rate
const messageHourlyRate = weeklySalary / weeklyHours;
// Output message to consol confirmation of hourly rate
console.log(
  "Thankyou. We calculate your NET hourly rate is " + messageHourlyRate
);
