const mongoose = require("mongoose");

// mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy@25@cluster0.s2hoq.mongodb.net/mongopractice`);
mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy%4025@cluster0.s2hoq.mongodb.net/mongopractice`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// Model ke basis pe hi CRUD kar paayenge, warna nai kar paayenge
module.exports = mongoose.model("user", userSchema); // users naam ka model banega
