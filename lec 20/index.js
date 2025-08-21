// middleware is a function which run on client request before controller function. 
// application level: middleware will run on each and every request
// path level middleware: middleware will run on specific routes
// router level middleware: 

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const { m1,m2, checkAdmin} = require("./middleware/middleware");
app.use(m1) 
app.use(m2) 

app.get("/home", (req, res, next) => {
    console.log("running home controller");
    res.json({
        message: "Welcome to Home Page",
        user: req.user,
        //isAdmin: req.isAdmin
    });
    next()
});
app.get("/dashboard", checkAdmin, (req, res, next) => {
    if(req.isAdmin){
        return res.json({
            success: true,
            message: "Welcome to Dashboard"
        });
    }
    return res.json({
        success: false,
        message: "Access denied"
    });
});


app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/g27dB')
  .then(() => console.log('Connected!'));
  
const blogroutes = require("./routes/blogroutes");
app.use("/blog", blogroutes);
app.use("/api/blogs", blogroutes);
app.listen(9998, () => {
    console.log("server started")
})