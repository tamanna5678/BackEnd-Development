let p = new Promise((resolve,reject)=>{
    let age = 20;
    if(age>18) return resolve("you are eligible to vote")
        reject("you are not eligible to vote")
})

p.then((data)=>{   
    console.log(data)

})
p.catch((err)=>{
    console.log(err)
})

console.log("hii");
console.log("okayy");
function add(a,b){
    console.log(a+b)
}
add(2,3);
console.log("end");