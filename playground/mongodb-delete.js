const { MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost://27017/TodoApp",{useNewUrlParser:true},(err,client)=>{
    if(err){
		console.log('error',err);
		return false
    }
    var db = client.db('TodoApp');

   /*  db.collection('Todos').deleteMany({text:'I am text'}).then((results)=>{
        console.log(results);
    }) */
    db.collection('Todos').findOneAndDelete({_id:new ObjectID('5bd9b68da1f5d410b4898b08')}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })
})