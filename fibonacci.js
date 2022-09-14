function fibonacciSeries(num){
    fibo = [0, 1];
    if (typeof num === "number" && !isNaN(num)) {
      if (Number.isInteger(num)){
        if(num >2){
            for (var i = 2; i < num; i++) {
              fibo[i] = fibo[i - 1] + fibo[i - 2];
            }
            return fibo;
        }
        else{
            return "The number must be above 1";
        }
      }
      else{
        return "This is not a integer number";
      }
    }
    else{
        return "This is not a number";
    } 
}


const prompt = require("prompt-sync")();

var n = prompt("Insert the limit for series: ");

n = parseFloat(n);

var result = fibonacciSeries(n);

console.log(result);