var mongoose = require('mongoose');

var Todo = mongoose.model('newTodo',{
    text:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,
        trim:true 
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});


module.exports = {Todo}