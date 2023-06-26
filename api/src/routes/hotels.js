import express from 'express'
import * as hotelController from '../controllers/hotels'


 const router = express.Router()

router.post('/all',hotelController.getHotels)
router.post('/createhotel',hotelController.createHotel)
router.post('/deletehotel',hotelController.deleteHotel)
router.post('/updatehotel',hotelController.updateHotel)



 export default router