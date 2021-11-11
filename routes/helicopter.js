var express = require('express');
const helicopter_controlers= require('../controllers/helicopter'); 
var router = express.Router();

/* GET home page. */
router.get('/', helicopter_controlers.helicopter_view_all_Page);

module.exports = router;