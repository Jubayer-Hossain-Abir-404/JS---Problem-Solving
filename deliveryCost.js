function deliveryCost(quantity){
    if(quantity <= 100){
        return "The delivery cost is " + 100 * quantity;
    }
    else if(quantity > 100 && quantity < 200){
        var del_cost = (100 * 100) + ((quantity - 100) * 80);
        return "The delivery cost is " + del_cost;
    }
    else if(quantity > 200){
        var del_cost = 100 * 100 + 100 * 80 + (quantity - 200) * 50;
        return "The delivery cost is " + del_cost;
    }
}

let cost = deliveryCost(150);

console.log(cost);