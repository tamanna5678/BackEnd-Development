let file1 = require("./file1");
console.log(file1);
let res = file1.sum(2,4);
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

module.exports.mul=mul;
module.exports.div=div;