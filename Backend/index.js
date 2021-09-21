const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require('./Routes/auth.routes');
const operationRouter =  require('./Routes/operations.routes');


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

// All Routes
app.use("/userauth", authRouter);
app.use("/useroperation",operationRouter);

app.listen(9002, () => {
    console.log("App started at 9002 PORT")
})