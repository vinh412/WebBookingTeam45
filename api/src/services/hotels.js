import db from '../models'
const {Op} = require('sequelize')

export const getHotelsService=({address, daystart, dayend}) => new Promise(async(resolve, reject) =>{
    try{
        db.Hotel.hasMany(db.Photo, { foreignKey: 'hotelID' });
        db.Photo.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        db.Hotel.hasMany(db.Room, { foreignKey: 'hotelID' });
        db.Room.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        
        const response = await db.Hotel.findAll({
             include:[
                {
                model:db.Photo,
                attributes: ['image'],
            },
            {
                    model:db.Room
                   
                }
        ],
            
            where:{[Op.and]:[{[Op.or]:[
                {address:{
                    [Op.like]: '%'+address+'%'
                }},
                
                {name:{
                    [Op.like]: '%'+address+'%'
                }}
                ]},{
                    status:0
                }]
                
            }
        })
       



        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'GOT hotels failure',
            response
        })
    } catch (error){
        reject(error)
    }
}) 

export const createHotelsService=(hotel) => new Promise(async(resolve, reject) =>{
    try{
        console.log(hotel)
        db.Hotel.hasMany(db.Photo, { foreignKey: 'hotelID' });
        db.Photo.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        db.Hotel.hasMany(db.Room, { foreignKey: 'hotelID' });
        db.Room.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        
        const response = await db.Hotel.create(hotel);
       



        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'CREATE hotels failure',
            response
        })
    } catch (error){
        reject(error)
    }
}) 
export const deleteHotelsService=(hotel) => new Promise(async(resolve, reject) =>{
    try{
        console.log(hotel)
       
        
        const response = await db.Hotel.update({
            status:1
        },{
            where:{
                id: hotel.id
            }
        });
       
       



        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'delete hotel failure',
            response
            
        })
    } catch (error){
        reject(error)
    }
}) 

export const updateHotelsService=(hotel) => new Promise(async(resolve, reject) =>{
    try{
        console.log(hotel)
       
        
        const response = await db.Hotel.update({
            name:hotel.name,
            phoneNumber:hotel.phoneNumber,
            address:hotel.address,
            longitude:hotel.longitude,
            latitude:hotel.latitude,
            description:hotel.description
        },{
            where:{
                id: hotel.id
            }
        });
       
       



        resolve({
            err: response ?0:1,
            msg: response ? 'OK':'delete hotel failure',
            response
            
        })
    } catch (error){
        reject(error)
    }
}) 