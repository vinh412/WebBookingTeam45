import Photo from '../models/photo';

const db = require('../models');

export const addHotel = async (req, res) => {
    let newHotel = {
        accountID: req.body.accountID,
        name: req.body.name,
        revenua: req.body.revenua,
        fee: req.body.fee,
        phoneNumber: req.body.phoneNumber,
        type: req.body.type,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        evaluate: req.body.evaluate,
        numberReview: req.body.numberReview,
        description: req.body.description,
        minCost: req.body.minCost
    };

    try {
        const savedHotel = await db.Hotel.create(newHotel);
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getAllHotels = async (req, res) => {
    try {
        let hotels = await db.Hotel.findAll({
            attributes: ['id','name','type','address','longitude','latitude','evaluate','numberReview','description','minCost'],
            include: [{ model: db.Photo, as: "images", attributes: ['src'] }]
        });
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getHotelById = async (req, res) => {
    let id = req.params.id;
    try {
        let hotel = await db.Hotel.findOne({
            attributes: ['id','name','type','address','longitude','latitude','evaluate','numberReview','description','minCost'],
            include: [{ model: db.Photo, as: "images", attributes: ['src'] },
                        {model: db.Room, as: "rooms", attributes: ['name','image','cost','quantity','emptyRoom','salePrice','area','singleBed','doubleBed']}],
            where: { id: id },
        });
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addImage = async (req, res) => {
    let newImage = {
        hotelID: 1,
        src: req.body.src
    };
    try {
        const savedImage = await db.Photo.create(newImage);
        res.status(200).json(savedImage);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addRoom = async (req, res) => {
    let newRoom = {
        hotelID: 1,
        name: req.body.name,
        image: req.body.image,
        cost: req.body.cost,
        quantity: req.body.quantity,
        emptyRoom: req.body.emptyRoom,
        salePrice: req.body.salePrice,
        area: req.body.area,
        singleBed: req.body.singleBed,
        doubleBed: req.body.doubleBed
    };
    try {
        const savedRoom = await db.Room.create(newRoom);
        res.status(200).json(savedRoom);
    } catch (err) {
        res.status(500).json(err);
    }
}