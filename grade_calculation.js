function calculate_grade(){
    var sum = 0;
    for (var i=0; i<marks.length; i++){
        sum += marks[i];
    }
    return sum;
}



// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const prompt = require("prompt-sync")();
//
// get input from the user.
//
var n = prompt("How many Subjects? ");

var marks = new Array();

for (var i=0; i<n;i++){
    marks[i] = prompt();
    marks[i] = parseInt(marks[i]);
}

console.log("The marks are - ");

for (var i =0; i<n ;i++){
    console.log(marks[i] + " ");
}


var result = calculate_grade.apply(this, marks);

console.log("Result " + result);