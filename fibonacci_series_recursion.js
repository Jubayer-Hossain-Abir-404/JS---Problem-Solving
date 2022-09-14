function fibonacciSeries(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0, 1];
    }
    fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];

    return fibo;
}

const prompt = require("prompt-sync")();

var n = prompt("Insert the limit for series: ");

n = parseInt(n);

var result = fibonacciSeries(n);

console.log(result);