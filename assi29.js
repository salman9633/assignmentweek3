function myFilter(myArray, callback) {
    callback(myArray);
}


const arr = [1, 2, 3, 4, 5]
myFilter(arr, (myArray) => {
    let newArr = myArray.reduce((total, item) => {
        return total + item;
    })
    console.log(newArr)
});
