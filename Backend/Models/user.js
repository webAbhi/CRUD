const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    isAdmin: Boolean,
    Email: String,
    password: String,
    Contact:Number
})

module.exports = mongoose.model("User", userSchema);