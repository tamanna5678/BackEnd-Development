const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const Blog = require("./model/blog");
//create
app.post("/blogs",async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let blog = {
        title: title,
        body: body,
        date: Date.now()
    }
    let newBlog = new Blog(blog)
    await newBlog.save()
    res.json({
        success: true,
        message: "Blog created successfully",
        data:newBlog
    })
})

//read 
//read all data 
// read single data
app.get("/blogs",async(req,res)=>{
    let allBlogs = await(Blog.find());
    res.json({
        success: true,
        message: "All blogs fetched successfully",
        data: allBlogs
    })

})

app.get("/blogs/:id",async(req,res)=>{
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true,
        message: "Blog fetched successfully",
        data: blog
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/5thsem')
  .then(() => console.log('Connected!'));


app.listen(5556,()=>{
    console.log("server started");
})