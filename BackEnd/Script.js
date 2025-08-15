const express=require("express")
const dotenv=require("dotenv").config()
const connectDb=require('./Config/DataBase')
const eventRoutes = require("./Routes/eventRoutes")
const authRoutes=require('./Routes/authRoutes')
const cors = require("cors")
const app=express()

//  Body parser middleware
app.use(express.json());



app.use(cors());


// Middleware to read JSON
app.use(express.json());

connectDb()

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/admin", authRoutes); 




const PORT=process.env.PORT || 2000;
app.listen(PORT,()=>console.log(`server is runing no http://localhost:${process.env.PORT}`))