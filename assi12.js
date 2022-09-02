var rl = require('readline-sync');

var limit = parseInt(rl.question("Enter the array size: "));
var arr = [];

console.log("Enter the values of array:")
for (let i = 0; i < limit; i++) {
    arr[i] = parseInt(rl.question());
}
arr.sort(function (a,b) {
    return b-a

    
})

console.log("SORTED ARRAY : "+arr);