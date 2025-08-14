const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL,{dbName:process.env.DATABASE_NAME})
        console.log("DataBase Connected Successfully....!")
        
    } catch (error) {
        console.log("DataBase is not connected",error.message);
         process.exit(1);
        
        
    }
}
module.exports=connectDb