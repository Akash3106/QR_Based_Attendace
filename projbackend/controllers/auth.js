const User = require("../models/user");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req); // this is the only for validation importing from express-validator
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      return res.status(400).json({
        error: "NOT ABLE TO SAVE USER IN DB",
      });
    }
    res.send({
      name: user.name,
      email: user.email,
      id: user._id,
      role: user.role,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body; //accessing only email and password from the request body given by a user.

  const errors = validationResult(req); //this is the only for validation importing from express-validator
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    //Give a call back Function for easy degugging
    if (err || !user) {
      res.status(400).json({
        error: "User is Not Exists",
      });
    }
    if (!user.authenticate(password)) {
      res.status(400).json({
        error: "Password do not Matched",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send response to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User Signout",
  });
};

// protected Route
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ['sha1', 'RS256', 'HS256'],
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin Not",
    });
  }
  next();
};
