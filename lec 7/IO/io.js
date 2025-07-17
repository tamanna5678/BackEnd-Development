const { promises } = require("dns");
const fs = require("fs");
function read(file){
    return new Promise((resolve,reject)=>{
        fs.readFile("../a.txt","utf-8",function(err,data){
            if(err) return reject(err);
            //console.log(data[0])
            let users = JSON.parse(data)
            resolve(users)
    
})

})

function write(file,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,function(err){
            if(err) return reject(err);
            console.log("users displayed...")
            resolve("users")
        })
    })

} 
}

module.exports.read=read
module.exports.write=write