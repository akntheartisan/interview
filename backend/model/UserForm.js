const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formData = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
},{timestamps:true});

module.exports = mongoose.model('user',formData);