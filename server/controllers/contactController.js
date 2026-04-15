const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
};