const fs = require("fs");
console.log(fs);
console.log("start");

setImmediate(() => {
    console.log("setimmediate");

})

setTimeout(() => {
    console.log("setTimeout");
}, 0);


fs.readFile("demo.txt","utf-8",(data)=>{
    console.log(data)
    console.log("file read");
})

console.log("end");
