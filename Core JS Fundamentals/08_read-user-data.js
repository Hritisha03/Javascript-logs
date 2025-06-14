const readlineSync = require("readline-sync");

const Username = readlineSync.question("What is your name?");
const Userage = readlineSync.question("How old are you?");
const YearofBirth = 2025 - Userage;

console.log("Hello "+ Username);
console.log(`Welcome ${Username}, to the JavaScript world!`);
console.log(`You were born on the year ${YearofBirth}`);

console.log(typeof Userage);