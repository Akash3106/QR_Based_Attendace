var express = require("express")
var router = express.Router()

const {getCategoryById, createCategory , getCategory,getAllCategory,updateCategory,removeCategory} = require("../controllers/category")
const {getUserById} = require("../controllers/user")
const {isAdmin , isAuthenticated , isSignedIn} = require("../controllers/auth")



router.param("categoryId", getCategoryById)
router.param("userId", getUserById)

//create
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory)

// read
router.get("/category/:categoryId" , getCategory)
router.get("/categories" , getAllCategory)

// update
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory)

// delete
router.delete("/category/:categoryId/:userId", isSignedIn , isAuthenticated, isAdmin, removeCategory)

module.exports = router;