const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy%4025@cluster0.s2hoq.mongodb.net/mongopractice`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);
