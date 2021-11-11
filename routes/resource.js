var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var helicopter_controller = require('../controllers/helicopter');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// helicopter ROUTES ///
// POST request for creating a helicopter.
router.post('/helicopters', helicopter_controller.helicopter_create_post);
// DELETE request to delete helicopter.
router.delete('/helicopters/:id', helicopter_controller.helicopter_delete);
// PUT request to update helicopter.
router.put('/helicopters/:id',
helicopter_controller.helicopter_update_put);
// GET request for one helicopter.
router.get('/helicopters/:id', helicopter_controller.helicopter_detail);
// GET request for list of all helicopter items.
router.get('/helicopters', helicopter_controller.helicopter_view_all_Page);
module.exports = router;