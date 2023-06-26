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