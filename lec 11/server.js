//accessing the DOM elements/node
//1. using id 
let res1 = document.getElementById("mydiv");
console.dir(res1);
//2. using class
let h2 = document.getElementsByClassName("myclass");
console.log(h2)
console.log(h2[0]);
//3. using tag name
let h1 = document.getElementsByTagName("h1");
console.log(h1);
//4. using query selector
let out = document.querySelector("mydiv");
console.log(out);
//5. using query selector all
let res = document.querySelectorAll("p");
console.log(res);

//properties of the DOM elements
//1. accessing element content and change it 

console.log(res.innerHTML); //GETTER

// res.innerHTML = '<p> change using DOM Manipulation </p>'; //SETTER
// console.log(res.innerHTML);
//text content

console.log(res.innerText)
res.innerText = 'change using DOM Manipulation';

//accessing elements class or id or etc.
//1.getAttribute
console.log(res1.getAttribute("id"))
res1.setAttribute("class", "usingjs");
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    res1.setAttribute("class", "js");
});
//2.classList only for class attribute 
let myh = document.querySelector(".myh");
console.log(myh.classList)
console.log(myh.classList.add("newclass")); //add class
console.log(myh.classList.remove("myh")); //remove class
console.log(myh.classList.toggle("newclass")); //toggle class

