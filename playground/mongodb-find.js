const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Connection Fail');
	}
	
	console.log('Connection successfull with Mongodatabase');
	var db = client.db('TodoApp');
    db.collection('Todos').find().count().then((docs)=>{
        console.log('total recordes',docs);
    },(err)=>{
        console.log('unable to fetch record',JSON.stringify(err));
    })
	client.close();
})