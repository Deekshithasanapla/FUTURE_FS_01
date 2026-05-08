import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};                                                        