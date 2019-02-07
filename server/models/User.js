var mongoose = require('mongoose');

var User = new mongoose.model("user",{
    email:{
        type:String,
        require:true,
        minlength:3,
        trim:true
    }
})

module.exports = {User};