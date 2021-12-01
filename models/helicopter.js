const mongoose = require("mongoose")
const helicopterSchema = mongoose.Schema({
    helicopterType: String,
    helicopterPrice: { type: Number, min: 10, max: 1000 },
    helicopterColor: { type: String, minLength : 2 }
})

module.exports = mongoose.model("Helicopter",
    helicopterSchema)