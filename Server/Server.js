const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const Connectdb=require('./Config/Mongodb.js')
Connectdb()

app.use('/home',(req,res)=>{
    res.send('<h1>welcome tarunsai</h1>')
})

app.listen(process.env.PORT,()=>console.log(`server is runing on http://localhost:${process.env.PORT}`))
