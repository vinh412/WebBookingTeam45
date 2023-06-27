import express from 'express'
import * as userController from '../controllers/user'

const router = express.Router()

router.post('/get-current', userController.getCurrent)


export default router