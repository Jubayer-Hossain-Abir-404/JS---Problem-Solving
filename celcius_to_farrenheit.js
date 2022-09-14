function celcius_to_farenheit(value){
    var result = value * 1.8 + 32;
    return result;
}


var farenheit = celcius_to_farenheit(38)

console.log("The temperature in farenheit is: "+farenheit);
