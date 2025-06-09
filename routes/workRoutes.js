// backend/routes/workRoutes.js
import express from 'express';
import {
  getWorks,     // GET  /api/works
  createWork,   // POST /api/works
  updateWork,   // PUT  /api/works/:id
  deleteWork    // DELETE /api/works/:id
} from '../controllers/workController.js';

const router = express.Router();

// List all works or create a new one
router.route('/')
  .get(getWorks)
  .post(createWork);

// Update or delete a specific work by ID
router.route('/:id')
  .put(updateWork)
  .delete(deleteWork);

export default router;
