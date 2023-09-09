const mongoose=require('mongoose')
require('dotenv').config()
const express=require('express')
const student_model=require('./Models/students_model')
const student_crud=require('./Cruds/student_crud')
const { error } = require('console')
const { env } = require('process')

const app=express()
app.use(express.json())

async function getConnected(){
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        main()
     }
    catch(error){
        console.log("Connection Error" + error)
        setTimeout(()=>{
            getConnected()
        },5000)
    }
    
}
getConnected()

function main(){
    app.listen(process.env.PORT,()=>{
        console.log("Listening at port : "+process.env.PORT)
    })
}


app.get('/',async(req,res)=>{

    let result=await student_crud.read({})
    console.log(result)
    res.send(result)
})
app.get('/add/:name/:email/:mobile',async(req,res)=>{
    let name=req.params.name;
    let email=req.params.email;
    let mobile=parseInt(req.params.mobile);
    let data={name,email,mobile}
    let result=await student_crud.create(data)
    console.log(result)
    res.send(result)
})
app.get('/update/:previous_id/:name/:email',async(req,res)=>{
    let _id=req.params.previous_id;
    let name=req.params.name;
    let email=req.params.email;
    
    let result=await student_crud.update({_id},{name,email})
    console.log(result)
    res.send(result)
})

app.get('/updateAll/:previous_id/:name/:email',async(req,res)=>{
    let _id=req.params.previous_id;
    let name=req.params.name;
    let email=req.params.email;
    
    let result=await student_crud.updateMany({_id},{name,email})
    console.log(result)
    res.send(result)
})

app.get('/delete/:_id',async(req,res)=>{
    const _id=req.params._id
    let result=await student_crud._delete({_id})
    console.log(result)
    res.send(result)
})
app.get('/deleteAll/:feild/:value',async(req,res)=>{
    const feild=req.params.feild
    const value=req.params.value
    let result=await student_crud._deleteMany({feild:value})
    console.log(result)
    res.send(result)
})



// post,delete,put apis for practical implementation

app.post('/add',async(req,res)=>{
    let data=req.body
    let result=await student_crud.create(data)
    console.log(result)
    res.send(result)
})
app.put('/update/:_id',async(req,res)=>{
    let data=req.body
    let _id=req.params._id
    let result=await student_crud.update({_id},data)
    console.log(result)
    res.send(result)
})

app.put('/updateAll/:_id',async(req,res)=>{
   let data=req.body
   let _id=req.params._id
    let result=await student_crud.updateMany({_id},data)
    console.log(result)
    res.send(result)
})

app.delete('/delete/:_id',async(req,res)=>{
    const _id=req.params._id

    let result=await student_crud._delete({_id})
    console.log(result)
    res.send(result)
})
app.delete('/deleteAll/',async(req,res)=>{s
    let data=req.body
    let result=await student_crud._deleteMany(data)
    console.log(result)
    res.send(result)
})

