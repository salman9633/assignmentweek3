var rl = require('readline-sync');

var size = rl.question("Enter the size of array: ");
let arr1 = [], arr2 = [];

console.log("Enter the values of array:")
for (let i = 0; i < size; i++) {
    arr1[i] = parseInt(rl.question());
}

for (let i = 0; i < size - 1; i++) {
    arr2[i] = arr1[i] * arr1[i + 1];
}

console.log("Output: " + arr2);
