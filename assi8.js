let rl=require("readline-sync");
let number=parseInt(rl.question("enter a number = "));
let sum=0;
for(let i=1;i<=number;i++){
    if (i%2!=0) {
        sum=sum+i;
    }
}
console.log(sum);