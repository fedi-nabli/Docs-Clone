import express from 'express'
import {singup} from '../controllers/userController.js'
const router = express.Router()

router.post('/api/signup', singup)

export default router