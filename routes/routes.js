var express = require('express');
var router = express.Router();

var list_controller = require('../controllers/ListController');

router.post('/addItem', list_controller.addItem);
router.post('/removeItem', list_controller.removeItem);
router.get('/getAllItems', list_controller.getAllItems);

module.exports = router;