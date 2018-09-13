var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var listSchema= new Schema({
	name: {type:String, required:true, trim:true,index:true,unique:true},
	id: {type:Number}
});

var listModel = mongoose.model('lists',listSchema);

module.exports = listModel;