const fs = require("fs");

fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data)
})

fs.readFile("../p.txt","binary",function(err,data){
    if(err) return console.log(err);
    console.log(data)
})

