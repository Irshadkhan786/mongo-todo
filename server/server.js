/*=== live imports ===*/
var express = require('express');
var bodyParser  = require('body-parser');
var {ObjectID} = require('mongodb');
/*=== local imports ==*/
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*=== save the new todos ===*/
app.post('/todos',(req,res)=>{
    
    var newTodo = new Todo({
        text:req.body.text
    })
    newTodo.save().then((doc)=>{
        res.send(doc)
    },(err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((doc)=>{
        res.send({doc:doc});
    },(err)=>{
        res.status(400).send(err);
    })
})

app.get('/todos/:id',(req,res)=>{
    
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    Todo.findById(id).then((result)=>{
        if(!result){
            res.status(404).send();
        }
        res.send({result});
    }).catch((e)=>{
        res.status(404).send();
    })
})
app.listen(3000,()=>{
    console.log('App is listning at port 3000');
})