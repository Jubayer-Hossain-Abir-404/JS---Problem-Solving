// const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 1 resolved`);
  }, 5000);
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promise 2 resolved`);
    }, 2000);
});


// promise1.then(res => console.log(res));
// promise2.then((res) => console.log(res));


// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res);
// });

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
}); // starts with 2 promise. the one that becomes resolved first will be displayed first