let rl=require("readline-sync");
let limit=parseInt(rl.question("ENTER THE SIZE OF THE ARRAY : "));

console.log("ENTER THE ELEMENTS IN THE FIRST ARRAY : ");
let arr1=getArray(limit);
console.log("ENTER THE ELEMENTS IN THE SECOND ARRAY : ");
let arr2=getArray(limit);


let addtn=addArray(arr1,arr2,limit);

console.log("SUM OF TWO DIAMENTIONAL ARRAY : ");
displayArray(addtn);



function getArray(limit) {
    let arr=[];
    for (let i = 0; i <limit; i++) {
     arr[i]=[];
    }
    for (let i = 0; i <limit; i++) {
        for(let j=0;j<limit;j++){
            arr[i][j]=parseInt(rl.question())
        }
    }
    return arr;
    
}

function addArray(arr1,arr2,limit){
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit;j++){
            arr1[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    return arr1;
}

function displayArray(sumarr){
    let str;
    for(let i=0;i<limit;i++){
        str="";
        for(let j=0;j<limit;j++){
            str+=sumarr[i][j]+" ";
        }
        console.log(str);
    }

}


