const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: Object, required: true },  // Storing the raw content of DraftJS
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;