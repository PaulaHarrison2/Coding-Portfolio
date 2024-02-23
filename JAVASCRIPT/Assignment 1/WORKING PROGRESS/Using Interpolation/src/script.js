// General welcome message
console.log("Hello CFG Ladies!!");
console.log(
  "I'm very happy to be here and am really surprised there are so many of us from Valencia"
);

console.log("My name is Paula. What's your name?");

// Variables of name and place
const myFirstName = prompt("What is your name?");
const questionNamePlace = "If you aren't from Valencia, where are you from";
const place = prompt("Where are you from?");
const QM = "?";
const messageNamePlace = `${questionNamePlace} ${myFirstName} ${QM}`;
// Output message to consol
console.log(messageNamePlace);

// Confirm name and place in welcome message
const messageWelcome = `${myFirstName} from ${place}`;
// Output message to consol
console.log("It is very nice to meet you " + messageWelcome);

// Variables for weekly salary
const questionSalary =
  "I understand you would like to calculate your hourly rate. Please enter your average weekly NET salary into the prompt";
const weeklySalary = prompt("How much do you earn per week (NET)?");
// Output message to consol
console.log(questionSalary);

// Output message to consol confirming weekly salary entered
console.log("We confirm you have entered " + `${weeklySalary}` + " per week");

// Variables for hours per week
const questionHours =
  "Now enter into the prompt the number of hours you work per week";
const weeklyHours = prompt("How many hours do you work per week?");
// Output message to consol
console.log(questionHours);

// Output message to consol confirming weekly hours entered
console.log(
  "We confirm you have entered " + `${weeklyHours}` + " hours per week"
);

// Variables for calculating hourly rate
const messageHourlyRate = weeklySalary / weeklyHours;
// Output message to consol confirmation of hourly rate
console.log(
  "Thankyou. We calculate your NET hourly rate is " + messageHourlyRate
);
