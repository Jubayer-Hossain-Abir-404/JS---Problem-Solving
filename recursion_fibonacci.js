function fibonacciSeries(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    }
}

// const prompt = require("prompt-sync")();

// var n = prompt("Insert the limit for series: ");

// n = parseInt(n);

var result = fibonacciSeries(9);

console.log(result);