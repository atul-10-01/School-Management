import express from 'express';
import { addSchool } from '../controllers/schoolController.js';
import { listSchools } from "../controllers/schoolController.js";
const router = express.Router();

// POST /addSchool
router.post('/addSchool', addSchool);

// GET /listSchools
router.get("/listSchools", listSchools);

export default router;