const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserRouter = require("./routers/userRoute");
const MachinRouter = require("./routers/machinRouter");
const EnterpriseRouter = require("./routers/enterpriseRouter");
const app = express();

// Port Number
const PORT = 9000 || process.env.PORT ;

// use Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// connect Database
mongoose.connect("mongodb://localhost:2701IK7/microHack").then(res => {
    console.log('DataBase connection');
}).catch(err=> {
    console.log("err")
});
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
app.use('/machin',MachinRouter)
app.use('/enterprise',EnterpriseRouter)
app.listen(PORT,()=>{
    console.log("run server sucessfully");
})

