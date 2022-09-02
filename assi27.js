let rl=require("readline-sync");
let userHeight=parseInt(rl.question("HEIGHT OF THE USER : "));

try {
    if (isNaN(userHeight) === true) {
        throw "notANumberError"
    }

    if (userHeight > 200) {
        throw "HugeHeightError";
    }
    
    if (userHeight < 40) {
        throw "TinyHeightError";
    }if(userHeight>=40 && userHeight<=200){
        throw "valid";
    }
}catch(e){
    console.error(e);
}