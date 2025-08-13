const express = require("express");
const router = express.Router();
const Event =require('../Models/Event.js')

// Create Event (Admin)
router.post('/post',async(req,res)=>{
    try{
       const { title, description, date, location } = req.body;
       const newEvent=new Event({title, description, date, location})
       const saveEvent=await newEvent.save()
        res.status(201).json(saveEvent);

    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message})
    }

});
// Create Event display (public)
router.get("/get",async(req,res)=>{
    try{
        const events = await Event.find().sort({ date: 1 });
        res.json(events);

    }catch(err){
        console.log(err)
    }

})
module.exports = router;