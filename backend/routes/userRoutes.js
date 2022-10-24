import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {singup, getUserDetails} from '../controllers/userController.js'
const router = express.Router()

router.post('/api/signup', singup)
router.get('/', protect, getUserDetails)

export default router