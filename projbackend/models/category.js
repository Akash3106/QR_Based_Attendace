var mongoose = require("mongoose")

const categotySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        uniqui: true
    }
}, { timestamps: true }
);


module.exports = mongoose.model("Category" , categotySchema)