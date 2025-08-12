const mongoose=require("mongoose")
const Connectdb=async()=>{
    try{
        await mongoose.connect(process.env.Mongodb_url,{dbName:"Photo_Lab"})
        console.log(`DataBase Connected sucessfully...!`)
    }
    catch(err){
        console.log(err)
    }
}
module.exports=Connectdb