const attendance = require('../models/attendance');
const Attendance = require('../models/attendance');
const formidable = require("formidable"); // for form-data we are using formidable
const _ = require("lodash"); //lodash
const fs = require("fs"); 
const category = require('../models/category');

exports.createAttendance = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
  
    form.parse(req, (err, fields) => {
      if (err) {
        return res.status(400).json({
          error: "problem with image",
        });
      }
      //destructure the fields
      const { Name , rollNum , category}= fields;
  
      if ( !Name || !rollNum || !category) {
        return res.status(400).json({
          error: "Please include all fields",
        });
      }
      let attendance = new Attendance(fields);
  
      //handle photo file here
  
      // console.log(attendance);
  
      //save to the DB
      attendance.save((err, attendance) => {
        if (err) {
          res.status(400).json({
            error: "Saving tshirt in DB failed",
          });
        }
        res.json(attendance);
      });
    });
  };


exports.getAttendance = (req,res)=>{  // getting All Attendance 
  Attendance.find().exec((err,attendances)=>{
    if(err){
      return res.status(400).json({
        error:"Can't get the Attendance "
      });
    }
    res.json(attendances)
  })
}


exports.getDynamicDate = (req,res)=>{
  if(!Date.parse(req.params.date) && !Number(req.params.date)){
    return res.send({ error : "Invalid Date" })
  }
  let date = new Date(req.params.date)
 
  let result = {
    unix: date.getTime(),
    utc: date.toUTCString()
  }
}