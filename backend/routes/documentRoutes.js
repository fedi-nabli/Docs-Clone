import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {
  createDoc,
  getMyDocuments,
  updateDocTitle,
  getDocumentById
} from '../controllers/documentController.js'
const router = express.Router()

router.post('/doc/create', protect, createDoc)
router.get('/doc/me', protect, getMyDocuments)
router.post('/doc/title', protect, updateDocTitle)
router.get('/doc/:id', protect, getDocumentById)

export default router