// General welcome message
const name = prompt("What is your name?");
const place = prompt("Where are you from?");
alert(`Hello ${name} from ${place} 😊. I would be happy to create a weekend TV Watch list for you`);

// Watch list
let series = {
  title: ["Game of Thrones", "Breaking Bad", "Sons of Anarchy", "Blindspot", "The Handmaid's Tale"], //Array
  
  seasons: [8, 5, 7, 5, 5], // Number
  
  summary:  ["nine noble families who wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, winter is coming along with an army of the dead which threatens the existence of all men.", 
  "Walter White, a chemistry teacher, who discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.", 
  "Jax Teller, a man in his early 30s, who is struggling to find a balance in his life between being a new dad and his involvement in a motorcycle gang.", 
  "a mysterious tattooed woman found in a bag in Times Square with no memory of her identity. As she tries to uncover her past, her tattoos are found to contain clues which help solve a criminal conspiracy.", 
  "a dystopian America, where women are used as baby-producing slaves, known as Handmaids, and who are forced to have babies for privileged couples."],  //Array
}; 

alert(`My first recommendation is ${series.title[0]}'\n'It has ${series.seasons[0]} seasons.'\n'It is about ${series.summary[0]}`);


  
// Create Watch List
const watchList = [];

// Function to ask yes/no questions and update the watch list
function askYesNoQuestion(index) {
  const answer = prompt(`Would you like to add ${series.title[index]} to your watch list? Yes or No?`);
  
  if (answer.toLowerCase() === "yes") {
    watchList.push(index);
  alert(`${series.title[index]} has been added to your Watch List`);
    
  } else if (answer.toLowerCase() !== "no") {
    
  // If the user enters an invalid response, prompt again
    alert("Please enter 'yes' or 'no'");
    askYesNoQuestion(series);
  }
}

// Loop to show next recommendations
for (let index = 0; index < series.title.length; index++) {
  askYesNoQuestion(index);

  if (index < series.title.length - 1) {
    alert(`My next recommendation is ${series.title[index + 1]}\nIt has ${series.seasons[index + 1]} seasons.\nIt is about ${series.summary[index + 1]}`);
  }
}

// Ask if they would like to add a series to the watch list
const extraSeries = prompt("Would you like to add your own recommendation to the list? Yes or No?")
if (extraSeries.toLowerCase() === "yes") {
  const customSeries = prompt("Enter the name of the series");
  watchList.push({ title: customSeries });
  alert(`"${customSeries}" has been added to your watch list.`);
}




// Display watch list

// String Concatentation version
// alert("Your recommended Watch List is :\n" +  watchList.join('\n') + '\n' + "Enjoy!! 😉");
                                                            
// String Interpolation version
alert(`Your recommended Watch List is : \n${watchList.join('\n')} \nEnjoy!! 😉`);