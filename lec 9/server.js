const express = require("express");
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: "tamanna", address: "chandigarh" },
    { id: 2, name: "a", address: "delhi" },
    { id: 3, name: "b", address: "bangalore" }
];

app.post("/users", (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(201).json({
        message: "User created successfully",
        user: user
    });
});

app.get("/users", (req, res) => {
    res.json(users); 
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id); 

    if (user) {
        res.json(user); 
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

const port = 2244;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
