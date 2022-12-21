let arr = [1,2,3,4,5,6,7,8,9];
function CountOddEvenNumbers() {
    let arrEven = [];
    let arrOdd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        } else if (arr[i] % 2 !== 0) {
            arrOdd.push(arr[i]);
        } else {
            return none;
        }
    };
    console.log(arrEven.length);
    console.log(arrOdd.length);
}

CountOddEvenNumbers()