const mongoose=require('mongoose')
const student_model=require('../Models/students_model')

async function read(filter){
    result=await student_model.find(filter)
    return result;
}

async function create(data){
    const model=new student_model(data)
    const result=await model.save()
    return result;
}

async function update(previous,_new){
    
    const result=await student_model.updateOne(previous,{$set:_new})
    return result;
}
async function updateMany(previous,_new){
    
    const result=await student_model.updateMany(previous,{$set:_new})
    return result;
}


async function _delete(filter){
    
    const result=await student_model.deleteOne(filter)
    return result;
}
async function _deleteMany(filter){
    
    const result=await student_model.deleteMany(filter)
    return result;
}

module.exports={read,create,update,updateMany,_delete,_deleteMany}