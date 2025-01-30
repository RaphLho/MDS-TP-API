const Messages = require('../models/messages');

const getMessages = async (req, res) => {
  try {
    const messages = await Messages.findAll({
      where: {
        is_deleted: false
      }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getMessageById = async (req, res) => {
  try {
    const message = await Messages.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (message) {
      res.json(message);
    } else {
      res.status(404).send({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createMessage = async (req, res) => {
  try {
    const message = await Messages.create({
      ...req.body,
      sent_at: new Date()
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const message = await Messages.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (message) {
      await message.update(req.body);
      res.json(message);
    } else {
      res.status(404).send({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const message = await Messages.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (message) {
      await message.update({ is_deleted: true });
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage
};
