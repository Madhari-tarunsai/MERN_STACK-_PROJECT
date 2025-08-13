const mongoose=require("mongoose")
const EventSchema=new mongoose.Schema({title:{type:String,require:true},
description:{type:String,require:true},
date: { type: Date, required: true,default: Date.now },
location: { type: String, required: true }
},{timestamps:true}
)
module.exports = mongoose.model("Event", EventSchema);
