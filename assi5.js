let rl = require('readline-sync');

let Mark = parseFloat(rl.question("ENTER YOUR MARK : "));

if (Mark >= 90) {
    console.log("A grade");
} else if (Mark >= 80) {
    console.log("B grade");
} else if (Mark >= 70) {
    console.log("C grade");
} else if (Mark >= 60) {
    console.log("D grade");
} else if (Mark >= 50) {
    console.log("E grade");
} else {
    console.log("Failed");
}