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
            
            where:{
                [Op.or]:[
                {address:{
                    [Op.like]: '%'+address+'%'
                }},
                
                {name:{
                    [Op.like]: '%'+address+'%'
                }}
                ]
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