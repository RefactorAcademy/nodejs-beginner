const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const User = mongoose.model("User",userSchema)
// mongoose -> user schema --> user model ---> execute queries
// typeorm -> user schema/ user entity --->user repository ---> execute queries

module.exports = User