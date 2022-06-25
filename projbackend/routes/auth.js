var express = require("express");
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("name", "Name you have atleast three characters").isLength({
      min: 3,
    }),
    check("email", "E-mail is required ").isEmail(),
    check("password", "Password have atleast eight characters").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail(),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password Field is Required"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
