function totalSales(items, c1, c2, c3){
    if(c1 < 0 || c2 < 0 || c3 < 0){
        return "The quantity of the item can not be less than 0";
    }
    else{
        items.shirt.quantity= c1;
        items.pant.quantity = c2;
        items.shoe.quantity = c3;
        totalPrice = items.shirt.price * items.shirt.quantity 
        + items.pant.price * items.pant.quantity + items.shoe.price * items.shoe.quantity;

        return ["The total price is " + totalPrice, items];
    }
}


const items = {
  shirt: { price: 100, quantity: 1 },
  pant: { price: 200, quantity: 1 },
  shoe: { price: 500, quantity: 1 }
};


// console.log(items);

let result = totalSales(items, 0, 5 ,6)

console.log(result);




