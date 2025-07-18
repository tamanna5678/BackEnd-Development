//product file , users file, buy products and write in order history 
//buyProduct(username,productname){

const fs = require("fs");

let productsname = [
    {
        id:1,
        name:"a",
        quantity:"50"
    },
    {
        id:2,
        name:"b",
        quantity:"25"
    },
    {
        id:3,
        name:"c",
        quantity:"100"
    },
    {
        id:4,
        name:"d",
        quantity:"80"
    }
]
let users = [
    {
        id:1,
        name:"thakral",
        age:"21"
    },
    {
        id:2,
        name:"tamanna",
        age:"25"
    },
     {
        id:3,
        name:"abcde",
        age:"24"
    },
     {
        id:4,
        name:"pqrst",
        age:"28"
    }

]
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users displayed...")
    console.log(users)
})

fs.writeFile("../products.txt",JSON.stringify(productsname),function(err){
    if(err) return console.log(err);
    console.log("products displayed...")
    console.log(productsname)
})

// function buyProduct(users,productname){

// }


function buyProduct(productsname, cb) {
  let isProduct = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productsname) {
      isProduct = products[i];
      break;
    }
  }
  if (!isProduct) {
    cb("Product is not available", null);
  } else if (isProduct.quantity <= 0) {
    cb("Product is out of stock", null);
  } else {
    isProduct.quantity -= 1;
    cb(null, `Successfully purchased ${productsname}. Remaining stock: ${isProduct.quantity}`);
  }
}

buyProduct(productsname, function (err, message) {
  if (err) {
    console.log(err);
  } else {
    console.log(message);
  }
});