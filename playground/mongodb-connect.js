const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
console.log('Mongodb connected successfully');
var db = client.db('TodoApp');
db.collection('Users').insertOne({'name':'Luke','age':26, location:'Birmingham palac'},(err,result)=>{
	if(err){
		console.log('error found',JSON.stringify(err));
		return false;
	}
	if(result){
		console.log('success', JSON.stringify(result.ops,undefined,2))
	}
})
client.close();
})