const mongoose=require("mongoose")
const Connectdb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL,{dbName:process.env.DATABASE_NAME})
        console.log("DataBase connected successfully....!")

    }
    catch(err){
        console.log(err)
        process.exit(1); 

    }
     
}
module.exports=Connectdb
   
