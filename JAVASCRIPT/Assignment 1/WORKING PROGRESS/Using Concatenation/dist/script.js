console.log("Hello CFG Ladies!!");
console.log(
  "I'm very happy to be here and am really surprised there are so many of us from Valencia"
);

// Declaring a const of name and place
console.log("My name is Paula. What's your name?");
const myFirstName = prompt("What is your name?");
const questionNamePlace = "If you aren't from Valencia, where are you from";
const place = prompt("Where are you from?");
const messageNamePlace = questionNamePlace + " " + myFirstName + "?";
// Output message to consol
console.log(messageNamePlace);

// Confirm name and place in welcome message
const messageWelcome =
  "It is very nice to meet you" +
  " " +
  myFirstName +
  " " +
  "from" +
  " " +
  place;
// Output message to consol
console.log(messageWelcome);

// Declaring const for weekly salary
const questionSalary =
  "I understand you would like to calculate your hourly rate. Please enter your average weekly NET salary into the prompt";
const weeklySalary = prompt("How much do you earn per week (NET)?");
// Output message to consol
console.log(questionSalary);

// Declaring confirmation of weekly salary entered
const weeklySalaryConfirmed =
  "We confirm you have entered" + " " + weeklySalary + " " + "per week";
// Output message to consol
console.log(weeklySalaryConfirmed);

// Declaring const for hours per week
const questionHours =
  "Now enter into the promt the number of hours you work per week";
const weeklyHours = prompt("How many hours do you work per week?");
// Output message to consol
console.log(questionHours);

// Declaring confirmation of weekly hours entered
const weeklyHoursConfirmed =
  "We confirm you have entered" + " " + weeklyHours + " " + "hours per week";
// Output message to consol
console.log(weeklyHoursConfirmed);

// Declaring const for calculating hourly rate
const messageHourlyRate = "Thankyou. We calculate your NET hourly rate is";
// Output message to consol
console.log(messageHourlyRate + " " + weeklySalary / weeklyHours);