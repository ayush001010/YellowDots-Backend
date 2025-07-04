import mongoose from "mongoose";

const featuredSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: [String], // Array of YouTube video IDs
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Featured", featuredSchema);
