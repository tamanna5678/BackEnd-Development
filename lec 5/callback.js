
function buyProduct(product_name,cb){
    //some asynchronous operation
    //get product details from product db
    //write order detail in user db
    setTimeout(()=>{
        console.log("order complete");
        cb();
    })
}
let account_balance = 200000;
let products =[
    {
        name:"samsung",
        amount:60000,
        quantity:20
    },
    {
        name:"iphone 16",
        amount:100000,
        quantity:10
    }   
]
// Implement for loop to find product is an array ...

buyProduct("iphone 16",function(err,amount){
    //console.log("product is purchased ")
    if(err) return console.log(err)
        console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err)
        console.log(message)
    });
})

function buyProduct(product_name,cb){
//     let isProduct = null
//     //find product object from product array whos name is equal to product_name
//     for(let i = 0;i<products.length;i++){
//         //console.log(products[i].name=product_name);
//         if(products[i].name=product_name){
//             isProduct=products[i];
//         }
//     }

// if(!isProduct){
//     cb("product is not available",null)
// }else{
//     cb(null,isProduct.amount);
// }
// }

// buyProduct("iphone 16",function(){
//     console.log("product is purchased");
// })
// //console.log("product is purchased")

// function deductAmount(amount,cb){
//     if(amount>account_balance){
//         cb("your account balance is low",null)
//     }else{
//         account_balance-=amount;
//     }  


}
