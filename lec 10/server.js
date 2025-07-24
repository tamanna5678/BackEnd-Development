const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static(__dirname+"/public"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("/about", (req, res) => {
//     res.sendFile(__dirname + "/about.html");
// });
app.use(express.urlencoded({ extended: true }));
app.post("/adduser", (req, res) => {
    console.log(req.body);
    let username= req.body.username;
    let password = req.body.password;
    res.json({
        username,
        password
    })
    res.send("User added successfully");
})

const port = 5555;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
