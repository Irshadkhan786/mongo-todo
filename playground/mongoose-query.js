var {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = "5c5bae6bb95bbb1b5026213a";

if(!ObjectID.isValid(id)){
        console.log('Id is not valid');
        return false;
}
/* Todo.find({
    _id:id
}).then((todo)=>{
    console.log(todo);
}).catch((e)=>{
    console.log('error',e);
}) */

/* Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log(todo);
}).catch((e)=>{
    console.log('error',e);
}) */

Todo.findById(id).then((res)=>{
    if(!res){
        console.log('unable to find the user')
        return false;
    }
    console.log('result',res);
    return false;
},(err)=>{
    console.log('error',err);
})