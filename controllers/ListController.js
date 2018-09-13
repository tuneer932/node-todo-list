var List = require('../modules/mongoose_list');
const listModel = require('../models/listModel');

var addItem = function(req, res) {

    if(!req.body.item){
        res.status(400);
        var response = {
            "message" : "item not found"
        }
        res.send(response);
    } else {
        var newList = List({
            id: req.body.id,
            name: req.body.item
        });
        
        // save the user
        newList.save(function(err) {
            if (err){
                res.status(400);
                res.send(err);
            } else {
                res.status(201);
                var response = {
                    "message" : "item added successfully"
                }
                res.send(response);
            }
        });
    }
    
};

var removeItem = function (req, res) {

    if(!req.body.id){
        res.status(400);
        var response = {
            "message" : "item not found"
        }
        res.send(response);
    } else {

        var queryResponse = List.find({"id":req.body.id}).remove().exec();
        console.log(queryResponse);
        if(queryResponse){
            res.status(200);
            var response = {
                "message" : "item removed successfully"
            }
            res.send(response);
        } else {
            res.status(400);
            var response = {
                "message" : "Failed to remove item"
            }
            res.send(response);
        }
        
    }
}

var getAllItems = function (req, res) {

    var responseData = [];
    var callback = function(err,data){
        if(err) {
            res.status(400);
            res.send(err);
        }
        else {
            
            responseData = data;
            res.status(200);
            var response = {
                "data" : responseData,
                "message" : "list fetched successfully"
            }
            res.send(response);
        }
    }

    listModel.find({},callback);

}

module.exports = {
    addItem,
    removeItem,
    getAllItems
};