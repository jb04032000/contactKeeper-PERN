const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Contact = require("../database/models").Contacts;

//@route   GET api/contacts
//@desc    get users all contacts
//@access  private

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.findOne({
      where: { user: req.user.id },
    }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error!" });
  }
});
module.exports = router;
