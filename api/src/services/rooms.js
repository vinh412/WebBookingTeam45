import db from '../models'
const {Op} = require('sequelize')
export const getRoomsService=({hotelID}) => new Promise(async(resolve, reject) =>{
    try{
        console.log(hotelID)
        const response = await db.Room.findAll({
            where:{
                hotelID: hotelID
            }
        });

        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'GOT rooms failure',
            response
            
        })
    } catch (error){
        reject(error)
    }
})

export const createRoomsService=(room) => new Promise(async(resolve, reject) =>{
    try{
        const response = await db.Room.create(room);
       
        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'GOT rooms failure',
            response
            
        })
    } catch (error){
        reject(error)
    }
}) 

export const getCountEmptyRoomService = (body) => new Promise(async (resolve, reject) => {
    try {
        const roomId = body.roomId;
        const date = new Date(body.date);
        const room = await db.Room.findOne({
            where: {
                id: roomId
            }
        })
        const bookedRoom = await db.Booking.count({
            where: {
                bookingRoomID: roomId,
                startDate: {
                    [Op.lte]: date
                },
                endDate: {
                    [Op.gt]: date
                }
            }
        });
        const response = room.quantity - bookedRoom;
        resolve(response);
    } catch (error) {
        reject(error);
    }
})
// export const deleteRoomsService=(room) => new Promise(async(resolve, reject) =>{
//     try{
      
        
//         const response = await db.Room.create(room);
       
       



//         resolve({
//             err: response ?0:1,
//             msg: response ? 'OK':'GOT rooms failure',
//             response
            
//         })
//     } catch (error){
//         reject(error)
//     }
// }) 