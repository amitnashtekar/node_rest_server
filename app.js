var MongoClient = require('mongodb').MongoClient;

var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
},{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, function (err, client) {
	var db  = client.db('myproject');
	console.log("Connected correctly to server");

	var collection = db.collection(sampleCollection);

	collection.insert(chapters, function (error, result) {
		if (!error) {
			console.log("Success :" + JSON.stringify(result));
		} else {
	      console.log("Some error was encountered!");
	    }

	    client.close();
	})

})
