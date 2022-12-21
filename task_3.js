let a = 6;
let b = 2;
let func2 = function(b) {
    return a + b;
}
function func1(a) {
    return func2(b);
}
console.log(func1(func2()));