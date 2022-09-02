var rl = require('readline-sync')

class TwoDimensionalArray {
    constructor(arr, size) {
        this.size = size;
        this.arr = arr;
    }

    getArray() {
        for (let i = 0; i < size; i++) {
            arr[i] = [];
        }

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                arr[i][j] = parseInt(rl.question());
            }
        }
    }

    displayArray() {
        for (let i = 0; i < this.size; i++) {
            let str = "";
            for (let j = 0; j < this.size; j++) {
                str += arr[i][j] + " ";
            }
            console.log(str);
        }
    }
}
var arr = [];
var size = parseInt(rl.question("Enter the size of array: "));
const twoDimension = new TwoDimensionalArray(arr, size);

console.log("Enter the array Elements");
twoDimension.getArray();
console.log("Array elements are:");
twoDimension.displayArray();