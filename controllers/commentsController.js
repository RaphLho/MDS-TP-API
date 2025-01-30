const Comments = require('../models/comments');

const getComments = async (req, res) => {
  try {
    const comments = await Comments.findAll({
      where: {
        is_deleted: false
      }
    });
    res.json(comments);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comments.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).send({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await Comments.create({
      ...req.body,
      created_at: new Date()
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comments.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (comment) {
      await comment.update(req.body);
      res.json(comment);
    } else {
      res.status(404).send({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comments.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (comment) {
      await comment.update({ is_deleted: true });
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};
