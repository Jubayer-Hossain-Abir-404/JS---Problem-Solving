const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop d34', price: 32000},
    {name: 'apple smart watch', price: 18000},
    {name: 'bashundhara binding paper', price: 80},
    {name: 'lg smart phone', price: 10000},
    {name: 'old granny land phone', price:100},
];

function searchProducts(products, productName){
    const matched = [];
    // if (products.indexOf(productName) != -1) {
    //   var  = products.name;
    // }
    for(const elements of products){
        if(elements.name.indexOf(productName) != -1){
            matched.push(elements);
        }
    }
    // let idx = products.map((object) => object.name).indexOf(productName);
    // // let idx = products.indexOf(productName);
    // console.log(products.name);
    // console.log(idx);
    // while (idx !== -1) {
    //   matched.push(products[idx]);
    //   idx = products.map((object) => object.name).indexOf(productName, idx + 1);
    // }
    return matched;
}

console.log(products);
const result = searchProducts(products, "smart");

console.log(result);