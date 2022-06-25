var express = require('express')
var router = express.Router()

const {createAttendance , getAttendance ,getDynamicDate} = require('../controllers/attendance')
const {getUserById} = require('../controllers/user')
const {isAuthenticated,isSignedIn} = require('../controllers/auth')
const {getCategoryById ,getCategory} = require('../controllers/category')

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //Months are zero based
var curr_year = d.getFullYear();
var da = (curr_date + "-" + curr_month + "-" + curr_year);


router.param("classId", getCategoryById);
router.param("class" ,getCategory);
router.param("userId" , getUserById);
router.param("date" , getDynamicDate)

//create 

router.post("/qr/create/:classId/:userId",isSignedIn,isAuthenticated,createAttendance)

router.get("/attendances" , getAttendance)


module.exports = router;