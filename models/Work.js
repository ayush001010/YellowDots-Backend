// backend/models/Work.js
import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  image:  { type: String, required: true },
  para:   { type: String, required: true },
  links:  { type: [String], default: [] }   // array of YouTube video IDs
}, {
  timestamps: true
});

const Work = mongoose.model('Work', workSchema);
export default Work;
