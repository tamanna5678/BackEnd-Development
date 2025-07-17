 const fs = require("fs");
// fs.readFile("../a.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     //console.log(data[0])
//     let users = JSON.parse(data)
//     console.log(users[0])
    
// })

async function readusers(){
    let users = await read("../a.txt");
    let users2 = await read("../b.txt");
    console.log(users)
    console.log(users2)
}
readusers();