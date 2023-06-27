import express from 'express';
import * as hotelController from '../controllers/hotels';
 const router = express.Router()

router.post('/all',hotelController.getHotels)
router.post('/createhotel',hotelController.createHotel)
router.post('/deletehotel',hotelController.deleteHotel)
router.post('/updatehotel',hotelController.updateHotel)




//CREAT
router.post("/", hotelController.addHotel);
router.post("/search", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById);
router.post("/addImage", hotelController.addImage);
router.post("/addRoom", hotelController.addRoom);
export default router;