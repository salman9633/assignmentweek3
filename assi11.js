var rl = require('readline-sync');

var limit = parseInt(rl.question("Enter the array size: "));
var arr = [];

console.log("Enter the values of array1:")
for (let i = 0; i < limit; i++) {
    arr[i] = parseInt(rl.question());
}
let count=0;
for (let i = 0; i < limit; i++) {
    
    if (arr[i]%2==0) {
        count++;
    }
}
console.log("NUMER OF EVEN NUMBERS : "+count);

