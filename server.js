//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID; 
const app = express()
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

var uri = "mongodb://<url-to-mongo>?ssl=true&replicaSet=BlogCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
var blogModel = mongoose.model(
	'Blogs', 
	new mongoose.Schema({
		_id: ObjectID, 
	    title: String,
	    image: String,
	    body: String,
	    footer: String,
	    author: String,
	    time_stamp: String
	}), 'Blogs');

var imageModel = mongoose.model(
	'Images', 
	new mongoose.Schema({ 
	    data: String
	}), 'Images');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bnb'));

app.get("/getBlog", (req, res) => {
	blogModel.find(function(error, result) { 
		if(error)
  			res.status(500).json(error);
  		else{
  			imageModel.find(function(error, images) { 
  				if(!error)
  					res.status(200).json({'blogs': result, 'images': images});
  			});
  		}
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

app.get("/getBlog/:id", (req, res) => {
 //to-do
});
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/bnb/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
