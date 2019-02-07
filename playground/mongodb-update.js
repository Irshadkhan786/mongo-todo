const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser:true},(err,client)=>{

	if(err){
		console.log('error',err);
		return false
	}
	var db = client.db('TodoApp');
	db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID("5bfe959d629dd903dcfe5126")},
        {
            $set:{name:'jane'},
            $inc:{age:26}
        },
        {returnOriginal:false}
    ).then((result)=>{
        console.log(result);
    })
})
