let file2 = require("./file2");
console.log(file2);
let res = file2.mul(2,4);
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

module.exports.sum=sum;
module.exports.sub=sub;