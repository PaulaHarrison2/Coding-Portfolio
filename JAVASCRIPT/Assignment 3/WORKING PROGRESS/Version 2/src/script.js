//Create array to store recommended tv series list
const watchList = ["Game of Thrones", "Breaking Bad", "Sons of Anarchy", "Blindspot", "The Handmaid's Tale"];

console.log(watchList.length);
console.log(watchList[0]);
console.log(watchList[1]);
console.log(watchList[2]);
console.log(watchList[3]);
console.log(watchList[4]);

const seasons = [8, 5, 7, 5, 5]; // Number

//Create array to store summary of each series
const summary = ["Nine noble families who wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, winter is coming along with an army of the dead which threatens the existence of all men.", 
  "Walter White, a chemistry teacher, who discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.", 
  "Jax Teller, a man in his early 30s, who is struggling to find a balance in his life between being a new dad and his involvement in a motorcycle gang.", 
  "a mysterious tattooed woman found in a bag in Times Square with no memory of her identity. As she tries to uncover her past, her tattoos are found to contain clues which help solve a criminal conspiracy.", 
  "a dystopian America, where women are used as baby-producing slaves, known as Handmaids, and who are forced to have babies for privileged couples."];  //Array

console.log(summary.length);
console.log(summary[0]);
console.log(summary[1]);
console.log(summary[2]);
console.log(summary[3]);
console.log(summary[4]);


console.log(`${watchList}. It has ${seasons} and is about ${summary}`);


//push adds to end
// pop deletes last
// unshift adds to beginning
//shift deletes first

//push to add a recommendation to the list
watchList.push();
console.log(watchList)