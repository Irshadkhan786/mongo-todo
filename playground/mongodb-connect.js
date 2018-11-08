const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Connection Fail');
	}
	
	console.log('Connection successfull with Mongodatabase');
	var db = client.db('TodoApp');
	db.collection('Todos').insertOne({
		test: 'I am the text',
		completed: false
	},(err,result)=>{
		if(err){
			return console.log('Insertion Fail',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	})

	client.close();
})