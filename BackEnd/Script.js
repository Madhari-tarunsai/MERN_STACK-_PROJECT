const express=require("express")
const dotenv=require("dotenv").config()
const Connectdb=require("./Config/DataBase.js")
const app=express()
const EventRoutes=require('./Routes/EventRoutes.js')
const DonationRoutes=require('./Routes/DonationRoutes.js')
Connectdb()



// middle ware
app.use(express.json())


// Routes
app.use("/api/events",EventRoutes);
app.use("/api/donations", DonationRoutes)


// simple API_test
app.get("/",(req,res)=>{
    res.send("api is created successfully")
})


// conction frontend
const cors = require("cors");
app.use(cors());




// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is runing on port http://localhost:${process.env.PORT}`)
)