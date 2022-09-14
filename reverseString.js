function reverseString(text){
    var reverse = '';
    for (const element of text){
        reverse = element + reverse;
    }
    return reverse;
}

const prompt = require("prompt-sync")();

var st = prompt("Input a string: ");

result = reverseString(st);

console.log("The reversed string - "+ result);

