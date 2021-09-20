const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
require("dotenv").config();


//Database configuration
const Connection = process.env.CONNECTION;
mongoose.connect(Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Established..")
}).catch(() => {
    console.log(Connection)
    console.error("Connection failed");
});

//All schemas
const userSchema = new mongoose.Schema({
    name: String,
    isAdmin: Boolean,
    Email: String,
    password: String,
    Contact:Number
})

const User = new mongoose.model("User", userSchema);

// All Routes
app.post("/login", (req, res) => {
    const {email, password} =  req.body;
    User.findOne({Email:email}, (err, user)=>{
        if(user){
            if(user.password === password){
                res.send({message:"Logged in", user : user});
            }
            else{
                res.sendStatus(404);
            }
        }
        else{
            res.sendStatus(404);
        }
    })
})

app.post ("/update" , (req, res) =>{
    const {_id} = req.body;
    User.findOneAndUpdate({_id :_id} ,req.body, (err, doc) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send({message :"completed"})
        }
    })

})

app.post("/delete" , (req, res)=>{
    const {id}= req.body;
    User.findOneAndDelete ({_id:id} , (err, user)=>{
        if(err){
            console.log("found an error while removing")
        }
        else{
            res.send({message:"successfully remove"});
        }
    })
})

app.get("/allUser", (req, res)=>{
    User.find({},(err, users)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({ message: "Successfull fetched all users",  user : users })
        }
    })
})

app.post("/create", (req, res) => {
    const { fullName, email, password, isAdmin, contact } = req.body;
    User.findOne({ Email: email }, (err, user) => {
        if (user) {
            res.send({message:"user already register"});
        }
        else {
            const user = new User({
                name: fullName,
                isAdmin: isAdmin,
                Email: email,
                password: password,
                Contact:contact
            });
            user.save((err, obj) => {
                if (err) {
                    res.send("creating user failed");
                }
                else {
                    res.send({ message: "user created successfully",  oj : obj });
                }
            })
        }
    })
})




app.listen(9002, () => {
    console.log("App started at 9002 PORT")
})