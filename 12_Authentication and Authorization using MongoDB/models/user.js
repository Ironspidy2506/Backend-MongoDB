const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy%4025@cluster0.s2hoq.mongodb.net/mongopractice`);

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
})

module.exports = mongoose.model("user", userSchema);
