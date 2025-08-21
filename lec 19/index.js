const express=require("express")
const mongoose=require("mongoose")

const app=express()

const Users=require("./model/user")
const Blog=require("./model/blog")
let blogRoute=require("./routes/blogRoutes")
let userRoutes=require("./routes/userRoutes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//create
app.use("/api/blogs",blogRoute)
app.use("/api/users",userRoutes)



mongoose.connect('mongodb://127.0.0.1:27017/g27dB')
  .then(() => console.log('Connected!'));

app.listen(9999,()=>{
    console.log("server started")
})