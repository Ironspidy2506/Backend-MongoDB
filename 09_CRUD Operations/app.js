const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("Hey");
});


// Create Users
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Spidy",
        username: "spidy123",
        email: "spidy@gmail.com"
    });

    res.send(createdUser);
});

// Update the User
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ username: "spidy123" }, { name: "Ironspidy" }, { new: true });

    res.send(updatedUser);
});


// Reads all the Users
app.get('/read', async (req, res) => {
    let readUser = await userModel.find();
    res.send(readUser);
});


// Reads Particular Username
app.get('/read', async (req, res) => {
    let readUser = await userModel.find({ username: Ironspidy });
    res.send(readUser);
});

// findOne = Object (Sabse pehla similar object)
// find = Array


// Delete the Users
app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({
        username:
            "spidy123"
    });
    res.send(users);
});

app.listen(3000, function (err) {
    console.log("Server is running on port 3000")
});