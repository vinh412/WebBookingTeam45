import db from '../models'
const {Op} = require('sequelize')
import * as roomService from './rooms'

export const getHotelsService=({searchterm}) => new Promise(async(resolve, reject) =>{
    try{
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
});



export const getHotelById = (req) => new Promise(async(resolve, reject) => {
    try{
        let id = req.params.id;
        let hotel = await db.Hotel.findOne({
            attributes: ['id', 'name', 'type', 'address', 'longitude', 'latitude', 'evaluate', 'numberReview', 'description', 'minCost'],
            include: [{ model: db.Photo, as: "images", attributes: ['src'] },
            { model: db.Room, as: "rooms", attributes: ['id' ,'name', 'image', 'cost', 'quantity', 'emptyRoom', 'salePrice', 'area', 'singleBed', 'doubleBed'] }],
            where: { id: id },
        });
        
        if(req.query.startDate !== "null" && req.query.endtDate !== 'null'){
            for(let i=0; i<hotel.rooms.length; i++) {
                hotel.rooms[i].emptyRoom = await roomService.getCountEmptyRoomService({roomId: hotel.rooms[i].id, date: req.query.startDate});
            }
        }
        
        resolve(hotel);
    }catch(error){
        reject(error)
    }
});

export const getAllHotels=() => new Promise(async(resolve, reject) =>{
    try{
        const response = await db.Hotel.findAll({
            attributes: ['id','name','type','address','longitude','latitude','evaluate','numberReview','description'],
            include: [{ model: db.Photo, as: "images", attributes: ['src'] },
            { model: db.Room, as: "rooms", attributes: ['cost', 'salePrice'] }]
        })
        resolve(response)
    } catch (error){
        reject(error)
    }
}) 

export const getOneHotel=(id) => new Promise(async(resolve, reject) =>{
    db.Hotel.hasMany(db.Photo, {
        foreignKey: 'hotelID'
      });
    db.Photo.belongsTo(db.Hotel, {
        foreignKey: 'hotelID'
      });
      db.Hotel.hasMany(db.Room, { foreignKey: 'hotelID' });
        db.Room.belongsTo(db.Hotel, { foreignKey: 'hotelID' });
    try{
        const response = await db.Hotel.findAll({
            include:[ {model: db.Photo},
                      {model: db.Room}],
            where: {id:id.id}
           
        })
        resolve(response)
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
        await db.Photo.create({
            hotelID:response. dataValues.id,
            src:'https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg'
        });
        await db.Photo.create({
            hotelID:response. dataValues.id,
            src:'https://kksapahotel.com/uploads/images/VQK_2153%20(1).jpg'
        });
        await db.Photo.create({
            hotelID:response. dataValues.id,
            src:'https://travelhanoi.com.vn/UserFiles/images/CN1.jpg'
        });
        await db.Photo.create({
            hotelID:response. dataValues.id,
            src:'https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg'
        });
       
      console.log(response. dataValues.id)
     

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

