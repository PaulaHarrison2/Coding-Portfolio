// General welcome message
const name = prompt("What is your name?");
const place = prompt("Where are you from?");
alert(`Hello ${name} from ${place} 😊. I would be happy to create a weekend TV Watch list for you`);

// create Objects for each series
const gameThrones = {
title: "Game of Thrones", // String
seasons: 8, // Number
summary: "the struggle for power between ruling families in a mythical land, an iron throne, incest, love, war, dragons and an army of the dead, which threatens the existence of all men.", // String
};
const breakingBad = {
title: "Breaking Bad", // String
seasons: 5, // Number
summary: "the transformation of a mild-mannered chemistry teacher, Walter White, into a ruthless methamphetamine manufacturer and drug lord.", // String
};

const sonAnarchy = {
title: "Sons of Anarchy", // String
seasons: 7, // Number
summary: "an outlaw motorcycle club's internal conflicts, loyalty, crime, and power struggles.", // String
};

const blindspot = {
title: "Blindspot", // String
seasons: 5, // Number
summary: "a woman with no memory and covered in mysterious tattoos who works with the FBI to solve complex crimes and uncover her own identity.", // String
};
    
const handmaidTale = {
title: "The Handmaid's Tale", // String
seasons: 5, // Number
summary: "a dystopian America, where women are used as baby-producing slaves, known as Handmaids, who are forced to have babies for privileged couples.", // String
};
    
const severance = {
title: "Severance", // String
seasons: 1, // Number
summary: " team of office workers whose memories have been surgically divided between their work and personal lives; when a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.", // String
};

// Array of Objects 
const series = [gameThrones, breakingBad, sonAnarchy, blindspot, handmaidTale, severance];


//Alert for the first recommendation
alert(`My first recommendation is ${series[0].title}\nIt has ${series[0].seasons} seasons.\nIt is about ${series[0].summary}`);


// Create Watch List
const watchList = [];


// Function to ask if user wants to add recommended series to their Watch List
//use a parameter like show (and not index) to represent an individual show object, as it provides a clearer and more descriptive variable name for the show being processed in the function
function addSeriesToWatchList(show) {
  const answer = prompt(`Would you like to add ${show.title} to your watch list? Yes or No?`);
  
  if (answer.toLowerCase() === "yes") {
    watchList.push(show.title);
  alert(`${show.title} has been added to your Watch List`);
    
  } else if (answer.toLowerCase() !== "no") {
    
  // If the user enters an invalid response, prompt again
    alert("Please enter 'yes' or 'no'");
    addSeriesToWatchList(show);
  }
}


// Loop to show next recommendations
// The variable name index in the loop is appropriate and should remain as is. In the loop, index is used to iterate over the array of shows (series), and it represents the current position in the array.
for (let index = 0; index < series.length; index++) { addSeriesToWatchList(series[index]);
                                                     
const extraRecommendation = index + 1 < series.length;

if (extraRecommendation) {
    alert(`My next recommendation is ${series[index + 1].title}\nIt has ${series[index + 1].seasons} seasons.\nIt is about ${series[index + 1].summary}`);
  } else {
    
 // Ask if the user wants to add their own recommendation
    const extraSeries = prompt("Would you like to add your own recommendation? Yes or No?");
    if (extraSeries.toLowerCase() === "yes") {
      const enterCustomSeries = prompt("Enter the name of the series");
      watchList.push(enterCustomSeries);
      alert(`${enterCustomSeries} has been added to your Watch List`);
    }
  }
}


// Display watch list

// String Concatentation version
// alert("Your recommended Watch List is :\n" +  watchList.join('\n') + '\n' + "Enjoy!! 😉");
                                                            
// String Interpolation version
alert(`Your recommended Watch List is : \n${watchList.join('\n')} \nEnjoy!! 😉`);
                                                    