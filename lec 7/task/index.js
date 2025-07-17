const fs = require("fs");

// this is callback hell , correct this from promises ...

fs.readFile("../a.txt","utf-8",function(err,data1){
    if(err) return console.log(err)
    let user1=JSON.parse(data1);
    console.log(user1)
    fs.readFile("../b.txt","utf-8",function(err,data2){
        let user2 = JSON.parse(data2);
        console.log(user2)
        let result = user1.concat(user2);
        console.log(result)
        fs.writeFile("./result.txt",JSON.stringify(result),function(err){
            if(err) return console.log(err);
            console.log("work completed");

        })
    })
})