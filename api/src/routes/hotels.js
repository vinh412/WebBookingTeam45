import express from 'express';
import * as hotelController from '../controllers/hotels';
 const router = express.Router()

router.post('/createhotel',hotelController.createHotel)
router.post('/deletehotel',hotelController.deleteHotel)
router.post('/updatehotel',hotelController.updateHotel)
router.get('/getSumRooms',hotelController.getSumRooms)
router.post('/getonehotel',hotelController.getoneHotel)



//CREAT
router.post("/", hotelController.addHotel);
router.post("/search", hotelController.getHotels);
router.get("/:id", hotelController.getHotelById);
router.post("/addImage", hotelController.addImage);
router.post("/addRoom", hotelController.addRoom);
export default router;