const User = require("../models/user")


exports.alluser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: "NO USER IS PRESENT"
            });
        }
        res.send(user)
    })
}