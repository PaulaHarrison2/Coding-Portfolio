// General welcome message
const name = prompt("What is your name?");
const place = prompt("Where are you from?");
const messageWelcome = `${name} from ${place}`;

alert(`Hello ${messageWelcome} 😊. I would be very happy to create a weekend shopping list for you`);

// create const for questions
const question1 = "Do you need";
const question2 = "How many";

// set up response to yes & no questions
function askYesNoQuestion(item, singular, plural) {
  const questionText = `${question1} ${item}? Yes or No?`;
  const replyText = `${question2} ${plural} of ${item} do you need?`;

  const answer = prompt(questionText);

  if (answer === "yes" || answer === "Yes" || answer === "YES") {
    const quantity = prompt(replyText);
    return `${quantity} ${quantity > 1 ? plural : singular} of ${item}`;
  } else if (answer === "no" || answer === "No" || answer === "NO") {
    return false;
  } else {
    // If the user enters an invalid response, prompt again
    alert("Please enter 'yes' or 'no'");
    return askYesNoQuestion(item, singular, plural);
  }
}

// Example usage
const bread = askYesNoQuestion("bread", "loaf", "loaves");
const milk = askYesNoQuestion("milk", "carton", "cartons");
const chocolate = askYesNoQuestion("chocolate", "box", "boxes");

// You can repeat the process for other items as needed