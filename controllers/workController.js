// backend/controllers/workController.js
import asyncHandler from 'express-async-handler';
import Work from '../models/Work.js';

// @desc    Fetch all works
// @route   GET /api/works
// @access  Public
export const getWorks = asyncHandler(async (req, res) => {
  const works = await Work.find().sort({ order: 1 });
  res.json(works);
});

// @desc    Create a new work
// @route   POST /api/works
// @access  Private (later you can add auth)
export const createWork = asyncHandler(async (req, res) => {
  const { name, image, altText, description, videoIds, order } = req.body;
  const work = new Work({ name, image, altText, description, videoIds, order });
  const created = await work.save();
  res.status(201).json(created);
});

// @desc    Update an existing work
// @route   PUT /api/works/:id
// @access  Private
export const updateWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id);
  if (!work) {
    res.status(404);
    throw new Error('Work not found');
  }

  Object.assign(work, req.body);
  const updated = await work.save();
  res.json(updated);
});

// @desc    Delete a work
// @route   DELETE /api/works/:id
// @access  Private
export const deleteWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id);
  if (!work) {
    res.status(404);
    throw new Error('Work not found');
  }
  await work.remove();
  res.json({ message: 'Work removed' });
});
