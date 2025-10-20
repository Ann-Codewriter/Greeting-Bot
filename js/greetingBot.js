/*Use variables, data types and simple arithmetic operators to build a greeting bot */

//Step 1 - Add a message
console.log("Hi, there!");

//Step 2 - Add another statement
console.log("I am excited to talk to you.");

//Step 3 - Declare and initialize a variable
let bot;
bot = "teacherBot";
let botLocation = "the universe";

//Step 4 - Add a new statement
console.log("Allow me to introduce myself.");

//Step 5 - String Concatenation
let botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

let botLocationSentence = "I live in " + botLocation + '.';
console.log(botLocationSentence);

//Setp 6 - Reassignment of variable name
bot = "professorBot";

//Step 7 - Check the new bot value
let nicknameIntroduction = "My nickname is " + bot + '.';
console.log(nicknameIntroduction);

//Step 8 - Reassign a new variable name
bot = "awesomeTeacherBot";

//Step 9 - Check the bot's new nickname
let newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + '.';
console.log(newNicknameGreeting);

//Step 10 - Bot's favorite subject
let favoriteSubject = "Computer Science";
let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + '.';
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!");
