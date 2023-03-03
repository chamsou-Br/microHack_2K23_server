const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserRouter = require("./routers/userRoute");
const app = express();

// Port Number
const PORT = 9000 || process.env.PORT ;

// use Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// connect Database
mongoose.connect("mongodb://localhost:27017/microHack");
mongoose.connection.once('open',()=> {
    console.log('DataBase connection');
});

app.get("/",(req, res) => {
    res.json({data : "sucess"})
})
app.get('/test',(req , res) => {
    res.send("test pass")
})

app.use("/auth",UserRouter);

app.listen(PORT,()=>{
    console.log("run server sucessfully");
})

