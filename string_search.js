const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

const searching = "LApToP";


const output = [];

// index of 
// for(const product of products){
//     if(product.toLowerCase().indexOf(searching.toLowerCase())!=-1){
//         output.push(product);
//     }
// }

// includes
// for (const product of products){
//     if(product.toLowerCase().includes(searching.toLowerCase()) == true){
//       output.push(product);
//     }
// }

// starts with
// for(const product of products){
//   if(product.toLowerCase().startsWith(searching.toLowerCase()) == true){
//     output.push(product);
//   }
// }

// ends with
for(const product of products){
  if(product.toLowerCase().endsWith(searching.toLowerCase()) == true){
    output.push(product);
  }
}

console.log(output);