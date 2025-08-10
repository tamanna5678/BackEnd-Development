const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded());
app.post('/user', (req, res) => {
    try{
        let email = req.body.email;
        let password = req.body.password;
        console.log({ email, password });
        res.json({ 
            success:true,
            message: "User added successfully", 
            data: {
                email, password
         }
    });

}catch(err){
    res.json({
        success: false,
        message: "Error adding user",
        error: err.message
    });
}
});

app.listen(6667, () => {
    console.log("Server running on port 6667");
});
