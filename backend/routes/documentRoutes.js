import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {
  createDoc,
  getMyDocuments
} from '../controllers/documentController.js'
const router = express.Router()

router.post('/doc/create', protect, createDoc)
router.get('/docs/me', protect, getMyDocuments)

export default router