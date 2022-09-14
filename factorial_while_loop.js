function factorial(n) {
  var fact = 1;
  while(n>=1){
    fact = fact * n;
    n--;
  }
  return fact;
}

var result = factorial(6);

console.log("The result is " + result);
