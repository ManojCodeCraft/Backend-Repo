const mongoose=require('mongoose');
const {Schema} =mongoose;

//define schema for the collection
const mySchema =new mongoose.Schema({
    name:{type: String,},
    email:{type: String},
    phone:{type: String}
});

//create a model using the schema

const User=mongoose.model('User',mySchema);
module.exports=User;