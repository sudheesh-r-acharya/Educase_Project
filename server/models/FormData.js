const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    fullname :{
        type : String,
        required:true
    },

    email :{
        type:String,
        required:true
    },

    password : {
        type:String,
        required:true
    },
    phoneNumber: {
        type:Number
    },
    companyName: {
        type:String,
    },
    choice:{
        type:String,
        required:true
    }
})

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
