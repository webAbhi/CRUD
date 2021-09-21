const User = require("../Models/user");
require("dotenv").config();

const userLogin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ Email: email }, (err, user) => {
        if (user) {
            if (user.password === password) {
                res.send({ message: "Logged in", user: user });
            }
            else {
         
                res.sendStatus(404);
                console.log("wrong passwords");
            }
        }
        else {
            res.sendStatus(404);
        }
    })
}

const createUser = (req, res) => {
    const { fullName, email, password, isAdmin, contact } = req.body;
    User.findOne({ Email: email }, (err, user) => {
        if (user) {
            res.send({ message: "user already register" });
        }
        else {
            const user = new User({
                name: fullName,
                isAdmin: isAdmin,
                Email: email,
                password: password,
                Contact: contact
            });
            user.save((err, obj) => {
                if (err) {
                    res.send("creating user failed");
                }
                else {
                    res.send({ message: "user created successfully", oj: obj });
                }
            })
        }
    })
}

module.exports = {
    userLogin,
    createUser
}