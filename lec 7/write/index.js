const fs=require('fs');

let users=[
    {
        id:1,
        name:"Tamanna",
        age:"19"
    },
    {
        id:2,
        name:"thakral",
        age:"12",
    }
]

let users2=[
    {
        id:1,
        name:"Anu",
        age:"19"
    },
    {
        id:2,
        name:"Priyanshi",
        age:"20",
    }
]


//can't directly send String
fs.writeFile("../users.txt",JSON.stringify(users),function(err){ //stringify convert everything into string
    if(err) return console.log(err);
    console.log("users written");
})

fs.writeFile("../users2.txt",JSON.stringify(users2),function(err){ //stringify convert everything into string
    if(err) return console.log(err);
    console.log("users written");
})