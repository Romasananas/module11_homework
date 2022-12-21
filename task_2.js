const n = +prompt('введите число для проверки до 1000');
function isPrimeNum(n) {
    if (n > 1000) {
        return `${n} - это больше тысячи, данные неверны`;
    }
    if (n < 3) {
      return `${n} - это простое число`;
    }
    let i = 2;
    const j = Math.sqrt(n);
    while (i <= j) {
        if (n % i === 0) {
            i++;
            return `${n} - это составное число`;
        } else {
            return `${n} - это простое число`;
}}}
console.log(isPrimeNum(n));