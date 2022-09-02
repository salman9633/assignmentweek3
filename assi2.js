let readline=require('readline-sync');

let num1=readline.question('enter a number = ');
let num2=readline.question('enter a number = ');
let sum=parseInt(num1)+parseFloat(num2);
console.log('sum of two number = '+sum);