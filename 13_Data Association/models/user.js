const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy%4025@cluster0.s2hoq.mongodb.net/dataassociation`);

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
    // [dsnondsasad, dascffdnifkd] Posts ki id hogi
});

module.exports = mongoose.model("user", userSchema);
