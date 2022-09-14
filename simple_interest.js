function simple_interest(p, r, T){
    var si = (p * r * T)/100;
    return si;
}


const prompt = require("prompt-sync")();

var p = prompt("Insert the principle value: ");
p = parseInt(p);

var r = prompt("Insert the rate: ");
r= parseFloat(r);

var T = prompt("Insert the Time Period: ");
T= parseInt(T);

var si = simple_interest(p, r, T);

console.log("Simple interest is: " + si.toPrecision(5));