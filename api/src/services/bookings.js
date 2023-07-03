import db from '../models'
const { Op } = require('sequelize')

export const createBookingsService = (booking) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Booking.create(booking);

        resolve({
            err: response ? 0 : 1,
            msg: response ? 'success' : 'Create bookings failed',
            response
        })
    } catch (error) {
        reject(error);
    }
})