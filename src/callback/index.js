function sum(num1, num2) {
    debugger
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2,3,sum));

function dateFunction(callback) { 
    console.log(new Date);
    setTimeout(function() {
        let dateVariable = new Date;
        callback(dateVariable); 
    }, 3000);
}

function printDate(dateNow) {
console.log(dateNow)
}
dateFunction(printDate); 