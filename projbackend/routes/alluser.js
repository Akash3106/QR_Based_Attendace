const express = require("express")
const router = express.Router()

const {alluser} = require("../controllers/alluser")

router.get("/alluser", alluser);

module.exports = router;