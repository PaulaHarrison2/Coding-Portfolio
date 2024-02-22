// General welcome message
const name = prompt("What is your name?");
const place = prompt("Where are you from?");
alert(`Hello ${name} from ${place} 😊. I would be happy to create a weekend shopping list for you`);

// Shopping list
const shoppingList = [];


// Function to ask yes/no questions and update the shopping list
function askYesNoQuestion(item) {
  const answer = prompt(`Do you need ${item}? Yes or No?`);
  
  if (answer.toLowerCase() === "yes") {
    const quantity = prompt(`How many ${item}s do you need?`);
    shoppingList.push(`${quantity} ${item}`);
    
  } else if (answer.toLowerCase() !== "no") {
    
    // If the user enters an invalid response, prompt again
    alert("Please enter 'yes' or 'no'");
    askYesNoQuestion(item);
  }
}

// call questions for each item
askYesNoQuestion("chocolate");
askYesNoQuestion("vodka");
askYesNoQuestion("beer");
askYesNoQuestion("wine");

// Display shopping list
//The join('\n') part helps separate the items with a newline
alert("Your shopping list:\n" + shoppingList.join('\n') + '\n' + "Have a great weekend!! 😉\n");
