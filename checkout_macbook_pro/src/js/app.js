function memory(cost){
    document.getElementById("memoryCost").innerText = cost;
    totalPrice();
}

function storage(cost){
    document.getElementById("storageCost").innerText = cost;
    totalPrice();
}

function delivery(cost){
    document.getElementById("deliveryCost").innerText = cost;
    totalPrice();
}


function totalPrice(){
    document.getElementById("totalPrice").innerText =
      1299 +
      parseInt(document.getElementById("memoryCost").innerText) +
      parseInt(document.getElementById("storageCost").innerText) +
      parseInt(document.getElementById("deliveryCost").innerText);
    
    
    checkPromo(document.getElementById("promoInput").value);
}

function checkPromo(promoCode){
    const promoInput = document.getElementById("promoInput");
    if(promoCode == "Jobs"){
        total(true);
    }
    else if (promoCode.trim().length == 0) {
        total(false);
    } 
    else {
      alert("The promo code is incorrect !!!");
      promoInput.value = "";
    }
}

function total(hasPromo){
    
    if(hasPromo == true){
        document.getElementById("total").innerText =
          parseInt(document.getElementById("totalPrice").innerText) -
          parseInt(document.getElementById("totalPrice").innerText) * 0.2;
    }
    else{
        document.getElementById("total").innerText = parseInt(
          document.getElementById("totalPrice").innerText
        ); 
    }
}


// memory clicks
document.getElementById("8GbMemory").addEventListener('click', function(){
    memory(0);
});

document.getElementById("16GbMemory").addEventListener('click', function(){
    memory(300);
});

//storage clicks

document.getElementById("256GbStorage").addEventListener('click', function(){
    storage(0);
});

document.getElementById("512GbStorage").addEventListener("click", function () {
  storage(400);
});

document.getElementById("1TbStorage").addEventListener("click", function () {
  storage(600);
});

// delivery charge clicks

document.getElementById("freeDelivery").addEventListener('click', function(){
    delivery(0);
});

document.getElementById("chargeDelivery").addEventListener('click', function(){
    delivery(20);
});


// promo input 
document.getElementById("promoInput").addEventListener("keyup", function(event){
    const promoText = event.target.value;
    console.log(promoText.trim().length);
    if (promoText.trim().length !=0) {
      document.getElementById("addPromoCode").removeAttribute("disabled");
    }
    else{
        document.getElementById("addPromoCode").setAttribute("disabled", true);
    }
});
// promo code click

document.getElementById("addPromoCode").addEventListener('click', function(){
    const promoInput = document.getElementById("promoInput").value;
    checkPromo(promoInput);
});