import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {
  createDoc,
  getMyDocuments,
  updateDocTitle
} from '../controllers/documentController.js'
const router = express.Router()

router.post('/doc/create', protect, createDoc)
router.get('/doc/me', protect, getMyDocuments)
router.post('/doc/title', protect, updateDocTitle)

export default router