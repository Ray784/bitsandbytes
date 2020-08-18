//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const mongoose = require('mongoose');

const app = express()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

var uri = "mongodb://bhat_784:VxXSK1vPQLWbLx1u@blogcluster-shard-00-00-qrfqp.mongodb.net:27017,blogcluster-shard-00-01-qrfqp.mongodb.net:27017,blogcluster-shard-00-02-qrfqp.mongodb.net:27017/db_76532?ssl=true&replicaSet=BlogCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
var blogModel = mongoose.model(
	'Blogs', 
	new mongoose.Schema({ 
	    title: String,
	    image: String,
	    body: String,
	    footer: String,
	    author: String,
	    time_stamp: String
	}), 'Blogs');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bnb'));

app.get("/getBlog", (req, res) => {
	blogModel.find(function(error, result) { 
		if(error)
  			res.status(500).json(error);
  		else
  			res.status(200).json(result);
	 });
});

app.get("/getBlog/:id", (req, res) => {
	blogModel.find({"_id": req.params.id}, function(error, result) { 
		if(error)
  			res.status(500).json(error);
  		else
  			res.status(200).json(result);
	 });
});

app.post("/setBlog", (req, res) => {
	let id = req.body.id;
	let blog = req.body.blog;
	if(id != -1)
		blogModel.findByIdAndUpdate({id},blog, function(err, result){
	        if(err){
	            res.status(500).json(err);
	        }
	        else{
	            res.status(500).json(result);
	        }
	    });
	else if(blog != -1){
		newBlog = new blogModel(blog);
		newBlog.save();
	}
});

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/bnb/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);