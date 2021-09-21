const User = require("../Models/user");
require("dotenv").config();


const updateUser = (req, res) => {
    const { _id , fullName, contact, email, password} = req.body;
    User.updateOne({_id}, {
        $set :{
            name:fullName,
            Email:email,
            password:password,
            Contact :contact
        }
    }, (err, doc)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updatedd  rf successfully");
        }
    })
}


const deleteUser = (req, res) => {
    const { id } = req.body;
    User.findOneAndDelete({ _id: id }, (err, user) => {
        if (err) {
            console.log("found an error while removing")
        }
        else {
            res.send({ message: "successfully remove" });
        }
    })
}

const getAllUser = (req, res)=>{
    User.find({},(err, users)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({ message: "Successfull fetched all users",  user : users })
        }
    })
}

module.exports = {
    updateUser,
    deleteUser,
    getAllUser
}