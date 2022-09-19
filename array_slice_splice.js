const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

const numberSliced = numbers.slice(4, 8);

// console.log(numbers);

// console.log(numberSliced);

// splice to remove an array from element

// const numberSpliced = numbers.splice(4, 2);

// console.log(numbers);

// console.log(numberSpliced);

// splice to insert an array
// const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);

const numberSpliced2 = numbers.splice(4, 0, 777);

console.log(numbers);

console.log(numberSpliced2);

