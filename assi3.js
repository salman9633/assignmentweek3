let rl=require('readline-sync');

let p=rl.question("enter the principle amount = ");
let r=rl.question("Interest rate = ");
let n=rl.question("Number of years = ");
let s=(parseInt(p)*parseFloat(r)*parseFloat(n))/100;
console.log('simple interest = '+s);