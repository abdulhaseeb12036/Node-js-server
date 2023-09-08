const express =require('express')
const mongoose =require('mongoose')
const DataModel=require('./Models/Data_collection')


const app=express()
app.use(express.json())

async  function getConnected(){
    const connection=mongoose.connect("mongodb+srv://abdulhaseeb:haseeb810@haseeb.r7vjfx7.mongodb.net/?retryWrites=true&w=majority")




    connection.then((conn)=>{
        console.log("Connection Succesful")
        main()
    })

    connection.catch((error)=>{
        console.log("Connection Error "+ error)
    })
}


getConnected()


async function main(){
    app.listen(process.env.Port || 10000)
 console.log("Listning is Started")

   app.get('/',(req,res)=>{
    console.log(`Request Received at home`)
    res.send(`<h1>Hello ${req.ip} i received your request </h1>`)
   })
}
