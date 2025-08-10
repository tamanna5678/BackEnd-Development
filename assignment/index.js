//product file , users file, buy products and write in order history 
//buyProduct(username,productname){

const fs = require("fs");

let username = process.argv[2];
let productname = process.argv[3];

fs.readFile("products.txt", "utf-8", (err, pdata) => {
  if (err) return console.log("Error reading products.txt:", err);

  let products = JSON.parse(pdata);
  let product = products.find(p => p.name === productname);

  if (!product || product.quantity <= 0) {
    console.log("Product is not available");
    return;
  }

  fs.readFile("users.txt", "utf-8", (err, udata) => {
    if (err) return console.log("Error reading users.txt:", err);

    let users = JSON.parse(udata);
    let user = users.find(u => u.name === username);

    if (!user) {
      console.log("User not found");
      return;
    }

    if (user.balance < product.price) {
      console.log("Insufficient balance");
      return;
    }

    
    product.quantity -= 1;
    user.balance -= product.price;

    
    fs.writeFile("products.txt", JSON.stringify(products, null, 2), (err) => {
      if (err) return console.log("Error writing products.txt:", err);

      
      fs.writeFile("users.txt", JSON.stringify(users, null, 2), (err) => {
        if (err) return console.log("Error writing users.txt:", err);

        let order = {
          user: user.name,
          product: product.name,
          amount: product.price,
          timestamp: new Date().toISOString()
        };

        
        fs.appendFile("orderHistory.txt", JSON.stringify(order) + "\n", (err) => {
          if (err) return console.log("Error writing orderHistory.txt:", err);
          console.log("Order placed successfully!");
        });
      });
    });
  });
});
