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
  console.log("\n---");
  console.log("contact update req...");
  console.log("contact id: ", req.params.id);
  console.log("payload: ", req.body);
  console.log("---\n");
  try {
    const Contact = createContactModel(req.user.id);
    await Contact.findByIdAndUpdate(req.params.id, req.body);

    console.log("contact updated successfully");
    res.status(200).json({ message: "contact update successful", status: 200 });
  } catch (err) {
    console.log("contact update failed...");
    console.log("err: ", err);
    res.status(500).json({ message: "contact update failed", status: 500 });
  }
  console.log("---\n");
};

module.exports = {
  addNewContact,
  editContact,
};
