import express from 'express';
import * as bookingController from '../controllers/bookings';
const router = express.Router()

router.post('/createBooking', bookingController.createBooking)

export default router;