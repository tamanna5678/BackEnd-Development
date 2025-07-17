const fs = require("fs");
// let users = [
//     {
//         id:1,
//         name:"thakral",
//         age:"21"
//     },
//     {
//         id:2,
//         name:"tamana",
//         age:"25"
//     },
// ]
// fs.writeFile("../b.txt",JSON.stringify(users),function(err){
//     if(err) return console.log(err);
//     console.log("users displayed...")
// })

async function writeusers(){
    let users = await write("../a.txt");
    let users2 = await write("../b.txt");
    console.log(users)
    console.log(users2)
}
writeusers();