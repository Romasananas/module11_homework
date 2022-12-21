let a = +prompt('введите 1 число');
let b = +prompt('введите 2 число');
function countNum (a, b) {
    let timer = setInterval(function() {
        console.log(a);
        if (a == b){
            clearInterval(timer);
        };
        a++;
    }, 1000);
} 
countNum(a,b);