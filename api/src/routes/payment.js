import express from 'express';
import * as paymentController from '../controllers/payment'


const router = express.Router()

router.post('/sendemail',paymentController.sendemail)

export default router