//Create a teacher bot with variables, template literals and strings interpolation

console.log("Hi there!");

let botName = "teacherBot";
let greeting = `My name is ${botName}.`;
console.log(greeting);

let subject = "JavaScript";
let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

//String length property
let strlengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strlengthIntro);

console.log(subject.length);

//Find length of the topic string

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

//Access characters from a string
console.log(subject[0]);