import express from 'express';
import * as hotelController from '../controllers/hotels';

const router = express.Router();

//CREAT
router.post("/", hotelController.addHotel);
router.get("/getAll", hotelController.getAllHotels);
router.get("/:id", hotelController.getHotelById);
router.post("/addImage", hotelController.addImage);
router.post("/addRoom", hotelController.addRoom);
export default router;