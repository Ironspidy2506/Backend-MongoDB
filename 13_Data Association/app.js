const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("Hey");
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "priyanshu",
        age: 21,
        email: "priyanshusahu085@gmail.com",
    })

    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello sare log kaise ho",
        user: "670eb127afc8405856dc561c"
    })

    let user = await userModel.findOne({ _id: "670eb127afc8405856dc561c" })
    user.posts.push(post._id);
    await user.save();
    res.send({ post, user });
});


app.listen(3000, (err) => {
    console.log('Server is listening on 3000 port');
});