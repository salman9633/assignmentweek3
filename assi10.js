var rl = require('readline-sync');

var limit = parseInt(rl.question("Enter the array size: "));
var arr1 = [];
var arr2 = [];



console.log("Enter the values of array1:")
for (let i = 0; i < limit; i++) {
    arr1[i] = parseInt(rl.question());
}

console.log("Enter the values of array2:")
for (let i = 0; i < limit; i++) {
    arr2[i] = parseInt(rl.question());
}

for (let i = 0; i < limit; i++) {
    let temp = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp;
}

console.log("After swapping:")

var arr = "";
for (let i = 0; i < limit; i++) {
    arr += arr1[i] + " ";
}

console.log("Array1: " + arr);

var arr = "";
for (let i = 0; i < limit; i++) {
    arr += arr2[i] + " ";
}

console.log("Array2: " + arr);