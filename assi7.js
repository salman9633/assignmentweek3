let rl=require("readline-sync");
let number=parseInt(rl.question("enter a number = "));

for(let i=1;i<=10;i++){
    console.log(i+" x "+number+"=" +i*number);
}