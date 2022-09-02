let rl=require("readline-sync");

let mark=parseFloat(rl.question("Enter your mark:"));
if(mark>=50){
    console.log("YOU HAVE PASSED YOUR EXAMINATION");
}else if(mark<50){
    console.log("YOU HAVE FAILED YOUR EXAMINATION");
}else{
    console.log("inavlid");
}