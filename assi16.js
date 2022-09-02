var rl = require('readline-sync');

let num = rl.question("Enter the number: ");

let flag = 0;

for (i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        flag = 1;
        break;
    }
}

if(flag == 0){
    console.log("Entered number is prime number")
}else{
    console.log("Entered number is not a prime number")
}