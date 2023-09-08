const express =require('express')
const mongoose =require('mongoose')
const DataModel=require('./Models/Data_collection')


const app=express()
app.use(express.json())

const connection=mongoose.connect("mongodb+srv://abdulhaseeb:haseeb810@haseeb.r7vjfx7.mongodb.net/?retryWrites=true&w=majority")

connection.then((conn)=>{
    console.log("Connection Succesful")
})
connection.catch((error)=>{
    console.log("Connection Error "+ error)
})
