const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
require("dotenv").config();

const User = require("../database/models").User;

//@route   GET api/auth
//@desc    Get logged in user
//@access  private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: req.user.id },
    });
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

//@route   POST api/auth
//@desc    Auth user and Get Token
//@access  private

router.post(
  "/",
  [
    check("email", "Enter a valid email").isEmail(),
    check("password", "Enter a password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: "User doesnt exists" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credintials" });
      }

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
            res.status(500).send("Server Error");
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
