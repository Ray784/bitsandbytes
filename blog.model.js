const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
	title: {type: String, required: true},
	author: {type: String, required: true},
	footer: {type: String, required: true},
	body: {type: String, required: true},
	time_stamp: {type: String, required: true},
	image: {type: String, required: true}
});
module.exports = mongoose.model('Blogs', blogSchema)