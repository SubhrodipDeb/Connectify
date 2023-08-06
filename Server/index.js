const express = require("express")
const cors = require("cors") //It will help us to connect with the front end
const app= express();
const mongoose=require('mongoose')
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute =require("./Routes/messageRoute")



app.use(express.json());//It will help us to fetch and use json data
app.use(cors()) ;  //These 2 add extra capabalities to our function
require("dotenv").config()
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute)
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
app.listen(port,(req,res) =>{
    console.log(`Server listening on port:${port}`)
});


app.get("/",(req,res) =>{
    res.send("Welcome to our chat App API.... ")
});
mongoose.connect(uri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log('Mongodb connection established')).catch((error) =>console.log("Mongodb error",error.message))