const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/create', async (req, res) => {
    let { password, username, email, age } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({ email }, "shhhhh");
            res.cookie("token", token);
            res.send(createdUser);

        });
    });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
        return res.send("Something went Wrong")
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (!result) {
            res.send("No you can't login");
        } else {
            let token = jwt.sign({ email: email }, "shhhhh");
            res.cookie("token", token);
            res.send("yes you are authorized");
        }
    });
});

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});


app.listen(3000, function (err) {
    console.log("Server is running on port 3000")
});