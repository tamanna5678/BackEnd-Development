let p = new Promise((resolve,reject)=>{
    resolve("okayyy");
})

console.log(p);
p.then((data)=>{
    console.log(data)
    console.log("promise completed")
})
p.catch((err)=>{
    console.log(err)

})

let users = [
    {
        id:1,
        age:16,
        name:"piya"
    },
    {
        id:2,
        age:18,
        name:"tamanna"
    }
]
function isEligible(id){
    return new Promise((resolve,reject)=>{
        let user = users.filter((user)=> user.id==id)[0];
        console.log(user);
        if(!user) return reject("no user found");
    if(user.age>=18){
        return resolve("eligible for vote")
    }else{
        return reject("not eligible")
    }
    })    
}
isEligible(1).then((data)=>{
    console.log(data)
})
isEligible(1).catch((err)=>{
    console.log(err)
})

console.log("hello");
console.log("bye");
console.log("promise completed ");