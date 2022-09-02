var rl = require('readline-sync');

function getArray(arr, size) {
    for (let i = 0; i < size; i++) {
        arr[i] = rl.question();
    }
    return arr;
}

function displayArray(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    console.log("Array elements are " + str);
}

let size = parseInt(rl.question("Enter the array size: "));
let arr = [];
arr = getArray(arr, size);
displayArray(arr);