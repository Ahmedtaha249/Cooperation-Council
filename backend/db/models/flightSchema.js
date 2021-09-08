const mongoose=require("mongoose")
const flightSchema=new mongoose.Schema({
distination: {type: String,required:true},
origin: {type: String,required:true},
date: {type: date ,default:date.now ,required:true },
capacity:{type: number}
})
module.exports=mongoose.model("Flight",flightSchema)