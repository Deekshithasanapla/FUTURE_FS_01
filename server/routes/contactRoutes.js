import express from "express";

import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    console.log("Received Data:", req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    const savedData = await newContact.save();

    console.log("Saved Successfully:", savedData);

    res.status(200).json({
      success: true,
      message: "Message Saved Successfully"
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

export default router;