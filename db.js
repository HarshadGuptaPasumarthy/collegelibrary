var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/collegelibrary");
var studentSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String
})
exports.Student=mongoose.model('Student',studentSchema,'students')