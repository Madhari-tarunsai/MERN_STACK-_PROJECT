const mongoose=require("mongoose")
const donationSchema=new mongoose.Schema({donorName: { type: String, required: true },
    itemType: { type: String, required: true }, // clothes, food, books
    quantity: { type: Number, default: 1 },
    contact: { type: String, required: true },
    pickupAddress: { type: String, required: true },
},{timestamps:true}
)
module.exports = mongoose.model("Donation", donationSchema);
