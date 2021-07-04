const createContactModel = require("../models/contact");

const addNewContact = async (req, res) => {
  console.log("\n---");
  console.log("new contact to add: ", req.body);
  console.log("---\n");
  console.log("trying to create new contact");

  try {
    const loggedInUserId = req.user.id;
    const Contact = createContactModel(loggedInUserId);

    const newContact = new Contact(req.body);
    await newContact.save();

    console.log("new contact saved successfully");

    return res.status(201).json({
      message: "Successfully created new contact",
      status: 201,
      savedContact: newContact,
    });
  } catch (err) {
    console.log("\n---");
    console.log("Error while creating new contact");
    console.log("Error: ", err);
    console.log("---\n");

    res
      .status(500)
      .json({ message: "Something went wrong on our side...", status: 500 });
  }
};

const editContact = async (req, res) => {
  const { id } = req.body;

  if (id) {
  } else {
    console.log("\n---");
    console.log("update contact request...");
    console.log("can't update contact, id is missing in the req payload");
    console.log("---");
    console.log("req payload: ", req.body);
    console.log("---\n");

    res.status(400).json({
      message: "can't update, id missing in the req payload",
      status: 400,
    });
  }
};

module.exports = {
  addNewContact,
  editContact,
};
