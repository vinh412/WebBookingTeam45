import db from '../models'
const {Op} = require('sequelize')

export const getHotelsService=({searchterm}) => new Promise(async(resolve, reject) =>{
    try{
        console.log(searchterm);
        db.Hotel.hasMany(db.Photo, { foreignKey: 'hotelID' });
        db.Photo.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        db.Hotel.hasMany(db.Room, { foreignKey: 'hotelID' });
        db.Room.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
        const response = await db.Hotel.findAll({
            attributes: ['id','name','type','address','longitude','latitude','evaluate','numberReview','description'],
            include: [{ model: db.Photo, as: "images", attributes: ['src'] },
            { model: db.Room, as: "rooms", attributes: ['cost', 'salePrice'] }],
        
            where:{[Op.and]:[{[Op.or]:[
                {address:{
                    [Op.like]: '%'+searchterm+'%'
                }},
                
                {name:{
                    [Op.like]: '%'+searchterm+'%'
                }}
                ]}]
                
            }
        })
       
        resolve(response)
    } catch (error){
        reject(error)
    }
}) 