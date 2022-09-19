function updateNumber(product, isIncrease, productPrice){
    let productNumber = document.getElementById(product + "Number");
    if(isIncrease == true){
        productNumber.value = parseInt(productNumber.value) + 1;
    }
    else if (productNumber.value > 0) {
      productNumber.value = parseInt(productNumber.value) - 1;
    }
    document.getElementById(product + "Price").innerText =
      productPrice * parseInt(productNumber.value);

    updateTotal();
}

function getInput(product){
    return parseInt(document.getElementById(product + 'Price').innerText);
}

function updateTotal(){
    document.getElementById("subTotal").innerText =
      getInput("case") + getInput("phone");

    document.getElementById("tax").innerText = parseInt(
      document.getElementById("subTotal").innerText) / 10;

    document.getElementById("totalCost").innerText =
      parseInt(document.getElementById("subTotal").innerText) +
      parseFloat(document.getElementById("tax").innerText);
}


// for the case button increase decrease

document.getElementById("casePlus").addEventListener('click', function(){
    updateNumber("case", true, 59);
});

document.getElementById("caseMinus").addEventListener('click', function(){
    updateNumber("case", false, 59)
});

// for the phone button increase decrease

document.getElementById("phonePlus").addEventListener('click', function(){
    updateNumber("phone", true, 1219);
});

document.getElementById("phoneMinus").addEventListener("click", function () {
  updateNumber("phone", false, 1219);
});