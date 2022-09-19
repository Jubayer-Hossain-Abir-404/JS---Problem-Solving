const numbers = [4, 7, 1, 3, 9, 2, 5];

const sortedNumbers = numbers.sort();

console.log(sortedNumbers);


const names = ['jahir', 'tahir', 'mohsin', 'anaya', 'karim'];

const reverse = names.reverse();

// this is ascending order
const reverseSort = names.reverse().sort();

console.log(names);

console.log(reverseSort);

const newNumbers = [4, 71, 19, 33, 95, 22, 56];

newNumbers.sort(function (a, b){
    return b - a;
});

console.log(newNumbers);