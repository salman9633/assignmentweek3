var rl = require('readline-sync');

var limit = parseInt(rl.question("Enter the array size: "));
var arr1 = [];
var arr2 = [];

let sum=[];

console.log("Enter the values in array1:")
for (let i = 0; i < limit; i++) {
        arr1[i]=[];    
    }
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arr1[i][j] = parseInt(rl.question());
    }
    
}

console.log("Enter the values in array2:")
for (let i = 0; i < limit; i++) {
        arr2[i]=[];    
    }
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arr2[i][j] = parseInt(rl.question());
    }
    
}
console.log("sum of two diamentional array:");
for (let i = 0; i < limit; i++) {
    sum[i]=[];    
}
for (let i = 0; i < limit; i++) {

    for (let j = 0; j < limit; j++) {
        sum[i][j] = arr1[i][j]+arr2[i][j]
    }
    
}

for (let i = 0; i < limit; i++) {
    str = "";
    for (let j = 0; j < limit; j++) {
        str +=sum[i][j] + " ";
    }
    console.log(str);
}