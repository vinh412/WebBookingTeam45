import * as roomService from '../services/rooms'

export const getRooms = async (req, res) =>{
    const {hotelID}=req.body
    try {
        const response = await roomService.getRoomsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at hotel controller'
        })
    }
}

export const createRooms = async (req, res) =>{
   
    try {
    
        console.log(req.body)

        const response = await roomService.createRoomsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at hotel controller'
        })

    }
}

export const getCountEmptyRoom = async (req, res) => {
    try {
        const count = await roomService.getCountEmptyRoomService(req.body);
        return res.status(200).json(count);
    } catch (error) {
        res.status(500).json(error);
    }
}