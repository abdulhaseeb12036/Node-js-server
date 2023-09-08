const mongoose =require('mongoose')


const Schema =new mongoose.Schema({
    name : String,
    email: String,
    mobile:Number
})

module.exports=new mongoose.model("Data",Schema)