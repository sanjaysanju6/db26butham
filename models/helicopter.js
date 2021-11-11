const mongoose = require("mongoose") 
const helicopterSchema = mongoose.Schema({ 
    helicopterType: String, 
    helicopterPrice: Number, 
    helicopterColor: String 
}) 
 
module.exports = mongoose.model("Helicopter", 
helicopterSchema)