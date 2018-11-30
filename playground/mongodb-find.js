const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err,client)=>{

	if(err){
		console.log('error',err);
		return false
	}
	var db = client.db('TodoApp');
	db.collection('Todos').find({_id:new ObjectID("5be43108dc68665265b51d7b")}).toArray().then((docs,err)=>{
		console.log('fetching data',docs);
	})
})
