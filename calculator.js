const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, ${name}.`);


let numberOne = prompt("Please enter the first number: ");
let numberTwo = prompt("Please enter the second number: ");
const operator = prompt("Please choose the operation (+, -, /, *): ")

numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);

if (numberOne >= 0 & numberTwo >= 0) {

    if (operator == "+") {
        console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
    } else if (operator == "-") {
        console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
    } else if (operator == "/") {
        console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
    } else if (operator == "*") {
        console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
    } else {
        console.log("The Operation is not valid!");
    }

} else {
    console.log("The Numbers were invalid!");
}



