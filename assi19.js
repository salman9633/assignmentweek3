let rl = require('readline-sync');

let income = Number(rl.question("Enter the annual Income: "));
let tax;

if (income > 1000000 && income <= 5000000) {
    tax = (income * 30) / 100;
} else if (income > 500000 && income <= 1000000) {
    tax = (income * 20) / 100;
} else if (income > 250000 && income <= 500000) {
    tax = (income * 5) / 100;
} else {
    tax = "No tax";
}

console.log("Tax amount: " + tax);