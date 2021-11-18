var express = require('express');
var router = express.Router();

const helicopter_controller = require('../controllers/helicopter');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
        if (req.user) {
            return next();
        }
        req.session.returnTo = req.originalUrl;
        res.redirect("/login");
    }
    /* GET update costumes*/
    /* GET costumes */
router.get('/', helicopter_controller.helicopter_view_all_Page);
router.get('/detail', helicopter_controller.helicopter_view_one_Page);
/* GET create costume page */
router.get('/create', helicopter_controller.helicopter_create_Page);
/* GET create update page */
router.get('/update', helicopter_controller.helicopter_update_Page);
/* GET create costume page */
router.get('/delete', helicopter_controller.helicopter_delete_Page);
module.exports = router;