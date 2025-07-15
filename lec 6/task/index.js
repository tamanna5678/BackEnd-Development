const fs = require("fs");

fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err)
        let data1=data;
    fs.readFile("../p.txt","utf-8",function(err,data){
        let data2 = data;
        let result = data1+ "\n" + data2;
        fs.writeFile("./result.txt",result,function(err){
            if(err) return console.log(err);
            console.log(result);
            console.log("doneee");
        })
    })
})

//Assignment : write data in file demo.txt , data/input will be passed using terminal. [process.argv]