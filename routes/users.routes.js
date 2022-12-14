const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const User = require("../database/models").User;

//@route POST api/users
//@desc Register a user
//@access public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Enter a Password with atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, password } = req.body;

    try {
      let user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({
          message: "User already exists.",
        });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          // expiresIn: process.env.JWT_EXPIRATION_TIME,
          expiresIn: 3600,
        },
        (error, token) => {
          if (error) {
            res.status(500).send("Server Error!");
            console.log(error.message);
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error!");
    }
  }
);

module.exports = router;
