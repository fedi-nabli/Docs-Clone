import express from 'express'
import protect from '../middleware/authMiddleware.js'
import { createDoc } from '../controllers/documentController.js'
const router = express.Router()

router.post('/doc/create', protect, createDoc)

export default router