var helicopters = require('../models/helicopter'); 
 
// List of all helicopters

exports.helicopter_list = async function(req, res) { 
    try{ 
        thehelicopters = await helicopters.find(); 
        res.send(thehelicopters); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific helicopter. 
exports.helicopter_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: helicopter detail: ' + req.params.id); 
}; 
 
// Handle helicopter create on POST. 
exports.helicopter_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: helicopter create POST'); 
}; 
 
// Handle helicopter delete form on DELETE. 
exports.helicopter_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: helicopter delete DELETE ' + req.params.id); 
}; 
 
// Handle helicopter update form on PUT. 
exports.helicopter_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: helicopter update PUT' + req.params.id); 
};

exports.helicopter_view_all_Page = async function(req, res) { 
    try{ 
        thehelicopters = await helicopters.find(); 
        res.render('helicopter', { title: 'helicopter Search Results', results: thehelicopters }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle helicopter create on POST. 
exports.helicopter_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new helicopters(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    console.log('the first'+req.body.helicopterType)
    console.log('the second'+ req.body.helicoptersPrice)
    document.helicopterType = req.body.helicopterType;
    console.log(document.helicopterType)
    document.helicopterPrice = req.body.helicopterPrice; 
    document.helicopterColor = req.body.helicopterColor; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};