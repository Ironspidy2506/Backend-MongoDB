const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());
// GenSalt - Sabse pehle salt banate ho, salt ek random string hoti hai and uske sath password ko hashcode mein convert karke mix kar diya jaata hai salt ke sath
// const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

app.get("/", function (req, res) {
    let token = jwt.sign({ email: "priyanshusahu085@gmail.com" }, "secret");
    res.cookie("token", token)
    res.send("Done for the day");
    // console.log(token);
});

app.get("/read", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
});



// app.get("/", function (req, res) {
//     // Encryption
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("Aarushi", salt, function (err, hash) {

//         });
//     });

//     // Decryption
//     bcrypt.compare(myPlaintextPassword, hash).then(function (result) {
//         // result == true
//     });

//     bcrypt.compare(myPlaintextPassword, hash).then(function (result) {
//         // result == false
//     });
// });



// app.get("/", function(req, res) {
//     // Cookies kaise set karte hai
//     res.cookie("name", "priyanshu"); // Server se browser pe kuch data store karwa dena ise cookie kehte hai
//     res.send("Main Route")
// });

// Ab hum naya route banayenge tab bhi wo cookie waha jaayegi 
// app.get("/read", function(req, res) {
//     console.log(req.cookies); // Reading cookies
//     res.send("Read Page")
// });


app.listen(3000, function (err) {
    console.log("Server is running on port 3000")
})