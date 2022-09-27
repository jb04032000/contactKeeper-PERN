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
    const contacts = await Contact.findAll({
      where: { user: req.user.id },
    });
    // .sort({
    //   date: -1,
    // });
    res.json(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error!" });
  }
});
module.exports = router;

//@route   POST api/contacts
//@desc    create new contacts
//@access  private

router.post(
  "/",
  [auth, [check("name", "Name is required!").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        user: req.user.id,
        name,
        email,
        phone,
        type,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Server Error!" });
    }
  }
);

//@route   PUT api/contacts
//@desc    update user's contact
//@access  private

router.put("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const { email, name, phone, type } = req.body;
  await Contact.update(
    { email, name, phone, type },
    {
      where: {
        id,
      },
    }
  );
  res.send("Contact Updated");
});

//@route   DELETE api/contacts
//@desc    delete users contact
//@access  private

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;

  try {
    await Contact.destroy({
      where: {
        id,
      },
    });
    await res.json({ message: "Contact Deleted" });
  } catch (error) {
    console.log(error.message);
  }
});
