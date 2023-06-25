import express from 'express'
import * as hotelController from '../controllers/hotels'


 const router = express.Router()

router.post('/all',hotelController.getHotels)

 export default router