function farenheit_to_celcius(value){
    var result = (value - 32) * (5/9);
    return result;
}


var result = farenheit_to_celcius(100)

console.log("The temperature in celcius is: " + result.toPrecision(5));