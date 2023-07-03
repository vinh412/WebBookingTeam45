import express from 'express'
import * as roomController from '../controllers/rooms'


 const router = express.Router()

router.post('/all',roomController.getRooms)
router.post('/createroom',roomController.createRooms)
router.post('/getCountEmptyRoom', roomController.getCountEmptyRoom)
// router.post('/deletehotel',hotelController.deleteHotel)
// router.post('/updatehotel',hotelController.updateHotel)



 export default router