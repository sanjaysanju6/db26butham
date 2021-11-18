var helicopter = require('../models/helicopter');
//for a specific Costume.

exports.helicopter_list = async function(req, res) {
    try {
        thehelicopter = await helicopter.find();
        res.send(thehelicopter);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};

// exports.helicopter_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: helicopter detail: ' + req.params.id);
// };

exports.helicopter_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await helicopter.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.helicopter_create_post = async function(req, res) {
    console.log(req.body)
    let document = new helicopter();

    document.helicopterType = req.body.helicopterType;
    document.helicopterPrice = req.body.helicopterPrice;
    document.helicopterColor = req.body.helicopterColor;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        // res.error(500,`{"error": ${err}}`);
        res.status(500)
        res.send(`{"error": Error creating ${err}}`);
    }
};

// exports.helicopter_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: helicopter delete DELETE ' + req.params.id);
// };
// Handle Costume delete on DELETE.
exports.helicopter_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await helicopter.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// exports.helicopter_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: helicopter update PUT' + req.params.id);
// };

exports.helicopter_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await helicopter.findById(req.params.id)
            // Do updates of properties        
        if (req.body.helicopterType)
            toUpdate.helicopterType = req.body.helicopterType;
        if (req.body.helicopterPrice)
            toUpdate.helicopterPrice = req.body.helicopterPrice;
        if (req.body.helicopterColor)
            toUpdate.helicopterColor = req.body.helicopterColor;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
// Handle a show one view with id specified by query
exports.helicopter_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await helicopter.findById(req.query.id)
        res.render('helicopterdetail', { title: 'helicopter Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.helicopter_view_all_Page = async function(req, res) {
    try {
        thehelicopter = await helicopter.find();
        res.render('helicopter', { title: 'helicopter Search Results', results: thehelicopter });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }

};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.helicopter_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('helicoptercreate', { title: 'helicopter Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.helicopter_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await helicopter.findById(req.query.id)
        res.render('helicopterupdate', { title: 'helicopter Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.helicopter_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await helicopter.findById(req.query.id)
        res.render('helicopterdelete', { title: 'helicopter Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};