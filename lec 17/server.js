const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const Blog = require("./model/blog");
const User = require("./model/user");

app.post("/blogs",async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;

    let blog = {
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
        
    }
    let newBlog = new Blog(blog)
    let user = await User.findById(userId);
    user.blogs.push(newBlog._id);
    await user.save();

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

// Create user
app.post("/users", async (req, res) => {
    let { name, email } = req.body;
    let user = {
        name: name,
        email: email,
        date: Date.now(),
        password: req.body.password
    }
    let newUser = new User(user);
    let Blog = req.body.blog;
    await newUser.save();
    res.json({
        success: true,      
        message: "User created successfully",
        data: newUser,
        Blog: Blog
    });
});

app.get("/users", async (req, res) => {
    let allUsers = await User.find();
    res.json({
        success: true,
        message: "All users fetched successfully",
        data: allUsers
    });
});

// Read single user
app.get("/users/:id", async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success: true,
        message: "User fetched successfully",
        data: user
    });
});


app.listen(5556, () => {
    console.log("server started");
})