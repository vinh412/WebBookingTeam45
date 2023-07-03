import * as bookingService from '../services/bookings'
const db = require('../models');

export const createBooking = async (req, res) => {
    try {
        const booking = await bookingService.createBookingsService(req.body);
        return res.status(200).json(booking);
    } catch (error) {
        res.status(500).json(error);
    }
}

