import express from 'express';
import { addSchool } from '../controllers/schoolController.js';

const router = express.Router();

// POST /addSchool
router.post('/addSchool', addSchool);

export default router;