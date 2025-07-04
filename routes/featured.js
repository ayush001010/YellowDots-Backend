// routes/featured.js
import express from 'express';
import Featured from '../models/Featured.js';

const router = express.Router();

// GET latest featured set
router.get('/', async (req, res) => {
  try {
    const latest = await Featured.findOne().sort({ updatedAt: -1 });
    if (!latest) return res.status(404).json({ message: "No featured data found" });
    res.json([latest]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch featured data' });
  }
});

// POST new featured set
router.post('/', async (req, res) => {
  const { title, links } = req.body;

  if (!Array.isArray(links) || links.length === 0) {
    return res.status(400).json({ error: 'Invalid or missing links' });
  }

  try {
    const newSet = await Featured.create({ title, links });
    res.status(201).json(newSet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create featured set' });
  }
});

export default router;
