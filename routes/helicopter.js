var express = require('express');
const helicopter_controlers= require('../controllers/helicopter'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => {
    console.log(req)
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', helicopter_controlers.helicopter_view_all_Page);

router.get('/detail', helicopter_controlers.helicopter_view_one_Page); 

router.get('/create',secured, helicopter_controlers.helicopter_create_Page); 

router.get('/update',secured,helicopter_controlers.helicopter_update_Page);

router.get('/delete',secured, helicopter_controlers.helicopter_delete_Page);

module.exports = router;